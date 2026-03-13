import { Helmet } from "react-helmet-async";
import FadeInSection from "@/components/FadeInSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/data/service";

const Service = () => {
  return (
    <>
      <Helmet>
        <title>Our Services — Elexira™ Pharma</title>
        <meta name="description" content="Pharmaceutical services including manufacturing, research, clinical trials, and distribution." />
      </Helmet>

      <section className="bg-[#F8F5F0] pt-[60px] pb-[60px] overflow-hidden relative border-t border-[#E5E5E5]">
        <div className="section-container px-4 md:px-8 lg:px-[34px] max-w-[1500px] mx-auto">
          <FadeInSection>
            <div className="flex flex-col mb-[42px] lg:mb-[60px]">
              <span className="font-geist font-medium text-[14px] md:text-[16px] text-[#545454] tracking-[-0.32px] uppercase mb-6">Expertise Overview</span>
              <h1 className="font-geist font-medium text-[30px] md:text-[60px] lg:text-[70px] leading-[1.05] text-[#3a3d38] tracking-[-1.5px] md:tracking-[-2.56px] xl:tracking-[-3.6px] mb-8 max-w-4xl">
                Pharmaceutical excellence at every stage.
              </h1>
              <p className="font-geist text-[16px] md:text-[22px] leading-[1.5] text-[#545454] tracking-[-0.02em] max-w-2xl">
                From foundational R&D to global supply chain logistics, we provide integrated solutions that bridge the gap between innovation and impact.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 w-full">
            {services.map((service, i) => (
              <FadeInSection key={service.id} delay={i * 100}>
                <Link to={`/services/${service.slug}`} className="group block w-full">
                  <div className="relative w-full aspect-[4/5] bg-[#EBE5DC] overflow-hidden rounded-[8px] mb-8">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:blur-[4px]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                    <div className="absolute top-6 right-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10 bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
                      <ArrowRight className="text-white w-6 h-6 rotate-[-45deg]" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-geist font-medium text-[12px] text-[#828282] uppercase tracking-wider">0{i + 1}</span>
                      <div className="h-[1px] w-8 bg-[#DEDEDE]" />
                    </div>
                    <h2 className="font-geist font-medium text-[28px] md:text-[32px] text-[#3a3d38] leading-[1.1] tracking-[-0.03em] group-hover:text-[#545454] transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-[#545454] font-geist text-[16px] leading-[1.6] max-w-[90%] tracking-[-0.01em]">
                      {service.shortDescription}
                    </p>
                    <div className="pt-2">
                      <div className="group relative font-geist font-medium text-[#3a3d38] inline-flex items-center gap-2 text-[14px] w-fit">
                        Explore Details
                        <ArrowRight
                          size={16}
                          className="text-[#3a3d38] group-hover:-rotate-45 relative z-10 transition-all duration-300 ease-out"
                        />
                        <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#3a3d38] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                      </div>
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

export default Service;
