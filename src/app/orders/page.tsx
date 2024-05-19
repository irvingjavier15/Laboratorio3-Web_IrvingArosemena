import Sidebar from "../../components/sidebar";
import Image from "next/image";
function orders() {
  return (
    <div className="h-screen flex">
      <Sidebar />

      <div className="bg-white flex-1 p-6">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-black">Usuario</th>
              <th className="py-2 px-4 border-b text-black">Pedido</th>
              <th className="py-2 px-4 border-b text-black">Nota</th>
              <th className="py-2 px-4 border-b text-black">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">
                <Image src="/images/user1.jpg" alt="customer photo" width={50} height={50} className="rounded-full" />
              </td>
              <td className="py-2 px-4 border-b text-sm text-black">Lavado y Secado (2 Piezas)</td>
              <td className="py-2 px-4 border-b text-sm text-black">Ropa delicada</td>
              <td className="py-2 px-4 border-b">
                <div className="flex gap-2">
                  <button className="bg-green-500 text-white p-2 rounded-lg text-sm font-bold">Aceptado</button>
                  <button className="bg-yellow-500 text-white p-2 rounded-lg text-sm font-bold">En Proceso</button>
                  <button className="bg-red-500 text-white p-2 rounded-lg text-sm font-bold">Finalizado</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                <Image src="/images/user2.jpg" alt="customer photo" width={50} height={50} className="rounded-full" />
              </td>
              <td className="py-2 px-4 border-b text-sm text-black">Planchado (5 Piezas)</td>
              <td className="py-2 px-4 border-b text-sm text-black">Ropa delicada.</td>
              <td className="py-2 px-4 border-b">
                <div className="flex gap-2">
                  <button className="bg-green-500 text-white p-2 rounded-lg text-sm font-bold">Aceptado</button>
                  <button className="bg-yellow-500 text-white p-2 rounded-lg text-sm font-bold">En Proceso</button>
                  <button className="bg-red-500 text-white p-2 rounded-lg text-sm font-bold">Finalizado</button>
                </div>
              </td>
            </tr>
            {/* Agrega más filas según sea necesario */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default orders;
