import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
