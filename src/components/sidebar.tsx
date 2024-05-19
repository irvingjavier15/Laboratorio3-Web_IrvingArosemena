import { RiDashboardLine, RiBriefcase4Fill, RiLogoutBoxLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

function sidebar() {
  return (
    <div className="bg-white w-[18%] p-4 border-r">
      {/* Logotipo */}
      <div className="text-center p-8">
        <h1 className="uppercase font-bold tracking-[4px] text-gray-500">Tu logo</h1>
      </div>
      <div className="flex flex-col justify-between h-[810px]">
        <nav>
          <ul>
            <li>
              <Link
                href="/dashboard"
                className="flex items-center justify-start gap-2 text-[#51626f] hover:bg-[#049fc5] p-4 hover:text-white rounded-lg transition-colors"
              >
                <RiDashboardLine />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className="flex items-center justify-start gap-2 text-[#51626f] hover:bg-[#049fc5] p-4 hover:text-white rounded-lg transition-colors"
              >
                <RiBriefcase4Fill />
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/materials"
                className="flex items-center justify-start gap-2 text-[#51626f] hover:bg-[#049fc5] p-4 hover:text-white rounded-lg transition-colors"
              >
                <RiDashboardLine />
                Material
              </Link>
            </li>
            <li>
              <Link
                href="/orders"
                className="flex items-center justify-start gap-2 text-[#51626f] hover:bg-[#049fc5] p-4 hover:text-white rounded-lg transition-colors"
              >
                <RiDashboardLine />
                Ordenes
              </Link>
            </li>
          </ul>
        </nav>
        {/* Image and logout */}
        <div className="flex flex-col gap-4">
          <Image src="/images/promotions.svg" alt="Background" width={800} height={800} className="p-2" />

          <Link
            href={"/login"}
            className="flex items-center justify-start gap-2 text-gray-600 hover:bg-[#049fc5] p-4 hover:text-white rounded-lg transition-colors"
          >
            <RiLogoutBoxLine />
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default sidebar;
