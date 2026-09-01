import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Leadership from "./components/Leadership";
import Projects from "./components/Projects";
import Capabilities from "./components/Capabilities";
import Licenses from "./components/Licenses";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="gioi-thieu" element={<About />} />
        <Route path="lanh-dao" element={<Leadership />} />
        <Route path="du-an" element={<Projects />} />
        <Route path="nang-luc" element={<Capabilities />} />
        <Route path="phap-ly" element={<Licenses />} />
        <Route path="doi-tac" element={<Partners />} />
        <Route path="lien-he" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
