import { Outlet, NavLink } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Panel</h2>
        <nav className="flex flex-col space-y-2">
          <NavLink to="/search" className="hover:underline">Busqueda General</NavLink>
          <NavLink to="/pymesguayas" className="hover:underline">Pymes Guayas</NavLink>
          <NavLink to="/iess" className="hover:underline">IESS Guayaquil</NavLink>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
