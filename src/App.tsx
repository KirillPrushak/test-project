import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout";
import WelcomePage from "./pages/welcome";
import DataPage from "./pages/data";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <WelcomePage />,
        },
        {
          path: "/data",
          element: <DataPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
