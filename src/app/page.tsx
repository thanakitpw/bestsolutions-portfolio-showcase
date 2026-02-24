import { Hero } from "@/components/home/Hero";
import { FeaturedGallery } from "@/components/home/FeaturedGallery";
import { Storytelling } from "@/components/home/Storytelling";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-black">
      <Hero />
      <Storytelling />
      <FeaturedGallery />
    </main>
  );
}
