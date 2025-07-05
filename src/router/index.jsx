import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "@layouts/DashboardLayout";
import Login from "@pages/Login";
import PrivateRoute from "@components/PrivateRoute";
import SearchUnified from "@pages/SearchUnified";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // { path: "search", element: <SearchUnified /> },
      { path: "search", element: <SearchUnified /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
