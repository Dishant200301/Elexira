import { Helmet } from "react-helmet-async";
import FadeInSection from "@/components/FadeInSection";
import { termsData } from "@/data/terms";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>{termsData.pageTitle}</title>
        <meta name="description" content={termsData.pageDescription} />
      </Helmet>

      <section className="bg-[#F8F5F0] pt-8 pb-32 md:pt-10 md:pb-40 w-full min-h-screen">
        <div className="section-container">
          {/* Main Huge Heading */}
          <FadeInSection>
            <h1 className="font-geist font-medium text-[2rem] md:text-[4rem] lg:text-[5rem] leading-[1] tracking-[-0.03em] text-[#3a3d38] mb-10 md:mb-12">
              {termsData.title}
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
                    {termsData.lastUpdated}
                  </p>
                </div>
              </FadeInSection>
            </div>

            {/* Right Column Content */}
            <div className="md:w-[75%] lg:w-[60%] max-w-[800px]">
              <FadeInSection delay={200}>
                <div className="space-y-12 md:space-y-16">
                  {termsData.sections.map((section, idx) => (
                    <div key={idx}>
                      <h2 className="font-geist font-medium text-[1.4rem] md:text-[1.75rem] leading-[1.2] tracking-tight text-[#3a3d38] mb-5">
                        {section.title}
                      </h2>

                      {!section.isContact && (
                        <div className="space-y-4">
                          {section.content?.map((p, pIdx) => (
                            <p key={pIdx} className={`text-[0.95rem] md:text-[1rem] text-[#3a3d38]/90 font-geist leading-relaxed ${section.isUppercase ? 'uppercase' : ''}`}>
                              {p}
                            </p>
                          ))}
                        </div>
                      )}

                      {section.isContact && (
                        <>
                          <div className="space-y-4 mb-4">
                            {section.content?.map((p, pIdx) => (
                              <p key={pIdx} className="text-[0.95rem] md:text-[1rem] text-[#3a3d38]/90 font-geist leading-relaxed">
                                {p}
                              </p>
                            ))}
                          </div>

                          <div className="text-[0.95rem] md:text-[1rem] text-[#3a3d38]/90 font-geist leading-relaxed mb-8">
                            {section.contactDetails?.map((detail, dIdx) => (
                              <p key={dIdx}>{detail}</p>
                            ))}
                            <p className="underline underline-offset-4 decoration-[#3a3d38]/30">{section.contactEmail}</p>
                            <p>{section.contactPhone}</p>
                          </div>

                          <p className="text-[0.95rem] md:text-[1rem] text-[#3a3d38]/90 font-geist leading-relaxed">
                            {section.footerNote}
                          </p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
