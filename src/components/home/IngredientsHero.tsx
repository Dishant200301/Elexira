import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";

interface IngredientsHeroProps {}

const IngredientsHero = (props: IngredientsHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Strictly use local scroll for reliable text animations 
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Spring for smoother movement
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  // Container rises into view, pauses, then moves up to exit
  const containerY = useTransform(smoothProgress, [0.1, 0.25, 0.6, 0.9], [60, 0, 0, -250]);
  const containerOpacity = useTransform(smoothProgress, [0.1, 0.2, 0.8, 0.95], [0, 1, 1, 0]);

  const part1 = "Five proven ingredients that actually work.".split(" ");
  const line2Part1 = "Less bottles. Better skin.".split(" ");
  const line2Part2 = "Smarter routine.".split(" ");

  const totalWords = part1.length + line2Part1.length + line2Part2.length;

  const Word = ({ word, index, color, isBold = false }: { word: string; index: number; color: string; isBold?: boolean }) => {
    // Wait for product to arrive, then start text at 0.2 local scroll
    const revealStart = 0.2 + (index / totalWords) * 0.25;
    const revealEnd = revealStart + 0.1;

    // Smooth reveal animations — blur to clear, fade in, slide up
    const opacity = useTransform(smoothProgress, [revealStart, revealEnd], [0, 1]);
    const blur = useTransform(smoothProgress, [revealStart, revealEnd], ["blur(8px)", "blur(0px)"]);
    const wordY = useTransform(smoothProgress, [revealStart, revealEnd], [20, 0]);

    return (
      <motion.span
        style={{ opacity, filter: blur, y: wordY }}
        className={`inline-block mr-[0.2em] last:mr-0 ${isBold ? "font-bold" : "font-medium"} ${color}`}
      >
        {word}
      </motion.span>
    );
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[180vh] bg-transparent"
    >
      {/* Sticky viewport — content stays pinned while scroll progresses */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: containerY, opacity: containerOpacity }}
          className="section-container relative z-10 flex flex-col items-center text-center"
        >
          <div className="max-w-[1200px] px-0 md:px-0">
            <h2 className="font-geist text-[26px] md:text-[38px] lg:text-[50px] xl:text-[clamp(2rem,7vw,4rem)] md:leading-[0.8] leading-[1.1] tracking-[-0.03em] md:tracking-[-0.05em] text-center">
              {/* Part 1: Proven Ingredients - Lighter Grey */}
              <span className="block mb-2 md:mb-4">
                {part1.map((word, i) => (
                  <Word key={i} word={word} index={i} color="text-[#888888]" />
                ))}
              </span>

              {/* Part 2: Better skin / Smarter routine - Darker Charcoal */}
              <span className="block">
                {line2Part1.map((word, i) => (
                  <Word key={i} word={word} index={part1.length + i} color="text-[#3A3D38]" />
                ))}
                {" "}
                {line2Part2.map((word, i) => (
                  <Word
                    key={i}
                    word={word}
                    index={part1.length + line2Part1.length + i}
                    color="text-[#3A3D38]"
                    isBold={true}
                  />
                ))}
              </span>
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IngredientsHero;
