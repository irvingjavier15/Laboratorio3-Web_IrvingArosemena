"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Sidebar from "../../components/sidebar";

function Dashboard() {
  const [materials, setMaterials] = useState([{ id: 1, name: "Material 1", availability: 100, demand: 50, price: 20.0 }]);

  const [newMaterial, setNewMaterial] = useState({ name: "", availability: "", demand: "", price: "" });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewMaterial({ ...newMaterial, [name]: value });
  };

  const addMaterial = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMaterials([
      ...materials,
      {
        ...newMaterial,
        id: materials.length + 1,
        availability: parseInt(newMaterial.availability),
        demand: parseInt(newMaterial.demand),
        price: parseFloat(newMaterial.price)
      }
    ]);
    setNewMaterial({ name: "", availability: "", demand: "", price: "" });
  };

  const deleteMaterial = (id: number) => {
    const updatedMaterials = materials.filter((material) => material.id !== id);
    setMaterials(updatedMaterials);
  };

  const updateMaterial = (id: number) => {
    const materialToUpdate = materials.find((material) => material.id === id);
    if (materialToUpdate) {
      setNewMaterial({
        ...materialToUpdate,
        availability: materialToUpdate.availability.toString(),
        demand: materialToUpdate.demand.toString(),
        price: materialToUpdate.price.toString()
      });
    }
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-white flex flex-col">
        <h2 className="text-2xl font-bold mb-6 text-[#51626f]">Materiales</h2>

        {/* Contenedor de la Tabla */}
        <div className="flex-1 overflow-auto mb-6">
          <table className="min-w-full bg-white border rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b text-left text-black">#</th>
                <th className="py-2 px-4 border-b text-left text-black">Material</th>
                <th className="py-2 px-4 border-b text-left text-black">Disponibilidad</th>
                <th className="py-2 px-4 border-b text-left text-black">Demanda</th>
                <th className="py-2 px-4 border-b text-left text-black">Precio</th>
                <th className="py-2 px-4 border-b text-left text-black">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((material) => (
                <tr key={material.id}>
                  <td className="py-2 px-4 border-b text-left text-black">{material.id}</td>
                  <td className="py-2 px-4 border-b text-left text-black">{material.name}</td>
                  <td className="py-2 px-4 border-b text-left text-black">{material.availability}</td>
                  <td className="py-2 px-4 border-b text-left text-black">{material.demand}</td>
                  <td className="py-2 px-4 border-b text-left text-black">${material.price.toFixed(2)}</td>
                  <td className="py-2 px-4 border-b text-left text-black">
                    <button onClick={() => updateMaterial(material.id)} className="bg-blue-500 text-white py-1 px-2 rounded-md mr-2">
                      Actualizar
                    </button>
                    <button onClick={() => deleteMaterial(material.id)} className="bg-red-500 text-white py-1 px-2 rounded-md">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Formulario para Añadir Material */}
        <form className="mt-6" onSubmit={addMaterial}>
          <h3 className="text-xl font-bold mb-4 text-[#51626f]">Añadir Nuevo Material</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#51626f]" htmlFor="name">
              Material
            </label>
            <input
              type="text"
              name="name"
              value={newMaterial.name}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 text-black border-gray-700 border-2 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#51626f]" htmlFor="availability">
              Disponibilidad
            </label>
            <input
              type="number"
              name="availability"
              value={newMaterial.availability}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 text-black border-gray-700 border-2 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#51626f]" htmlFor="demand">
              Demanda
            </label>
            <select
              name="demand"
              value={newMaterial.demand}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 text-black border-gray-700 border-2 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
              required
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Alta">Alta</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#51626f]" htmlFor="price">
              Precio
            </label>
            <input
              type="number"
              name="price"
              value={newMaterial.price}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 text-black border-gray-700 border-2 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
              required
            />
          </div>
          <button type="submit" className="bg-[#049fc5] text-white py-2 px-4 rounded-md">
            Añadir Material
          </button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
