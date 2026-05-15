"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Crown, ShoppingBag, Gem, Sparkles, ArrowRight } from "lucide-react";

const products = [
  { 
    name: "Modular Kitchen", 
    image: "/kitchen/kitchen1.jpg", 
    tag: "Most Popular", 
    category: "modular-kitchen", 
    link: "/products#modular-kitchen",
    description: "Complete modular kitchen solutions with premium appliances",
    color: "from-orange-500 to-red-600"
  },
  { 
    name: "Sofa Set", 
    image: "/gallery-images/Sofaset/Royal Walnut L-Shape Sofa.jpeg", 
    tag: "Luxury Collection", 
    category: "sofa-set", 
    link: "/products#sofa-set",
    description: "Luxurious sofas and corner sets for your living room",
    color: "from-rose-500 to-red-600"
  },
  { 
    name: "Beds", 
    image: "/gallery-images/Beds/Royal Crest Bed.jpeg", 
    tag: "Royal Sleep", 
    category: "beds", 
    link: "/products#beds",
    description: "Premium beds for ultimate comfort and style",
    color: "from-blue-500 to-indigo-600"
  },
  { 
    name: "Wardrobes & Walldrops", 
    image: "/gallery-images/walldrops/Imperia Luxe Wardrobe.jpeg", 
    tag: "Style & Storage", 
    category: "wardrobes", 
    link: "/products#wardrobes",
    description: "Designer wardrobes and elegant walldrop solutions",
    color: "from-amber-500 to-orange-600"
  },
  { 
    name: "TV Cabinet", 
    image: "/gallery-images/tv-cabinet/Marble Fusion Media Wall.jpeg", 
    tag: "Entertainment Hub", 
    category: "tv-cabinet", 
    link: "/products#tv-cabinet",
    description: "Elegant TV units and media walls for entertainment areas",
    color: "from-emerald-500 to-teal-600"
  },
  { 
    name: "Partition Design", 
    image: "/gallery-images/partition-design/Royal Slat Partition1.jpeg", 
    tag: "Interior Design", 
    category: "partition", 
    link: "/products#partition",
    description: "Beautiful partition designs for modern interiors",
    color: "from-purple-500 to-pink-600"
  },
  { 
    name: "Pooja Room", 
    image: "/gallery-images/pooja-room/Omkar Glow Pooja Unit1.jpeg", 
    tag: "Spiritual", 
    category: "pooja-room", 
    link: "/products#pooja-room",
    description: "Sacred and elegant pooja room designs",
    color: "from-yellow-500 to-amber-600"
  },
  { 
    name: "Office Furniture", 
    image: "", 
    tag: "New Launch", 
    category: "office-furniture", 
    link: "/products#office-furniture",
    description: "Ergonomic office furniture for productive workspaces",
    color: "from-slate-500 to-gray-600",
    comingSoon: true
  },
];

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
        
        {/* Tag Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 bg-linear-to-r ${product.color} text-white`}>
            <Crown size={12} />
            {product.tag}
          </span>
        </div>
        
        {/* Image Container */}
        <div className="relative h-56 bg-linear-to-br from-gray-100 to-gray-200 overflow-hidden">
          {product.comingSoon || !product.image ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-linear-to-br from-gray-200 to-gray-300">
              <Sparkles className="w-12 h-12 text-gray-400 mb-3" />
              <span className="text-gray-500 font-medium">Coming Soon</span>
              <span className="text-gray-400 text-xs mt-1">New designs on the way!</span>
            </div>
          ) : (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              quality={85}
            />
          )}
        </div>
        
        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-gray-500 text-sm mb-3 line-clamp-2 flex-1">
            {product.description}
          </p>
          <div className="flex items-center gap-2 mt-2 mb-4">
            <div className="w-8 h-px bg-orange-500/50"></div>
            <span className="text-xs text-gray-400">Premium Quality</span>
          </div>
          <Link
            href={product.link}
            className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-orange-500 to-red-600 text-white py-2.5 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full"
          >
            Explore Now <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProductSlider() {
  // Split products into two rows
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 8);

  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-orange-100 to-red-100 border border-orange-200 shadow-sm">
              <Gem className="w-4 h-4 text-orange-600" />
              <span className="text-xs uppercase tracking-wider text-orange-700 font-semibold">Premium Collection</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Premium <span className="bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Explore our wide range of kitchen solutions crafted for modern homes
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-red-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* First Row */}
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {firstRow.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondRow.map((product, index) => (
              <ProductCard key={index + 4} product={product} index={index + 4} />
            ))}
          </div>
        </div>

        {/* View All Products Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            View All Products <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}