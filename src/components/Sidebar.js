import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-purple-800 text-white min-h-screen flex flex-col">
      <div className="p-4 font-bold text-lg">Menú</div>
      <nav className="flex flex-col space-y-2 p-4">
        <NavLink
          to="registro-trabajadores"
          className={({ isActive }) =>
            isActive
              ? 'bg-purple-600 p-2 rounded'
              : 'p-2 hover:bg-purple-700 rounded'
          }
        >
          Registro de Trabajadores
        </NavLink>
        <NavLink
          to="ver-trabajadores"
          className={({ isActive }) =>
            isActive
              ? 'bg-purple-600 p-2 rounded'
              : 'p-2 hover:bg-purple-700 rounded'
          }
        >
          Ver Trabajadores
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
