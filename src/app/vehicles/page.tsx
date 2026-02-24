import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const vehicles = [
  {
    name: "The S-Class",
    category: "Sedan",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2940&auto=format&fit=crop",
    price: "From $114,500"
  },
  {
    name: "The G-Class",
    category: "SUV",
    image: "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?q=80&w=2940&auto=format&fit=crop",
    price: "From $139,900"
  },
  {
    name: "AMG GT",
    category: "Coupe",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2915&auto=format&fit=crop",
    price: "From $119,650"
  },
  {
    name: "EQS Sedan",
    category: "Electric",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2938&auto=format&fit=crop",
    price: "From $104,400"
  },
  {
    name: "C-Class Sedan",
    category: "Sedan",
    image: "https://images.unsplash.com/photo-1633507316345-12e02206bcba?q=80&w=2940&auto=format&fit=crop",
    price: "From $46,000"
  },
  {
    name: "GLE SUV",
    category: "SUV",
    image: "https://images.unsplash.com/photo-1582236357022-7774bd0a4b7d?q=80&w=2942&auto=format&fit=crop",
    price: "From $62,650"
  }
];

export default function VehiclesPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-black pt-32 px-6 md:px-12 pb-24">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="font-playfair text-5xl md:text-7xl text-white mb-8">Our Vehicles</h1>
        <p className="text-white/70 max-w-2xl text-lg mb-16">
          Explore our complete lineup of luxury vehicles. From dynamic sedans to versatile SUVs, every model is crafted with uncompromising attention to detail.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vehicles.map((vehicle, i) => (
            <div key={i} className="group relative aspect-[4/3] bg-zinc-900 overflow-hidden border border-white/5">
              <Image
                src={vehicle.image}
                alt={vehicle.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-semibold mb-2">
                  {vehicle.category}
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-playfair text-3xl text-white mb-2">{vehicle.name}</h3>
                    <p className="text-white/60 text-sm">{vehicle.price}</p>
                  </div>
                  <Link href="/contact" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
