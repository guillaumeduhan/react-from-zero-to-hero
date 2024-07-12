import Hamburger from '@/components/Hamburger';
import DarkMode from '@/components/DarkMode';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <Hamburger />
      <DarkMode />
    </header>
  );
}