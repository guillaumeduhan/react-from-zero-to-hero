import Blog from "@/components/Blog";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return <main>
    <Hero />
    <Experience />
    <Projects />
    <Blog />
    <Footer />
  </main>;
}