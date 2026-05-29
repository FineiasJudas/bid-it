'use client'

import { useState } from "react";
import { Product } from '@/lib/types'
import Image from "next/image"

export default function ProductPage({ params }: { params: { id: string } })
{
  const [product, setProduct] = useState<Product | null>(null)
  const [bidAmount, setBidAmount] = useState("");
  const [comment, setComment] = useState("");

  const commentSubmition = () => {

  }

  return (
    <div className="flex flex-col items-center px-14 py-8 mt-10 mb-20">
        <h1 className="text-3xl text-gray-700 font-bold mb-8">Produto ativo</h1>
      <div className="flex flex-col lg:flex-row gap-10">
      <div className="w-100 flex flex-col bg-white rounded-lg shadow-md p-4 gap-8">
       <div className="flex px-2 items-center rounded-md">
          <Image 
            src={"/6011.jpg"}
            alt={"NULL"}
            width={150}
            height={150}
            className="object-cover rounded-md"
          />
      </div>
      <div className="flex flex-col gap-2 px-4">
        <h2 className="text-xl text-gray-800 font-bold">{"Carro de fazer compras"}</h2>
        <p className="text-gray-600 text-sm mb-3">{"Oferecemos total transparência em todas as nossas operações, garantindo que os usuários tenham acesso a informações claras e precisas sobre os produtos e leilões."}</p>
        <span className="text-lg text-gray-800 font-semibold  mb-4">
          Oferta actual: <span className="text-green-600">${"100"}</span>
        </span>
        <input 
          type="number"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          placeholder="Coloque um valor"
          className="bg-gray-100 px-4 py-2 rounded-lg border border-gray-300 mb-3"
        />
        <button onClick={() => console.log("Bid:", bidAmount)} className="bg-gray-800 rounded text-white p-2">
          Fazer Bid
        </button>
      </div>
      </div>
      <div className="w-100 h-60 flex flex-col bg-white rounded-lg shadow-md p-6">
        <h1 className="text-gray-800 text-2xl mb-4">Comentar</h1>
          <form onSubmit={commentSubmition} className="flex flex-col gap-5">
             <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="border-1 border-gray-300 rounded-lg px-3 py-3 bg-gray-100" 
                placeholder="Dê um feedbeak aqui">
             </textarea>
             <input type="submit" value={"Enviar"} className="px-2 py-2 rounded bg-gray-800 text-white"/>
          </form>
      </div>
      <div className="w-100 flex flex-col bg-white rounded-lg shadow-md p-6">
        <h1 className="text-gray-800 text-2xl mb-4">Comentários</h1>
        <div className="flex flex-col border-1 border-gray-300 rounded-2xl px-2 py-4 bg-gray-100">
          <p className="text-1xl text-gray-700 font-bold ml-2">@Author</p>
          <p className="text-gray-600 m-2">
            Oferecemos total transparência em todas as nossas operações, garantindo que os usuários tenham 
            acesso a informações claras e precisas sobre os produtos e leilões.
          </p>
          <div className="w-full flex justify-end mt-3 px-2">
            <p className="text-gray-400">12-03-2026</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}