
export function Button({ className='', asChild=false, children, ...props }) {
  const Cmp = asChild ? 'a' : 'button';
  const base = 'inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-2xl bg-white text-black hover:bg-white/90 transition';
  return <Cmp className={base + ' ' + className} {...props}>{children}</Cmp>;
}
