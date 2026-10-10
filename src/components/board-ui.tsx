import Link from 'next/link';
export const statusLabel={received:'접수 완료',reviewing:'확인 중',answered:'답변 완료'};
export function BoardHeader({title,kicker,description,action}:{title:string;kicker:string;description:string;action?:React.ReactNode}){return <div className="board-header"><div><span className="kicker">{kicker}</span><h1>{title}</h1><p>{description}</p></div><div className="board-header-actions">{action}<Link className="board-admin-link" href="/admin/login">관리자 접속 ↗</Link></div></div>;}
export function BoardEmpty({children}:{children:React.ReactNode}){return <div className="board-empty">{children}</div>;}
export function DateText({value}:{value:string}){return <time dateTime={value}>{(value.length===10?value:new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Seoul'}).format(new Date(value))).replaceAll('-','.')}</time>;}
export function StatusBadge({status}:{status:keyof typeof statusLabel}){return <span className={`board-status ${status}`}>{statusLabel[status]||'접수 완료'}</span>;}

export function BoardLock(){return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><path d="M12 14v3"/></svg>;}
