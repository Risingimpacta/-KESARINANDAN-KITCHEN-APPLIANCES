"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Zap, Gem, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: "modular-kitchen",
    title: "Modular Kitchen",
    subtitle: "Complete modular kitchen solutions with premium appliances",
    cta: "Explore Now",
    link: "/products#modular-kitchen",
    badge: "Most Popular",
    badgeColor: "from-orange-500 to-red-600",
    features: ["Premium plywood", "Soft-close drawers", "German hardware"],
    imageSearch: "luxury modular kitchen with island counter modern design",
    placeholderImage: "/modular/modular1.jpg"
  },
  {
    id: "sofa-set",
    title: "Sofa Set",
    subtitle: "Premium beds for ultimate comfort and style",
    cta: "Explore Now",
    link: "/products#sofa-set",
    badge: "Luxury Collection",
    badgeColor: "from-rose-500 to-red-600",
    features: ["Premium fabric", "Corner designs", "L-Shape options"],
    imageSearch: "luxury L shape sofa set modern living room",
    placeholderImage: "/gallery-images/Sofaset/Royal Walnut L-Shape Sofa.jpeg"
  },
  {
    id: "beds",
    title: "Beds",
    subtitle: "Premium beds for ultimate comfort and style",
    cta: "Explore Now",
    link: "/products#beds",
    badge: "Royal Sleep",
    badgeColor: "from-blue-500 to-indigo-600",
    features: ["Premium materials", "Storage options", "Modern designs"],
    imageSearch: "luxury king size bed with storage modern bedroom",
    placeholderImage: "/gallery-images/Beds/Royal Crest Bed.jpeg"
  },
  {
    id: "wardrobes",
    title: "Wardrobes & Walldrops",
    subtitle: "Designer wardrobes and elegant walldrop solutions",
    cta: "Explore Now",
    link: "/products#wardrobes",
    badge: "Style & Storage",
    badgeColor: "from-amber-500 to-orange-600",
    features: ["Custom sizes", "Premium finish", "Space-saving"],
    imageSearch: "modern designer wardrobe with sliding doors",
    placeholderImage: "/gallery-images/walldrops/Imperia Luxe Wardrobe.jpeg"
  },
  {
    id: "tv-cabinet",
    title: "TV Cabinet",
    subtitle: "Elegant TV units and media walls for entertainment areas",
    cta: "Explore Now",
    link: "/products#tv-cabinet",
    badge: "Entertainment Hub",
    badgeColor: "from-emerald-500 to-teal-600",
    features: ["Modern designs", "Media walls", "Premium finish"],
    imageSearch: "modern TV cabinet unit with marble finish",
    placeholderImage: "/gallery-images/tv-cabinet/Marble Fusion Media Wall.jpeg"
  },
  {
    id: "partition",
    title: "Partition Design",
    subtitle: "Beautiful partition designs for modern interiors",
    cta: "Explore Now",
    link: "/products#partition",
    badge: "Interior Design",
    badgeColor: "from-purple-500 to-pink-600",
    features: ["Modern designs", "Space divider", "Elegant finish"],
    imageSearch: "modern room partition design wooden slats",
    placeholderImage: "/gallery-images/partition-design/Royal Slat Partition1.jpeg"
  },
  {
    id: "pooja-room",
    title: "Pooja Room",
    subtitle: "Sacred and elegant pooja room designs",
    cta: "Explore Now",
    link: "/products#pooja-room",
    badge: "Spiritual",
    badgeColor: "from-yellow-500 to-amber-600",
    features: ["Traditional design", "Modern touch", "Premium finish"],
    imageSearch: "modern wooden pooja room design for home",
    placeholderImage: "/gallery-images/pooja-room/Omkar Glow Pooja Unit1.jpeg"
  },
  {
    id: "office-furniture",
    title: "Office Furniture",
    subtitle: "Ergonomic office furniture for productive workspaces",
    cta: "Explore Now",
    link: "/products#office-furniture",
    badge: "New Launch",
    badgeColor: "from-slate-500 to-gray-600",
    features: ["Ergonomic design", "Premium materials", "Modern look"],
    imageSearch: "modern office desk with ergonomic chair setup",
    placeholderImage: ""
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // For the Office Furniture slide (no image yet), we'll use a gradient background
  const getSlideBackground = (slide) => {
    if (slide.id === "office-furniture" && !slide.placeholderImage) {
      return "bg-linear-to-br from-slate-800 to-gray-900";
    }
    return "";
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/60 z-10" />
          
          {/* Background Image or Gradient */}
          {slide.id !== "office-furniture" && slide.placeholderImage ? (
            <Image
              src={slide.placeholderImage}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
              quality={85}
            />
          ) : (
            <div className={`absolute inset-0 ${getSlideBackground(slide)}`}>
              {/* Decorative pattern for office furniture slide */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>
          )}
          
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Badge */}
                <div className="inline-block mb-4">
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r ${slide.badgeColor}/20 backdrop-blur-sm border border-${slide.badgeColor.split(' ')[1]}/30`}>
                    <Sparkles className="w-4 h-4 text-orange-400" />
                    <span className={`text-xs uppercase tracking-wider font-light bg-linear-to-r ${slide.badgeColor} bg-clip-text text-transparent`}>
                      {slide.badge}
                    </span>
                  </div>
                </div>
                
                {/* Title */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 font-playfair">
                  {slide.title}
                </h1>
                
                {/* Description */}
                <p className="text-lg md:text-xl mb-6 max-w-2xl text-gray-200">
                  {slide.subtitle}
                </p>
                
                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 max-w-xl">
                  {slide.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-orange-500" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <Link
                  href={slide.link}
                  className="inline-flex items-center gap-2 bg-linear-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {slide.cta} <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 backdrop-blur-sm hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 backdrop-blur-sm hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? "w-8 h-2 bg-linear-to-r from-orange-500 to-red-600" 
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}