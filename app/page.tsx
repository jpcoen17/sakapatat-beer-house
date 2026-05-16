import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main>
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
