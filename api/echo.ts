import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const now = new Date().toISOString();
  const out = {
    ts: now,
    method: req.method,
    path: req.url,
    query: req.query,
    headers: req.headers,
  };
  console.log(JSON.stringify(out));
  res.setHeader('cache-control', 'no-store');
  res.status(200).json({ ok: true, received: out });
}
