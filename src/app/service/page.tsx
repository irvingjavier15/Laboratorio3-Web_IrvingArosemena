"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Sidebar from "../../components/sidebar";

function Dashboard() {
  const [services, setServices] = useState([
    { id: 1, name: "Lavado y Secado", price: 10.0, description: "Servicio básico de lavado y secado", photo: "/images/lavado.jpg" }
  ]);

  const [newService, setNewService] = useState({ name: "", price: "", description: "", photo: "", fileName: "" });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewService({ ...newService, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Verifica si e.target.files es nulo antes de acceder al primer elemento
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewService({ ...newService, photo: reader.result as string, fileName: file.name });
      };
      reader.readAsDataURL(file);
    }
  };

  const addService = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServices([...services, { ...newService, id: services.length + 1, price: parseFloat(newService.price) }]);
    setNewService({ name: "", price: "", description: "", photo: "", fileName: "" });
  };

  const deleteService = (id: number) => {
    const updatedServices = services.filter((service) => service.id !== id);
    setServices(updatedServices);
  };

  const updateService = (id: number) => {
    const serviceToUpdate = services.find((service) => service.id === id);
    if (serviceToUpdate) {
      setNewService({
        ...serviceToUpdate,
        price: serviceToUpdate.price.toString(),
        fileName: "" // Reset fileName since it's not stored in the service
      });
    }
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-white flex flex-col">
        <h2 className="text-2xl font-bold mb-6 text-[#51626f]">Servicios</h2>

        {/* Contenedor de la Tabla */}
        <div className="flex-1 overflow-auto mb-6">
          <table className="min-w-full bg-white border rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b text-left text-black">#</th>
                <th className="py-2 px-4 border-b text-left text-black">Foto</th>
                <th className="py-2 px-4 border-b text-left text-black">Nombre del Servicio</th>
                <th className="py-2 px-4 border-b text-left text-black">Precio</th>
                <th className="py-2 px-4 border-b text-left text-black">Descripción</th>
                <th className="py-2 px-4 border-b text-left text-black">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id}>
                  <td className="py-2 px-4 border-b text-left text-black">{service.id}</td>
                  <td className="py-2 px-4 border-b text-left">
                    <Image src={service.photo} alt="servicio" width={100} height={100} className="object-cover rounded-lg" />
                  </td>
                  <td className="py-2 px-4 border-b text-left text-black">{service.name}</td>
                  <td className="py-2 px-4 border-b text-left text-black">${service.price.toFixed(2)}</td>
                  <td className="py-2 px-4 border-b text-left text-black">{service.description}</td>
                  <td className="py-2 px-4 border-b text-left text-black">
                    <button onClick={() => updateService(service.id)} className="bg-blue-500 text-white py-1 px-2 rounded-md mr-2">
                      Actualizar
                    </button>
                    <button onClick={() => deleteService(service.id)} className="bg-red-500 text-white py-1 px-2 rounded-md">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Formulario para Añadir Servicio */}
        <form className="mt-6" onSubmit={addService}>
          <h3 className="text-xl font-bold mb-4 text-[#51626f]">Añadir Nuevo Servicio</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#51626f]" htmlFor="name">
              Nombre del Servicio
            </label>
            <input
              type="text"
              name="name"
              value={newService.name}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 text-black border-gray-700 border-2 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#51626f]" htmlFor="price">
              Precio
            </label>
            <input
              type="number"
              name="price"
              value={newService.price}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 text-black border-gray-700 border-2 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#51626f]" htmlFor="description">
              Descripción
            </label>
            <input
              type="text"
              name="description"
              value={newService.description}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 text-black border-gray-700 border-2 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#51626f]" htmlFor="photo">
              Foto
            </label>
            <div className="flex items-center">
              <input type="file" accept="image/*" name="photo" onChange={handleFileChange} className="hidden" id="file-input" required />
              <label htmlFor="file-input" className="bg-[#049fc5] text-white py-2 px-4 rounded-md cursor-pointer">
                Choose File
              </label>
              {newService.fileName && <span className="ml-3 text-sm text-[#51626f]">{newService.fileName}</span>}
            </div>
          </div>
          <button type="submit" className="bg-[#049fc5] text-white py-2 px-4 rounded-md">
            Añadir Servicio
          </button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
