import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className={pathname === "/" ? "" : "tl-page-offset"}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
