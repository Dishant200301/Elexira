import { useState, useRef } from "react";
import FadeInSection from "@/components/FadeInSection";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const productImages = [
  "/assets/product/product_1.png",
  "/assets/product/product_2.jpg",
  "/assets/product/product_3.jpg",
  "/assets/product/product_4.png",
];

const ProductPreviewSection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="bg-[#F8F5F0] py-12 md:pb-24 md:mt-10 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.21, 1, 0.36, 1] }}
        className="section-container px-4 md:px-8 lg:px-[36px] max-w-[1500px] mx-auto will-change-transform"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[6fr_4fr] gap-12 lg:gap-[60px] xl:gap-[100px] items-start">
          
          {/* Product Images Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-2">
              {/* Thumbnails */}
              <div className="flex flex-row md:flex-col gap-3 md:gap-2 shrink-0 overflow-x-auto hide-scrollbar w-full md:w-auto pb-1 md:pb-0">
                {productImages.map((src, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveImageIndex(i)}
                    className={`shrink-0 w-[60px] h-[60px] md:w-[64px] md:h-[64px] rounded-[8px] overflow-hidden cursor-pointer ${
                      activeImageIndex === i 
                        ? "" 
                        : "opacity-60 hover:opacity-100 transition-opacity"
                    } bg-[#EAECE6] flex items-center justify-center p-0`}
                  >
                    <img
                      src={src}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              
              {/* Main Image */}
              <div className="flex-1 bg-[#EAECE6] rounded-[8px] overflow-hidden w-full aspect-square md:aspect-[4/3] relative">
                <img
                  src={productImages[activeImageIndex]}
                  alt="Essentia Product Main"
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Product Info Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex flex-col w-full max-w-[562px] mx-auto lg:mx-0 pt-4 lg:pt-0">
              
              {/* Title / Price */}
              <div className="flex flex-col mb-5 md:mb-6">
                <h2 className="font-geist font-medium text-[36px] md:text-[48px] leading-[1.1] md:leading-[58px] tracking-[-1.5px] md:tracking-[-1.92px] text-[#3A3D38] mb-2 md:mb-[6px]">
                  Essentia™
                </h2>
                <div className="flex items-center gap-[5px]">
                  <span className="font-geist font-medium text-[16px] md:text-[18px] leading-[18px] tracking-[-0.54px] text-[#333333]">
                    $85
                  </span>
                  <span className="font-geist font-medium text-[16px] md:text-[18px] leading-[18px] tracking-[-0.54px] text-[#828282] line-through">
                    $125
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-[#DEDEDE] mb-[24px] md:mb-[28px]" />

              {/* Variant Buttons */}
              <div className="flex gap-[4px] mb-[20px] md:mb-[24px]">
                <button className="w-[131px] h-[36px] bg-[#3A3D38] border border-[rgba(18,18,18,0.15)] rounded-[8px] flex items-center justify-center font-geist font-medium text-[14px] leading-[14px] tracking-[-0.28px] text-[#F8F5F0]">
                  Standard (50 ml)
                </button>
                <button className="w-[110px] h-[36px] bg-[#F8F5F0] border border-[#DEDEDE] rounded-[8px] flex items-center justify-center font-geist font-medium text-[14px] leading-[14px] tracking-[-0.28px] text-[#333333] hover:bg-[#EBEBEB] transition-colors">
                  Travel (20 ml)
                </button>
              </div>

              {/* Description */}
              <p className="font-geist font-medium text-[14px] leading-[21px] tracking-[-0.42px] text-[#333333] mb-[24px] md:mb-[32px]">
                Your skin doesn't need 50 ingredients and 10 steps. It needs the right 
                ones. Essence is one product with five powerful ingredients that does what 
                others promise but fail to deliver: healthier, calmer, more radiant skin. No 
                complexity. No confusion. Just results.
              </p>

              {/* Accordion area */}
              <div className="flex flex-col border-t border-[#DEDEDE] mb-[24px] md:mb-[32px]">
                {/* Shipping */}
                <div className="border-b border-[#DEDEDE]">
                  <button 
                    onClick={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
                    className="w-full flex justify-between items-center py-[20.5px] cursor-pointer group outline-none"
                  >
                    <span className="font-geist font-medium text-[18px] leading-[25px] tracking-[-0.54px] text-[#333333]">
                      Shipping
                    </span>
                    <ChevronDown className={`w-4 h-4 text-black group-hover:opacity-70 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${openAccordion === 'shipping' ? "rotate-180" : ""}`} strokeWidth={1.5} />
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${openAccordion === 'shipping' ? "grid-rows-[1fr] pb-[20px] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-geist font-medium text-[14px] leading-[21px] tracking-[-0.42px] text-[#545454]">
                        Complimentary express shipping on all orders over $150. Standard delivery takes 2-4 business days. All packages are climate-controlled and fully insured.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Return Policy */}
                <div className="border-b border-[#DEDEDE]">
                  <button 
                    onClick={() => setOpenAccordion(openAccordion === 'returns' ? null : 'returns')}
                    className="w-full flex justify-between items-center py-[20.5px] cursor-pointer group outline-none"
                  >
                    <span className="font-geist font-medium text-[18px] leading-[25px] tracking-[-0.54px] text-[#333333]">
                      Return Policy
                    </span>
                    <ChevronDown className={`w-4 h-4 text-black group-hover:opacity-70 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${openAccordion === 'returns' ? "rotate-180" : ""}`} strokeWidth={1.5} />
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${openAccordion === 'returns' ? "grid-rows-[1fr] pb-[20px] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-geist font-medium text-[14px] leading-[21px] tracking-[-0.42px] text-[#545454]">
                        We offer a 30-day efficacy guarantee. If your skin doesn't show measurable improvement within the first cycle of use, return the remaining product for a full refund.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry Button */}
              <Link 
                to="/product" 
                className="group relative overflow-hidden w-full h-[44px] bg-[#D4DCCF] rounded-[8px] flex items-center justify-center font-geist font-medium text-[16px] leading-[24px] tracking-[-0.32px]"
                style={{ backdropFilter: 'blur(2.5px)' }}
              >
                <div className="absolute inset-0 bg-[#3a3d38] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-0"></div>
                <span className="relative z-10 text-[#3A3D38] group-hover:text-white transition-colors duration-300 ease-out">inquiry</span>
              </Link>

            </div>
          </motion.div>
          
        </div>
      </motion.div>
    </section>
  );
};

export default ProductPreviewSection;
