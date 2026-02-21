// AI Agent Detection Middleware
// When an AI agent visits mausformac.com, serve structured JSON instead of HTML.
// When a human visits, serve the normal website.

const AI_BOT_PATTERNS = [
    // OpenAI
    'chatgpt-user',
    'gptbot',
    'oai-searchbot',
    // Anthropic
    'claudebot',
    'claude-web',
    'anthropic-ai',
    'anthropic-claude',
    // Google
    'google-extended',
    'gemini',
    'bard',
    // Perplexity
    'perplexitybot',
    'perplexity-user',
    // Microsoft
    'bingbot',
    // Others
    'amazonbot',
    'duckassistbot',
    'youbot',
    'ccbot',
    'cohere-ai',
  ];
  
  const SERVICE_DATA = {
    name: "Maus",
    type: "macOS clipboard manager",
    description: "A clipboard manager for Mac that opens where your cursor is. Remembers everything you copy.",
    founder: "Manuel Toledo",
    founded: "2024",
    location: "Madrid, Spain",
    pricing: {
      free: {
        price: "$0",
        history: "24 hours",
        features: "All features included"
      },
      pro: {
        price: "$19.99 one-time",
        history: "Unlimited",
        features: "All features + custom themes"
      }
    },
    platform: "macOS 14+",
    privacy: "All data stored locally. No cloud, no sync, no account.",
    contact: "manu@mausformac.com",
    website: "https://www.mausformac.com"
  };
  
  export const config = {
    matcher: '/',
  };
  
  export default function middleware(request) {
    const ua = (request.headers.get('user-agent') || '').toLowerCase();
    const isAIBot = AI_BOT_PATTERNS.some(pattern => ua.includes(pattern));
  
    if (isAIBot) {
      return new Response(JSON.stringify(SERVICE_DATA, null, 2), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'X-Served-To': 'ai-agent',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  
    // Human visitor: pass through to the normal static site
    return new Response(null, {
      headers: { 'x-middleware-next': '1' },
    });
  }