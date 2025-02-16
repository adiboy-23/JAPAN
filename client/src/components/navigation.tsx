import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <span className="font-bold text-2xl text-primary cursor-pointer" onClick={() => scrollTo("hero")}>
              日本
            </span>
          </div>
          <div className="hidden md:flex space-x-10">
            <button
              onClick={() => scrollTo("culture")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Culture
            </button>
            <button
              onClick={() => scrollTo("nature")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Nature
            </button>
            <button
              onClick={() => scrollTo("artifacts")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Artifacts
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
