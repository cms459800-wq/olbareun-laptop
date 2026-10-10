'use client';
import Link from 'next/link';
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {authClient} from '@/lib/auth/client';
type Mode='login'|'signup'|'verify'|'reset';
export default function AdminLogin(){const router=useRouter();const [mode,setMode]=useState<Mode>('login'),[email,setEmail]=useState(''),[pending,setPending]=useState(false),[error,setError]=useState(''),[message,setMessage]=useState('');const change=(m:Mode)=>{setMode(m);setError('');setMessage('');};
 async function sendCode(){setPending(true);setError('');try{const {error}=await authClient.emailOtp.sendVerificationOtp({email,type:mode==='reset'?'forget-password':'email-verification'});if(error)throw new Error(error.message);setMessage('이메일로 인증번호를 요청했습니다. 받은편지함과 스팸함을 확인해 주세요.');}catch(e){setError(e instanceof Error?e.message:'인증번호 요청에 실패했습니다.');}finally{setPending(false);}}
 async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();setPending(true);setError('');setMessage('');const f=new FormData(e.currentTarget);try{
  let result;
  if(mode==='login')result=await authClient.signIn.email({email,password:String(f.get('password'))});
  else if(mode==='signup')result=await authClient.signUp.email({email,password:String(f.get('password')),name:'올바른 매입 관리자'});
  else if(mode==='verify')result=await authClient.emailOtp.verifyEmail({email,otp:String(f.get('otp'))});
  else result=await authClient.emailOtp.resetPassword({email,otp:String(f.get('otp')),password:String(f.get('password'))});
  if(result.error)throw new Error(result.error.message||'요청을 처리하지 못했습니다.');
  if(mode==='signup'){change('verify');setMessage('계정이 등록됐습니다. 이메일 인증번호를 요청하고 인증을 완료하세요.');}
  else if(mode==='verify'||mode==='reset'){change('login');setMessage(mode==='verify'?'이메일 인증이 완료됐습니다. 로그인해 주세요.':'비밀번호가 변경됐습니다. 로그인해 주세요.');}
  else {const r=await fetch('/api/board/admin',{cache:'no-store'});if(!r.ok){change('verify');setMessage('관리자 이메일 인증을 완료한 후 다시 로그인해 주세요.');}else{router.push('/admin');router.refresh();}}
 }catch(e){setError(e instanceof Error?e.message:'로그인을 다시 시도해 주세요.');}finally{setPending(false);}}
 return <section className="board-private admin-login"><span className="kicker">ADMIN ACCESS</span><h1>{mode==='login'?'관리자 접속':mode==='signup'?'관리자 계정 등록':mode==='verify'?'관리자 이메일 인증':'비밀번호 재설정'}</h1><p>등록된 관리자 이메일을 인증한 계정만<br/>공지사항과 매입문의를 관리할 수 있습니다.</p><form onSubmit={submit}><label>관리자 이메일<input type="email" autoComplete="username" value={email} onChange={e=>setEmail(e.target.value)} required maxLength={254}/></label>{mode!=='verify'&&<label>{mode==='reset'?'새 비밀번호':'비밀번호'}<input name="password" type="password" autoComplete={mode==='login'?'current-password':'new-password'} minLength={8} maxLength={128} required/></label>}{(mode==='verify'||mode==='reset')&&<><button type="button" className="board-btn" onClick={()=>void sendCode()} disabled={pending||!email}>이메일 인증번호 요청</button><label>이메일 인증번호<input name="otp" inputMode="numeric" autoComplete="one-time-code" required maxLength={8}/></label></>}{error&&<p className="board-error" role="alert">{error}</p>}{message&&<p className="board-message" role="status">{message}</p>}<button className="button primary" disabled={pending}>{pending?'처리 중…':mode==='login'?'관리자 로그인 →':mode==='signup'?'계정 등록 →':mode==='verify'?'이메일 인증 완료 →':'비밀번호 변경 →'}</button></form><div className="admin-login-switch"><button onClick={()=>change('login')}>로그인</button><button onClick={()=>change('signup')}>최초 계정 등록</button><button onClick={()=>change('verify')}>이메일 인증</button><button onClick={()=>change('reset')}>비밀번호 재설정</button></div><Link className="board-private-back" href="/notices">← 공지사항으로 돌아가기</Link></section>;}
