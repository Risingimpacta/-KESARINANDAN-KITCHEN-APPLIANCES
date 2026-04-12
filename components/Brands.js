"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  { name: "Premium Quality", icon: "🏆" },
  { name: "ISO Certified", icon: "✅" },
  { name: "Trusted Brand", icon: "⭐" },
  { name: "Made in India", icon: "🇮🇳" },
  { name: "Eco Friendly", icon: "🌿" },
  { name: "Energy Saver", icon: "⚡" },
];

export default function Brands() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-orange-600 mb-2">Trusted By Thousands</h3>
          <p className="text-gray-600">Partnered with leading brands and loved by customers across India</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-3xl mb-2">{brand.icon}</div>
              <p className="text-sm font-medium text-gray-700">{brand.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}