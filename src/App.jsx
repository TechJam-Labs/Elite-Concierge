import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// Lazy load the page components
const HomePage = lazy(() => import("./Pages/HomePage"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const ServicePages = lazy(() => import("./Pages/ServicePage"));
const ContactPage = lazy(() => import("./Pages/ContactPage"));
import Spinner from "./Component/Spinner";

// Define a reusable Suspense wrapper component
const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<Spinner />}>{children}</Suspense>
);

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/** Public Routes */}
        <Route
          index
          element={
            <SuspenseWrapper>
              <HomePage />
            </SuspenseWrapper>
          }
        />
        <Route
          path="/about-us"
          element={
            <SuspenseWrapper>
              <AboutPage />
            </SuspenseWrapper>
          }
        />
        <Route
          path="/service"
          element={
            <SuspenseWrapper>
              <ServicePages />
            </SuspenseWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <SuspenseWrapper>
              <ContactPage />
            </SuspenseWrapper>
          }
        />

        {/** External Links with target="_blank" */}
        <Route
          path="/wackitravels"
          element={
            <a
              href="https://wackiitravels.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wacki Travels
            </a>
          }
        />
        <Route
          path="/wackitravels/news"
          element={
            <a
              href="https://wackiitravels.com/news"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wacki Travels News
            </a>
          }
        />
        <Route
          path="/wackitravels/login"
          element={
            <a
              href="https://wackiitravels.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wacki Travels Login
            </a>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
