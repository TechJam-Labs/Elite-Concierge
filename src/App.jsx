import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/**Public Routes */}
        <Route index element={<HomePage />} />
        {/* <Route path="/contact" element={<Contactpage />} /> */}
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
