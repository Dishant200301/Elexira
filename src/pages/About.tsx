import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";

const principles = [
  {
    title: "Radical Simplicity",
    num: "01",
    desc: "We've reimagined skincare by removing what doesn't work. Our formulations contain five ingredients or fewer, each selected for proven efficacy rather than marketing appeal."
  },
  {
    title: "Scientific Integrity",
    num: "02",
    desc: "Our approach is evidence-based, not trend-driven. We rely on ingredients with decades of clinical validation rather than chasing the latest 'miracle' components."
  },
  {
    title: "Conscious Design",
    num: "03",
    desc: "We eliminate unnecessary elements at every stage, creating products that perform better while demanding less from you and our planet."
  },
];

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(heroScrollProgress, [0, 0.5], [1.15, 1]);
  const textScale = useTransform(heroScrollProgress, [0, 0.5, 1], [0.85, 1.1, 1.2]);
  const overlayOpacity = useTransform(heroScrollProgress, [0.1, 0.5], [0.5, 0]);

  return (
    <>
      <Helmet>
        <title>About — Elexira™ Pharma Collagen</title>
        <meta name="description" content="The story behind Elexira. Founded by dermatologists with a combined 40 years of clinical practice and research." />
      </Helmet>

      {/* Hero Text */}
      <section className="bg-[#F8F5F0] pt-10 md:pt-20 pb-16 px-6 md:px-8 max-w-[1500px] mx-auto">
        <FadeInSection>
          <h1 className="font-geist font-medium text-[2.5rem] md:text-[4rem] xl:text-[6.5rem] leading-[0.9] tracking-[-0.04em] text-[#3a3d38] mb-12 md:mb-12">
            The Beginning
          </h1>
        </FadeInSection>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-0 md:mb-0 xl:mb-12">
          <div className="lg:w-1/4">
            <FadeInSection delay={100}>
              <div className="inline-block px-3 py-1 rounded-[4px] bg-[#E2E6DF] text-[#3a3d38] font-geist font-medium text-[14px]">
                Our Approach
              </div>
            </FadeInSection>
          </div>
          <div className="lg:w-3/4">
            <FadeInSection delay={200}>
              <div className="max-w-[750px]">
                <p className="text-[#646463] font-geist font-medium text-[1.1rem] md:text-[1.5rem] leading-[1.3] tracking-tight mb-8">
                  Looking at our bathroom shelves filled with half-used products, each promising different benefits yet delivering mostly frustration, we knew there had to be a better way. <span className="font-semibold text-[#3a3d38]">We partnered with leading dermatologists to challenge an industry built on convincing you to buy more.</span>
                </p>
                <p className="text-[#828282] font-geist font-medium text-[0.95rem] md:text-[1.1rem] leading-[1.4] tracking-tight">
                  We're built on a radical belief: your skin works best when it isn't overwhelmed. No fillers. No fragrance. No marketing-driven additives. Just what works..
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Hero Image - Full Width Scroll Animation */}
      <div ref={heroRef} className="relative w-full aspect-[16/9] md:aspect-[21/8] overflow-hidden">
        <motion.div
          style={{ scale: imageScale }}
          className="w-full h-full relative"
        >
          <img
            src="/assets/about/about-hero.png"
            alt="Elexira Founders"
            className="w-full h-full object-cover"
          />
          {/* Smooth Scroll-Triggered Gradient */}
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"
          />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            style={{ scale: textScale }}
            className="text-white/90 font-geist font-medium text-[6vw] lg:text-[60px] tracking-tight pointer-events-none drop-shadow-lg"
          >
            Elexira™
          </motion.span>
        </div>

        {/* Corner Text badges */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white font-geist font-medium text-[14px] md:text-[18px]">
          2022
        </div>
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-white font-geist font-medium text-[14px] md:text-[18px]">
          Switzerland
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="bg-[#F8F5F0] py-16 md:py-16 px-6 md:px-8 max-w-[1500px] mx-auto">
        <FadeInSection>
          <h2 className="font-geist font-medium text-[2.5rem] md:text-[4rem] xl:text-[5.5rem] leading-[0.9] tracking-[-0.04em] text-[#3a3d38] mb-8 md:mb-10 xl:mb-16">
            Our Philosophy
          </h2>
        </FadeInSection>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 mb-10 md:mb-16">
          <div className="lg:w-1/4">
            <FadeInSection>
              <div className="inline-block px-3 py-1 rounded-[4px] bg-[#E2E6DF] text-[#3a3d38] font-geist font-medium text-[14px] mb-0">
                Our Core Principles
              </div>
            </FadeInSection>
          </div>
          <div className="lg:w-3/4">
            <FadeInSection delay={100}>
              <h3 className="font-geist font-medium text-[1.5rem] md:text-[2.2rem] leading-[1.1] tracking-tight text-[#3a3d38] max-w-[800px] mb-8">
                Elexira is built on a fundamental belief that skincare should be straightforward, effective, and respectful of your skin's natural intelligence.
              </h3>
              <p className="text-[#828282] font-geist font-medium text-[1rem] md:text-[1.1rem] leading-[1.4] tracking-tight max-w-[700px]">
                We reject the industry's tendency to complicate what should be simple. Every decision we make follows three core principles:
              </p>
            </FadeInSection>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-x-12 lg:gap-x-20">
          {principles.map((principle, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="flex flex-col">
                <div className="flex justify-between items-baseline pb-4 border-b border-[#3a3d38]/20 mb-6">
                  <h4 className="text-[#3a3d38] font-geist font-medium text-[1.25rem] md:text-[1.5rem] tracking-tight">
                    {principle.title}
                  </h4>
                  <span className="text-[#3a3d38] font-geist font-medium text-[1.1rem]">
                    {principle.num}
                  </span>
                </div>
                <p className="text-[#828282] font-geist font-medium text-[0.95rem] md:text-[1.05rem] leading-[1.5] tracking-tight">
                  {principle.desc}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Founders Section */}
      <section className="bg-[#F8F5F0] pb-10 md:pb-12 px-4 md:px-8">
        <div className="max-w-[1500px] mx-auto bg-[#E2E6DF] rounded-[12px] p-6 md:p-16 lg:p-24 overflow-hidden relative">
          <div className="max-w-[700px] mb-12 md:mb-24">
            <FadeInSection>
              <div className="text-[#3a3d38] font-geist font-medium text-[14px]">Elexira™</div>
              <h2 className="font-geist font-medium text-[2.2rem] md:text-[4.5rem] leading-[1.1] md:leading-[1] tracking-[-0.03em] text-[#3a3d38]">
                Meet the founders<br className="hidden md:block" />behind the product.
              </h2>
            </FadeInSection>
          </div>

          {/* Founders Portraits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 mb-12 md:mb-24">
            <FadeInSection delay={100}>
              <div className="group overflow-hidden rounded-[8px]">
                <img
                  src="/assets/about/Dr.monica.png"
                  alt="Dr. Monica Lewis"
                  className="w-full aspect-[4/5] object-cover rounded-[8px] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="mt-6 flex justify-between items-center text-[#3a3d38] font-geist font-medium">
                  <span className="text-[14px]">Founder</span>
                  <span className="text-[20px] md:text-[24px] tracking-tight">Dr. Monica Lewis</span>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="group overflow-hidden rounded-[8px]">
                <img
                  src="/assets/about/Dr.elena.png"
                  alt="Dr. Elena Kovac"
                  className="w-full aspect-[4/5] object-cover rounded-[8px] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="mt-6 flex justify-between items-center text-[#3a3d38] font-geist font-medium">
                  <span className="text-[14px]">Founder</span>
                  <span className="text-[20px] md:text-[24px] tracking-tight">Dr. Elena Kovac</span>
                </div>
              </div>
            </FadeInSection>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
            <div className="lg:w-1/3">
              <FadeInSection>
                <div className="text-[#3a3d38] font-geist font-medium text-[14px]">The Story</div>
              </FadeInSection>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="col-span-1 md:col-span-2 mb-8">
                <FadeInSection delay={100}>
                  <h3 className="font-geist font-medium text-[1.5rem] md:text-[2.2rem] leading-[1.2] md:leading-[1.1] tracking-tight text-[#3a3d38]">
                    Dermatologists with a combined 40 years of clinical practice and research at Stanford Medical Center.
                  </h3>
                </FadeInSection>
              </div>
              <FadeInSection delay={150}>
                <p className="text-[#3a3d38]/80 font-geist font-medium text-[0.95rem] md:text-[1rem] leading-[1.5]">
                  The beauty industry has long operated on a fundamental misconception: that more ingredients equal better results. Our research at the University of California's Dermatology Research Center shows that pharma-grade collagen formulations with fewer, more concentrated active ingredients consistently outperform complex alternatives.
                </p>
              </FadeInSection>
              <FadeInSection delay={200}>
                <p className="text-[#3a3d38]/80 font-geist font-medium text-[0.95rem] md:text-[1rem] leading-[1.5]">
                  That's exactly why every Elexira product starts with identifying the absolute minimum ingredients required to achieve maximum results. Our pharma collagen cream represents years of clinical research distilled into five precisely dosed active ingredients.
                </p>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-[#F8F5F0] py-10 md:py-12 px-5 md:px-8 max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-10">
          <div className="md:w-1/2">
            <FadeInSection>
              <img
                src="/assets/about/process.png"
                alt="Our Process Hands"
                className="w-full aspect-[3/4] lg:aspect-[3/3] object-cover rounded-[8px]"
              />
            </FadeInSection>
          </div>
          <div className="md:w-1/2">
            <FadeInSection delay={100}>
              <h2 className="font-geist font-medium text-[2.2rem] md:text-[3rem] leading-[1.1] md:leading-[1] tracking-tight text-[#3a3d38] mb-6 md:mb-8">
                Our Process
              </h2>
              <div className="max-w-[500px] space-y-6">
                <p className="text-[#3a3d38]/90 font-geist font-medium text-[1rem] leading-[1.6]">
                  Each Elexira product begins in our Swiss laboratory where we analyze and test individual pharma-grade collagen compounds for purity, potency, and bioavailability. Only ingredients that pass our rigorous standards make it into the final formulation.
                </p>
                <p className="text-[#545454] font-geist font-medium text-[0.95rem] leading-[1.6]">
                  Every batch is then tested for stability, efficacy, and safety through clinical trials before release. Our pharma collagen approach ensures the highest quality skincare products on the market.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="bg-[#F8F5F0] py-10 md:py-12 px-5 md:px-8 max-w-[1500px] mx-auto">
        <FadeInSection>
          <h2 className="font-geist font-medium text-[2rem] md:text-[3rem] xl:text-[4rem] leading-[1.1] md:leading-[1] tracking-tight text-[#3a3d38] mb-10 lg:mb-16">
            Our Commitments
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-x-6 lg:gap-x-12">
          {/* Commitment 1 */}
          <FadeInSection delay={100}>
            <div className="flex flex-col h-full">
              <div className="aspect-square w-full rounded-[8px] overflow-hidden mb-8">
                <img
                  src="/assets/about/skin.png"
                  alt="Purity skin texture"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-baseline pb-4 border-b border-[#3a3d38]/20 mb-6 text-[#3a3d38] font-geist font-medium">
                <span className="text-[20px] md:text-[24px] tracking-tight">Your Skin</span>
                <span className="text-[14px]">01</span>
              </div>
              <p className="text-[#828282] font-geist font-medium text-[0.95rem] leading-[1.5] tracking-tight">
                We test extensively but never on animals. Our formula is designed to support your skin's natural functions, not override them or create dependency.
              </p>
            </div>
          </FadeInSection>

          {/* Commitment 2 */}
          <FadeInSection delay={200}>
            <div className="flex flex-col h-full">
              <div className="aspect-square w-full rounded-[8px] overflow-hidden mb-8">
                <img
                  src="/assets/about/planet.png"
                  alt="Our Planet"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-baseline pb-4 border-b border-[#3a3d38]/20 mb-6 text-[#3a3d38] font-geist font-medium">
                <span className="text-[20px] md:text-[24px] tracking-tight">Our Planet</span>
                <span className="text-[14px]">02</span>
              </div>
              <p className="text-[#828282] font-geist font-medium text-[0.95rem] leading-[1.5] tracking-tight">
                Our vessels are infinitely recyclable, and our refill program reduces environmental impact by 94%. We've eliminated secondary packaging entirely – because your bathroom doesn't need more cardboard boxes.
              </p>
            </div>
          </FadeInSection>

          {/* Commitment 3 */}
          <FadeInSection delay={300}>
            <div className="flex flex-col h-full">
              <div className="aspect-square w-full rounded-[8px] overflow-hidden mb-8">
                <img
                  src="/assets/about/trainsparency.png"
                  alt="Transparency vials"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-baseline pb-4 border-b border-[#3a3d38]/20 mb-6 text-[#3a3d38] font-geist font-medium">
                <span className="text-[20px] md:text-[24px] tracking-tight">Transparency</span>
                <span className="text-[14px]">03</span>
              </div>
              <p className="text-[#828282] font-geist font-medium text-[0.95rem] leading-[1.5] tracking-tight">
                We tell you exactly what's in our products and why. No pseudoscience. No secret ingredients. Just honest skincare that respects your intelligence.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default About;
