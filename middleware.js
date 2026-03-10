const WELLREAD = 'wrmd_6f421d5b622b4d7498a211c46f613ebc';
const MAYBE_BOT = /bot|crawl|spider|ChatGPT|GPT|Claude|Perplexity|AI/i;

export default async function middleware(req) {
  const ua = req.headers.get('user-agent') || '';
  const accept = req.headers.get('accept') || '';
  if (!accept.includes('text/markdown') && !MAYBE_BOT.test(ua)) return;

  try {
    const slug = new URL(req.url).pathname.replace(/^\/|\/$/g, '') || 'index';
    const host = new URL(req.url).hostname;
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

export const config = {
  matcher: ['/((?!api|assets|.*\\.(?:png|jpg|svg|css|js|ico|woff2?)$).*)'],
};