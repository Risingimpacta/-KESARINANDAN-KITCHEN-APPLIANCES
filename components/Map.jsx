"use client";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

export default function Map() {
  // Google Maps embed URL for Kesarinandan Kitchen Appliances
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23834.09114650495!2d77.7589!3d20.9333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5c4031fc1ec1caa7!2sKesarinandan%20Kitchen%20Appliances!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";
  
  const mapsLink = "https://www.google.com/maps/place/Kesarinandan+Kitchen+Appliances/data=!4m2!3m1!1s0x0:0x5c4031fc1ec1caa7?sa=X&ved=1t:2428&ictx=111";

  return (
    <section className="py-20 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
              Visit Our Showroom
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Us on <span className="text-orange-600">Google Maps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Come visit our showroom in Amravati to explore our premium kitchen solutions
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Map Header */}
          <div className="bg-linear-to-r from-orange-600 to-orange-500 px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex items-center gap-2 text-white">
              <FaMapMarkerAlt className="w-5 h-5" />
              <h3 className="font-semibold">KESARINANDAN Kitchen Appliances</h3>
            </div>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium"
            >
              <FaExternalLinkAlt className="w-3 h-3" />
              Open in Google Maps
            </a>
          </div>

          {/* Map Embed */}
          <div className="relative h-100 md:h-112.5 w-full bg-gray-100">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KESARINANDAN Kitchen Appliances Location - Amravati"
              className="w-full h-full"
            />
          </div>

          {/* Map Footer with Address */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-800 font-medium">C-14, Ramlasman Sankul, Sindhi Chowk,</p>
                  <p className="text-gray-600">K.L. College Road, Amravati 444604 (M.S.)</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://maps.google.com/?saddr=Current+Location&daddr=Kesarinandan+Kitchen+Appliances,Amravati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-all duration-300"
                >
                  Get Directions
                </a>
                <a
                  href="tel:+919511629883"
                  className="border border-orange-600 text-orange-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-50 transition-all duration-300"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-orange-600">Business Hours:</span> Monday - Saturday (10:30 AM - 8:00 PM) | Sunday Closed
          </p>
        </div>
      </div>
    </section>
  );
}