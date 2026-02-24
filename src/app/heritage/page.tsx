import Image from "next/image";

export default function HeritagePage() {
  const eras = [
    {
      year: 1920,
      title: "The Golden Era",
      description: "Redefining the standards of automotive engineering with groundbreaking designs and mechanical innovations that set the stage for generations to come.",
      image: "https://images.unsplash.com/photo-1555353540-64fd1b6218c8?q=80&w=2938&auto=format&fit=crop"
    },
    {
      year: 1960,
      title: "Racing Pedigree",
      description: "Dominating the tracks and bringing race-proven technology to the streets. The birth of our most iconic silhouettes.",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2940&auto=format&fit=crop"
    },
    {
      year: 2000,
      title: "Modern Classics",
      description: "Seamlessly blending our rich heritage with cutting-edge digital technology, creating the ultimate modern luxury experience.",
      image: "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?q=80&w=2940&auto=format&fit=crop"
    }
  ];

  return (
    <main className="flex min-h-screen w-full flex-col bg-black pt-32 px-6 md:px-12 pb-24">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="font-playfair text-5xl md:text-7xl text-white mb-8">Our Heritage</h1>
        <p className="text-white/70 max-w-2xl text-lg mb-24">
          A century of excellence. From the very first motorcar to the sophisticated machines of today, our commitment to perfection remains unchanged.
        </p>
        
        <div className="space-y-32 mb-16">
          {eras.map((era, index) => (
            <div key={era.year} className={`flex flex-col gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              <div className="w-full md:w-1/2 relative aspect-video bg-zinc-900 border border-white/5 overflow-hidden group">
                <Image
                  src={era.image}
                  alt={`Heritage ${era.year}`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="w-full md:w-1/2 md:px-8">
                <h3 className="text-[#D4AF37] font-semibold text-xl mb-4">{era.year}</h3>
                <h4 className="font-playfair text-3xl md:text-4xl text-white mb-6">{era.title}</h4>
                <p className="text-white/60 leading-relaxed text-lg">
                  {era.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
