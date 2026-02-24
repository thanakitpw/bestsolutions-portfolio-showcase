import Image from "next/image";

export default function InnovationPage() {
  const innovations = [
    {
      title: "Electric Drive",
      description: "Pioneering technologies that elevate the driving experience to unprecedented heights with zero emissions.",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2938&auto=format&fit=crop"
    },
    {
      title: "Autonomous Systems",
      description: "Next-generation sensor arrays and AI that predict and respond to your environment before you even notice.",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2940&auto=format&fit=crop"
    },
    {
      title: "Smart Interface",
      description: "An intuitive digital ecosystem that learns your preferences and seamlessly integrates with your digital life.",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2940&auto=format&fit=crop"
    }
  ];

  return (
    <main className="flex min-h-screen w-full flex-col bg-black pt-32 px-6 md:px-12 pb-24">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="font-playfair text-5xl md:text-7xl text-white mb-8">Innovation</h1>
        <p className="text-white/70 max-w-2xl text-lg mb-16">
          The relentless pursuit of progress. We invent the future of mobility with intelligent drive systems, intuitive interfaces, and uncompromising safety.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {innovations.map((item, i) => (
            <div key={i} className="flex flex-col gap-4 group">
              <div className="relative aspect-square bg-zinc-900 overflow-hidden border border-white/5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
              <h3 className="font-playfair text-2xl text-white mt-4">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
