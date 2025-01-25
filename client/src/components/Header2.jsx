import { useState } from "react";
import {
  Menu,
  X,
  Instagram,
  Twitter,
  Mail,
  ChevronDown,
  ChevronUp,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header2 = ({ setIsMenuOpen, isMenuOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Split navigation links into main and dropdown
  const mainNavLinks = [
    // { name: "Professional Experience", href: "/works/professional" },
    { name: "Mining", href: "/works/mines" },
    { name: "Industrial Energy", href: "/works/industrial energy" },
    { name: "Conferences", href: "/works/conferences" },
  ];

  const dropdownLinks = [
    { name: "Sustaniable Development", href: "/works/sustainable development" },
    { name: "Sustaniable Development", href: "/works/sustainable development" },
    { name: "Exhibition / Book Launch", href: "/works/exhibition" },
    { name: "Youth Development", href: "/works/youth dev" },
    { name: "About", href: "/" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md" />

      <div className="relative flex justify-between items-center px-6 md:px-12 py-6">
        <div className="flex items-center space-x-16">
          <Link to="/" className="group">
            <motion.div className="relative" transition={{ duration: 0.3 }}>
              <h1 className="text-xl md:text-2xl font-light tracking-[0.2em] text-black">
                <span className="font-medium">DREY</span>
                <span className="opacity-70">.MIDE</span>
              </h1>
              <motion.div
                className="h-[1px] bg-black/30 w-0 group-hover:w-full transition-all duration-300"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
              />
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            {mainNavLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-sm font-light tracking-wider text-black/80 group-hover:text-black transition-colors">
                  {item.name}
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] bg-black/30 w-0 group-hover:w-full transition-all duration-300"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                />
              </motion.a>
            ))}

            {/* More Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                className="flex items-center space-x-1 group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-sm font-light tracking-wider text-black/80 group-hover:text-black transition-colors">
                  More
                </span>
                {isDropdownOpen ? (
                  <ChevronUp size={16} className="text-black/70" />
                ) : (
                  <ChevronDown size={16} className="text-black/70" />
                )}
              </motion.button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg"
                  >
                    {dropdownLinks.map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm font-light text-black/80 hover:text-black hover:bg-black/5 transition-colors"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>

        <div className="flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-8">
            {[
              {
                icon: Instagram,
                href: "https://instagram.com/dreymide",
                label: "Instagram",
              },
              {
                icon: Twitter,
                href: "https://twitter.com/dreymide",
                label: "Twitter",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/dreymide",
                label: "LinkedIn",
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-2 rounded-full hover:bg-black/5 transition-colors">
                  <Icon
                    size={20}
                    className="text-black/70 group-hover:text-black transition-colors"
                  />
                </div>
                <motion.span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs tracking-wider opacity-0 group-hover:opacity-70 transition-opacity">
                  {label}
                </motion.span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-black/5 transition-colors md:hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <X size={24} className="text-black" />
                ) : (
                  <Menu size={24} className="text-black" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header2;
