import DarkMode from "@/components/DarkMode";
import Hamburger from "@/components/Hamburger";

export default function Header() {
  return (
    <header className="flex items-center justify-between pt-4">
      <Hamburger />
      <DarkMode />
    </header>
  );
}
