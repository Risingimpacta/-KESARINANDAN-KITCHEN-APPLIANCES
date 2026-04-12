"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
  FaCheckCircle,
  FaUser,
  FaComment,
  FaPaperPlane,
  FaStore,
  FaParking,
  FaWifi,
  FaCoffee
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone, MdAccessTime } from "react-icons/md";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Thank you! KESARINANDAN team will get back to you soon." });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Something went wrong. Please try again." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  // Business hours data
  const businessHours = [
    { day: "Monday - Saturday", hours: "10:00 AM - 8:00 PM", status: "open" },
    { day: "Sunday", hours: "11:00 AM - 5:00 PM", status: "open" },
  ];

  // Amenities
  const amenities = [
    { icon: FaParking, name: "Free Parking" },
    { icon: FaWifi, name: "Free WiFi" },
    { icon: FaCoffee, name: "Refreshments" },
    { icon: FaStore, name: "Showroom Visit" },
  ];

  return (
    <>
      <Header />
      <main className="pt-32 md:pt-36 pb-20 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
                Get in Touch
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Contact <span className="text-orange-600">KESARINANDAN</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our products? Need expert advice? We're here to help you create your dream kitchen.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                <FaPhone className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-3">Speak with our experts</p>
              <a href="tel:+919511629883" className="text-orange-600 font-semibold hover:text-orange-700">
                +91 9511629883
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                <FaEnvelope className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">Get a response within 24h</p>
              <a href="mailto:knhomedecore@gmail.com" className="text-orange-600 font-semibold hover:text-orange-700">
                knhomedecore@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                <FaWhatsapp className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-3">Quickest response</p>
              <a href="https://wa.me/919511629883" target="_blank" className="text-orange-600 font-semibold hover:text-orange-700">
                Chat Now →
              </a>
            </div>
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-linear-to-r from-orange-600 to-orange-500 px-8 py-6">
                <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
                <p className="text-orange-100 text-sm mt-1">Fill out the form and we'll get back to you shortly</p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-8 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name *"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                    />
                  </div>
                  <div className="relative">
                    <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                    <MdPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                    />
                  </div>
                  <div className="relative">
                    <FaComment className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message *"
                    rows="6"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition resize-none"
                  ></textarea>
                </div>
                
                {status.message && (
                  <div className={`p-4 rounded-xl flex items-center gap-2 ${
                    status.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"
                  }`}>
                    <FaCheckCircle className="w-5 h-5 shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-linear-to-r from-orange-600 to-orange-500 text-white py-3 rounded-xl font-semibold hover:from-orange-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-6">
              {/* Location Card */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gray-900 px-8 py-6">
                  <h2 className="text-2xl font-bold text-white">Visit Our Showroom</h2>
                  <p className="text-gray-400 text-sm mt-1">Come see our products in person</p>
                </div>
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                      <FaMapMarkerAlt className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                      <p className="text-gray-600 leading-relaxed">
                        C-14, Ramlasman Sankul, Sindhi Chowk,<br />
                        K.L. College Road, Amravati 444604 (M.S.)
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                      <FaClock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-2">Business Hours</h3>
                      <div className="space-y-2">
                        {businessHours.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="text-gray-600">{item.day}</span>
                            <span className="text-gray-800 font-medium">{item.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                      <FaStore className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-2">Showroom Amenities</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {amenities.map((amenity, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <amenity.icon className="w-4 h-4 text-orange-600" />
                            <span className="text-sm text-gray-600">{amenity.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map - Updated with Kesarinandan specific map */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gray-900 px-8 py-4">
                  <h3 className="text-white font-semibold flex items-center gap-2">
                    <FaMapMarkerAlt className="text-orange-500" />
                    Find Us on Google Maps
                  </h3>
                </div>
                <div className="h-87.5 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23834.09114650495!2d77.7589!3d20.9333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5c4031fc1ec1caa7!2sKesarinandan%20Kitchen%20Appliances!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="KESARINANDAN Kitchen Appliances Location"
                  ></iframe>
                </div>
                <div className="bg-gray-50 px-8 py-3 border-t border-gray-100">
                  <a 
                    href="https://www.google.com/maps/place/Kesarinandan+Kitchen+Appliances/@20.9333,77.7589,17z/data=!4m6!3m5!1s0x0:0x5c4031fc1ec1caa7!8m2!3d20.9333!4d77.7589!16s%2Fg%2F11abc12345?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 text-sm flex items-center gap-2 hover:text-orange-700 transition"
                  >
                    <FaMapMarkerAlt className="w-4 h-4" />
                    Open in Google Maps
                    <FaArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-linear-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Frequently Asked Questions</h2>
              <p className="text-gray-300">Quick answers to common questions</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                  <h3 className="font-semibold text-orange-400 mb-2">Do you offer free consultation?</h3>
                  <p className="text-gray-300 text-sm">Yes! We provide free consultation and site visits to understand your requirements better.</p>
                </div>
                <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                  <h3 className="font-semibold text-orange-400 mb-2">What is the warranty period?</h3>
                  <p className="text-gray-300 text-sm">All our products come with 1-5 years warranty depending on the product category.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                  <h3 className="font-semibold text-orange-400 mb-2">Do you provide installation?</h3>
                  <p className="text-gray-300 text-sm">Yes, we provide professional installation services for all our products.</p>
                </div>
                <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                  <h3 className="font-semibold text-orange-400 mb-2">What payment methods do you accept?</h3>
                  <p className="text-gray-300 text-sm">Cash, Card, UPI, Net Banking, and EMI options are available.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919511629883"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FaWhatsapp className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919511629883"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FaPhone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}