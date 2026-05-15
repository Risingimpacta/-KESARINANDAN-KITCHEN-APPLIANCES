"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ChevronLeft, ChevronRight, Sparkles, Gem } from "lucide-react";

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
    <section className="py-20 bg-linear-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-125 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={kitchenImages[currentImage]}
                alt="Luxury modular kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
            </div>
            
            {/* Image Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {kitchenImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentImage ? "w-6 h-2 bg-linear-to-r from-orange-500 to-red-600" : "w-2 h-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span className="text-xs uppercase tracking-wider text-orange-400 font-light">Luxury Collection</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Luxury Modular <span className="bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Kitchens</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Transform your kitchen into a masterpiece with our premium modular kitchen solutions. 
              Designed for elegance and engineered for durability.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-linear-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}