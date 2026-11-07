import {NextRequest,NextResponse} from 'next/server';

export const runtime='nodejs';

export async function POST(request:NextRequest){
  const expectedOrigin=new URL(request.url).origin;
  const origin=request.headers.get('origin');
  if(origin && origin!==expectedOrigin)return NextResponse.json({error:'Invalid request origin.'},{status:403});
  const type=request.headers.get('content-type')||'';
  if(!type.includes('application/json'))return NextResponse.json({error:'Invalid content type.'},{status:415});
  let data:Record<string,unknown>;
  try{data=await request.json()}catch{return NextResponse.json({error:'Invalid form data.'},{status:400})}
  const name=typeof data.name==='string'?data.name.trim():'';
  const email=typeof data.email==='string'?data.email.trim():'';
  const phone=typeof data.phone==='string'?data.phone.trim():'';
  const message=typeof data.message==='string'?data.message.trim():'';
  if(data.website)return NextResponse.json({success:true});
  if(!name||name.length>100||!email||email.length>160||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||!phone||phone.length>25||message.length<10||message.length>2000){
    return NextResponse.json({error:'Please check your contact details and message.'},{status:400});
  }
  const apiKey=process.env.RESEND_API_KEY;
  const from=process.env.RESEND_FROM_EMAIL;
  if(!apiKey||!from)return NextResponse.json({error:'Direct email is not configured yet. Please use the WhatsApp contact option.'},{status:503});
  try{
    const result=await fetch('https://api.resend.com/emails',{
      method:'POST',
      headers:{'Authorization':'Bearer '+apiKey,'Content-Type':'application/json'},
      body:JSON.stringify({
        from,
        to:['rizwinsadique7260@gmail.com'],
        reply_to:email,
        subject:'Portfolio enquiry from '+name.replace(/[\r\n]/g,' '),
        text:'Name: '+name+'\nEmail: '+email+'\nPhone: '+phone+'\n\nMessage:\n'+message
      }),
      signal:AbortSignal.timeout(10000)
    });
    if(!result.ok){console.error('Resend contact delivery failed',result.status);return NextResponse.json({error:'Message could not be sent. Please try again or use WhatsApp.'},{status:502})}
    return NextResponse.json({success:true});
  }catch(error){console.error('Contact email request failed',error instanceof Error?error.name:'unknown');return NextResponse.json({error:'Unable to send right now. Please try again later.'},{status:502})}
}
