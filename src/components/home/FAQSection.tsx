import FadeInSection from "@/components/FadeInSection";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Will simplifying my routine really improve my skin?",
    a: "Yes. Research from leading dermatological institutes shows that formulations with fewer, more concentrated active ingredients consistently outperform complex alternatives. Our pharma collagen cream delivers 92.3% user-reported improvement in skin calmness within two weeks.",
  },
  {
    q: "How long until I see results?",
    a: "Most users notice visible improvements in skin texture and hydration within 14 days. Full results in barrier strength and collagen density are typically achieved within 28 days of consistent daily use.",
  },
  {
    q: "Is Elexira suitable for all skin types?",
    a: "Absolutely. Our pharma collagen formula is clinically tested across six different skin types. The minimal ingredient approach means less chance of irritation, making it suitable for sensitive, oily, dry, and combination skin.",
  },
  {
    q: "How does Elexira compare to my multi-step routine?",
    a: "In clinical studies, our five-ingredient formula outperformed multi-step routines with 10+ products in 83% of objective skin health measurements. Less ingredient competition means better absorption and efficacy.",
  },
  {
    q: "Is the refill system easy to use?",
    a: "Our sustainable refill system is designed for simplicity. Simply twist off the empty insert, click in the new refill, and you're ready. Each refill reduces packaging waste by 75%.",
  },
  {
    q: "Do you offer samples before committing?",
    a: "Yes, we offer a travel-size (20ml) version for those who want to experience our pharma collagen formula before committing to the full-size jar. It provides approximately two weeks of daily use.",
  },
];

const FAQSection = ({ showContactLink = true, isNested = false }: { showContactLink?: boolean; isNested?: boolean }) => {
  const [open, setOpen] = useState<number | null>(null);

  const content = (
    <div className={`grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-6 lg:gap-24 items-stretch ${isNested ? 'mb-32' : ''}`}>
      {/* Left */}
      <FadeInSection>
        <div className="lg:sticky lg:top-32">
          <h2 className="font-geist font-medium text-[2rem] md:text-[2.5rem] lg:text-[2.6rem] xl:text-[3.2rem] tracking-tight text-[#3a3d38] leading-tight mb-8">
            Frequently {" "} <br className="hidden md:block" />asked questions.
          </h2>
          {showContactLink && (
            <Link
              to="/support"
              className="group relative font-geist font-medium text-[#3a3d38] inline-flex items-center gap-2 text-[1.1rem] w-fit"
            >
              Contact Support
              <ArrowRight
                size={18}
                className="text-[#3a3d38] group-hover:-rotate-45 relative z-10 transition-all duration-300 ease-out"
              />
              <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#3a3d38] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </Link>
          )}
        </div>
      </FadeInSection>

      {/* Right - Accordion */}
      <FadeInSection delay={200}>
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#dedede] hover:border-[#3a3d38] transition-colors duration-300">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-[1.4rem] text-left group cursor-pointer"
              >
                <span className={`font-geist font-medium text-[1.15rem] pr-4 transition-colors duration-300 ${open === i ? 'text-[#858585]' : 'text-[#333333]'}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  strokeWidth={1.5}
                  className={`text-[#3a3d38] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex-shrink-0 ${open === i ? "rotate-180" : ""
                    }`}
                />
              </button>
              <div
                className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open === i ? "grid-rows-[1fr] pb-[1.4rem] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[#545454] font-geist font-medium text-[0.95rem] leading-[1.65] max-w-[95%]">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );

  if (isNested) return content;

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="section-container">
        {content}
      </div>
    </section>
  );
};

export default FAQSection;
