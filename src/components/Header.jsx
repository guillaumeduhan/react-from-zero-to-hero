import useDarkMode from '../hooks/useDarkMode';
import { DarkMode } from './DarkMode';

export default function Header() {
  const [dark, setDark] = useDarkMode();

  return (
    <header className="flex items-center justify-end pt-4">
      <DarkMode dark={dark} setDark={setDark} />
    </header>
  );
}
