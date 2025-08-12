
export function Card({ className='', children }) {
  return <div className={"rounded-2xl border border-white/10 bg-[#111216] " + className}>{children}</div>;
}
export function CardContent({ className='', children }) {
  return <div className={"p-5 " + className}>{children}</div>;
}
