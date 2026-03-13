import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="group relative overflow-hidden text-[#3A3D38] font-geist font-medium text-[24px] md:text-[32px] leading-[28px] md:leading-[36px] h-[28px] md:h-[36px] tracking-[-1.28px] block w-fit"
  >
    <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1/2">
      <span className="block h-[28px] md:h-[36px]">{children}</span>
      <span className="block h-[28px] md:h-[36px]">{children}</span>
    </div>
  </Link>
);

const FooterExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="group relative overflow-hidden text-[#3A3D38] font-geist font-medium text-[24px] md:text-[32px] leading-[28px] md:leading-[36px] h-[28px] md:h-[36px] tracking-[-1.28px] block w-fit"
  >
    <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1/2">
      <span className="block h-[28px] md:h-[36px]">{children}</span>
      <span className="block h-[28px] md:h-[36px]">{children}</span>
    </div>
  </a>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const containerRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: textContainerRef,
    offset: ["start end", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Flip Text Scroll Animation - now using smoothProgress for butter-smooth motion
  const translateY = useTransform(smoothProgress, [0, 0.8, 1], ["100%", "0%", "0%"]);
  const rotateX = useTransform(smoothProgress, [0, 0.8, 1], [90, 0, 0]);
  const textColor = useTransform(smoothProgress, [0.6, 1], ["#828282", "#3a3d38"]);
  const textOpacity = useTransform(smoothProgress, [0, 0.4, 1], [0, 1, 1]);

  return (
    <footer ref={containerRef} className="bg-[#F8F5F0] relative w-full overflow-hidden border-t border-[#DEDEDE]">
      {/* Top Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-[#DEDEDE]">

        {/* Column 1: Menu */}
        <div className="col-span-1 lg:col-span-1 border-r border-b lg:border-b-0 border-[#DEDEDE] pt-12 lg:pt-[50px] pb-12 lg:pb-[50px] px-6 lg:pl-[48px] lg:pr-8 min-h-[322px]">
          <p className="text-[#545454] font-geist font-medium text-[14px] leading-[17px] tracking-[-0.28px] mb-[16px]">
            Menu
          </p>
          <nav className="flex flex-col gap-[8px]">
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/journal">Journal</FooterLink>
            <FooterLink to="/support">Support</FooterLink>
            <FooterLink to="/product">Product</FooterLink>
            <FooterLink to="/services">Service</FooterLink>
          </nav>
        </div>

        {/* Column 2: Socials */}
        <div className="col-span-1 lg:col-span-1 border-b lg:border-b-0 lg:border-r border-[#DEDEDE] pt-12 lg:pt-[50px] pb-12 lg:pb-[50px] px-6 lg:pl-[48px] lg:pr-8 min-h-[322px]">
          <p className="text-[#545454] font-geist font-medium text-[14px] leading-[17px] tracking-[-0.28px] mb-[16px]">
            Socials
          </p>
          <nav className="flex flex-col gap-[8px]">
            <FooterExternalLink href="#">Instagram</FooterExternalLink>
            <FooterExternalLink href="#">X / Twitter</FooterExternalLink>
            <FooterExternalLink href="#">Tiktok</FooterExternalLink>
          </nav>
        </div>

        {/* Column 3: Newsletter */}
        <div className="col-span-2 lg:col-span-2 pt-12 lg:pt-[64px] pb-12 lg:pb-[50px] px-6 lg:pl-[48px] lg:pr-8 min-h-[322px] flex flex-col justify-start">
          <h3 className="text-[#3A3D38] font-geist font-medium text-[32px] leading-[38px] tracking-[-1.28px] mb-[18px]">
            Stay essential.
          </h3>
          <p className="text-[#545454] font-geist font-medium text-[14px] leading-[21px] tracking-[-0.42px] max-w-[466px] mb-[40px]">
            Join our community for evidence-based skincare insights, formulation updates, and exclusive access to limited releases. We respect your inbox as much as your skin—no excessive communication.
          </p>

          {/* Input */}
          <div className="w-full max-w-[426px] border-b border-[#CCCCCC] pb-[10px] mb-[50px] flex items-center justify-between">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent w-full text-[#828282] font-geist font-medium text-[16px] outline-none placeholder:text-[#828282] tracking-[-0.32px]"
            />
            <button className="group relative w-[34px] h-[34px] bg-[#D4DCCF] rounded-[8px] flex items-center justify-center shrink-0 overflow-hidden">
              <div className="absolute inset-0 bg-[#3a3d38] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>
              <ArrowRight size={18} className="text-[#3a3d38] group-hover:text-white group-hover:-rotate-45 relative z-10 transition-all duration-300 ease-out" />
            </button>
          </div>

          {/* Agree */}
          <div className="flex items-center gap-[6px]">
            <label className="flex items-center justify-center cursor-pointer relative">
              <input type="checkbox" className="required appearance-none w-[12px] h-[12px] bg-white border-[1.5px] border-[#000000] rounded-[2px] checked:bg-black checked:border-black shrink-0 transition-colors cursor-pointer peer" />
              <svg className="absolute w-[8px] h-[8px] text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </label>
            <span className="text-[#545454] font-geist font-medium text-[12px] leading-[14px] tracking-[-0.24px] select-none">
              By subscribing you agree to the Privacy Policy
            </span>
          </div>
        </div>
      </div>

      {/* Footer Bottom / Links */}
      <div className="border-b border-[#DEDEDE]">
        <div className="flex flex-col md:flex-row md:items-center justify-between px-6 lg:px-[48px] h-auto lg:h-[64.8px] py-4 lg:py-0 text-[#545454] font-geist font-medium text-[14px] leading-[17px] tracking-[-0.28px] gap-4">
          <Link to="/terms" className="hover:text-black transition-colors">Terms &amp; Conditions</Link>
          <Link to="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
          <Link to="/payment-methods" className="hover:text-black transition-colors">Payment Methods</Link>
          <span className="tracking-[-0.42px]">© 2026 Elexira™ All Rights Reserved.</span>
        </div>
      </div>

      {/* Big Text with Flip Reveal Animation */}
      <div
        ref={textContainerRef}
        className="w-full flex justify-center items-center pt-12 lg:py-0 lg:h-[300px] xl:h-[400px] overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        <motion.span
          style={{
            y: translateY,
            rotateX: rotateX,
            color: textColor,
            opacity: textOpacity,
            transformOrigin: "bottom"
          }}
          className="font-geist font-medium text-[20vw] leading-[20vw] md:text-[200px] md:leading-[200px] lg:text-[280px] lg:leading-[280px] xl:text-[407.6px] xl:leading-[306px] tracking-[-0.03em] lg:tracking-[-15.2294px] select-none text-center block"
        >
          Elexira
        </motion.span>
      </div>
    </footer>
  );
};

export default Footer;
