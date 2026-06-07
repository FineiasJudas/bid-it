"use client";
import { useState } from "react";

export default function CommentSection() {
  const [comment, setComment] = useState("");

  return (
    <div className="flex flex-col gap-6">
      {/* Form */}
      <div className="w-80 md:w-100 flex flex-col bg-white rounded-lg shadow-md p-6">
        <h1 className="text-gray-800 text-2xl mb-4">Comentar</h1>
        <form onSubmit={(e) => { e.preventDefault(); console.log("Comment:", comment); }} className="flex flex-col gap-5">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-3 bg-gray-100 placeholder:text-gray-600"
            placeholder="Dê um feedback aqui"
          />
          <input type="submit" value="Enviar" className="px-2 py-2 rounded bg-gray-800 text-white cursor-pointer" />
        </form>
      </div>

      {/* Lista mock */}
      <div className="w-80 md:w-100 flex flex-col bg-white rounded-lg shadow-md p-6">
        <h1 className="text-gray-800 text-2xl mb-4">Comentários</h1>
        <div className="flex flex-col border border-gray-300 rounded-2xl px-2 py-4 bg-gray-100">
          <p className="text-gray-700 font-bold ml-2">@Author</p>
          <p className="text-gray-600 m-2">Comentário de exemplo.</p>
          <div className="w-full flex justify-end mt-3 px-2">
            <p className="text-gray-400">12-03-2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
