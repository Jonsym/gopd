import React, { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800">
      <div className="p-12 bg-white rounded-3xl w-96 shadow-lg">
        <div className="mb-7">
          <h3 className="font-semibold text-2xl text-gray-800">Registrate aqui</h3>
          <p className="text-gray-400">
            Ya tienes una cuenta?{" "}
            <a href="#" className="text-purple-700 hover:text-purple-500">
              Inicia sesion aqui!
            </a>
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <input
              className="w-full text-sm px-4 py-3 bg-gray-200 border border-gray-200 rounded-lg focus:outline-none focus:bg-gray-100 focus:border-purple-400"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full text-sm px-4 py-3 bg-gray-200 border border-gray-200 rounded-lg focus:outline-none focus:bg-gray-100 focus:border-purple-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-purple-700"
            >
              {showPassword ? (
                <svg
                  className="h-4"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d="M320..." />
                </svg>
              ) : (
                <svg
                  className="h-4"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                >
                  <path d="M572.52..." />
                </svg>
              )}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-purple-700 hover:text-purple-600">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center bg-purple-800 hover:bg-purple-700 text-gray-100 p-3 rounded-lg font-semibold transition ease-in duration-500"
          >
            Registrarse.
          </button>
          <div className="flex items-center justify-center space-x-2 my-5">
            <span className="h-px w-16 bg-gray-100"></span>
            <span className="h-px w-16 bg-gray-100"></span>
          </div>
          <div className="flex justify-center gap-5">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
