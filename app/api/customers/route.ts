import type { NextRequest } from 'next/server'
import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  let responseText = 'Hello World'

  // KV Example:
  // const myKv = getRequestContext().env.MY_KV_NAMESPACE
  // await myKv.put('suffix', ' from a KV store!')
  // const suffix = await myKv.get('suffix')
  // responseText += suffix

  // D1 Example:

  const db = getRequestContext().env.DB
  const query = db.prepare('SELECT * FROM Customers')
  const { results } = await query.all();

  return new Response(JSON.stringify({ data: results }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
