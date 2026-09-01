import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Leadership from "./components/Leadership";
import Projects from "./components/Projects";
import Capabilities from "./components/Capabilities";
import Licenses from "./components/Licenses";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Leadership />
        <Projects />
        <Capabilities />
        <Licenses />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
