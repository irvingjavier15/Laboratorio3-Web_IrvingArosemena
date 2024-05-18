"use client";

import {
  RiDashboardLine,
  RiBriefcase4Fill,
  RiLogoutBoxLine
  
} from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

import "../globals.css";

function Dashboard() {
  

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="bg-white w-[18%] p-4 border-r">
        {/* Logotipo */}
        <div className="text-center p-8">
          <h1 className="uppercase font-bold tracking-[4px] text-gray-500">Tu logo</h1>
        </div>
        <div className="flex flex-col justify-between h-[810px]">
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-start gap-2 text-gray-600 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors"
                >
                  <RiDashboardLine />
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-start gap-2 text-gray-600 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors"
                >
                  <RiBriefcase4Fill />
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-start gap-2 text-gray-600 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors"
                >
                  <RiDashboardLine />
                  Promociones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-start gap-2 text-gray-600 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors"
                >
                  <RiDashboardLine />
                  Historial de Transacciones
                </a>
              </li>
            </ul>
          </nav>
          {/* Image and logout */}
          <div className="flex flex-col gap-4">
            <Image src="/images/promotions.svg" alt="Background" width={800} height={800} className="p-2" />
            <div className="bg-purple-50 p-8 rounded-3xl flex flex-col gap-4">
              <h3 className="text-xl text-center text-black font-bold">Get upgrade</h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempore expedita dolorum a eum iusto praesentium deleniti
                ipsum nostrum.
              </p>
              <button className="bg-purple-600 text-white p-2 rounded-lg">Learn More</button>
            </div>
            <Link
              href={"/login"}
              className="flex items-center justify-start gap-2 text-gray-600 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors"
            >
              <RiLogoutBoxLine />
              Logout
            </Link>
          </div>
        </div>
      </div>
      {/* Estadisticas y demas encabezado */}
      
    </div>
  );
}

export default Dashboard;
