"use client";
import { useState, useEffect } from "react";
import { Users, Award, Clock, Box } from "lucide-react";

const stats = [
  { icon: Users, value: 500, label: "Happy Customers", suffix: "+" },
  { icon: Award, value: 10, label: "Years Experience", suffix: "+" },
  { icon: Clock, value: 24, label: "Hour Support", suffix: "/7" },
  { icon: Box, value: 1000, label: "Products Sold", suffix: "+" },
];

const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}{suffix}</span>;
};

export default function Stats() {
  return (
    <section className="py-16 bg-linear-to-r from-orange-600 to-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}