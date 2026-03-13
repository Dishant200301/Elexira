import { Helmet } from "react-helmet-async";
import FadeInSection from "@/components/FadeInSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/content/data/product";
import { useState } from "react";

const Product = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...new Set(products.map(p => p.category))];

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Collection — Elexira™ Pharma</title>
        <meta name="description" content="Explore our premium range of pharmaceutical-grade skincare and wellness products." />
      </Helmet>

      <section className="bg-[#F8F5F0] pt-[60px] pb-[60px] overflow-hidden relative border-t border-[#E5E5E5]">
        <div className="section-container px-4 md:px-8 lg:px-[34px] max-w-[1500px] mx-auto">

          {/* Editorial Header */}
          <FadeInSection>
            <div className="flex flex-col mb-[42px] lg:mb-[60px]">
              <div className="flex items-center gap-3 mb-8">
                <span className="font-geist font-medium text-[12px] md:text-[14px] text-[#828282] uppercase tracking-[0.2em]">01 — Collection</span>
                <div className="h-[1px] w-12 bg-[#828282]/30" />
              </div>
              <h1 className="font-geist font-medium text-[30px] md:text-[60px] lg:text-[70px] leading-[1.05] text-[#3a3d38] tracking-[-1.5px] md:tracking-[-2.56px] xl:tracking-[-3.6px] mb-4">
                Pharmacy as <br className="hidden md:block" />
                Artform
              </h1>
              <div className="flex flex-col lg:flex-row justify-between items-left lg:items-end gap-8 border-t border-[#E5E5E5] pt-6">
                <p className="font-geist text-[16px] md:text-[22px] leading-[1.5] text-[#545454] tracking-[-0.02em] max-w-xl text-left lg:text-left">
                  Our laboratory-curated collection represents the pinnacle of pharmaceutical efficacy, simplified into a suite of essential daily rituals.
                </p>

                {/* Minimal Filters */}
                <div className="w-full lg:w-auto overflow-x-auto no-scrollbar py-4 -mb-4 lg:py-2 lg:mb-0">
                  <div className="flex items-center justify-start md:justify-center lg:justify-end gap-x-6 md:gap-x-8 px-6 lg:px-0 whitespace-nowrap">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`font-geist font-medium text-[14px] uppercase tracking-widest transition-all relative pb-2 group/filter ${activeCategory === cat
                            ? "text-[#3a3d38]"
                            : "text-[#828282] hover:text-[#3a3d38]"
                          }`}
                      >
                        {cat}
                        {/* Active Underline */}
                        {activeCategory === cat ? (
                          <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#3a3d38]" />
                        ) : (
                          /* Hover Underline Animation */
                          <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#3a3d38] origin-left scale-x-0 group-hover/filter:scale-x-100 transition-transform duration-500 ease-out" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Product List / Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 w-full">
            {filteredProducts.map((product, i) => (
              <FadeInSection key={product.id} delay={i * 100}>
                <Link to={`/product/${product.slug}`} className="group block">
                  <div className="relative aspect-[4/5] bg-[#EBE5DC] overflow-hidden rounded-[8px] mb-8">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Corner Tag */}
                    <div className="absolute top-8 left-8">
                      <span className="font-geist font-medium text-[12px] text-white/90 uppercase tracking-widest bg-[#3a3d38]/20 backdrop-blur-md px-3 py-1.5 rounded-[4px] border border-white/10">
                        {product.category}
                      </span>
                    </div>

                    {/* Floating Detail Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                      <div className="bg-white/90 backdrop-blur-lg w-20 h-20 rounded-full flex items-center justify-center border border-[#E5E5E5]">
                        <ArrowRight className="text-[#3a3d38] w-6 h-6 rotate-[-45deg]" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 px-2">
                    <div className="flex justify-between items-baseline gap-4">
                      <h2 className="font-geist font-medium text-[20px] md:text-[24px] xl:text-[28px] text-[#3a3d38] leading-tight tracking-tight">
                        {product.title}
                      </h2>
                      <span className="font-geist font-medium text-[20px] md:text-[24px] text-[#3a3d38] opacity-60">
                        {product.price}
                      </span>
                    </div>
                    <p className="font-geist text-[16px] md:text-[18px] text-[#545454] leading-[1.6] max-w-lg mb-6 opacity-80">
                      {product.shortDescription}
                    </p>
                    <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
                      <span className="font-geist font-medium text-[13px] text-[#3a3d38] uppercase tracking-widest">Discover Formula</span>
                      <ArrowRight size={16} className="text-[#3a3d38] group-hover:translate-x-2 transition-transform duration-500" />
                    </div>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Product;

