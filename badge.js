
export function Badge({ className='', children }) {
  return <span className={"inline-flex items-center px-2 py-0.5 rounded-full text-xs border border-white/20 bg-white/10 text-white " + className}>{children}</span>;
}
