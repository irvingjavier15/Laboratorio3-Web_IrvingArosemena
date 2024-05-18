import Link from "next/link";
function ForgotPassword() {
    return (
      <div className="relative flex justify-center items-center w-full h-screen" style={{backgroundImage: 'url("/images/forgotPassword-bg.jpg")', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <Link href={"/login"}><button className="absolute top-0 left-0 mt-4 ml-4 px-3 py-2 bg-white rounded-md shadow-md text-gray-700 hover:bg-gray-200 focus:outline-none">Atrás</button></Link>
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Recuperar Contraseña</h2>
            <p className="text-sm text-gray-600 mt-2">Por favor ingresa el correo asociado a tu cuenta.</p>
          </div>
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>
            <button className="w-full px-6 py-3 rounded-xl bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
              <span className="font-semibold text-white text-lg">Recuperar Contraseña</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default ForgotPassword;
  