import { Link } from "react-router-dom";
import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white backdrop-blur-sm text-black/80 py-4 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              to="/"
              className="text-xs md:text-sm font-light tracking-[0.2em] text-black hover:opacity-80 transition-opacity"
            >
              <span className="font-medium">DREY</span>
              <span className="opacity-70">.MIDE</span>
            </Link>
            <div className="h-[1px] w-12 bg-white/30 mt-2 transform transition-all duration-300 hover:w-24 hover:bg-white/50" />
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/dreymide"
              className="hover:text-black transition-colors p-2"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="https://www.instagram.com/dreymide"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors p-2"
            >
              <Instagram size={14} />
            </a>
            <a
              href="https://twitter.com/dreymide"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors p-2"
            >
              <Twitter size={14} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-[0.65rem] text-black/60">
            © {currentYear} Drey.Mide. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
