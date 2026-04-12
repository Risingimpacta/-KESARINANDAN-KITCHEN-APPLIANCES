"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/kitchen/kitchen1.jpg",
    title: "Luxury Kitchen Appliances",
    subtitle: "Premium chimneys, hobs & cooktops for modern homes",
    cta: "Explore Products",
    link: "/products",
  },
  {
    image: "/kitchen/kitchen5.jpg",
    title: "Modular Kitchen Solutions",
    subtitle: "Custom designs with premium plywood & laminates",
    cta: "Get Quote",
    link: "https://wa.me/919511629883",
  },
  {
    image: "/modular/modular5.jpg",
    title: "Complete Home Solutions",
    subtitle: "Modular furniture & kitchen renovations",
    cta: "Contact Us",
    link: "/contact",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/50 z-10" />
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
            quality={75} // Changed from 90 to 75
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container-custom text-white">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in-up font-playfair">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-up opacity-90">
                {slide.subtitle}
              </p>
              <a
                href={slide.link}
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-fade-in-up"
              >
                {slide.cta}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? "w-8 h-2 bg-red-600" 
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}