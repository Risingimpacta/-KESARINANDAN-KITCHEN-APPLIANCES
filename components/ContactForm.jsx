"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
        body: JSON.stringify({ ...formData, subject: "Quick Enquiry from Homepage" }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Thank you! KESARINANDAN team will contact you soon." });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Failed to send. Please try again." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get a Free <span className="text-orange-600">Consultation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our kitchen experts will help you design the perfect modular kitchen for your home
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Benefits */}
          <div className="space-y-8">
            <div className="bg-linear-to-r from-orange-600 to-orange-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Book a Consultation?</h3>
              <ul className="space-y-4">
                {[
                  "Free site measurement and assessment",
                  "3D design visualization of your kitchen",
                  "Transparent pricing with no hidden costs",
                  "Expert advice on materials and layouts",
                  "1 year warranty on installation",
                  "EMI options available",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Phone, text: "+91 9511629883", label: "Call Us" },
                { icon: Mail, text: "knhomedecore@gmail.com", label: "Email Us" },
                { icon: MapPin, text: "Amravati, Maharashtra", label: "Visit Us" },
                { icon: Clock, text: "10 AM - 8 PM", label: "Business Hours" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition">
                  <item.icon className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="text-sm font-semibold text-gray-800">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your kitchen requirements..."
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition resize-none"
                ></textarea>
              </div>
              {status.message && (
                <div className={`p-4 rounded-xl flex items-center gap-2 ${
                  status.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"
                }`}>
                  <span>{status.message}</span>
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-linear-to-r from-orange-600 to-orange-500 text-white py-3 rounded-xl font-semibold hover:from-orange-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : (
                  <>
                    Get Free Quote
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}