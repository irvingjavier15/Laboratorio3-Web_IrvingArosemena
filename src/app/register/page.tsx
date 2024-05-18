import Image from "next/image";
import Link from "next/link";

function Register() {
  return (
    <div className="2xl:container h-screen m-auto bg-[#79ADDC]">
      <div hidden className="fixed inset-0 w-[52%] lg:block lg:bg-[#E4DFDA]">
        <Image src="/images/login-bg.png" alt="Background" width={800} height={800} className="mx-auto mt-40" />

        <div className="absolute top-0 left-0 p-4">
          <Image src="/images/image-1.png" alt="Logo" width={60} height={60} />
        </div>
      </div>

      <div hidden className="fixed inset-0 w-6/12 ml-auto bg-[#79ADDC] lg:block rounded-tl-3xl rounded-bl-3xl"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="lg:ml-[50%] lg:w-[40%] py-12 px-6 sm:p-20 ">
          <div className="space-y-4 flex flex-col justify-center items-center">
            <Image src="/images/delivery.png" alt="Logo" width={100} height={100} />
            <p className="font-medium text-lg text-white text-center">
              Registra tu lavandería con nosotros y comienza a ofrecer un servicio de calidad a tus clientes.<span className="font-bold"> Crea tu cuenta</span> ahora mismo.
              
            </p>
          </div>

          <div role="hidden" className="mt-12 border-t">
            <hr />
          </div>

          <form action="" className="space-y-6 py-6">
            <div className="flex justify-between space-x-6">
              <input
                type="text"
                placeholder="Nombre de la lavandería"
                className="w-[50%] py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                className="w-[50%] py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
            />

            <input
              type="password"
              placeholder="Contraseña"
              className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
            />

            <input
              type="password"
              placeholder="Confirmación de contraseña"
              className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
            />

            <div>
              <button className="w-full px-6 py-3 rounded-xl bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                <span className="font-semibold text-white text-lg">Registrarse</span>
              </button>
              <div>
                <span className="text-sm tracking-wide text-white">
                  Ya tienes una cuenta?{" "}
                  <Link href="/login">
                    <span className="font-bold cursor-pointer">Iniciar Sesión</span>
                  </Link>
                </span>
              </div>
            </div>
          </form>

          <div className="border-t pt-12">
            <div className="space-y-2 text-center">
              {/* <Image src="../../public/images/launderlogobanner.svg" className="w-40 m-auto grayscale" alt=""/> */}

              <span className="block text-sm tracking-wide text-white">
                Atención especializada para el cuidado de tus prendas, sin salir de casa.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
