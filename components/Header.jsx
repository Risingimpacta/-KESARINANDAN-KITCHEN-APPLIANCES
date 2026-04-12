"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-linear-to-b from-black/50 to-transparent py-4"
    }`}>
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-3">
          {/* Larger logo for better visibility */}
          <div className="relative w-20 h-20 md:w-24 md:h-24">
            <Image
              src="/logo/Kesarinandan logo.png"
              alt="Kesarinandan Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 80px, 96px"
              priority
              quality={90}
            />
          </div>
          <div>
            <h1 className={`text-2xl md:text-2xl font-bold leading-tight tracking-wide transition-colors ${
              isScrolled ? "text-orange-600" : "text-orange-500"
            }`}>
              KESARINANDAN
            </h1>
            <p className={`text-[11px] md:text-sm tracking-wider transition-colors ${
              isScrolled ? "text-gray-600" : "text-gray-300"
            }`}>
              KITCHEN APPLIANCES
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 font-medium">
          {["Home", "Products", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`relative hover:text-orange-600 transition-colors duration-300 ${
                isScrolled ? "text-gray-700" : "text-white"
              } after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full`}
            >
              {item}
            </Link>
          ))}
        </nav>

        <a
          href="https://wa.me/919511629883"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          WhatsApp
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-slide-in">
          <div className="flex flex-col p-4 space-y-3">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-200 mb-2">
              <div className="relative w-14 h-14">
                <Image
                  src="/logo/Kesarinandan logo.png"
                  alt="Kesarinandan Logo"
                  fill
                  className="object-contain"
                  sizes="56px"
                />
              </div>
              <div>
                <h2 className="font-bold text-orange-600 text-lg">KESARINANDAN</h2>
                <p className="text-xs text-gray-500">KITCHEN APPLIANCES</p>
              </div>
            </div>
            <Link href="/" className="text-gray-700 hover:text-orange-600 py-2 px-4 rounded-lg hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/products" className="text-gray-700 hover:text-orange-600 py-2 px-4 rounded-lg hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 py-2 px-4 rounded-lg hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <a href="https://wa.me/919511629883" className="bg-orange-600 text-white text-center px-4 py-2 rounded-lg hover:bg-orange-700 transition">WhatsApp</a>
          </div>
        </div>
      )}
    </header>
  );
}