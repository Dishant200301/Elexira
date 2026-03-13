import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Assets from the HTML dump
const handImage = "/assets/home/hero/hand.jpg";
const productImage = "/assets/home/hero/product.jpg";

const customerAvatars = [
  "/assets/home/hero/review-1.png",
  "/assets/home/hero/review-2.png",
  "/assets/home/hero/review-3.png",
  "/assets/home/hero/review-4.png",
  "/assets/home/hero/review-5.png",
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Text moves UP and fades out in first half of scroll
  const textContainerY = useTransform(scrollYProgress, [0, 0.5], [0, -400]);
  const textContainerOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Hand moves DOWN below the screen — exits fully before section ends
  const handY = useTransform(scrollYProgress, [0, 0.8], [0, 700]);

  const headingText = "Your healthiest skin revealed.";
  const sublineText = "We strip away the unnecessary to focus on what truly works.";

  const wordAnimation = {
    initial: { y: 40, opacity: 1 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full h-[180vh] bg-transparent"
    >
      {/* Sticky viewport — stays on screen while we scroll through the 180vh */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 md:px-8 xl:px-0 pt-[9px] pb-[64px]">
        <div className="relative z-20 w-full max-w-[1500px] xl:px-8 h-full flex flex-col justify-start lg:justify-center">
          {/* Text Container (framer-155x0r8) */}
          <motion.div
            style={{ y: textContainerY, opacity: textContainerOpacity }}
            className="flex flex-col lg:flex-row items-start justify-between w-full mt-[2vh] md:mt-[4vh] lg:mt-[-5vh]"
          >
            {/* Left: Heading / Rating */}
            <div className="flex flex-col items-start gap-4 md:gap-12 lg:gap-16">
              <h1 className="font-geist font-medium text-[40px] md:text-[64px] xl:text-[clamp(1.0rem,15vw,96px)] leading-[0.9] text-[#3A3D38] tracking-[-0.04em] text-left max-w-[800px]">
                {headingText.split(" ").map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden mr-[0.2em] last:mr-0">
                    <motion.span
                      variants={wordAnimation}
                      initial="initial"
                      animate="animate"
                      transition={{
                        duration: 0.8,
                        delay: i * 0.1,
                        ease: [0.2, 0.65, 0.3, 0.9],
                      }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h1>

              {/* Happy Clients Container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col items-start gap-3 p-0 md:p-6 bg-transparent md:bg-[#E2E6DF]/50 rounded-[12px] border-0 md:border md:border-[#3A3D38]/5"
              >
                {/* Avatars Top */}
                <div aria-label="View our testimonials" className="flex items-center -space-x-[12px]">
                  {customerAvatars.map((src, i) => (
                    <div
                      key={i}
                      className="w-[32px] h-[32px] rounded-full overflow-hidden border-[1.5px] border-[#f8f5f0] shadow-sm relative z-10"
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>

                {/* Stars Middle */}
                <div className="flex items-center gap-[4px]">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      className="w-[12px] h-[12px] fill-[#3A3D38]"
                    >
                      <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
                    </svg>
                  ))}
                </div>

                {/* Text Bottom */}
                <div className="flex items-center gap-1 font-geist font-medium text-[12px] md:text-[13px] leading-[14px] text-[#545454] tracking-tight">
                  <span className="font-semibold text-[#3A3D38]">2500+</span>
                  <span>Happy Customers</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Subline */}
            <div className="lg:w-1/3 flex justify-start lg:justify-end mt-[20px] md:mt-[40px] lg:mt-[15vh]">
              <p className="font-geist font-medium text-[20px] md:text-[30px] lg:text-[28px]  xl:text-[36px] leading-[1.2] text-[#3A3D38] text-left lg:text-right tracking-[-0.03em] max-w-[280px] md:max-w-[400px]">
                {sublineText.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{
                      duration: 1,
                      delay: 0.8 + i * 0.05,
                      ease: "easeOut",
                    }}
                    className="inline-block mr-[0.25em] last:mr-0"
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Hand — moves down and exits below the screen */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pointer-events-none z-10 pb-[5vh]">
          <motion.div
            style={{ y: handY }}
            className="relative flex flex-col items-center w-full max-w-[600px] md:mb-[-50px]"
          >
            <img
              src={handImage}
              alt="Hand"
              className="w-full h-auto object-contain object-bottom translate-y-[5%] relative z-10 mix-blend-darken"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
