import { useFadeIn } from "@/hooks/useFadeIn";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FadeInSection = ({ children, className = "", delay = 0 }: FadeInSectionProps) => {
  const { ref, isVisible } = useFadeIn(0.1);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
