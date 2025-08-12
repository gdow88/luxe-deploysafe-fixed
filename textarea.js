
export function Textarea({ className='', ...rest }) {
  return <textarea className={"w-full p-3 min-h-[140px] rounded-2xl bg-white/5 border border-white/15 outline-none text-white placeholder:text-slate-400 " + className} {...rest} />;
}
