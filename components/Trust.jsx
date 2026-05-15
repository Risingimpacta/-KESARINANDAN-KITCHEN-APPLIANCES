"use client";
import { motion } from "framer-motion";
import { Shield, Award, Clock, Users, Truck, Headphones, CheckCircle, Gem } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "ISO certified products with comprehensive warranty",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Trusted kitchen experts in Amravati since 2014",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "On-time installation & service guaranteed",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Users,
    title: "500+ Happy Customers",
    description: "Satisfied families across Vidarbha region",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free shipping on orders above ₹50,000",
    color: "from-rose-500 to-red-600",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer assistance",
    color: "from-indigo-500 to-purple-600",
  },
];

export default function Trust() {
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
              <span className="text-xs uppercase tracking-wider text-orange-700 font-semibold">Why Choose Us</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose <span className="bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">KESARINANDAN</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            India&#39;s most trusted kitchen appliance brand with premium quality products and exceptional service
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-red-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-linear-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}