import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

// Fades sections and .tl-reveal elements in as they enter the viewport.
// The html class gates the hidden state, so content stays visible without JS.
function useScrollReveal(pathname) {
  useEffect(() => {
    const els = document.querySelectorAll("main .tl-section, main .tl-reveal");
    if (!("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("tl-js-reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
}

export default function Layout() {
  const { pathname } = useLocation();
  useScrollReveal(pathname);

  return (
    <>
      <div className="tl-ambient" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <ScrollToTop />
      <Navbar />
      <main className={pathname === "/" ? "" : "tl-page-offset"}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
