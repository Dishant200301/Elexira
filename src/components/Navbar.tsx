import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Service", path: "/services" },
  { label: "Product", path: "/product" },
  { label: "Journal", path: "/journal" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${isOpen ? "bg-[#fcfbf9]" : scrolled ? "backdrop-blur-xl bg-[#f6f3ee]/80" : "backdrop-blur-sm bg-[#fcfbf9]"
          }`}
        style={{ height: 68 }}
      >
        <div className="section-container h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-geist font-medium text-[28px] tracking-tight text-[#3a3d38] relative z-[60]"
          >
            Elexira<span className="text-xs align-super">™</span>
          </Link>

          {/* Center Nav Links - Desktop (Visible only on LG+) */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="nav-link-hover text-[#3a3d38] font-geist font-medium text-lg"
              >
                <span className="block">{link.label}</span>
                <span className="block">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop (Visible only on LG+) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/support"
              className="group relative overflow-hidden bg-[#D4DCCF] rounded-[8px] px-6 h-[44px] flex items-center justify-center transition-all duration-300 ease-out"
            >
              <div className="absolute inset-0 bg-[#3a3d38] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>
              <span className="relative z-10 text-[#3a3d38] group-hover:text-white font-geist font-medium text-[16px] transition-colors duration-300 ease-out">
                Support
              </span>
            </Link>
          </div>

          {/* Mobile/Tablet Menu Toggle (Visible up to LG) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#3a3d38] p-2 relative z-[60] focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={32} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: -45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={32} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
        </div>
      </nav>

      {/* Full-Page Mobile/Tablet Menu - Exactly as Reference Image */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 lg:hidden bg-[#fcfbf9]/70 backdrop-blur-2xl z-50 pt-24 pb-8"
          >
            <div className="section-container h-full flex flex-col justify-between overflow-y-auto">
              {/* Navigation Links Group */}
              <div className="flex flex-col items-start gap-4">
                {[
                  { label: "About", path: "/about" },
                  { label: "Service", path: "/services" },
                  { label: "Product", path: "/product" },
                  { label: "Journal", path: "/journal" },

                ].map((link, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.4, ease: "easeOut" }}
                    className="w-full"
                  >
                    <Link
                      to={link.path}
                      className="nav-link-hover text-[#3a3d38] font-geist font-medium text-[28px] md:text-[34px] leading-tight tracking-tight text-left block"
                    >
                      <span className="block">{link.label}</span>
                      <span className="block">{link.label}</span>
                    </Link>
                  </motion.div>
                ))}

                {/* Order Now Button (Pale Green pill) */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
                  className="mt-0"
                >
                  <Link
                    to="/support"
                    className="group relative overflow-hidden bg-[#D4DCCF] rounded-[8px] px-8 py-3 flex items-center justify-center w-fit transition-all duration-300 ease-out"
                  >
                    <div className="absolute inset-0 bg-[#3a3d38] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>
                    <span className="relative z-10 text-[#3a3d38] group-hover:text-white font-geist font-medium text-[16px] transition-colors duration-300 ease-out">
                      Support
                    </span>
                  </Link>
                </motion.div>
              </div>

              {/* Contact & Footer Info (Bottom Left) */}
              <div className="mt-0 flex flex-col items-start gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-start gap-1"
                >
                  <span className="text-[#3a3d38]/70 font-geist font-medium text-[15px]">Contact</span>
                  <a
                    href="mailto:info@essence.com"
                    className="text-[#3a3d38] font-geist font-medium text-[17px] border-b border-[#3a3d38] pb-0.5 leading-tight hover:opacity-80 transition-opacity"
                  >
                    info@essence.com
                  </a>
                </motion.div>

                <motion.footer
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.4 }}
                  className="flex flex-col items-start gap-2"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[#3a3d38] font-geist text-[13px] font-medium tracking-tight whitespace-nowrap">
                      © 2026 Essence™
                    </span>
                    <Link
                      to="/terms"
                      className="text-[#3a3d38] font-geist text-[13px] font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
                    >
                      Terms of service
                    </Link>
                  </div>
                  <Link
                    to="/privacy"
                    className="text-[#3a3d38] font-geist text-[13px] font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
                  >
                    Privacy Policy
                  </Link>
                </motion.footer>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
