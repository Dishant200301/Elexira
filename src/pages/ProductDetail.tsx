import { Helmet } from "react-helmet-async";
import FadeInSection from "@/components/FadeInSection";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, Shield, Activity } from "lucide-react";
import { productDetails } from "@/content/data/productDetails";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productDetails.find(p => p.slug === slug) || productDetails[0];

  return (
    <>
      <Helmet>
        <title>{product.title} — Essentia™ Pharma</title>
        <meta name="description" content={product.detailedDescription.substring(0, 150)} />
      </Helmet>

      <article className="bg-[#F8F5F0] pt-[40px] pb-[60px] min-h-screen relative border-t border-[#E5E5E5] overflow-hidden">
        <div className="section-container px-4 md:px-8 lg:px-[34px] max-w-[1500px] mx-auto">
          {/* Header */}
          <FadeInSection>
            <div className="mb-12 md:mb-[60px] max-w-5xl">
              <Link to="/product" className="inline-flex items-center gap-2 font-geist font-medium text-[#545454] hover:text-[#3a3d38] transition-colors mb-10 group">
                <ArrowRight size={18} className="rotate-180 transition-transform group-hover:-translate-x-1" />
                <span className="text-[14px] md:text-[16px] tracking-[-0.32px]">Back to Collection</span>
              </Link>
              <h1 className="font-geist font-medium text-[30px] md:text-[60px] lg:text-[70px] leading-[1] text-[#3a3d38] tracking-[-1.5px] md:tracking-[-2.56px] xl:tracking-[-3.6px] mb-8">
                {product.title}
              </h1>
              <span className="inline-block px-4 py-2 rounded-[6px] bg-[#D4DCCF] text-[#3a3d38] font-geist font-medium text-[12px] md:text-[14px] uppercase tracking-wider">
                {product.category}
              </span>
            </div>
          </FadeInSection>

          {/* Large Hero Image */}
          <FadeInSection delay={100}>
            <div className="w-full aspect-[4/3] md:aspect-[21/9] bg-[#EBE5DC] rounded-[8px] overflow-hidden mb-[30px] md:mb-[60px] border border-[#E5E5E5]/50 shadow-sm">
              <img
                src={product.bannerImage}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              />
            </div>
          </FadeInSection>

          {/* Details Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 mb-[40px] md:mb-[60px]">
            <div className="lg:col-span-7">
              <FadeInSection>
                <div className="text-[18px] min-[400px]:text-[20px] md:text-[28px] leading-[1.5] md:leading-[1.4] text-[#545454] font-geist tracking-[-0.01em] md:tracking-[-0.02em] whitespace-pre-wrap mb-[30px] md:mb-[60px]">
                  {product.detailedDescription}
                </div>
              </FadeInSection>

              <FadeInSection>
                <div className="border-t border-[#E5E5E5] pt-8 md:pt-16">
                  <h2 className="font-geist font-medium text-[32px] md:text-[50px] leading-[1.1] text-[#3a3d38] tracking-[-1.5px] md:tracking-[-2.56px] mb-8 md:mb-12">
                    Active composition.
                  </h2>
                  <ul className="flex flex-col gap-6 md:gap-8">
                    {product.ingredients.map((ing, i) => (
                      <li key={i} className="flex gap-6 items-start group">
                        <div className="font-geist font-medium text-[20px] md:text-[24px] text-[#3a3d38] mt-[2px] min-w-[60px] transition-colors group-hover:text-[#3a3d38]">
                          {ing.percentage}
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="font-geist font-medium text-[18px] md:text-[24px] text-[#3a3d38] leading-[1.4] tracking-[-0.01em] md:tracking-[-0.02em]">
                            {ing.name}
                          </span>
                          <span className="font-geist text-[14px] md:text-[16px] text-[#545454] leading-[1.5] max-w-lg opacity-80">
                            {ing.description}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
              <FadeInSection delay={150}>
                <div className="relative group">
                  {/* Subtle Background Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#D4DCCF] to-[#EBE5DC] rounded-[16px] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000" />
                  
                  <div className="relative bg-white p-8 md:p-10 rounded-[12px] border border-[#E5E5E5] space-y-10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.06)] overflow-hidden">
                    {/* Header: Label & Status */}
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <span className="font-geist font-medium text-[11px] text-[#828282] uppercase tracking-[0.25em] block mb-2">Protocol Investment</span>
                        <div className="flex items-baseline gap-2">
                          <span className="font-geist font-medium text-[40px] md:text-[52px] text-[#3a3d38] leading-none">{product.price}</span>
                          <span className="text-[14px] text-[#828282] uppercase tracking-wider font-semibold">USD</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-[#F8F5F0] px-3.5 py-1.5 rounded-full border border-[#E5E5E5]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3a3d38] animate-pulse" />
                        <span className="text-[10px] font-geist font-bold text-[#3a3d38] uppercase tracking-[0.15em]">Allocated</span>
                      </div>
                    </div>

                    {/* USP Grid: Refined Icons */}
                    <div className="grid grid-cols-2 gap-4 py-8 border-y border-[#F3F3F3]">
                       <div className="flex items-center gap-3.5">
                          <div className="w-9 h-9 rounded-full bg-[#F8F5F0] flex items-center justify-center shrink-0 border border-[#E5E5E5]/50">
                            <Shield size={16} className="text-[#3a3d38]" strokeWidth={1.5} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[12px] font-bold text-[#3a3d38] uppercase tracking-tight">Certified</span>
                            <span className="text-[10px] text-[#828282] uppercase tracking-wider">Clinical Lab</span>
                          </div>
                       </div>
                       <div className="flex items-center gap-3.5">
                          <div className="w-9 h-9 rounded-full bg-[#F8F5F0] flex items-center justify-center shrink-0 border border-[#E5E5E5]/50">
                            <Activity size={16} className="text-[#3a3d38]" strokeWidth={1.5} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[12px] font-bold text-[#3a3d38] uppercase tracking-tight">Active</span>
                            <span className="text-[10px] text-[#828282] uppercase tracking-wider">Bio-Formula</span>
                          </div>
                       </div>
                    </div>

                    {/* Action Area */}
                    <div className="space-y-5">
                      <button className="w-full group/btn relative h-[68px] bg-[#3a3d38] text-white rounded-[8px] font-geist font-medium text-[15px] uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#3a3d38]/20 hover:-translate-y-1 active:translate-y-0">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          Inquire Now <ArrowRight size={18} className="translate-x-0 group-hover/btn:translate-x-1.5 transition-transform duration-500 ease-out" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              {product.images.slice(0, 1).map((img, i) => (
                <FadeInSection key={i} delay={200}>
                  <div className="w-full aspect-[4/3] lg:aspect-[4/3] bg-[#EBE5DC] rounded-[8px] overflow-hidden border border-[#E5E5E5]/50 shadow-sm">
                    <img
                      src={img}
                      alt={`Detail ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>

          {/* Workflow Section -> Protocols */}
          <div className="border-t border-[#E5E5E5] pt-[40px] md:pt-[60px] pb-[40px]">
            <FadeInSection>
              <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 md:mb-[60px] gap-6">
                <h2 className="font-geist font-medium text-[28px] md:text-[60px] xl:text-[80px] leading-[1.1] text-[#3a3d38] tracking-[-1.5px] md:tracking-[-2.56px]">
                  Application protocol.
                </h2>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {product.usage.map((step, i) => (
                <FadeInSection key={i} delay={i * 100}>
                  <div className="bg-white p-6 min-[400px]:p-8 md:p-12 rounded-[8px] h-full border border-[#E5E5E5] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 group">
                    <span className="font-geist font-medium text-[20px] md:text-[32px] text-[#D4DCCF] mb-6 md:mb-10 block transition-colors duration-300 group-hover:text-[#3a3d38]">
                      0{i + 1}
                    </span>
                    <p className="font-geist text-[16px] md:text-[22px] text-[#3a3d38] leading-[1.5] tracking-[-0.01em] md:tracking-[-0.02em]">
                      {step}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>

          {/* Contact CTA block */}
          <div className="mt-[20px] md:mt-[60px]">
            <FadeInSection>
              <div className="bg-[#D4DCCF] rounded-[8px] py-[80px] px-6 md:py-[120px] md:px-[60px] flex flex-col items-center justify-center text-center overflow-hidden relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/30 blur-[100px] pointer-events-none" />

                <h2 className="font-geist font-medium text-[28px] min-[400px]:text-[32px] md:text-[50px] lg:text-[62px] leading-[1.2] md:leading-[1.1] text-[#3a3d38] tracking-[-1px] md:tracking-[-2.56px] mb-8 max-w-3xl relative z-10 px-4">
                   Experience pharmaceutical excellence at home.
                </h2>
                <Link to="/support" className="inline-flex items-center justify-center w-full md:w-auto px-10 md:px-14 h-[60px] md:h-[72px] rounded-[8px] bg-[#3a3d38] hover:bg-[#2a2c28] transition-colors relative z-10 group mt-4">
                  <span className="font-geist font-medium text-[16px] md:text-[20px] text-white tracking-[-0.32px] group-hover:scale-[1.02] transition-transform">
                    Shop Collection →
                  </span>
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProductDetail;
