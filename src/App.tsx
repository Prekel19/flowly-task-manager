import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { VerifyEmail } from "./pages/VerifyEmail";
import { MainLayout } from "./layout/MainLayout";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
