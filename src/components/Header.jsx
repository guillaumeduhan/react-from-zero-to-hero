
export default function Header({
  children
}) {
  return <header className="bg-yellow-500 p-4">
    <p className="text-xs">Header.jsx</p>
    {children}
  </header>
}