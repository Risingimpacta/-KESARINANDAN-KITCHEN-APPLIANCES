"use client";
import Image from "next/image";
import Link from "next/link";
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube,
  FaWhatsapp,
  FaClock,
  FaArrowRight,
  FaTruck,
  FaShieldAlt,
  FaCreditCard,
  FaHeadset
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribeStatus("Thank you for subscribing!");
      setEmail("");
      setTimeout(() => setSubscribeStatus(""), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="relative">
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-orange-500 via-orange-600 to-orange-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1: Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12">
                  <Image
                    src="/logo/Kesarinandan icon.png"
                    alt="Kesarinandan Logo"
                    fill
                    className="object-contain"
                    sizes="48px"
                    quality={75}
                  />
                </div>
                <h3 className="text-2xl font-bold text-orange-500">KESARINANDAN</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Premium kitchen appliances and modular kitchen solutions dealer in Amravati. 
                Transforming homes with quality and innovation since 2014.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5 text-gray-400 hover:text-white transition" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5 text-gray-400 hover:text-white transition" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5 text-gray-400 hover:text-white transition" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-5 h-5 text-gray-400 hover:text-white transition" />
                </a>
                <a 
                  href="https://wa.me/919511629883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5 text-gray-400 hover:text-white transition" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-orange-500 rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "Products", href: "/products" },
                  { name: "Contact Us", href: "/contact" },
                  { name: "About Us", href: "/about" },
                  { name: "Privacy Policy", href: "/privacy" },
                  { name: "Terms & Conditions", href: "/terms" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-gray-400 hover:text-orange-500 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Products */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white relative inline-block">
                Our Products
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-orange-500 rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                {[
                  "Kitchen Chimneys",
                  "Hobs & Cooktops",
                  "Modular Kitchens",
                  "Plywood",
                  "Laminates",
                  "Modular Furniture",
                ].map((product) => (
                  <li key={product}>
                    <Link 
                      href="/products"
                      className="text-gray-400 hover:text-orange-500 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-125 transition-transform"></span>
                      <span>{product}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact & Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white relative inline-block">
                Contact Info
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-orange-500 rounded-full"></span>
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-orange-600 transition-colors duration-300">
                    <FaMapMarkerAlt className="text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Visit Us</p>
                    <p className="text-gray-400 text-xs">
                      C-14, Ramlasman Sankul, Sindhi Chowk,<br />
                      K.L. College Road, Amravati 444604 (M.S.)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300">
                    <FaPhone className="text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Call Us</p>
                    <a href="tel:+919511629883" className="text-gray-400 hover:text-orange-500 text-xs transition">
                      +91 9511629883
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300">
                    <FaEnvelope className="text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Email Us</p>
                    <a href="mailto:knhomedecore@gmail.com" className="text-gray-400 hover:text-orange-500 text-xs transition">
                      knhomedecore@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300">
                    <FaClock className="text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Business Hours</p>
                    <p className="text-gray-400 text-xs">
                      Mon-Sat: 10:00 AM - 8:00 PM<br />
                      Sunday: 11:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Subscribe to Our Newsletter</h4>
                <p className="text-gray-400 text-sm">
                  Get the latest updates on new products and special offers
                </p>
              </div>
              <div>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-white placeholder-gray-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Subscribe
                  </button>
                </form>
                {subscribeStatus && (
                  <p className="text-green-500 text-sm mt-2 animate-pulse">{subscribeStatus}</p>
                )}
              </div>
            </div>
          </div>

          {/* Features Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-gray-800">
            {[
              { icon: FaTruck, title: "Free Delivery", text: "On orders above ₹50,000" },
              { icon: FaShieldAlt, title: "Secure Payment", text: "100% secure transactions" },
              { icon: FaCreditCard, title: "Easy EMI", text: "No cost EMI available" },
              { icon: FaHeadset, title: "24/7 Support", text: "Dedicated customer care" },
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-all duration-300">
                  <feature.icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 <span className="text-orange-500 font-semibold">KESARINANDAN</span> Kitchen Appliances. 
              All rights reserved. | Designed with ❤️ in India
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-orange-500 text-xs transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-xs transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-xs transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}