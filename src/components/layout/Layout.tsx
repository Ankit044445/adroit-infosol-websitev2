import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "../ui/ScrollToTop";

export function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      {/* Navbar + main share this wrapper so the sticky navbar's containing
          block ends where the page content does - it releases and scrolls
          away once the footer comes into view, instead of staying pinned
          over the footer for the rest of the document's scroll range
          (which, on shorter viewports, permanently hid the footer's first
          link column behind the nav bar with no way to scroll past it). */}
      <div className="page-shell">
        <Navbar />
        <main id="main-content">
          <div key={pathname} className="page-enter">
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

