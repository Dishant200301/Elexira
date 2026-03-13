import FadeInSection from "@/components/FadeInSection";
const ingredientsFlatlay = "/assets/home/ingredients-flatlay.jpg";
import { Beaker, Shield, Award } from "lucide-react";

const ingredients = [
  { name: "Ceramide NP", label: "Ingredient 01" },
  { name: "Peptides", label: "Ingredient 02" },
  { name: "Niacinamide", label: "Ingredient 03" },
  { name: "Squalane", label: "Ingredient 04" },
  { name: "Glycerin", label: "Ingredient 05" },
];

const features = [
  {
    icon: Beaker,
    title: "5 Ingredients or Fewer",
    num: "01",
    desc: "Only what works, nothing that doesn't. Maximum results from minimalist formulations that let your skin breathe.",
  },
  {
    icon: Shield,
    title: "Clinically Tested",
    num: "02",
    desc: "Real results, not empty promises. 83% improvement in just 28 days in independent clinical testing.",
  },
  {
    icon: Award,
    title: "Dermatologist Approved",
    num: "03",
    desc: "Created with top skin experts who believe in doing more with less. Safe for even the most sensitive skin.",
  },
];

const IngredientsSection = () => {
  return (
    <section className="bg-[#F8F5F0] py-8 md:py-12 lg:py-16 xl:py-[120px] overflow-hidden">
      <div className="section-container max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-[32px]">
        {/* Heading & Description Row */}
        <div className="flex flex-col mb-8 sm:mb-16 md:mb-12 lg:mb-16">
          <FadeInSection>
            <div className="max-w-[800px]">
              <h2 className="font-geist font-medium text-[32px] sm:text-[36px] md:text-[54px] lg:text-[64px] leading-[1.15] md:leading-[1.1] tracking-[-0.03em] sm:tracking-[-0.04em] xl:tracking-[-2.56px] text-[#3A3D38] mb-6 sm:mb-8 md:mb-12">
                Simple ingredients,<br />
                <span className="font-semibold">powerful results.</span>
              </h2>
              <p className="font-geist font-medium text-[15px] sm:text-[16px] md:text-[18px] leading-[1.5] md:leading-[25px] tracking-[-0.01em] sm:tracking-[-0.02em] md:tracking-[-0.54px] text-[#545454] max-w-[712px]">
                Each ingredient in Elexira was chosen for one reason: it works. No trendy botanicals that sound nice but do nothing. No irritating fragrances. Just five powerful ingredients working together to transform your skin.
              </p>
            </div>
          </FadeInSection>
        </div>

        {/* Specs / Ingredients Main Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-12 xl:gap-[70px] mb-12 md:mb-16 lg:mb-16">
          <FadeInSection className="w-full">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/2] lg:aspect-[3/4] rounded-[8px] overflow-hidden">
              <img
                src={ingredientsFlatlay}
                alt="Pharma collagen skincare ingredients"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </FadeInSection>

          <FadeInSection delay={200} className="w-full">
            <div className="flex flex-col">
              <div className="mb-10">
                <span className="inline-block bg-[#D4DCCF] text-[#3A3D38] px-4 py-1.5 rounded-[8px] font-geist font-medium text-[12px] leading-tight tracking-[-0.24px]">
                  Active Ingredients
                </span>
              </div>
              <div className="flex flex-col">
                {ingredients.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-4 sm:py-5 lg:py-6 border-t border-[#DEDEDE]"
                  >
                    <span className="font-geist font-medium text-[#333333] text-[16px] sm:text-[18px] leading-[25px] tracking-[-0.54px]">
                      {item.name}
                    </span>
                    <span className="font-geist font-medium text-[#828282] text-[16px] sm:text-[18px] leading-[25px] tracking-[-0.54px]">
                      {item.label}
                    </span>
                  </div>
                ))}
                <div className="border-t border-[#DEDEDE]" />
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Features Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-x-10 lg:gap-x-16 xl:gap-x-24">
          {features.map((feat, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="flex flex-col">
                <feat.icon className="text-[#333333] mb-8" size={24} strokeWidth={1.5} />
                <div className="flex items-center justify-between mb-3 pb-3 md:mb-4 md:pb-4 border-b border-[#DEDEDE]">
                  <h3 className="font-geist font-medium text-[#333333] text-[18px] leading-[25px] tracking-[-0.54px]">
                    {feat.title}
                  </h3>
                  <span className="font-geist font-medium text-[#333333] text-[18px] leading-[25px] tracking-[-0.54px]">
                    {feat.num}
                  </span>
                </div>
                <p className="font-geist font-medium text-[#545454] text-[14px] leading-[21px] tracking-[-0.42px]">
                  {feat.desc}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
