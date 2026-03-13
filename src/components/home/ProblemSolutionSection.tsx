import FadeInSection from "@/components/FadeInSection";
import { motion } from "framer-motion";

const ProblemSolutionSection = () => {
  return (
    <section className="bg-[#F8F5F0] py-8 md:py-12 lg:py-16 xl:py-[0px] overflow-hidden">
      <div className="section-container max-w-[1500px] mx-auto px-5 md:px-8 lg:px-[36px] xl:pr-[130px] xl:pl-[30px]">
        {/* Problem Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-10 mb-16 md:mb-20 lg:mb-[90px]">
          <FadeInSection className="w-full lg:w-[550px]">
            <div className="flex flex-col">
              <h2 className="font-geist font-medium text-[28px] md:text-[42px] lg:text-[40px] xl:text-[48px] leading-[1.2] md:leading-[1.1] xl:leading-[58px] tracking-[-0.04em] xl:tracking-[-1.92px] text-[#3A3D38] mb-5 md:mb-8 lg:mb-[40px]">
                Most skincare is<br className="hidden md:block" /> doing too much.
              </h2>
              <p className="font-geist font-medium text-[15px] md:text-[16px] xl:text-[18px] leading-[1.5] md:leading-[1.4] xl:leading-[25px] tracking-[-0.02em] xl:tracking-[-0.54px] text-[#545454] max-w-[479px]">
                Ever notice how your skin gets worse the more products you try? There's a reason. Most brands pile on ingredients, hoping a few might work. Your poor skin is overwhelmed, irritated, and nowhere near its natural best.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={200} className="w-full lg:w-[640px]">
            <div className="relative w-full xl:w-[740px] aspect-[4/3] lg:aspect-auto lg:h-[600px] lg:ml-auto rounded-[8px] overflow-hidden">
              <img
                src="/assets/home/problem_solution/problem-1.png"
                alt="Skin irritation from complex routines"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeInSection>
        </div>

        {/* Solution Row */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-10 xl:gap-64">
          <FadeInSection className="w-full lg:w-[640px]">
            <div className="relative w-full xl:w-[740px] aspect-[4/3] lg:aspect-auto lg:h-[600px] lg:mr-auto rounded-[8px] overflow-hidden">
              <img
                src="/assets/home/problem_solution/problem-2.png"
                alt="Healthy glowing skin with pharma collagen"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeInSection>
          <FadeInSection delay={200} className="w-full lg:w-[640px]">
            <div className="flex flex-col">
              <h2 className="font-geist font-medium text-[28px] md:text-[42px] lg:text-[40px] xl:text-[48px] leading-[1.2] md:leading-[1.1] xl:leading-[58px] tracking-[-0.04em] xl:tracking-[-1.92px] text-[#3A3D38] mb-5 md:mb-8 lg:mb-[40px]">
                What if less actually<br className="hidden md:block" /> worked better?
              </h2>
              <p className="font-geist font-medium text-[15px] md:text-[16px] xl:text-[18px] leading-[1.5] md:leading-[1.4] xl:leading-[25px] tracking-[-0.02em] xl:tracking-[-0.54px] text-[#545454] max-w-[465px]">
                We stripped away everything unnecessary and focused on five ingredients proven to strengthen your skin's natural barrier. The result? Skin that looks better, feels better, and actually gets healthier—not just temporarily masked.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
