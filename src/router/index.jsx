import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "@layouts/DashboardLayout";
import PymesPage from "@pages/PymesPage";
import IESSPage from "../pages/IessPage";
import SearchUnified from "@pages/SearchUnified";


const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "pymesguayas", element: <PymesPage /> },
      { path: "iess", element: <IESSPage /> },
      { path: "search", element: <SearchUnified /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
