import Image from "next/image";
import Link from "next/link";
function Login() {
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
              Listo para darle a tu ropa el tratamiento que se merece? <br />
              <span className="font-bold">Inicia sesion</span> para comenzar
            </p>
          </div>

          <div role="hidden" className="mt-12 border-t">
            <hr />
          </div>

          <form action="" className="space-y-6 py-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>

            <div className="flex flex-col items-end">
              <input
                type="password"
                placeholder="Contrasena"
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
              <button type="reset" className="w-max p-3 -mr-3">
                <Link href={"/forgot-password"} className="text-sm tracking-wide text-white underline">
                  Forgot password?
                </Link>
              </button>
            </div>

            <div>
              <Link href={"/dashboard"}>
                <button className="w-full px-6 py-3 rounded-xl bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                  <span className="font-semibold text-white text-lg">Login</span>
                </button>
              </Link>
              <div>
                <span className="text-sm tracking-wide text-white">
                  No tienes una cuenta?{" "}
                  <Link href="/register">
                    <span className="font-bold cursor-pointer">Crear cuenta</span>
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

export default Login;
