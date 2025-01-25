/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Twitter, Linkedin } from "lucide-react";
import navLinks from "../../utils/navlinks";

function MobileNav({ isMenuOpen, setIsMenuOpen }) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50"
        >
          {/* Background layers */}
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 backdrop-blur-md" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative h-full w-full flex flex-col justify-center items-center text-white"
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
            >
              <X size={20} />
            </motion.button>

            {/* Navigation links */}
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((item, index) => (
                <motion.div
                  key={index}
                  className="overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 * index,
                    duration: 0.5,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                >
                  <motion.a
                    href={item.href}
                    className="relative group flex flex-col items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-base md:text-3xl font-light tracking-wider">
                      {item.name}
                    </span>
                    <motion.div
                      className="h-[1px] bg-white/50 w-0 group-hover:w-full transition-all duration-300"
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                    />
                  </motion.a>
                </motion.div>
              ))}
            </nav>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-16 flex items-center gap-8"
            >
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
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2"
                  whileHover={{ y: -2 }}
                >
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full group-hover:bg-white/20 transition-all">
                    <Icon size={16} />
                  </div>
                  <span className="text-xs uppercase tracking-wider opacity-50 group-hover:opacity-100 transition-opacity">
                    {label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileNav;
