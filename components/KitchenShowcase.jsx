"use client";
import { useState } from "react";
import Image from "next/image";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const kitchenImages = [
  "/kitchen/kitchen2.jpg",
  "/kitchen/kitchen3.jpg",
  "/kitchen/kitchen4.jpg",
  "/kitchen/kitchen6.jpg",
  "/kitchen/kitchen7.jpg",
  "/kitchen/kitchen8.jpg",
  "/kitchen/kitchen9.jpg",
];

const features = [
  "Premium Quality Laminates",
  "Boiling Water Proof Plywood",
  "Soft-Close Drawers",
  "German Technology Hinges",
  "Customized Designs",
  "Free Installation",
];

export default function KitchenShowcase() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % kitchenImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + kitchenImages.length) % kitchenImages.length);
  };

  return (
    <section className="py-20 bg-linear-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-125 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={kitchenImages[currentImage]}
                alt="Luxury modular kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
              />
            </div>
            
            {/* Image Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {kitchenImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImage ? "w-6 bg-red-600" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Luxury Modular <span className="text-red-500">Kitchens</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Transform your kitchen into a masterpiece with our premium modular kitchen solutions. 
              Designed for elegance and engineered for durability.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <a
              href="/contact"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition shadow-lg"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}