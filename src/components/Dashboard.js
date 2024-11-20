import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import RegistroTrabajadores from './RegistroTrabajadores';
import VerTrabajadores from './VerTrabajadores';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100">
      <Sidebar />
      <div className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<Navigate to="registro-trabajadores" />} />
          <Route path="registro-trabajadores" element={<RegistroTrabajadores />} />
          <Route path="ver-trabajadores" element={<VerTrabajadores />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
