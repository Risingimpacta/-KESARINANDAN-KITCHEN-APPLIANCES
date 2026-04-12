"use client";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Rajesh Sharma",
    location: "Amravati",
    rating: 5,
    text: "Excellent quality products and professional service. The modular kitchen they installed transformed our home completely. Highly recommended!",
    image: "/testimonial1.jpg",
  },
  {
    name: "Priya Deshmukh",
    location: "Nagpur",
    rating: 5,
    text: "Best kitchen appliances dealer in Vidarbha. The chimney and hob are working perfectly. Customer support is outstanding.",
    image: "/testimonial2.jpg",
  },
  {
    name: "Amit Khanna",
    location: "Akola",
    rating: 5,
    text: "Very happy with the modular furniture. Great design, timely delivery, and professional installation team. Value for money.",
    image: "/testimonial3.jpg",
  },
  {
    name: "Sneha Patil",
    location: "Amravati",
    rating: 5,
    text: "KESARINANDAN provided excellent consultation and helped us choose the perfect kitchen layout. Very satisfied!",
    image: "/testimonial4.jpg",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
      ))}
    </div>
  );
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const next = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - itemsPerPage + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-orange-600">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join 500+ happy families who trusted KESARINANDAN for their kitchen needs
          </p>
        </div>

        <div className="relative">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300 -ml-4"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <Quote className="w-10 h-10 text-orange-200 mb-4" />
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                    {/* Add placeholder div if image not available */}
                    <div className="w-full h-full bg-linear-to-r from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300 -mr-4"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(Math.ceil(testimonials.length / itemsPerPage))].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * itemsPerPage)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / itemsPerPage) === idx
                  ? "w-8 bg-orange-600"
                  : "bg-gray-300 hover:bg-orange-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}