import { Helmet } from "react-helmet-async";
import FadeInSection from "@/components/FadeInSection";
import { useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { journalDetails } from "@/data/journalDetails";

const JournalDetail = () => {
  const { slug } = useParams();
  const article = journalDetails[slug || ""] || journalDetails["why-fewer-ingredients-work-better"];
  const otherArticles = Object.values(journalDetails).filter(a => a.slug !== article.slug);
  const nextArticle = otherArticles[0] || journalDetails["why-fewer-ingredients-work-better"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>{article.title} — Elexira™ Journal</title>
        <meta name="description" content={article.content.paragraphs[0].slice(0, 155)} />
      </Helmet>

      {/* Hero with Parallax */}
      <section
        className="relative w-full h-[60vh] md:h-[75vh] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${article.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full flex flex-col justify-center px-6 md:px-8 max-w-[800px] mx-auto z-10">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-3 md:mb-6">
              <span className="text-white font-geist font-medium text-[0.8rem] md:text-[0.85rem] lg:text-[1rem] drop-shadow-md">{article.date}</span>
              <span className="px-3 md:px-4 py-1 rounded-[6px] bg-[#E2E6DF] text-[#3a3d38] font-geist font-medium text-[0.7rem] md:text-[0.75rem] lg:text-[0.8rem] capitalize">
                {article.category}
              </span>
            </div>
            <h1 className="font-geist font-medium text-[2rem] sm:text-[2.8rem] md:text-[4.5rem] lg:text-[4.5rem] text-white leading-[1.1] md:leading-[1] tracking-tight mb-4 md:mb-6 drop-shadow-lg">
              {article.title}
            </h1>
            <p className="text-white font-geist font-medium text-[0.8rem] md:text-[1rem] drop-shadow-md">By {article.author}</p>
          </FadeInSection>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F8F5F0] py-16 md:py-16">
        <div className="max-w-[800px] mx-auto px-6 md:px-8">
          <FadeInSection delay={100}>
            {article.content.heading && (
              <h2 className="font-geist font-medium text-[1.4rem] md:text-[2.2rem] leading-[1.2] tracking-tight text-[#3a3d38] mb-6 md:mb-8">
                {article.content.heading}
              </h2>
            )}

            <div className="space-y-6 md:space-y-8">
              {article.content.paragraphs.map((p, i) => (
                <p key={`p1-${i}`} className="text-[#3a3d38]/90 font-geist text-[0.95rem] md:text-[1.1rem] leading-[1.6]">
                  {p}
                </p>
              ))}

              {article.content.quote && (
                <p className="font-geist font-medium text-[1.1rem] md:text-[1.25rem] text-[#3a3d38] leading-[1.5] py-2">
                  {article.content.quote}
                </p>
              )}

              {article.content.middleImage && (
                <div className="py-8 w-full">
                  <img
                    src={article.content.middleImage}
                    alt="Article visual"
                    className="w-full aspect-[4/3] md:aspect-[16/9] object-cover rounded-[8px]"
                  />
                </div>
              )}

              {article.content.finalParagraphs?.map((p, i) => (
                <p key={`p2-${i}`} className="text-[#3a3d38]/90 font-geist text-[0.95rem] md:text-[1.1rem] leading-[1.6]">
                  {p}
                </p>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* More Articles */}
      <section className="bg-[#F8F5F0] pb-24 px-4 md:px-8 max-w-[1500px] mx-auto">
        <div className="border-t border-[#3a3d38]/10 pt-16 md:pt-24 mx-4 md:mx-0">
          <FadeInSection>
            <div className="flex items-center justify-between mb-8 md:mb-16">
              <h2 className="font-geist font-medium text-[1.5rem] md:text-[2.5rem] tracking-tight text-[#3a3d38]">
                More Articles & Insights
              </h2>
              <Link to="/journal" className="font-geist font-medium text-[#3a3d38] text-[0.8rem] md:text-[0.95rem] flex items-center gap-1 hover:opacity-70 transition-opacity whitespace-nowrap">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <Link to={`/journal/${nextArticle.slug}`} className="block w-full group cursor-pointer relative overflow-hidden rounded-[8px]">
              <div className="relative w-full aspect-[4/5] md:aspect-[21/9] bg-[#EBE5DC] overflow-hidden rounded-[8px]">
                <img
                  src={nextArticle.heroImage}
                  alt={nextArticle.title}
                  className="w-full h-full object-cover blur-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:blur-[8px] rounded-[8px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-80 rounded-[8px]" />

                {/* Top elements */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-4">
                  <span className="px-3 py-1 rounded-[4px] bg-[#EAECE6] text-[#3a3d38] font-geist font-medium text-[0.8rem] capitalize">
                    {nextArticle.category}
                  </span>
                </div>
                <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowRight strokeWidth={1.5} className="text-white w-5 h-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rotate-0 group-hover:-rotate-45" />
                </div>

                {/* Bottom elements */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 pr-6 md:pr-10">
                  <p className="text-white font-geist font-medium text-[0.75rem] md:text-[0.85rem] mb-2">{nextArticle.date}</p>
                  <h2 className="font-geist font-semibold text-[1.3rem] sm:text-[1.75rem] md:text-[3.5rem] text-white leading-[1.1] md:leading-[1.05] tracking-tight max-w-[800px]">
                    {nextArticle.title}
                  </h2>
                </div>
              </div>
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default JournalDetail;
