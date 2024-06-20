export default function Button({
  className,
  children,
  onClick
}) {
  return <button className={`flex items-center justify-center px-5 py-1 rounded font-[500] text-white shadow curosr-pointer hover:scale-[105%] transition ${className}`} onClick={onClick}>
    {children}
  </button>;
}