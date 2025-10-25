import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import MainLayout from "./layout/main/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
