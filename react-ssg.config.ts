import { defineReactSsgConfig } from "vite-plugin-react-ssg";
import { routes } from "./src/App.tsx";

const serviceSlugs = [
  "android-app-development",
  "ios-app-development",
  "cross-platform-app-development",
  "custom-web-applications",
  "limesurvey-customization",
  "cloud-devops-solutions",
  "iot-solutions",
  "ui-ux-design",
];

export default defineReactSsgConfig({
  history: "browser",
  origin: "https://www.adroitinfosol.com",
  routes,
  paths: serviceSlugs.map((slug) => `/services/${slug}`),
});
