import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const footerLinks = [
    {
      title: "Models",
      links: [
        { label: "Sedans", href: "/vehicles" },
        { label: "SUVs", href: "/vehicles" },
        { label: "Coupes", href: "/vehicles" },
        { label: "Electric Vehicles", href: "/vehicles" }
      ],
    },
    {
      title: "Experience",
      links: [
        { label: "Design", href: "/design" },
        { label: "Innovation", href: "/innovation" },
        { label: "Sustainability", href: "/innovation" },
        { label: "Heritage", href: "/heritage" }
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "Find a Dealer", href: "/contact" },
        { label: "Financial Services", href: "/contact" },
        { label: "Recall Information", href: "/contact" }
      ],
    },
  ];

  return (
    <footer className="bg-[#111111] text-white/70 pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="text-3xl font-playfair tracking-widest text-white block">
              LUXURY
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              Experience the pinnacle of automotive engineering and design. 
              Crafting vehicles that define the future of mobility while 
              honoring a legacy of uncompromising excellence.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="hover:text-white transition-colors p-2 rounded-full border border-white/20 hover:border-white/50">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-white transition-colors p-2 rounded-full border border-white/20 hover:border-white/50">
                <Youtube size={18} />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="#" className="hover:text-white transition-colors p-2 rounded-full border border-white/20 hover:border-white/50">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-white transition-colors p-2 rounded-full border border-white/20 hover:border-white/50">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-6">
              <h3 className="text-white font-medium uppercase tracking-widest text-sm">
                {column.title}
              </h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors relative group w-fit flex"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/50 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Luxury Automotive Showcase. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
