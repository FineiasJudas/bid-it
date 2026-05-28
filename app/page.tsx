import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/types";
import Link from "next/link";
import { BadgeDollarSign, HandCoins, Scale, ShieldCheck, UserPen } from "lucide-react";

const items: Product[] = [
  {
    title: "Produto 1",
    description: "Descrição do produto 1",
    current_price: 100.00,
    starting_bid: 50.00,
    image_url: "/product1.jpg",
    category: "Eletrônicos",
    active: true,
    created_at: "2024-01-15T10:00:00Z",
    owner: { id: "1", username: "João Silva", email: "joao@example.com", watchlist: [] },
    winner: { id: "2", username: "Maria Santos", email: "maria@example.com", watchlist: [] }
  },
  {
    title: "Produto 2",
    description: "Descrição do produto 2",
    current_price: 100.00,
    starting_bid: 75.00,
    image_url: "/product2.jpg",
    category: "Móveis",
    active: true,
    created_at: "2024-01-14T14:30:00Z",
    owner: { id: "3", username: "Pedro Costa", email: "pedro@example.com", watchlist: [] },
    winner: null
  },
  {
    title: "Produto 3",
    description: "Descrição do produto 3",
    current_price: 10.00,
    starting_bid: 5.00,
    image_url: "/product3.jpg",
    category: "Livros",
    active: false,
    created_at: "2024-01-13T09:15:00Z",
    owner: { id: "4", username: "Ana Oliveira", email: "ana@example.com", watchlist: [] },
    winner: { id: "1", username: "João Silva", email: "joao@example.com", watchlist: [] }
  },
  {
    title: "Produto 4",
    description: "Descrição do produto 4",
    current_price: 70.00,
    starting_bid: 40.00,
    image_url: "/product4.jpg",
    category: "Decoração",
    active: true,
    created_at: "2024-01-12T16:45:00Z",
    owner: { id: "5", username: "Carlos Mendes", email: "carlos@example.com", watchlist: [] },
    winner: null
  },
  {
    title: "Produto 5",
    description: "Descrição do produto 5",
    current_price: 300.00,
    starting_bid: 200.00,
    image_url: "/product5.jpg",
    category: "Eletrônicos",
    active: true,
    created_at: "2024-01-11T11:20:00Z",
    owner: { id: "6", username: "Lucia Ferreira", email: "lucia@example.com", watchlist: [] },
    winner: null
  },
  {
    title: "Produto 6",
    description: "Descrição do produto 6",
    current_price: 450.00,
    starting_bid: 300.00,
    image_url: "/product6.jpg",
    category: "Moda",
    active: true,
    created_at: "2024-01-10T13:00:00Z",
    owner: { id: "7", username: "Roberto Dias", email: "roberto@example.com", watchlist: [] },
    winner: { id: "3", username: "Pedro Costa", email: "pedro@example.com", watchlist: [] }
  }
]

export default function Home()
{
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans gap-30 md:gap-0">
      <div className="w-full flex flex-col p-8 lg:h-[65vh] relative bg-cover bg-center justify-center lg:px-14" 
        style={{ backgroundImage: "url('/bruno-kelzer-LvySG1hvuzI-unsplash.jpg')" }}>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10">
            <p className="font-bold text-4xl text-gray-100 md:text-6xl max-w-3xl py-6">O mercado mais seguro para licitar, vender e ganhar</p> 
            <p className="text-2xl text-gray-200 md:text-3xl max-w-2xl">
              Participe em leilões em tempo real com toda a transparência, segurança e lances a começar do zero.
            </p>
            <div className="gap-4 flex flex-row mt-10">
              <Link href="/leiloes" className="bg-orange-800 hover:bg-orange-700 text-white font-bold px-4 py-3 rounded">
                Ver leilões
              </Link>
              <Link href="/vender" className="bg-gray-500 hover:bg-gray-800 text-white font-bold px-4 py-3 rounded">
                Vender produto
              </Link>
            </div>
          </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 lg:h-[65vh]">
        <h1 className="text-3xl text-gray-700 font-bold">Como funciona o BiDIT?</h1>
        <div className="flex flex-col md:flex-row gap-10 mt-6">
          <div className="flex flex-col gap-4 items-center rounded-md bg-white p-6 shadow-md">
            <UserPen size={60} color="#354153" />
            <h2 className="text-xl font-bold text-[#354153]">Cadastro</h2>
            <p className="text-gray-600 text-center max-w-sm">
              Crie sua conta gratuitamente e tenha acesso a um mundo de oportunidades para comprar e vender produtos em leilões emocionantes.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center rounded-md bg-white p-6 shadow-md">
            <BadgeDollarSign size={60} color="#354153" />
            <h2 className="text-xl font-bold text-[#354153]">Licitação</h2>
            <p className="text-gray-600 text-center max-w-sm">
              Participe de leilões em tempo real, faça lances competitivos e concorra para ganhar produtos incríveis a preços acessíveis.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center rounded-md bg-white p-6 shadow-md">
            <HandCoins size={60} color="#354153" />
            <h2 className="text-xl font-bold text-[#354153]">Venda</h2>
            <p className="text-gray-600 text-center max-w-sm">
              Anuncie seus produtos para venda em leilões emocionantes e alcance uma ampla audiência de compradores interessados.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 lg:h-[60vh]">
        <h1 className="text-3xl text-gray-700 font-bold text-center">Porque escolher o nosso mercado?</h1>
        <div className="flex flex-col md:flex-row gap-10 mt-6">
          <div className="flex flex-col gap-4 items-center rounded-md bg-white p-6 shadow-md">
            <ShieldCheck size={60} color="#354153"/>
            <h2 className="text-xl font-bold text-[#354153]">Segurança</h2>
            <p className="text-gray-600 text-center max-w-sm">
              Garantimos a segurança de todas as transações e dados dos nossos usuários, proporcionando um ambiente confiável para comprar e vender.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center rounded-md bg-white p-6 shadow-md">
            <Scale size={60} color="#354153" /> 
            <h2 className="text-xl font-bold text-[#354153]">Transparência</h2>
            <p className="text-gray-600 text-center max-w-sm">
              Oferecemos total transparência em todas as nossas operações, garantindo que os usuários tenham acesso a informações claras e precisas sobre os produtos e leilões.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-6 lg:h-[90vh] max-w-7xl lg:mt-40">
          <h1 className="text-3xl text-gray-700 font-bold text-center mb-20">Vê alguns produtos ativos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {
              items.map((item) => (
                <ProductCard key={item.title} product={item} />
              ))
            }
        </div>
      </div>
    </div>
  );
}
