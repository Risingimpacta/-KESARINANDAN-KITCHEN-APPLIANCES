"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { name: "Kitchen Chimneys", image: "/chimney/chimney1.jpg", price: "From ₹9,999", category: "chimney" },
  { name: "Auto Clean Chimney", image: "/chimney/chimney2.jpg", price: "From ₹12,999", category: "chimney" },
  { name: "Curved Glass Chimney", image: "/chimney/chimney3.jpg", price: "From ₹15,499", category: "chimney" },
  { name: "Wall Mount Chimney", image: "/chimney/chimney4.jpg", price: "From ₹8,999", category: "chimney" },
  { name: "Gas Hobs", image: "/cooktop/cooktop1.jpg", price: "From ₹5,999", category: "cooktop" },
  { name: "Induction Cooktop", image: "/cooktop/cooktop2.jpg", price: "From ₹4,999", category: "cooktop" },
  { name: "4 Burner Hob", image: "/cooktop/cooktop3.jpg", price: "From ₹7,999", category: "cooktop" },
  { name: "Mixer Hob", image: "/cooktop/cooktop4.jpg", price: "From ₹11,999", category: "cooktop" },
  { name: "Modular Kitchens", image: "/modular/modular1.jpg", price: "From ₹65,000", category: "modular" },
  { name: "L-Shape Kitchen", image: "/modular/modular2.jpg", price: "From ₹85,000", category: "modular" },
  { name: "U-Shape Kitchen", image: "/modular/modular3.jpg", price: "From ₹1,25,000", category: "modular" },
  { name: "Straight Kitchen", image: "/modular/modular4.jpg", price: "From ₹55,000", category: "modular" },
  { name: "Premium Modular", image: "/modular/modular6.jpg", price: "From ₹95,000", category: "modular" },
  { name: "Modern Design", image: "/modular/modular7.jpg", price: "From ₹75,000", category: "modular" },
];

export default function ProductSlider() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Premium <span className="text-red-600">Products</span>
          </h2>
          <p className="text-xl text-gray-600">Explore our wide range of kitchen solutions</p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition-all duration-300 -ml-4"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 pb-8 scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product, index) => (
              <div key={index} className="min-w-75 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                    quality={75}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-red-600 font-semibold text-lg mb-3">{product.price}</p>
                  <a
                    href={`https://wa.me/919511629883?text=I'm interested in ${product.name} - ${product.price}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition-all duration-300 -mr-4"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}