"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Flame, Layout, Sofa, Bed, DoorOpen, Tv, Sparkles, ArrowRight, 
  ShoppingBag, Phone, Mail, MapPin, Clock, Award, Truck, Shield,
  ChevronRight, Star, Users, TrendingUp, Heart, Zap, Gem,
  CheckCircle, Crown, Construction, Flower2, Briefcase
} from "lucide-react";
import Header from "@/components/Header";

// SERVICE CATEGORIES
const serviceCategories = [
  {
    id: "modular-kitchen",
    title: "Modular Kitchen",
    icon: <Layout className="w-8 h-8" />,
    description: "Complete modular kitchen solutions with premium appliances",
    badge: "Most Popular",
    color: "from-orange-500 to-red-600",
    bgGradient: "from-orange-50 to-red-50",
    features: ["Premium plywood", "Soft-close drawers", "German hardware"]
  },
  {
    id: "sofa-set",
    title: "Sofa Set",
    icon: <Sofa className="w-8 h-8" />,
    description: "Luxurious sofas and corner sets for your living room",
    badge: "Luxury Collection",
    color: "from-rose-500 to-red-600",
    bgGradient: "from-rose-50 to-red-50",
    features: ["Premium fabric", "Corner designs", "L-Shape options"]
  },
  {
    id: "beds",
    title: "Beds",
    icon: <Bed className="w-8 h-8" />,
    description: "Premium beds for ultimate comfort and style",
    badge: "Royal Sleep",
    color: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    features: ["Premium materials", "Storage options", "Modern designs"]
  },
  {
    id: "wardrobes",
    title: "Wardrobes & Walldrops",
    icon: <DoorOpen className="w-8 h-8" />,
    description: "Designer wardrobes and elegant walldrop solutions",
    badge: "Style & Storage",
    color: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-50 to-orange-50",
    features: ["Custom sizes", "Premium finish", "Space-saving"]
  },
  {
    id: "tv-cabinet",
    title: "TV Cabinet",
    icon: <Tv className="w-8 h-8" />,
    description: "Elegant TV units and media walls for entertainment areas",
    badge: "Entertainment Hub",
    color: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    features: ["Modern designs", "Media walls", "Premium finish"]
  },
  {
    id: "partition",
    title: "Partition Design",
    icon: <Layout className="w-8 h-8" />,
    description: "Beautiful partition designs for modern interiors",
    badge: "Interior Design",
    color: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
    features: ["Modern designs", "Space divider", "Elegant finish"]
  },
  {
    id: "pooja-room",
    title: "Pooja Room",
    icon: <Flower2 className="w-8 h-8" />,
    description: "Sacred and elegant pooja room designs",
    badge: "Spiritual",
    color: "from-yellow-500 to-amber-600",
    bgGradient: "from-yellow-50 to-amber-50",
    features: ["Traditional design", "Modern touch", "Premium finish"]
  },
  {
    id: "office-furniture",
    title: "Office Furniture",
    icon: <Briefcase className="w-8 h-8" />,
    description: "Ergonomic office furniture for productive workspaces",
    badge: "New Launch",
    color: "from-slate-500 to-gray-600",
    bgGradient: "from-slate-50 to-gray-50",
    features: ["Ergonomic design", "Premium materials", "Modern look"]
  }
];

// PRODUCT DATA
const productsData = [
  {
    id: "modular-kitchen",
    category: "Modular Kitchen",
    icon: <Layout className="w-6 h-6" />,
    badge: "Best Seller",
    hasImages: true,
    items: [
      { name: "Aqua Harmony Kitchen", image: "/gallery-images/modular-kitchen/Aqua Harmony Kitchen.jpeg", tag: "Popular" },
      { name: "Graphite Gloss Kitchen", image: "/gallery-images/modular-kitchen/Graphite Gloss Kitchen.jpeg", tag: "Luxury" },
      { name: "Royal Noir Kitchen", image: "/gallery-images/modular-kitchen/Royal Noir Kitchen.jpeg", tag: "Premium" },
      { name: "LuxeCraft Kitchen", image: "/gallery-images/modular-kitchen/LuxeCraft Kitchen.jpeg", tag: "Designer" },
      { name: "Warm Elegance Kitchen", image: "/gallery-images/modular-kitchen/Warm Elegance Kitchen.jpeg", tag: "Elegant" },
      { name: "Modern Ashwood Kitchen", image: "/gallery-images/modular-kitchen/Modern Ashwood Kitchen.jpeg", tag: "Modern" },
    ]
  },
  {
    id: "sofa-set",
    category: "Sofa Set",
    icon: <Sofa className="w-6 h-6" />,
    badge: "Comfort Collection",
    hasImages: true,
    items: [
      { name: "Blue Haven Corner Sofa", image: "/gallery-images/Sofaset/Blue Haven Corner Sofa1.jpeg", tag: "Best Seller" },
      { name: "GoldenNest L-Shape Sofa", image: "/gallery-images/Sofaset/GoldenNest L-Shape Sofa.jpeg", tag: "Luxury" },
      { name: "Ocean Luxe Corner Sofa", image: "/gallery-images/Sofaset/Ocean Luxe Corner Sofa.jpeg", tag: "Premium" },
      { name: "Royal Walnut Sofa", image: "/gallery-images/Sofaset/Royal Walnut L-Shape Sofa.jpeg", tag: "Royal" },
    ]
  },
  {
    id: "beds",
    category: "Beds",
    icon: <Bed className="w-6 h-6" />,
    badge: "Royal Sleep",
    hasImages: true,
    items: [
      { name: "Arctic Bliss Bed", image: "/gallery-images/Beds/Arctic Bliss Bed.jpeg", tag: "Best Seller" },
      { name: "Royal Crest Bed", image: "/gallery-images/Beds/Royal Crest Bed.jpeg", tag: "Royal" },
      { name: "Urban Walnut Bed", image: "/gallery-images/Beds/Urban Walnut Bed.jpeg", tag: "Modern" },
      { name: "AeroLift Hydraulic Bed", image: "/gallery-images/Beds/AeroLift Hydraulic Bed1.jpeg", tag: "Smart" },
    ]
  },
  {
    id: "wardrobes",
    category: "Wardrobes & Walldrops",
    icon: <DoorOpen className="w-6 h-6" />,
    badge: "Style & Storage",
    hasImages: true,
    items: [
      { name: "Imperia Luxe Wardrobe", image: "/gallery-images/walldrops/Imperia Luxe Wardrobe.jpeg", tag: "Luxury" },
      { name: "Monarch Matte Wardrobe", image: "/gallery-images/walldrops/Monarch Matte Wardrobe.jpeg", tag: "Elegant" },
      { name: "Nordic Walnut Wardrobe", image: "/gallery-images/walldrops/Nordic Walnut Designer Wardrobe.jpeg", tag: "Designer" },
      { name: "Astra Fluted Wardrobe", image: "/gallery-images/walldrops/Astra Fluted Wardrobe.jpeg", tag: "Modern" },
    ]
  },
  {
    id: "tv-cabinet",
    category: "TV Cabinet",
    icon: <Tv className="w-6 h-6" />,
    badge: "Entertainment Hub",
    hasImages: true,
    items: [
      { name: "Aura Fluted TV Panel", image: "/gallery-images/tv-cabinet/Aura Fluted Luxe TV Panel.jpeg", tag: "Luxury" },
      { name: "Marble Fusion Media Wall", image: "/gallery-images/tv-cabinet/Marble Fusion Media Wall.jpeg", tag: "Premium" },
      { name: "Royal Walnut TV Panel", image: "/gallery-images/tv-cabinet/Royal Walnut Marble TV Panel.jpeg", tag: "Royal" },
      { name: "Monochrome TV Panel", image: "/gallery-images/tv-cabinet/Monochrome Marble Luxe TV Panel.jpeg", tag: "Designer" },
    ]
  },
  {
    id: "partition",
    category: "Partition Design",
    icon: <Layout className="w-6 h-6" />,
    badge: "Interior Design",
    hasImages: true,
    items: [
      { name: "Royal Slat Partition", image: "/gallery-images/partition-design/Royal Slat Partition1.jpeg", tag: "Royal" },
      { name: "Signature Bloom Partition", image: "/gallery-images/partition-design/Signature Bloom Partition.jpeg", tag: "Designer" },
    ]
  },
  {
    id: "pooja-room",
    category: "Pooja Room",
    icon: <Flower2 className="w-6 h-6" />,
    badge: "Spiritual",
    hasImages: true,
    items: [
      { name: "Omkar Glow Pooja Unit", image: "/gallery-images/pooja-room/Omkar Glow Pooja Unit1.jpeg", tag: "Spiritual" },
      { name: "Omkar Glow Premium Unit", image: "/gallery-images/pooja-room/Omkar Glow Pooja Unit2.jpeg", tag: "Premium" },
    ]
  },
  {
    id: "office-furniture",
    category: "Office Furniture",
    icon: <Briefcase className="w-6 h-6" />,
    badge: "Coming Soon",
    hasImages: false,
    items: []
  }
];

// Service Card Component - Fixed badge positioning
const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <div className={`relative bg-linear-to-br ${service.bgGradient} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 pt-3`}>
        
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
          <svg viewBox="0 0 100 100" fill="currentColor" className="text-gray-900">
            <circle cx="50" cy="50" r="40" />
          </svg>
        </div>
        
        {/* Badge - Now properly positioned inside the card with pt-3 on parent */}
        <div className="px-6 pt-2 pb-1">
          <span className={`inline-block text-xs font-bold px-4 py-1.5 rounded-full bg-linear-to-r ${service.color} text-white shadow-lg flex items-center gap-1 w-fit`}>
            <Zap size={12} />
            {service.badge}
          </span>
        </div>
        
        <div className="px-6 pb-6">
          <div className="relative mb-5">
            <div className={`absolute inset-0 bg-linear-to-r ${service.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
            <div className={`relative w-16 h-16 bg-linear-to-r ${service.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
              {service.icon}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
            {service.title}
          </h3>
          
          <p className="text-gray-500 text-sm mb-4 leading-relaxed">
            {service.description}
          </p>
          
          <div className="space-y-2 mb-5">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle size={14} className="text-green-500 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <Link 
            href={`#${service.id}`} 
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 bg-linear-to-r ${service.color} bg-clip-text text-transparent`}
          >
            Explore Now
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronRight size={16} className="text-orange-500" />
            </motion.div>
          </Link>
        </div>
        
        <div className={`h-1 w-full bg-linear-to-r ${service.color} transform origin-left transition-transform duration-500 ${isHovered ? 'scale-x-100' : 'scale-x-0'}`}></div>
      </div>
    </motion.div>
  );
};

// Product Card Component - Fixed badge positioning
const ProductCard = ({ product, onEnquire, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
        
        {/* Product Tag Badge - Inside the card, not overlapping edge */}
        <div className="absolute top-3 left-3 z-20">
          <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-linear-to-r from-orange-500 to-red-600 text-white shadow-lg flex items-center gap-1">
            <Crown size={12} />
            {product.tag}
          </span>
        </div>

        <div className="relative h-64 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
          {!imgError ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <ShoppingBag className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 text-sm">{product.name}</p>
              </div>
            </div>
          )}
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 p-5"
          >
            <button
              onClick={() => onEnquire(product)}
              className="w-full bg-linear-to-r from-orange-500 to-red-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <ShoppingBag size={18} />
              Get Quote
            </button>
          </motion.div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-8 h-px bg-orange-500/50"></div>
            <span className="text-xs text-gray-400">Premium Quality</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Blank Card Component
const BlankCard = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 min-h-80 flex flex-col items-center justify-center p-8 text-center">
      <div className="w-20 h-20 bg-gray-300/50 rounded-2xl flex items-center justify-center mb-4">
        <Construction className="w-10 h-10 text-gray-500" />
      </div>
      <h3 className="text-xl font-bold text-gray-600 mb-2">Coming Soon</h3>
      <p className="text-gray-500 text-sm">New designs are on the way!</p>
      <p className="text-gray-400 text-xs mt-3">Stay tuned for exciting updates</p>
    </div>
  );
};

// Category Section Component
const CategorySection = ({ category, onEnquire }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id={category.id}
      className="mb-16 scroll-mt-24"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-linear-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-transform duration-300">
          {category.icon}
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {category.category}
          </h2>
          <p className="text-sm text-orange-600 font-medium flex items-center gap-1">
            <Gem size={12} />
            {category.badge}
          </p>
        </div>
        <div className="hidden md:block h-px flex-1 bg-linear-to-r from-orange-200 to-transparent ml-4"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {category.hasImages && category.items.length > 0 ? (
          category.items.map((product, idx) => (
            <ProductCard key={idx} product={product} onEnquire={onEnquire} index={idx} />
          ))
        ) : (
          <>
            <BlankCard />
            <BlankCard />
            <BlankCard />
            <BlankCard />
          </>
        )}
      </div>
    </motion.div>
  );
};

// Brand Features
const brandFeatures = [
  { icon: <Truck className="w-6 h-6" />, title: "Free Delivery", description: "Pan India free delivery", color: "from-blue-500 to-cyan-600" },
  { icon: <Shield className="w-6 h-6" />, title: "1 Year Warranty", description: "Comprehensive warranty", color: "from-green-500 to-emerald-600" },
  { icon: <Clock className="w-6 h-6" />, title: "Quick Installation", description: "Within 48 hours", color: "from-purple-500 to-pink-600" },
  { icon: <Award className="w-6 h-6" />, title: "Premium Quality", description: "Best materials used", color: "from-amber-500 to-orange-600" },
  { icon: <Heart className="w-6 h-6" />, title: "Satisfaction", description: "100% guaranteed", color: "from-rose-500 to-red-600" },
  { icon: <TrendingUp className="w-6 h-6" />, title: "5+ Years", description: "Of excellence", color: "from-indigo-500 to-purple-600" },
];

// WhatsApp Enquiry Modal
const EnquiryModal = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800">Get Quote on WhatsApp</h3>
          <p className="text-gray-500 text-sm mt-2">
            Click below to discuss {product?.name}
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <a
            href={`https://wa.me/919511629883?text=${encodeURIComponent(`Hi! I'm interested in ${product?.name} from Kesarinandan. Please share more details.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition text-center"
            onClick={onClose}
          >
            Open WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnquire = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-orange-100 to-red-100 border border-orange-200 shadow-sm">
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span className="text-xs uppercase tracking-wider text-orange-700 font-semibold">Premium Collection</span>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              Our Premium{" "}
              <span className="relative inline-block">
                Products
                <svg className="absolute -bottom-3 left-0 w-full" height="10" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5 L200 5" stroke="#FF6B00" strokeWidth="2" strokeDasharray="8 6" />
                </svg>
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Discover our exquisite range of kitchen appliances, modular solutions, 
              and luxury furniture crafted for modern living
            </motion.p>
          </div>

          {/* Service Categories Section */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                What We Offer
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Comprehensive solutions for your home and office
              </p>
              <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-red-600 mx-auto mt-6 rounded-full"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {serviceCategories.map((service, idx) => (
                <ServiceCard key={idx} service={service} index={idx} />
              ))}
            </div>
          </div>

          {/* Products Sections */}
          {productsData.map((category, idx) => (
            <CategorySection key={idx} category={category} onEnquire={handleEnquire} />
          ))}

          {/* Brand Features Section */}
          <div className="my-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Why Choose Kesarinandan?
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Experience excellence with our premium services
              </p>
              <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-red-600 mx-auto mt-6 rounded-full"></div>
            </motion.div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {brandFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="group text-center"
                >
                  <div className={`w-14 h-14 bg-linear-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-3 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm">{feature.title}</h3>
                  <p className="text-gray-400 text-xs mt-1">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="my-16 bg-linear-to-r from-orange-500 via-red-500 to-orange-600 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Premium Products</div>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-linear-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tr from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-linear-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need Help Choosing the Right Product?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Our experts are here to help you find the perfect solution for your home
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span>+91 9511629883</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <span>kesarinandan@gmail.com</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-linear-to-r from-orange-500 to-red-600 text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105"
              >
                Contact Our Experts <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <EnquiryModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />
        )}
      </AnimatePresence>
    </>
  );
}