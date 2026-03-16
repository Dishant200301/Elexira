import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const articles = [
  {
    slug: "why-fewer-ingredients-work-better",
    title: "Why fewer ingredients work better.",
    category: "Trends",
    date: "Mar 14, 2025",
    image: "/assets/journal/journal-image-1.png",
    featured: true,
  },
  {
    slug: "skincare-science-vs-trend-cycles",
    title: "Skincare science vs. trend cycles",
    category: "Trends",
    date: "Feb 6, 2025",
    image: "/assets/journal/journal-image-2.png",
  },
  {
    slug: "the-foundation-of-healthy-skin",
    title: "The foundation of healthy skin.",
    category: "Insights",
    date: "Apr 3, 2025",
    image: "/assets/journal/journal-image-3.png",
  },
];

const JournalSection = () => {
  return (
    <section className="bg-[#F8F5F0] pt-24 pb-16 md:pt-32 md:pb-24 relative border-t border-[#E5E5E5]">
      <div className="section-container px-4 md:px-8 lg:px-[44px] max-w-[1600px] mx-auto">
        <FadeInSection>
          <div className="flex justify-between items-end mb-8 md:mb-12">
            <h2 className="font-geist font-medium text-[26px] md:text-[50px] lg:text-[64px] leading-[1.1] text-[#3a3d38] tracking-[-1.5px] md:tracking-[-2.56px]">
              From our journal.
            </h2>
            <Link 
              to="/journal" 
              className="group relative font-geist font-medium text-[#3a3d38] inline-flex items-center gap-2 text-[14px] md:text-[16px] tracking-[-0.32px] w-fit mb-1 md:mb-4"
            >
              View All
              <ArrowRight 
                size={18} 
                className="text-[#3a3d38] group-hover:-rotate-45 relative z-10 transition-all duration-300 ease-out"
              />
              <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#3a3d38] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </Link>
          </div>
        </FadeInSection>

        {/* Featured Article */}
        <div className="w-full">
          {articles.filter(a => a.featured).map((article) => (
            <FadeInSection key={article.slug} delay={100}>
              <Link to={`/journal/${article.slug}`} className="block w-full mb-2 lg:mb-2 group cursor-pointer relative overflow-hidden rounded-[8px]">
                <div className="relative w-full aspect-square md:aspect-[16/9] lg:aspect-[21/9] bg-[#EBE5DC] overflow-hidden rounded-[8px]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover blur-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:blur-[8px] rounded-[8px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-80 rounded-[8px]" />

                  {/* Top elements */}
                  <div className="absolute top-6 left-6 md:top-6 md:left-6 flex items-center gap-4">
                    <span className="px-3 py-1 rounded-[4px] bg-[#EAECE6] text-[#3a3d38] font-geist font-medium text-[0.8rem] capitalize">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowRight strokeWidth={1.5} className="text-white w-5 h-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rotate-0 group-hover:-rotate-45" />
                  </div>

                  {/* Bottom elements */}
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 pr-4 md:pr-6">
                    <p className="text-white font-geist font-medium text-[0.85rem] md:text-[0.95rem] lg:text-[1rem] mb-2 tracking-[-0.04em]">{article.date}</p>
                    <h2 className="font-geist font-semibold text-[1.5rem] md:text-[3rem] lg:text-[64px] text-white leading-[1] tracking-[-0.05em] xl:tracking-[-2.56px] max-w-[900px]">
                      {article.title}
                    </h2>
                  </div>
                </div>
              </Link>
            </FadeInSection>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-2 lg:gap-x-2 w-full mt-2">
          {articles.filter(a => !a.featured).map((article, i) => (
            <FadeInSection key={article.slug} delay={i * 100 + 200}>
              <Link to={`/journal/${article.slug}`} className="block w-full group cursor-pointer relative overflow-hidden rounded-[8px]">
                <div className="relative w-full aspect-square md:aspect-[500/375] lg:aspect-[660/375] bg-[#EBE5DC] overflow-hidden rounded-[8px]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover blur-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:blur-[6px] rounded-[8px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-80 rounded-[8px]" />

                  {/* Top elements */}
                  <div className="absolute top-4 left-4 flex items-center gap-4">
                    <span className="px-3 py-1 rounded-[4px] bg-[#EAECE6] text-[#3a3d38] font-geist font-medium text-[0.8rem] capitalize">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute top-6 right-6 transition-transform duration-500">
                    <ArrowRight strokeWidth={1.5} className="text-white w-5 h-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rotate-0 group-hover:-rotate-45" />
                  </div>

                  {/* Bottom elements */}
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                    <p className="text-white/80 font-geist font-medium text-[0.8rem] md:text-[0.9rem] mb-1 tracking-[-0.02em]">{article.date}</p>
                    <h3 className="font-geist font-semibold text-[1.25rem] md:text-[32px] lg:text-[40px] text-white leading-[1] tracking-[-0.05em] xl:tracking-[-1.6px]">
                      {article.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
