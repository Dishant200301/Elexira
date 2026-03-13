import { Helmet } from "react-helmet-async";
import FadeInSection from "@/components/FadeInSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
  {
    slug: "the-truth-about-ingredient-percentages",
    title: "The truth about ingredient percentages.",
    category: "Insights",
    date: "Mar 14, 2025",
    image: "/assets/journal/journal-image-4.png",
  },
  {
    slug: "my-skin-transformed-when-i-used-less",
    title: "My skin transformed when I used less.",
    category: "Story",
    date: "Mar 14, 2025",
    image: "/assets/journal/journal-image-5.png",
  },
  {
    slug: "the-luxury-of-less",
    title: "The luxury of less.",
    category: "Inspiration",
    date: "Mar 6, 2025",
    image: "/assets/journal/journal-image-6.png",
  },
];

const Journal = () => {
  return (
    <>
      <Helmet>
        <title>Journal — Elexira™ Pharma Collagen</title>
        <meta name="description" content="Insights, research, and stories exploring the science of pharma collagen skincare and its impact on health and wellness." />
      </Helmet>

      <section className="section-container bg-[#F8F5F0] pt-10 pb-24 md:pt-20 md:pb-32 px-4 md:px-8 max-w-[1600px] mx-auto">
        <FadeInSection>
          <h1 className="font-geist font-medium text-[2.0rem] md:text-[4rem] xl:text-[6rem] leading-[1] tracking-[-0.03em] text-[#3a3d38] mb-8 md:mb-12 lg:mb-10">
            Beyond your skin.
          </h1>
        </FadeInSection>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 mb-6 relative">
          <div className="md:w-1/4 lg:w-[30%]">
            <FadeInSection delay={100}>
              <span className="px-4 py-1.5 rounded-[6px] bg-[#E2E6DF] text-[#3a3d38] font-geist font-medium text-[0.8rem]">
                Our Journal
              </span>
            </FadeInSection>
          </div>
          <div className="md:w-3/4 lg:w-[70%]">
            <FadeInSection delay={150}>
              <div className="max-w-[700px] flex flex-col gap-4 md:gap-8">
                <p className="text-[#545454] font-geist font-medium text-[1.1rem] md:text-[1.5rem] leading-[1.3] tracking-tight">
                  Insights, research, and stories exploring the science of
                  skincare and its impact on health, wellness, and daily life.
                </p>
                <p className="text-[#545454] font-geist font-medium text-[0.95rem] md:text-[1rem] leading-[1.4] tracking-tight">
                  Dive deeper into how proper skincare can transform your beauty.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>

        {/* Featured Article */}
        <div className="mt-6 md:mt-12 w-full">
          {articles.filter(a => a.featured).map((article) => (
            <FadeInSection key={article.slug} delay={200}>
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
                    <p className="text-white font-geist font-medium text-[0.85rem] mb-2">{article.date}</p>
                    <h2 className="font-geist font-semibold text-[1.5rem] md:text-[3rem] lg:text-[3.5rem] text-white leading-[1.05] tracking-tight max-w-[800px]">
                      {article.title}
                    </h2>
                  </div>
                </div>
              </Link>
            </FadeInSection>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-2 lg:gap-x-2 w-full">
          {articles.filter(a => !a.featured).map((article, i) => (
            <FadeInSection key={article.slug} delay={i * 100}>
              <Link to={`/journal/${article.slug}`} className="block w-full group cursor-pointer relative overflow-hidden rounded-[6px]">
                <div className="relative w-full aspect-square md:aspect-[500/375] lg:aspect-[660/375] bg-[#EBE5DC] overflow-hidden rounded-[6px]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover blur-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:blur-[6px] rounded-[6px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-80 rounded-[6px]" />

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
                    <p className="text-white/80 font-geist font-medium text-[0.8rem] mb-1">{article.date}</p>
                    <h3 className="font-geist font-semibold text-[1.25rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.8rem] text-white leading-[1.1] tracking-tight">
                      {article.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </FadeInSection>
          ))}
        </div>
      </section>
    </>
  );
};

export default Journal;
