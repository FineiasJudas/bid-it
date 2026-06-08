import Image from "next/image";
import BidForm from "./_components/BidForm";
import CommentSection from "./_components/CommentSection";

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col items-center px-14 py-14 bg-[#efefef] pb-20">
      <h1 className="text-3xl text-gray-700 font-bold mb-8">Produto ativo</h1>
      <div className="flex flex-col lg:flex-row gap-10">

        {/* Detalhes do produto */}
        <div className="w-80 md:w-100 flex flex-col bg-white rounded-lg shadow-md p-4 gap-8">
          <Image src="/6011.jpg" alt="Produto" width={150} height={150} className="object-cover rounded-md" />
          <div className="flex flex-col gap-2 px-4">
            <h2 className="text-xl text-gray-800 font-bold">Carro de fazer compras</h2>
            <p className="text-gray-600 text-sm mb-3">Descrição do produto aqui.</p>
            <span className="text-lg text-gray-800 font-semibold mb-4">
              Oferta actual: <span className="text-green-600">$100.00</span>
            </span>
            <BidForm currentPrice={100} />
          </div>
        </div>

        <CommentSection />
      </div>
    </div>
  );
}
