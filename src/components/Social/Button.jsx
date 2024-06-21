export default function Button({
  className,
  children,
  onClick
}) {
  return <button className={`flex text-xs hover:bg-black hover:text-white border items-center justify-center px-2 py-1 rounded text-black cursor-pointer hover:scale-[105%] transition ${className}`} onClick={onClick}>
    {children}
  </button>;
}