"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const models = [
  {
    id: "s-class",
    name: "The S-Class",
    category: "Sedan",
    description: "The pinnacle of modern luxury and advanced technology.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2940&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    rowSpan: "row-span-1 lg:row-span-2",
  },
  {
    id: "g-class",
    name: "The G-Class",
    category: "SUV",
    description: "Unmistakable design meets unparalleled capability.",
    image: "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?q=80&w=2940&auto=format&fit=crop",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: "gt-coupe",
    name: "AMG GT",
    category: "Coupe",
    description: "Pure performance born on the track.",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2915&auto=format&fit=crop",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: "eqs",
    name: "EQS Sedan",
    category: "Electric",
    description: "The future of progressive luxury is electric.",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2938&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1",
  },
];

export function FeaturedGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-32 bg-[#111111] w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-white/60 tracking-[0.2em] uppercase text-sm mb-4"
            >
              Our Masterpieces
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-playfair text-4xl md:text-5xl text-white"
            >
              Featured Models
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              href="/vehicles" 
              className="flex items-center gap-2 text-white hover:text-white/70 transition-colors group tracking-widest uppercase text-sm font-semibold"
            >
              View All Models
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[400px]">
          {models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative group overflow-hidden ${model.colSpan} ${model.rowSpan} bg-zinc-900`}
            >
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white/70 uppercase tracking-[0.2em] text-xs font-semibold mb-2">
                    {model.category}
                  </p>
                  <h3 className="font-playfair text-3xl text-white mb-2">
                    {model.name}
                  </h3>
                  <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <p className="text-white/80 text-sm mb-6 max-w-sm">
                      {model.description}
                    </p>
                    <Link href={`/vehicles`} className="flex items-center gap-2 text-white uppercase tracking-widest text-xs font-semibold hover:text-white/70 transition-colors">
                      Explore Details
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
