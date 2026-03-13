import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// Use the avatars from the other sections without the query params that shrink them
const images = [
  "https://framerusercontent.com/images/EQY65QKBYJ1Qgu7VT5P5nzkYqA.jpg",
  "https://framerusercontent.com/images/7hbBkrWAEmHe7eJpyNRR070UJ0g.jpeg",
  "https://framerusercontent.com/images/D7dccTjWlzq1G2m2b6qUn2yIhE.jpg",
  "https://framerusercontent.com/images/9MxrtlnmbGJax3bJolOSaLGdgBc.jpg",
  "https://framerusercontent.com/images/pSNqKqXJNdNZ1jEzrR780Kp8E.jpg",
  "https://framerusercontent.com/images/EQY65QKBYJ1Qgu7VT5P5nzkYqA.jpg",
  "https://framerusercontent.com/images/7hbBkrWAEmHe7eJpyNRR070UJ0g.jpeg",
  "https://framerusercontent.com/images/D7dccTjWlzq1G2m2b6qUn2yIhE.jpg",
];

// Combine two arrays for seamless loops
const row1Images = [...images, ...images];
const row2Images = [...images, ...images].reverse();

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found — Essentia™</title>
      </Helmet>

      <section className="relative w-full h-[100dvh] overflow-hidden bg-[#F8F5F0] flex flex-col items-center justify-center">

        {/* Background Scrolling Images */}
        <div className="absolute inset-0 z-0 flex flex-col gap-2 py-4 min-w-[200vw]">
          {/* Row 1 (Right to Left) */}
          <div className="h-1/2 w-full overflow-hidden">
            <div className="ticker-track flex items-center gap-2 h-full w-[max-content]">
              {row1Images.map((src, i) => (
                <img
                  key={`r1-${i}`}
                  src={src}
                  alt=""
                  className="h-full aspect-square object-cover rounded-[16px] pointer-events-none select-none"
                />
              ))}
            </div>
          </div>

          {/* Row 2 (Left to Right) */}
          <div className="h-1/2 w-full overflow-hidden">
            <div className="ticker-track-reverse flex items-center gap-2 h-full w-[max-content]">
              {row2Images.map((src, i) => (
                <img
                  key={`r2-${i}`}
                  src={src}
                  alt=""
                  className="h-full aspect-square object-cover rounded-[16px] pointer-events-none select-none"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Fading Edges & White Background Tint Overlay */}
        <div className="absolute inset-0 z-10 bg-white/40 pointer-events-none" />
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, transparent 30%, rgba(248, 245, 240, 0.9) 100%)"
          }}
        />

        {/* Massive 404 Text Layer */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-geist font-medium text-[clamp(6rem,45vw,50rem)] leading-[0.8] text-[#fdfcfa]/80 tracking-[-0.04em] mix-blend-normal opacity-100">
            404
          </span>
        </div>

        {/* Foreground Content */}
        <div className="relative z-30 flex flex-col items-center justify-center gap-8 mt-12 md:mt-24 pointer-events-auto text-center px-4">
          <h1 className="font-geist font-medium text-[1.6rem] md:text-[3.0rem] xl:text-[4rem] text-[#3a3d38] tracking-tight m-0 rounded-xl px-4 py-2 backdrop-blur-[2px]">
            Sorry, we couldn't find this page.
          </h1>
          <Link
            to="/"
            className="group relative overflow-hidden bg-[#d4dccf] text-[#3a3d38] font-geist font-medium text-[1.1rem] px-[1.5rem] py-[0.85rem] rounded-[8px] transition-colors hover:bg-[#c2ccbb] inline-flex items-center justify-center"
          >
            Home
          </Link>
        </div>

      </section>
    </>
  );
};

export default NotFound;
