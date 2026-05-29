import { Product } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="w-full h-64 flex flex-row bg-white rounded-lg shadow-md p-4">
      <div className="flex w-[40%] items-center justify-center rounded-md">
          <Image 
            src={"/6011.jpg"}
            alt={product.title}
            width={150}
            height={150}
            className="object-cover rounded-md"
          />
      </div>
      <div className="flex flex-col gap-2 px-4">
        <h2 className="text-xl text-gray-900 font-bold">{product.title}</h2>
        <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
        <span className="text-lg text-gray-900 font-semibold">
          Oferta actual: <span className="text-green-600">${product.current_price.toFixed(2)}</span>
        </span>
        <Link 
          href={`/products/${product.title}`}
          className="w-fit bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600 mt-auto text-sm"
        >
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}