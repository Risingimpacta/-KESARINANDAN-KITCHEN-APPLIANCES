import { Shield, Award, Clock, Users, Truck, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "ISO certified products with comprehensive warranty",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Trusted kitchen experts in Amravati since 2014",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "On-time installation & service guaranteed",
  },
  {
    icon: Users,
    title: "500+ Happy Customers",
    description: "Satisfied families across Vidarbha region",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free shipping on orders above ₹50,000",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer assistance",
  },
];

export default function Trust() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-orange-600">KESARINANDAN</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India's most trusted kitchen appliance brand with premium quality products and exceptional service
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group p-6 rounded-2xl hover:bg-orange-50 transition-all duration-300">
              <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                <feature.icon className="w-10 h-10 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}