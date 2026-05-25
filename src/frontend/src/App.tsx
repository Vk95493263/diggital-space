import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsConditions from "@/pages/TermsConditions";
import {
  RootRoute,
  Route,
  RouterProvider,
  createRouter,
} from "@tanstack/react-router";

const root = new RootRoute({
  component: Layout,
});

const indexRoute = new Route({
  getParentRoute: () => root,
  path: "/",
  component: HomePage,
});

const privacyRoute = new Route({
  getParentRoute: () => root,
  path: "/privacy-policy",
  component: PrivacyPolicy,
});

const termsRoute = new Route({
  getParentRoute: () => root,
  path: "/terms-conditions",
  component: TermsConditions,
});

const routeTree = root.addChildren([indexRoute, privacyRoute, termsRoute]);

const router = createRouter({ routeTree });

export default function App() {
  return <RouterProvider router={router} />;
}
