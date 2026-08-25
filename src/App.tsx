import type { RouteObject } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { ServiceDetail } from "./pages/ServiceDetail";
import { Portfolio } from "./pages/Portfolio";
import { WorkCulture } from "./pages/WorkCulture";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      { path: "/", Component: Home },
      { path: "/about-us", Component: About },
      { path: "/services", Component: Services },
      { path: "/services/:slug", Component: ServiceDetail },
      { path: "/portfolio", Component: Portfolio },
      { path: "/work-culture", Component: WorkCulture },
      { path: "/contact-us", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
];
