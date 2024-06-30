import DarkMode, { useDarkMode } from '@/components/DarkMode';

export default function Header() {
  const [dark, setDark] = useDarkMode();

  return (
    <header className="flex items-center justify-end p-4">
      <DarkMode dark={dark} setDark={setDark} />
    </header>
  );
}