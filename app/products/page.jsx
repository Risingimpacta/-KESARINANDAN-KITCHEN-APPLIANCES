"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag, Eye, Zap, Flame, Heart } from "lucide-react";
import { useState } from "react";

const products = [
  {
    category: "Kitchen Chimneys",
    icon: "🔥",
    badge: "Best Seller",
    items: [
      { name: "Auto Clean Chimney", price: "₹12,999", originalPrice: "₹18,999", image: "/chimney/chimney1.jpg", feature: "Auto-cleaning, 1200 m³/hr suction", rating: 4.5, tag: "Popular" },
      { name: "Curved Glass Chimney", price: "₹15,499", originalPrice: "₹22,999", image: "/chimney/chimney2.jpg", feature: "Touch control, LED display", rating: 4.8, tag: "New" },
      { name: "Wall Mount Chimney", price: "₹9,999", originalPrice: "₹14,999", image: "/chimney/chimney3.jpg", feature: "Stainless steel, 3-speed motor", rating: 4.3, tag: "Sale" },
      { name: "Premium Chimney", price: "₹18,999", originalPrice: "₹27,999", image: "/chimney/chimney4.jpg", feature: "Filterless, auto-clean, 1400 m³/hr", rating: 4.9, tag: "Premium" },
    ]
  },
  {
    category: "Hobs & Cooktops",
    icon: "🍳",
    badge: "Trending",
    items: [
      { name: "4 Burner Gas Hob", price: "₹8,499", originalPrice: "₹12,999", image: "/cooktop/cooktop1.jpg", feature: "Toughened glass, auto ignition", rating: 4.6, tag: "Best Value" },
      { name: "Induction Cooktop", price: "₹5,999", originalPrice: "₹8,999", image: "/cooktop/cooktop2.jpg", feature: "Touch control, 8 power levels", rating: 4.4, tag: "Energy Saver" },
      { name: "Mixer Hob", price: "₹11,999", originalPrice: "₹16,999", image: "/cooktop/cooktop3.jpg", feature: "Gas + induction combination", rating: 4.7, tag: "Dual Tech" },
      { name: "Premium Hob", price: "₹14,999", originalPrice: "₹21,999", image: "/cooktop/cooktop4.jpg", feature: "5 burners, heavy duty", rating: 4.9, tag: "Professional" },
    ]
  },
  {
    category: "Modular Kitchens",
    icon: "🏠",
    badge: "Luxury Collection",
    items: [
      { name: "L-Shape Modular Kitchen", price: "₹85,000", originalPrice: "₹1,25,000", image: "/modular/modular1.jpg", feature: "Premium plywood, soft-close drawers", rating: 4.8, tag: "Most Popular" },
      { name: "U-Shape Modular Kitchen", price: "₹1,25,000", originalPrice: "₹1,80,000", image: "/modular/modular2.jpg", feature: "Maximum storage, modern design", rating: 4.9, tag: "Luxury" },
      { name: "Straight Modular Kitchen", price: "₹65,000", originalPrice: "₹95,000", image: "/modular/modular3.jpg", feature: "Space-saving, elegant finish", rating: 4.5, tag: "Compact" },
      { name: "Island Kitchen", price: "₹1,50,000", originalPrice: "₹2,20,000", image: "/modular/modular4.jpg", feature: "Premium with island counter", rating: 5.0, tag: "Premium" },
      { name: "Parallel Kitchen", price: "₹95,000", originalPrice: "₹1,40,000", image: "/modular/modular5.jpg", feature: "Efficient workflow design", rating: 4.7, tag: "Efficient" },
      { name: "Modern Modular", price: "₹1,10,000", originalPrice: "₹1,60,000", image: "/modular/modular6.jpg", feature: "Contemporary design", rating: 4.6, tag: "Modern" },
    ]
  },
];

// Star Rating Component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
      ))}
      {hasHalfStar && (
        <Star className="w-4 h-4 fill-orange-500 text-orange-500 opacity-50" />
      )}
      <span className="text-sm text-gray-600 ml-1">({rating})</span>
    </div>
  );
};

// Quick View Modal Component
const QuickViewModal = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-gray-100 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
              <div className="mb-3">
                <StarRating rating={product.rating} />
              </div>
              <p className="text-gray-600 mb-4">{product.feature}</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-orange-600">{product.price}</span>
                <span className="text-gray-400 line-through">{product.originalPrice}</span>
              </div>
              <Link
                href={`https://wa.me/919511629883?text=I'm interested in ${product.name} (${product.price})`}
                target="_blank"
                className="block bg-orange-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
                onClick={onClose}
              >
                Get Quote on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProductsPage() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const handleQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <>
      <Header />
      <main className="pt-32 md:pt-36 pb-20 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
                Premium Collection
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Premium <span className="text-orange-600 relative inline-block">
                Products
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 4 L200 4" stroke="#f97316" strokeWidth="2" strokeDasharray="6 4" />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our wide range of kitchen appliances and modular solutions crafted for modern homes
            </p>
          </div>

          {products.map((category, idx) => (
            <div key={idx} className="mb-20">
              {/* Category Header with Animation */}
              <div className="flex items-center justify-between mb-10 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {category.category}
                    </h2>
                    <p className="text-sm text-orange-600 font-medium mt-1">{category.badge}</p>
                  </div>
                </div>
                <div className="hidden md:block h-px flex-1 mx-8 bg-linear-to-r from-orange-200 to-transparent"></div>
                <div className="text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Zap size={20} />
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.items.map((product, pIdx) => (
                  <div
                    key={pIdx}
                    className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer"
                  >
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                        product.tag === "Premium" || product.tag === "Luxury" 
                          ? "bg-linear-to-r from-orange-600 to-orange-500 text-white"
                          : product.tag === "New"
                          ? "bg-green-500 text-white"
                          : product.tag === "Sale"
                          ? "bg-red-500 text-white"
                          : "bg-orange-100 text-orange-600"
                      }`}>
                        {product.tag}
                      </span>
                    </div>

                    {/* Discount Badge */}
                    {product.originalPrice && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="bg-black/80 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-bold">
                          Save {Math.round(((parseInt(product.originalPrice.replace(/[^0-9]/g, '')) - parseInt(product.price.replace(/[^0-9]/g, ''))) / parseInt(product.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                        </span>
                      </div>
                    )}

                    {/* Image Container with Hover Effects */}
                    <div className="relative h-72 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        quality={85}
                      />
                      
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                          <Link
                            href={`https://wa.me/919511629883?text=I'm interested in ${product.name} (${product.price})`}
                            target="_blank"
                            className="bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-orange-700 transition transform hover:scale-105 flex items-center gap-2"
                          >
                            <ShoppingBag size={16} />
                            Buy Now
                          </Link>
                          <button
                            onClick={() => handleQuickView(product)}
                            className="bg-white/90 backdrop-blur text-gray-800 px-6 py-2 rounded-full text-sm font-semibold hover:bg-white transition transform hover:scale-105 flex items-center gap-2"
                          >
                            <Eye size={16} />
                            Quick View
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="p-5">
                      <div className="mb-2">
                        <StarRating rating={product.rating} />
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300 line-clamp-1">
                        {product.name}
                      </h3>
                      
                      <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                        {product.feature}
                      </p>
                      
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-2xl font-bold text-orange-600">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Quick Action Buttons for Mobile/Tablet */}
                      <div className="flex gap-3 md:hidden">
                        <Link
                          href={`https://wa.me/919511629883?text=I'm interested in ${product.name} (${product.price})`}
                          target="_blank"
                          className="flex-1 bg-orange-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-orange-700 transition text-sm"
                        >
                          Enquire Now
                        </Link>
                      </div>
                    </div>

                    {/* Animated Border on Hover */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Call to Action Banner */}
          <div className="mt-20 bg-linear-to-r from-orange-600 to-orange-500 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
            <div className="relative z-10">
              <Flame className="w-12 h-12 text-white mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Need Help Choosing the Right Product?
              </h3>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                Our experts are here to help you find the perfect kitchen solution for your home
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg transform hover:scale-105"
              >
                <Heart size={18} />
                Get Expert Advice
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsappButton />
      
      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          isOpen={!!quickViewProduct}
          onClose={closeQuickView}
        />
      )}
    </>
  );
}