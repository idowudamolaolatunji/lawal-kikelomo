import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Speaking from "@/components/sections/Speaking";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Projects />
        <Skills />
        <Speaking />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
