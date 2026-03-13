import { Helmet } from "react-helmet-async";
import FadeInSection from "@/components/FadeInSection";
import { useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { serviceDetails } from "@/content/data/serviceDetails";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceDetails.find(s => s.slug === slug) || serviceDetails[0];

  return (
    <>
      <Helmet>
        <title>{service.title} — Elexira™ Pharma</title>
        <meta name="description" content={service.detailedDescription.substring(0, 150)} />
      </Helmet>

      <article className="bg-[#F8F5F0] pt-[40px] pb-[60px] min-h-screen relative border-t border-[#E5E5E5] overflow-hidden">
        <div className="section-container px-4 md:px-8 lg:px-[44px] max-w-[1600px] mx-auto">
          {/* Header */}
          <FadeInSection>
            <div className="mb-12 md:mb-[60px] max-w-5xl">
              <Link to="/services" className="inline-flex items-center gap-2 font-geist font-medium text-[#545454] hover:text-[#3a3d38] transition-colors mb-10 group">
                <ArrowRight size={18} className="rotate-180 transition-transform group-hover:-translate-x-1" />
                <span className="text-[14px] md:text-[16px] tracking-[-0.32px]">Back to Services</span>
              </Link>
              <h1 className="font-geist font-medium text-[30px] md:text-[60px] lg:text-[70px] leading-[1] text-[#3a3d38] tracking-[-1.5px] md:tracking-[-2.56px] xl:tracking-[-3.6px] mb-8">
                {service.title}
              </h1>
              <span className="inline-block px-4 py-2 rounded-[6px] bg-[#D4DCCF] text-[#3a3d38] font-geist font-medium text-[12px] md:text-[14px] uppercase tracking-wider">
                Pharmaceutical Operations
              </span>
            </div>
          </FadeInSection>

          {/* Large Hero Image */}
          <FadeInSection delay={100}>
            <div className="w-full aspect-[4/3] md:aspect-[21/9] bg-[#EBE5DC] rounded-[8px] overflow-hidden mb-[30px] md:mb-[60px] border border-[#E5E5E5]/50 shadow-sm">
              <img
                src={service.bannerImage}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              />
            </div>
          </FadeInSection>

          {/* Details Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 mb-[40px] md:mb-[60px]">
            <div className="lg:col-span-7">
              <FadeInSection>
                <div className="text-[18px] min-[400px]:text-[20px] md:text-[28px] leading-[1.5] md:leading-[1.4] text-[#545454] font-geist tracking-[-0.01em] md:tracking-[-0.02em] whitespace-pre-wrap mb-[30px] md:mb-[60px]">
                  {service.detailedDescription}
                </div>
              </FadeInSection>

              <FadeInSection>
                <div className="border-t border-[#E5E5E5] pt-8 md:pt-16">
                  <h2 className="font-geist font-medium text-[32px] md:text-[50px] leading-[1.1] text-[#3a3d38] tracking-[-1.5px] md:tracking-[-2.56px] mb-8 md:mb-12">
                    Core benefits.
                  </h2>
                  <ul className="flex flex-col gap-6 md:gap-8">
                    {service.keyBenefits.map((benefit, i) => (
                      <li key={i} className="flex gap-6 items-start group">
                        <div className="w-[10px] h-[10px] rounded-full bg-[#D4DCCF] mt-[12px] shrink-0 transition-transform duration-300 group-hover:scale-150" />
                        <span className="font-geist text-[18px] md:text-[24px] text-[#3a3d38] leading-[1.5] md:leading-[1.4] tracking-[-0.01em] md:tracking-[-0.02em]">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
              {service.images.slice(0, 1).map((img, i) => (
                <FadeInSection key={i} delay={i * 100}>
                  <div className="w-full aspect-[4/3] lg:aspect-[4/5] bg-[#EBE5DC] rounded-[8px] overflow-hidden border border-[#E5E5E5]/50">
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

          {/* Workflow Section */}
          <div className="border-t border-[#E5E5E5] pt-[40px] md:pt-[60px] pb-[40px]">
            <FadeInSection>
              <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 md:mb-[60px] gap-6">
                <h2 className="font-geist font-medium text-[36px] md:text-[60px] xl:text-[80px] leading-[1.1] text-[#3a3d38] tracking-[-1.5px] md:tracking-[-2.56px]">
                  Our methodology.
                </h2>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
              {service.workflow.map((step, i) => (
                <FadeInSection key={i} delay={i * 100}>
                  <div className="bg-white p-6 min-[400px]:p-8 md:p-12 rounded-[8px] h-full border border-[#E5E5E5] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 group">
                    <span className="font-geist font-medium text-[20px] md:text-[32px] text-[#D4DCCF] mb-6 md:mb-10 block transition-colors duration-300 group-hover:text-[#3a3d38]">
                      0{step.step}
                    </span>
                    <h3 className="font-geist font-medium text-[22px] md:text-[32px] text-[#3a3d38] leading-[1.1] tracking-[-0.8px] md:tracking-[-1.5px] mb-4">
                      {step.title}
                    </h3>
                    <p className="font-geist text-[15px] md:text-[18px] text-[#545454] leading-[1.6] md:leading-[1.5] tracking-[-0.01em] md:tracking-[-0.02em]">
                      {step.description}
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
                {/* Decorative glowing element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/30 blur-[100px] pointer-events-none" />

                <h2 className="font-geist font-medium text-[28px] min-[400px]:text-[32px] md:text-[50px] lg:text-[62px] leading-[1.2] md:leading-[1.1] text-[#3a3d38] tracking-[-1px] md:tracking-[-2.56px] mb-8 max-w-3xl relative z-10 px-4">
                  Ready to elevate your standards?
                </h2>
                <Link to="/support" className="inline-flex items-center justify-center w-full md:w-auto px-10 md:px-14 h-[60px] md:h-[72px] rounded-[8px] bg-[#3a3d38] hover:bg-[#2a2c28] transition-colors relative z-10 group mt-4">
                  <span className="font-geist font-medium text-[16px] md:text-[20px] text-white tracking-[-0.32px] group-hover:scale-[1.02] transition-transform">
                    Partner with us →
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

export default ServiceDetail;
