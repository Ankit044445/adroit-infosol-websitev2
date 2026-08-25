import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "../ui/ScrollToTop";
import { OrganizationSchema } from "../ui/OrganizationSchema";

export function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <OrganizationSchema />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      {/* sticky navbar releases once footer scrolls into view */}
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

