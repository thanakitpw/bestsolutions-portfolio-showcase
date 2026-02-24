"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Storytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animations for different sections based on scroll progress
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.7, 1], [0, 1, 1]);

  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={containerRef} className="relative h-[300vh] w-full bg-black">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* Background Image that slowly scales */}
        <motion.div 
          className="absolute inset-0 z-0 w-full h-full"
          style={{ scale: scaleImg }}
        >
          <Image
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2940&auto=format&fit=crop"
            alt="Interior details"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </motion.div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex items-center">
          <div className="relative w-full max-w-2xl h-[400px]">
            
            {/* Story Part 1 */}
            <motion.div 
              style={{ opacity: opacity1 }}
              className="absolute top-0 left-0 w-full h-full flex flex-col justify-center"
            >
              <p className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm mb-6 font-semibold">
                The Heritage
              </p>
              <h2 className="font-playfair text-4xl md:text-6xl text-white mb-6 leading-tight">
                A Century of <br /> Innovation
              </h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                Every line drawn, every curve sculpted is a testament to our unwavering commitment to perfection. We don&apos;t just build vehicles; we craft legacies that stand the test of time.
              </p>
            </motion.div>

            {/* Story Part 2 */}
            <motion.div 
              style={{ opacity: opacity2 }}
              className="absolute top-0 left-0 w-full h-full flex flex-col justify-center pointer-events-none"
            >
              <p className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm mb-6 font-semibold">
                The Craftsmanship
              </p>
              <h2 className="font-playfair text-4xl md:text-6xl text-white mb-6 leading-tight">
                Mastery in <br /> Every Detail
              </h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                From hand-stitched leather interiors to precision-machined engine components, our artisans pour their soul into creating an environment that transcends mere transportation.
              </p>
            </motion.div>

            {/* Story Part 3 */}
            <motion.div 
              style={{ opacity: opacity3 }}
              className="absolute top-0 left-0 w-full h-full flex flex-col justify-center pointer-events-none"
            >
              <p className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm mb-6 font-semibold">
                The Future
              </p>
              <h2 className="font-playfair text-4xl md:text-6xl text-white mb-6 leading-tight">
                Electrifying <br /> Performance
              </h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-xl mb-8">
                As we look to the horizon, our vision remains clear. Embracing sustainable power without compromising the exhilarating performance that defines our badge.
              </p>
              <div>
                <Link href="/innovation" className="inline-block pointer-events-auto px-8 py-4 border border-white/30 text-white font-semibold tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-all duration-300">
                  Explore the Future
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
