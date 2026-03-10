const WELLREAD = 'wrmd_6f421d5b622b4d7498a211c46f613ebc';
const MAYBE_BOT = /bot|crawl|spider|ChatGPT|GPT|Claude|Perplexity|AI/i;

export default async function middleware(req) {
  const ua = req.headers.get('user-agent') || '';
  const accept = req.headers.get('accept') || '';
  const host = new URL(req.url).hostname;
  const slug = new URL(req.url).pathname.replace(/^\/|\/$/g, '') || 'index';
  const isAI = accept.includes('text/markdown') || MAYBE_BOT.test(ua);

  if (isAI) {
    try {
      const r = await fetch(`https://wellread.md/api/serve?slug=${slug}`, {
        headers: { 'user-agent': ua, accept, 'x-wellread-token': WELLREAD, 'x-forwarded-host': host },
        signal: AbortSignal.timeout(3000),
      });
      if (!r.ok) return;
      return new Response(r.body, { status: r.status, headers: r.headers });
    } catch {
      return;
    }
  }

  // Human visit — ping async, no bloquea
  fetch(`https://wellread.md/api/track`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-wellread-token': WELLREAD },
    body: JSON.stringify({ slug, ua, host }),
  }).catch(() => {});
}

export const config = {
  matcher: ['/((?!api|assets|.*\\.(?:png|jpg|svg|css|js|ico|woff2?)$).*)'],
};