type Name='location'|'package'|'power'|'phone'|'screen'|'water'|'battery'|'keyboard'|'laptop'|'list'|'search'|'check'|'shield';
const paths:Record<Name,React.ReactNode>={
  location:<><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  package:<><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="M3 7v10l9 5 9-5V7M12 12v10M7.5 4.5l9 5"/></>,
  power:<><path d="M12 2v10"/><path d="M6.2 5.8a9 9 0 1 0 11.6 0"/></>,
  phone:<><path d="M21 16.5v3a2 2 0 0 1-2.2 2A18 18 0 0 1 2.5 5.2 2 2 0 0 1 4.5 3h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8l-1.6 1.6a14 14 0 0 0 6.1 6.1l1.6-1.6a2 2 0 0 1 1.8-.6l3 .5a2 2 0 0 1 1.7 2Z"/></>,
  screen:<><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 22h8M12 18v4M7 8l3 3m0-3-3 3"/></>,
  water:<><path d="M12 2c-3 4-7 9-7 13a7 7 0 0 0 14 0c0-4-4-9-7-13Z"/><path d="M9 16a3 3 0 0 0 3 3"/></>,
  battery:<><rect x="2" y="6" width="18" height="12" rx="2"/><path d="M22 10v4M8 12h6M11 9v6"/></>,
  keyboard:<><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M7 16h10"/></>,
  laptop:<><rect x="4" y="3" width="16" height="13" rx="2"/><path d="m2 20 2-4h16l2 4H2Z"/></>,
  list:<><path d="M9 6h12M9 12h12M9 18h12M3 6h.01M3 12h.01M3 18h.01"/></>,
  search:<><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></>,
  check:<><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></>,
  shield:<><path d="M12 2 4 5v6c0 5 3 9 8 11 5-2 8-6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-4"/></>
};
export default function AppIcon({name,size=24}:{name:Name;size?:number}){return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name]}</svg>}
