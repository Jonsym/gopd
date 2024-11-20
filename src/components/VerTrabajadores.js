import React, { useEffect, useState } from 'react';

const VerTrabajadores = () => {
  const [trabajadores, setTrabajadores] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const LOCAL_STORAGE_KEY = 'trabajadores_local';

  const fetchTrabajadores = async () => {
    setLoading(true);
    setError(null);
    try {
      // Obtener trabajadores del servidor
      const response = await fetch('http://localhost/gopd_backend/ver_trabajadores.php');
      const serverData = response.ok ? await response.json() : [];

      // Obtener trabajadores de localStorage
      const localData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

      // Fusionar datos y eliminar duplicados
      const mergedData = [...serverData, ...localData].reduce((acc, curr) => {
        if (!acc.find((item) => item.id === curr.id)) acc.push(curr);
        return acc;
      }, []);

      setTrabajadores(mergedData);
    } catch (err) {
      setError('No se pudo conectar con el servidor, mostrando datos locales.');
      const localData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
      setTrabajadores(localData);
    } finally {
      setLoading(false);
    }
  };

  const saveToLocalStorage = (updatedTrabajadores) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTrabajadores));
    setTrabajadores(updatedTrabajadores);
  };

  const handleDelete = async (id) => {
    try {
      // Eliminar del servidor
      await fetch(`http://localhost/gopd_backend/eliminar_trabajador.php?id=${id}`, { method: 'DELETE' });
    } catch (err) {
      console.warn('No se pudo eliminar del servidor, eliminando solo localmente.');
    }

    const updatedTrabajadores = trabajadores.filter((t) => t.id !== id);
    saveToLocalStorage(updatedTrabajadores);
  };

  const handleEdit = (id) => {
    const trabajador = trabajadores.find((t) => t.id === id);
    setEditing(trabajador);
  };

  const handleSaveEdit = (id, updatedData) => {
    const updatedTrabajadores = trabajadores.map((t) =>
      t.id === id ? { ...t, ...updatedData } : t
    );
    saveToLocalStorage(updatedTrabajadores);
    setEditing(null);
  };

  useEffect(() => {
    fetchTrabajadores();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Lista de Trabajadores</h2>
      {loading && <p>Cargando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {trabajadores.map((trabajador) => (
          <li key={trabajador.id} className="flex items-center justify-between py-2">
            {editing && editing.id === trabajador.id ? (
              <div>
                <input
                  value={editing.nombre_completo}
                  onChange={(e) =>
                    setEditing({ ...editing, nombre_completo: e.target.value })
                  }
                />
                <button
                  onClick={() => handleSaveEdit(trabajador.id, editing)}
                  className="bg-green-500 text-white px-3 py-2 rounded"
                >
                  Guardar
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <span>{trabajador.nombre_completo}</span>
                <button
                  onClick={() => handleEdit(trabajador.id)}
                  className="bg-blue-500 text-white px-3 py-2 rounded ml-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(trabajador.id)}
                  className="bg-red-500 text-white px-3 py-2 rounded ml-2"
                >
                  Eliminar
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerTrabajadores;
