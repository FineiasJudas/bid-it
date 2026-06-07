"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { username, password });
    // aqui vai entrar o fetch ao Django depois
  };

  return (
    <div className="flex flex-1 items-center justify-center bg-[#efefef] py-20">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md flex flex-col gap-6">
        
        <div className="flex flex-col items-center gap-1">
        	<h1 className="text-4xl text-gray-800 font-bold mb-2 mt-4">
		  <span>
		  BiD<span className="text-orange-800">IT</span>
		  </span>
        	</h1>
          <h1 className="text-2xl font-bold text-gray-800">Entrar</h1>
          <p className="text-gray-500 text-sm">Bem-vindo de volta ao BiDIT</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Utilizador</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="O teu username"
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="A tua password"
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <button
            type="submit"
            className="bg-gray-800 text-white rounded-lg py-2 font-semibold hover:bg-gray-600 mt-2"
          >
            Entrar
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center">
          Ainda não tens conta?{" "}
          <Link href="/register" className="text-orange-800 font-semibold hover:underline">
            Regista-te
          </Link>
        </p>

      </div>
    </div>
  );
}
