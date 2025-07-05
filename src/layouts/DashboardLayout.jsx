import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { logout } from "@services/authService";

export default function DashboardLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-4">Panel</h2>
          <nav className="flex flex-col space-y-2">
            <NavLink to="/personas" className="hover:underline">Personas Unificadas</NavLink>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
        >
          Cerrar sesión
        </button>
      </aside>

      <main className="flex-1 p-6 bg-gray-100 overflow-auto w-full">
        <Outlet />
      </main>
    </div>
  );
}
