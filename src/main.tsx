import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { createHead, UnheadProvider } from "@unhead/react/client";
import { createBrowserRouter, RouterProvider, type HydrationState } from "react-router-dom";
import "./styles/main.scss";
import { routes } from "./App.tsx";

const hydrationData = (window as Window & { __staticRouterHydrationData?: HydrationState })
  .__staticRouterHydrationData;

const router = createBrowserRouter(routes, {
  ...(hydrationData ? { hydrationData } : {}),
});

const head = createHead();
const rootEl = document.getElementById("root")!;

const app = (
  <StrictMode>
    <UnheadProvider head={head}>
      <RouterProvider router={router} />
    </UnheadProvider>
  </StrictMode>
);

// Prerendered pages ship real markup inside #root, so hydrate it. In dev
// (the plugin only prerenders on `vite build`) #root is empty, so render fresh.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
