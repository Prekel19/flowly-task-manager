import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { MainLayout } from "./layout/MainLayout";
import { Home } from "./pages/protected-routes/Home";
import { AssignTask } from "./pages/protected-routes/AssignTask";
import { Calendar } from "./pages/protected-routes/Calendar";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { NotFound } from "./pages/NotFound";
import { NotVerified } from "./pages/auth/NotVerified";
import { VerifyEmail } from "./pages/auth/VerifyEmail";
import { Tasks } from "./pages/protected-routes/Tasks";
import { Team } from "./pages/protected-routes/Team";

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
      {
        path: "assign-task",
        element: <AssignTask />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "team",
        element: <Team />,
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
    path: "/verify-email/:params",
    element: <VerifyEmail />,
  },
  {
    path: "/not-verified",
    element: <NotVerified />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
