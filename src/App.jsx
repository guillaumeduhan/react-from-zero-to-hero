import Blog from "./components/Blog";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function App() {
  return <main className="w-full grid gap-8 px-4 w-full max-w-[1000px] mx-auto">
    <Hero />
    <Projects />
    <Blog />
    <Experience />
    <Footer />
  </main>;
}