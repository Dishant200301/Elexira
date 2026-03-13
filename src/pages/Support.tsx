import { Helmet } from "react-helmet-async";
import FadeInSection from "@/components/FadeInSection";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const shippingFAQs = [
  { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days within the US. International shipping takes 7-14 business days depending on location." },
  { q: "Do you ship internationally?", a: "Yes! We ship to most countries worldwide. International shipping costs and delivery times vary by location. Exact shipping costs will be calculated at checkout." },
  { q: "Is shipping free?", a: "We offer free standard shipping on all US orders over $75. International orders and US orders under $75 incur a shipping fee calculated at checkout based on weight and destination." },
  { q: "Can I track my order?", a: "Absolutely. You'll receive a tracking number via email once your order ships. You can track your pharma collagen cream delivery in real-time." },
  { q: "Do you offer expedited shipping?", a: "Yes, we offer express (1-2 business days) and overnight shipping options at checkout for an additional fee." },
];

const returnsFAQs = [
  { q: "What is your return policy?", a: "We accept returns of unopened products within 30 days of purchase for a full refund. Opened products can be returned within 14 days if you're unsatisfied." },
  { q: "How do I initiate a return?", a: "Contact our support team at support@essentia.com with your order number and reason for return. We'll provide a prepaid return label." },
  { q: "Are return shipping costs covered?", a: "Yes, we cover return shipping costs for US customers. For international returns, shipping costs are the responsibility of the customer." },
  { q: "How long do refunds take to process?", a: "Refunds are processed within 5-7 business days after we receive your return. The credit will appear on your original payment method." },
  { q: "Can I exchange my product instead of returning it?", a: "Yes, we offer exchanges for different sizes (Standard 50ml or Travel 20ml). Contact support to arrange an exchange." },
  { q: "What condition should returns be in?", a: "Products should be in their original packaging. Unopened products qualify for full refund. Opened products qualify for store credit." },
];

const FAQAccordion = ({ items }: { items: { q: string; a: string }[] }) => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div key={i} className="border-b border-[#dedede] hover:border-[#333333] transition-colors duration-300">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-[1.4rem] text-left group cursor-pointer"
          >
            <span className={`font-geist font-medium text-[1.15rem] pr-4 transition-colors duration-300 ${open === i ? 'text-[#858585]' : 'text-[#333333]'}`}>
              {item.q}
            </span>
            <ChevronDown
              size={18}
              strokeWidth={1.5}
              className={`text-[#3a3d38] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex-shrink-0 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open === i ? "grid-rows-[1fr] pb-[1.4rem] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="overflow-hidden">
              <p className="text-[#545454] font-geist font-medium text-[0.95rem] leading-[1.65] max-w-[95%]">
                {item.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Support = () => {
  return (
    <>
      <Helmet>
        <title>Support — Elexira™ Pharma Collagen</title>
        <meta name="description" content="Get support for your Elexira pharma collagen products. Contact us, shipping info, returns, and FAQs." />
      </Helmet>

      <section className="bg-background pt-12 pb-24 md:pt-12 md:pb-32">
        <div className="section-container">
          {/* Contact Form + Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-2 xl:gap-12 mb-32">
            <FadeInSection>
              <div className="flex flex-col">
                <h1 className="font-geist font-medium text-[2.5rem] md:text-[3.5rem] lg:text-[5.5rem] leading-[1.1] lg:leading-none tracking-tight text-[#3a3d38] mb-8 lg:mb-12">
                  Support
                </h1>

                <p className="text-[#3a3d38] font-geist text-[1.1rem] md:text-[20px] md:leading-[1.4] lg:text-[1.4rem] leading-[1.4] lg:leading-[1.3] mb-12 lg:mb-16 max-w-[100%] lg:max-w-[90%]">
                  Do you have any questions about our products? You can send us an email or fill in the following form.
                </p>

                <div className="flex flex-col gap-10">
                  <div>
                    <p className="font-geist text-[1.25rem] font-medium text-[#3a3d38] mb-2">Head office</p>
                    <p className="text-[#3a3d38] font-geist text-[0.95rem]">150 Mercer Street New York, NY 10012</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-geist text-[1.25rem] font-medium text-[#3a3d38] mb-2">Email</p>
                      <a href="mailto:support@elexiraglow.com" className="text-[#3a3d38] font-geist text-[0.95rem] underline underline-offset-[3px] decoration-1 decoration-[#3a3d38]/40 hover:decoration-[#3a3d38] transition-colors">support@elexiraglow.com</a>
                    </div>
                    <div>
                      <p className="font-geist text-[1.25rem] font-medium text-[#3a3d38] mb-2">Phone</p>
                      <a href="tel:+15551234567" className="text-[#3a3d38] font-geist text-[0.95rem] underline underline-offset-[3px] decoration-1 decoration-[#3a3d38]/40 hover:decoration-[#3a3d38] transition-colors">(555) 123-4567</a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <form className="flex flex-col gap-8 lg:mt-[8rem]" onSubmit={(e) => e.preventDefault()}>
                <input type="text" required placeholder="Subject*" className="w-full bg-transparent border-b border-[#cdcdcd] pb-3 text-[0.95rem] font-geist text-[#3a3d38] placeholder:text-[#545454]/80 outline-none focus:border-[#3a3d38] transition-colors rounded-none" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-8">
                  <input type="text" required placeholder="First Name*" className="w-full bg-transparent border-b border-[#cdcdcd] pb-3 text-[0.95rem] font-geist text-[#3a3d38] placeholder:text-[#545454]/80 outline-none focus:border-[#3a3d38] transition-colors rounded-none" />
                  <input type="text" required placeholder="Last Name*" className="w-full bg-transparent border-b border-[#cdcdcd] pb-3 text-[0.95rem] font-geist text-[#3a3d38] placeholder:text-[#545454]/80 outline-none focus:border-[#3a3d38] transition-colors rounded-none" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-8">
                  <input type="email" required placeholder="Email*" className="w-full bg-transparent border-b border-[#cdcdcd] pb-3 text-[0.95rem] font-geist text-[#3a3d38] placeholder:text-[#545454]/80 outline-none focus:border-[#3a3d38] transition-colors rounded-none" />
                  <input type="text" placeholder="Order Number" className="w-full bg-transparent border-b border-[#cdcdcd] pb-3 text-[0.95rem] font-geist text-[#3a3d38] placeholder:text-[#545454]/80 outline-none focus:border-[#3a3d38] transition-colors rounded-none" />
                </div>

                <div className="relative mt-2">
                  <textarea required placeholder="Your Message*" rows={3} className="w-full bg-transparent border-b border-[#cdcdcd] pb-[3.5rem] text-[0.95rem] font-geist text-[#3a3d38] placeholder:text-[#545454]/80 outline-none focus:border-[#3a3d38] transition-colors resize-y min-h-[50px] rounded-none" />
                  <button type="submit" className="group absolute right-0 bottom-4 w-[34px] h-[34px] bg-[#E1E5D7] rounded-[8px] flex items-center justify-center shrink-0 overflow-hidden cursor-pointer border-none">
                    <div className="absolute inset-0 bg-[#3a3d38] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>
                    <ArrowRight size={18} className="text-[#3a3d38] group-hover:text-white group-hover:-rotate-45 relative z-10 transition-all duration-300 ease-out" />
                  </button>
                </div>

                <p className="text-[0.8rem] font-medium text-[#3a3d38] font-geist mt-1">
                  *We aim to respond to inquiries within 24 hours.
                </p>
              </form>
            </FadeInSection>
          </div>

          {/* Shipping FAQ */}
          <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-6 lg:gap-24 mb-32 items-stretch">
            <div className="relative">
              <div className="lg:sticky lg:top-32">
                <FadeInSection>
                  <h2 className="font-geist font-medium text-[2rem] md:text-[2.5rem] lg:text-[2.5rem]  xl:text-[3.2rem] tracking-tight text-[#3a3d38]">Shipping & delivery</h2>
                </FadeInSection>
              </div>
            </div>
            <div>
              <FadeInSection delay={100}>
                <FAQAccordion items={shippingFAQs} />
              </FadeInSection>
            </div>
          </div>

          {/* Returns FAQ */}
          <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-6 lg:gap-24 mb-32 items-stretch">
            <div className="relative">
              <div className="lg:sticky lg:top-32">
                <FadeInSection>
                  <h2 className="font-geist font-medium text-[2rem] md:text-[2.5rem] lg:text-[2.6rem]  xl:text-[3.2rem] tracking-tight text-[#3a3d38]">Returns & refunds</h2>
                </FadeInSection>
              </div>
            </div>
            <div>
              <FadeInSection delay={100}>
                <FAQAccordion items={returnsFAQs} />
              </FadeInSection>
            </div>
          </div>

          {/* Payment & Legal */}
          <FadeInSection>
            <h2 className="font-geist font-medium text-[2.5rem] md:text-[3.2rem] tracking-tight text-[#3a3d38] text-center mb-10 md:mb-14">Payment & legal</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 xl:gap-4 xl:px-16">
            {[
              { title: "Payment Methods", link: "/payment-methods" },
              { title: "Terms & Conditions", link: "/terms" },
              { title: "Privacy Policy", link: "/privacy" },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <a href={item.link} className="flex flex-col justify-between h-[160px] md:h-[200px] bg-white rounded-[12px] p-6 lg:p-8 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#d4dccf] group shadow-sm border border-transparent hover:border-transparent">
                  <div className="w-fit">
                    <ArrowRight size={20} strokeWidth={1.5} className="text-[#3a3d38] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-45" />
                  </div>
                  <span className="font-geist font-medium text-[#3a3d38] text-[24px] md:text-[24px] lg:text-[24px] leading-[31px]">{item.title}</span>
                </a>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;
