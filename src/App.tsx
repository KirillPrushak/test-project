import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout";
import WelcomePage from "./pages/welcome";
import CoursesPage from "./pages/courses";

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
          path: "/courses",
          element: <CoursesPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
