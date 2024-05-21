"use client";

import { RiNotification2Fill, RiUserFill, RiMoneyDollarCircleFill, RiBarChartFill, RiPieChart2Fill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import Chart from "../../components/chart.js";
import "../globals.css";
import Sidebar from "../../components/sidebar";

function Dashboard() {
  const data1 = {
    labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    datasets: [
      {
        label: "Daily Earnings",
        data: [12, 19, 3, 5, 2, 3, 9],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  };

  const data2 = {
    labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
    datasets: [
      {
        label: "Monthly Earnings (Wash & Dry)",
        data: [300, 500, 1000, 700],
        fill: false,
        backgroundColor: "rgba(54,162,235,0.2)",
        borderColor: "rgba(54,162,235,1)"
      }
    ]
  };

  const data3 = {
    labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
    datasets: [
      {
        label: "Monthly Earnings (Ironing)",
        data: [200, 400, 600, 800],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  };

  const data4 = {
    labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
    datasets: [
      {
        label: "Monthly Earnings (Both Services)",
        data: [600, 900, 1200, 1500],
        fill: false,
        backgroundColor: "rgba(255,206,86,0.2)",
        borderColor: "rgba(255,206,86,1)"
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Estadisticas y demas encabezado */}
      <div className="bg-white w-[82%] flex justify-center">
        <div className="w-full bg-white h-screen p-5">
          <div className="flex justify-between items-center mb-5">
            <div className="p-2 flex items-center">
              <label className="relative inline-flex items-center cursor-pointer m-5">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="group peer ring-0 bg-gradient-to-bl from-neutral-800 to-black to-neutral-600 rounded-full outline-none duration-1000 after:duration-300 w-16 h-8 shadow-md peer-focus:outline-none after:content-[''] after:rounded-full after:absolute after:[background:#0D2B39] peer-checked:after:rotate-180 after:[background:conic-gradient(from_135deg,_#b2a9a9,_#b2a8a8,_#ffffff,_#d7dbd9_,_#ffffff,_#b2a8a8)] after:outline-none after:h-6 after:w-6 after:top-1 after:left-1 peer-checked:after:translate-x-8 peer-hover:after:scale-95 peer-checked:bg-gradient-to-r peer-checked:from-green-400 peer-checked:to-emerald-900"></div>
              </label>
              <h3 className="text-[#51626f] font-bold">Open/Close</h3>
            </div>
            <div className="flex gap-2 items-center justify-between m-5 w-[80px]">
              <RiNotification2Fill className="text-3xl cursor-pointer text-[#51626f]" />
              <Link href={"/profile"}>
                <RiUserFill className="text-3xl cursor-pointer text-[#51626f]" />
              </Link>
            </div>
          </div>
          {/* Estadisticas y demas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
            <div className="bg-[#049fc5] p-4 rounded-lg text-white flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Ganancias Diarias</h3>
                <RiMoneyDollarCircleFill className="text-3xl" />
              </div>
              <p className="text-sm">+3.49%</p>
              <h2 className="text-2xl font-bold mt-2">$90.65</h2>
              <div className="mt-4">
                <Chart data={data1} options={options} />
              </div>
            </div>
            <div className="bg-blue-400 p-4 rounded-lg text-white flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Ganancias del Mes (Lavado y Secado)</h3>
                <RiBarChartFill className="text-3xl" />
              </div>
              <p className="text-sm">+10.21%</p>
              <h2 className="text-2xl font-bold mt-2">$2,365.00</h2>
              <div className="mt-4">
                <Chart data={data2} options={options} />
              </div>
            </div>
            <div className="bg-green-400 p-4 rounded-lg text-white flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Ganancias del Mes (Planchado)</h3>
                <RiPieChart2Fill className="text-3xl" />
              </div>
              <p className="text-sm">+7.89%</p>
              <h2 className="text-2xl font-bold mt-2">$1,580.00</h2>
              <div className="mt-4">
                <Chart data={data3} options={options} />
              </div>
            </div>
            <div className="bg-yellow-400 p-4 rounded-lg text-white flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Ganancias del Mes (Ambos Servicios)</h3>
                <RiMoneyDollarCircleFill className="text-3xl" />
              </div>
              <p className="text-sm">+12.45%</p>
              <h2 className="text-2xl font-bold mt-2">$3,945.00</h2>
              <div className="mt-4">
                <Chart data={data4} options={options} />
              </div>
            </div>

            <div className="bg-yellow-400 p-4 rounded-lg text-white flex flex-col justify-between col-span-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Notificaciones</h3>
                <RiNotification2Fill className="text-3xl" />
              </div>
              <div className="mt-4 bg-white rounded-lg p-4 text-black">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b">Usuario</th>
                      <th className="py-2 px-4 border-b">Pedido</th>
                      <th className="py-2 px-4 border-b">Nota</th>
                      <th className="py-2 px-4 border-b">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">
                        <Image src="/images/user1.jpg" alt="customer photo" width={50} height={50} className="rounded-full" />
                      </td>
                      <td className="py-2 px-4 border-b text-sm">Lavado y Secado (2 Piezas)</td>
                      <td className="py-2 px-4 border-b text-sm">Ropa delicada</td>
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
                      <td className="py-2 px-4 border-b text-sm">Planchado (5 Piezas)</td>
                      <td className="py-2 px-4 border-b text-sm">Ropa delicada.</td>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
