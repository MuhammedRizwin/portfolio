import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const origin = new URL(request.url).origin;
  const logoUrl = new URL('/Hero%20Page%20Logo%20(3).png', origin);
  const response = await fetch(logoUrl);
  if (!response.ok) return new Response('Logo unavailable', { status: 502 });
  const logo = Buffer.from(await response.arrayBuffer()).toString('base64');
  return new ImageResponse(
    <div style={{ display:'flex', width:'100%', height:'100%', alignItems:'center', justifyContent:'center', background:'#08090B', borderRadius:12 }}>
      <img src={'data:image/png;base64,' + logo} width={60} height={23} style={{ objectFit:'contain' }} alt="" />
    </div>,
    { width:64, height:64, headers:{ 'Cache-Control':'public, max-age=3600, s-maxage=86400' } }
  );
}
