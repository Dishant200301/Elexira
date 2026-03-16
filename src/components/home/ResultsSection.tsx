import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
const resultsImage1 = "/assets/home/results/results-image-1.png";
const resultsImage2 = "/assets/home/results/results-image-2.png";
const resultsImage3 = "/assets/home/results/results-image-3.png";

const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const startTime = Date.now();
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          if (target % 1 === 0) {
            setCount(Math.floor(eased * target));
          } else {
            setCount(Math.floor(eased * target * 10) / 10);
          }
          if (progress < 1) requestAnimationFrame(animate);
          else setCount(target);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Ticker = ({ items, reverse = false }: { items: string[], reverse?: boolean }) => {
  return (
    <div className="flex overflow-hidden w-full select-none gap-2 py-1">
      <motion.div
        animate={{ x: reverse ? [0, -1000] : [-1000, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-2 whitespace-nowrap"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-[#D4DCCF] border border-white/20 rounded-[8px] font-geist font-medium text-[14px] text-[#3A3D38] leading-tight"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const ResultsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const benefitLabelsRow1 = [
    "Long-lasting hydration", "Stronger barrier", "Even complexion", "Smoother texture", "Enhanced firmness"
  ];
  const benefitLabelsRow2 = [
    "Reduced sensitivity & redness", "Improved clarity", "Natural radiance", "Clearer skin", "Smaller pores"
  ];

  return (
    <section className="bg-background py-12 md:py-24">
      <div className="section-container max-w-[1500px] mx-auto">
        <div className="bg-[#D4DCCF] rounded-[8px] p-4 md:p-4 lg:p-4 relative overflow-hidden flex flex-col lg:min-h-[1600px]">
          
          {/* Header Title */}
          <div className="text-center z-10 mb-10 md:mb-16">
            <h2 className="font-geist font-medium text-[36px] md:text-[56px] lg:text-[68px] leading-[1.1] md:leading-[1] tracking-[-0.05em] text-[#3A3D38]">
              Real results you<br />can see and feel.
            </h2>
          </div>

          {/* Large Center Portrait */}
          <div className="relative w-full max-w-[684px] mx-auto z-10 aspect-square mb-12 lg:mb-24">
            <div className="absolute inset-0 overflow-hidden">
               <img 
                src={resultsImage1} 
                alt="Health results" 
                className="w-full h-full object-cover md:object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 md:h-1/3 bg-gradient-to-t from-[#D4DCCF] to-transparent" />
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 z-10">
            
            {/* Left Column Stack */}
            <div className="flex flex-col gap-5">
              
              {/* 92.3% Box */}
              <div className="bg-white/40 backdrop-blur-[20px] border border-white/60 rounded-[8px] p-4 md:p-6 min-h-[300px] md:min-h-[380px] flex flex-col justify-between">
                <div className="font-geist font-medium text-[44px] md:text-[52px] leading-none tracking-[-0.04em] text-[#3A3D38]">
                  <CountUp target={92.3} suffix="%" />
                </div>
                <p className="font-geist font-medium text-[15px] md:text-[16px] leading-[1.5] tracking-[-0.02em] text-[#676863] max-w-[340px]">
                  of users reported calmer, less irritated skin within two weeks of switching.
                </p>
              </div>

              {/* 28 Days Box */}
              <div className="bg-white/40 backdrop-blur-[20px] border border-white/60 rounded-[8px] p-4 md:p-6 min-h-[300px] md:min-h-[380px] flex flex-col justify-between">
                <div className="font-geist font-medium text-[44px] md:text-[56px] leading-none tracking-[-0.04em] text-[#3A3D38]">
                  <CountUp target={28} suffix=" Days" />
                </div>
                <p className="font-geist font-medium text-[15px] md:text-[16px] leading-[1.5] tracking-[-0.02em] text-[#676863] max-w-[340px]">
                  is all it takes to see significant improvements in texture, tone, and overall skin health.
                </p>
              </div>

              {/* Your skin deserves better (Bottom Left) */}
              <div className="relative border border-white/50 rounded-[8px] h-[300px] md:h-[390px] lg:h-[350px] overflow-hidden flex flex-col justify-center ">
                <img 
                  src={resultsImage3} 
                  alt="Skin closeup" 
                  className="absolute inset-0 w-full h-full object-cover opacity-100" 
                />
                
                <h3 className="font-geist font-medium text-[32px] md:text-[36px] lg:text-[48px] leading-tight text-white mb-12 md:mb-20 z-10 tracking-[-0.04em] px-6 lg:px-10">
                  Your skin deserves better.
                </h3>
                
                <div className="space-y-2 z-10 w-full">
                  <Ticker items={benefitLabelsRow1} />
                  <Ticker items={benefitLabelsRow2} reverse />
                </div>
              </div>

            </div>

            {/* Right Column Stack */}
            <div className="flex flex-col gap-5">
              
              {/* Science Box (Tall) */}
              <div className="bg-[#E5E6E1]/40 backdrop-blur-[20px] border border-white/60 rounded-[8px] p-4 md:p-6 flex flex-col min-h-[600px] md:min-h-[700px] lg:min-h-[780px] relative overflow-hidden">
                <div className="z-10">
                  <h3 className="font-geist font-medium text-[32px] lg:text-[42px] leading-[1.1] tracking-[-0.05em] text-[#3A3D38] mb-6 md:mb-8">
                    Science backed skincare.
                  </h3>
                  <p className="font-geist font-medium text-[15px] leading-[1.6] tracking-[-0.01em] text-[#676863] max-w-[440px]">
                    Developed in partnership with dermatological researchers, our formulation philosophy is built on clinical evidence that shows fewer, more concentrated ingredients deliver superior results. Our minimalist approach is validated by extensive testing across diverse skin types and conditions.
                  </p>
                </div>

                {/* Dermatologist Image Placement */}
                <div className="mt-8 md:mt-auto relative w-full h-[350px] md:h-[450px] -mx-2 md:-mx-2 translate-y-8 md:translate-y-10">
                  <img 
                    src={resultsImage2} 
                    alt="Dermatologist" 
                    className="absolute inset-0 w-full h-full object-contain object-bottom"
                  />
                  
                  {/* Badge */}
                  <div className="absolute left-8 md:left-10 bottom-20 md:bottom-24 bg-white/90 backdrop-blur-[10px] rounded-full py-2 px-3 md:px-4 flex items-center gap-2 shadow-sm border border-black/5">
                    <CheckCircle2 className="text-[#3A3D38] w-4 h-4 fill-[#333333]/10" />
                    <span className="font-geist font-medium text-[12px] md:text-[13px] text-[#3A3D38] tracking-tight whitespace-nowrap">
                      Dermatologist Approved
                    </span>
                  </div>
                </div>
              </div>

              {/* 5x Box (Bottom Right) */}
              <div className="bg-white/40 backdrop-blur-[20px] border border-white/60 rounded-[8px] p-8 md:p-10 h-[300px] md:h-[350px] flex flex-col justify-between">
                <div className="font-geist font-medium text-[44px] md:text-[56px] leading-none tracking-[-0.04em] text-[#3A3D38]">
                  <CountUp target={5} suffix="x" />
                </div>
                <p className="font-geist font-medium text-[15px] md:text-[16px] leading-[1.5] tracking-[-0.02em] text-[#676863] max-w-[340px]">
                  stronger skin barrier measured in clinical testing, meaning your skin can better protect itself.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};


export default ResultsSection;
