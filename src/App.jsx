import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicePages from "./Pages/ServicePage";
import ContactPage from "./Pages/ContactPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/**Public Routes */}
        <Route index element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/service" element={<ServicePages />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
