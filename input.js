
export function Input({ className='', ...rest }) {
  return <input className={"w-full px-3 h-11 rounded-2xl bg-white/5 border border-white/15 outline-none text-white placeholder:text-slate-400 " + className} {...rest} />;
}
