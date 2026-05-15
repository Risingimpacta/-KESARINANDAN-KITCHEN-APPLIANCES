"use client";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaExternalLinkAlt, FaClock, FaPhone, FaBuilding } from "react-icons/fa";

const locations = [
  {
    id: "amravati",
    name: "KESARINANDAN Kitchen Appliances",
    city: "Amravati",
    address: "C-14, Ramlasman Sankul, Sindhi Chowk, K.L. College Road",
    area: "Amravati 444604 (M.S.)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23834.09114650495!2d77.7589!3d20.9333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5c4031fc1ec1caa7!2sKesarinandan%20Kitchen%20Appliances!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    mapsLink: "https://www.google.com/maps/place/Kesarinandan+Kitchen+Appliances/data=!4m2!3m1!1s0x0:0x5c4031fc1ec1caa7?sa=X&ved=1t:2428&ictx=111",
    phone: "+91 9511629883",
    hours: "Monday - Saturday (10:30 AM - 8:00 PM)",
    closed: "Sunday Closed",
    badge: "Head Office"
  },
  {
    id: "pune",
    name: "KESARINANDAN Kitchen Appliances",
    city: "Pune",
    address: "SM Industry, Gat No.1652, Chikhali-Talawade Road",
    area: "Chikhali, Pune 411062",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3779.485030232826!2d73.80839999999999!3d18.687091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQxJzEzLjUiTiA3M8KwNDgnMzAuMiJF!5e0!3m2!1sen!2sin!4v1778829879125!5m2!1sen!2sin",
    mapsLink: "https://www.google.com/maps?q=18.687091,73.8084",
    phone: "+91 9511629883",
    hours: "Monday - Saturday (10:30 AM - 6:00 PM)",
    closed: "Sunday Closed",
    badge: "Pune Branch"
  }
];

const LocationCard = ({ location, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      {/* Map Header with Badge */}
      <div className="bg-linear-to-r from-orange-600 to-orange-500 px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="flex items-center gap-2 text-white">
          <FaMapMarkerAlt className="w-5 h-5" />
          <div>
            <h3 className="font-semibold">{location.name}</h3>
            <span className="text-xs opacity-90">{location.city}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
            {location.badge}
          </span>
          <a
            href={location.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg transition-all duration-300 text-sm font-medium"
          >
            <FaExternalLinkAlt className="w-3 h-3" />
            Open Map
          </a>
        </div>
      </div>

      {/* Map Embed */}
      <div className="relative h-80 w-full bg-gray-100">
        <iframe
          src={location.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${location.name} Location - ${location.city}`}
          className="w-full h-full"
        />
      </div>

      {/* Address and Details */}
      <div className="p-6 bg-white">
        <div className="flex items-start gap-3 mb-4">
          <FaBuilding className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />
          <div>
            <p className="text-gray-800 font-medium">{location.address}</p>
            <p className="text-gray-600 text-sm">{location.area}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 mb-4">
          <FaPhone className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />
          <a href={`tel:${location.phone}`} className="text-gray-700 hover:text-orange-600 transition">
            {location.phone}
          </a>
        </div>

        <div className="flex items-start gap-3 mb-4">
          <FaClock className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />
          <div>
            <p className="text-gray-700">{location.hours}</p>
            <p className="text-red-500 text-sm">{location.closed}</p>
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <a
            href={`https://maps.google.com/?saddr=Current+Location&daddr=${encodeURIComponent(location.address + ", " + location.area)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-all duration-300 text-center"
          >
            Get Directions
          </a>
          <a
            href={`https://wa.me/${location.phone.replace(/\D/g, '')}?text=Hi! I'm interested in your products at ${location.city} showroom.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-all duration-300 text-center"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Map() {
  return (
    <section className="py-20 bg-linear-to-b from-white to-gray-50">
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
              <FaMapMarkerAlt className="w-4 h-4 text-orange-600" />
              <span className="text-xs uppercase tracking-wider text-orange-700 font-semibold">Our Locations</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Visit Our <span className="bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Showrooms</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Come visit our showrooms to explore our premium kitchen solutions
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-red-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Two Location Cards Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <LocationCard key={location.id} location={location} index={index} />
          ))}
        </div>

        {/* Business Hours Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2 flex-wrap">
            <span className="font-semibold text-orange-600">📞 Need Help?</span>
            Call us at 
            <a href="tel:+919511629883" className="text-orange-600 hover:text-orange-700 font-medium">+91 9511629883</a>
            for any inquiries about our products and services.
          </p>
        </motion.div>
      </div>
    </section>
  );
}