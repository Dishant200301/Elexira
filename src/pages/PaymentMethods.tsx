import { Helmet } from "react-helmet-async";
import FadeInSection from "@/components/FadeInSection";
import { paymentData } from "@/data/payment";

const PaymentMethods = () => {
  return (
    <>
      <Helmet>
        <title>{paymentData.pageTitle}</title>
        <meta name="description" content={paymentData.pageDescription} />
      </Helmet>

      <section className="bg-[#F8F5F0] pt-8 pb-32 md:pt-10 md:pb-40 w-full min-h-screen">
        <div className="section-container">
          {/* Main Huge Heading */}
          <FadeInSection>
            <h1 className="font-geist font-medium text-[2rem] md:text-[4rem] lg:text-[5rem] leading-[1] tracking-[-0.03em] text-[#3a3d38] mb-10 md:mb-12">
              {paymentData.title}
            </h1>
          </FadeInSection>

          <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-32 w-full">
            {/* Left Column - Non Sticky */}
            <div className="md:w-[25%] lg:w-[20%] flex-shrink-0">
              <FadeInSection delay={100}>
                <div className="flex flex-col gap-1">
                  <p className="font-geist text-[0.65rem] md:text-[0.7rem] text-[#3a3d38]/50 tracking-wider font-medium">
                    Last Updated
                  </p>
                  <p className="font-geist text-[0.8rem] md:text-[0.85rem] text-[#3a3d38] font-medium">
                    {paymentData.lastUpdated}
                  </p>
                </div>
              </FadeInSection>
            </div>

            {/* Right Column Content */}
            <div className="md:w-[75%] lg:w-[60%] max-w-[800px]">
              <FadeInSection delay={200}>
                {paymentData.sections.map((section, idx) => (
                  <div key={idx} className={idx < paymentData.sections.length - 1 ? "mb-16 md:mb-20" : ""}>
                    <h2 className={`font-geist font-medium tracking-tight text-[#3a3d38] ${idx === 0 ? "text-[2rem] md:text-[2.5rem] lg:text-[2.8rem] leading-[1.1] mb-10 tracking-[-0.02em]" : "text-[1.4rem] md:text-[1.75rem] leading-[1.2] mb-5"}`}>
                      {section.title}
                    </h2>

                    {section.type === "nested" && section.subsections && (
                      <div className="space-y-10">
                        {section.subsections.map((sub, sIdx) => (
                          <div key={sIdx}>
                            <h3 className="font-geist text-[1.1rem] md:text-[1.2rem] text-[#3a3d38] mb-4 font-medium">
                              {sub.title}
                            </h3>
                            <ul className="list-disc pl-5 space-y-1.5 text-[0.95rem] md:text-[1rem] text-[#3a3d38]/90 font-geist leading-relaxed marker:text-[#3a3d38]/50">
                              {sub.items?.map((item, iIdx) => (
                                <li key={iIdx} className="pl-2">{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.type === "paragraphs" && section.content && (
                      <div className="space-y-4">
                        {section.content.map((p, pIdx) => (
                          <p key={pIdx} className="text-[0.95rem] md:text-[1rem] text-[#3a3d38]/90 font-geist leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>
                    )}

                    {section.type === "list" && section.items && (
                      <ul className="list-disc pl-5 space-y-1.5 text-[0.95rem] md:text-[1rem] text-[#3a3d38]/90 font-geist leading-relaxed marker:text-[#3a3d38]/50">
                        {section.items.map((item, iIdx) => (
                          <li key={iIdx} className="pl-2">{item}</li>
                        ))}
                      </ul>
                    )}

                    {section.type === "text-list" && section.content && section.items && (
                      <>
                        <div className="space-y-4 mb-5">
                          {section.content.map((p, pIdx) => (
                            <p key={pIdx} className="text-[0.95rem] md:text-[1rem] text-[#3a3d38]/90 font-geist leading-relaxed">
                              {p}
                            </p>
                          ))}
                        </div>
                        <ul className="list-disc pl-5 space-y-1.5 text-[0.95rem] md:text-[1rem] text-[#3a3d38]/90 font-geist leading-relaxed marker:text-[#3a3d38]/50">
                          {section.items.map((item, iIdx) => (
                            <li key={iIdx} className="pl-2">{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                ))}
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentMethods;
