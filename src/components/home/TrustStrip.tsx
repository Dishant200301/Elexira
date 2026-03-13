const items = [
  { icon: "/assets/home/trust/Sustainable_Packaging.png", label: "Sustainable Packaging" },
  { icon: "/assets/home/trust/Free_Shipping.png", label: "Free Shipping" },
  { icon: "/assets/home/trust/Secure_Payment.png", label: "Secure Payment" },
  { icon: "/assets/home/trust/Made_In_Switzerland.png", label: "Made In Switzerland" },
];

const TrustStrip = () => {
  // Use multiple copies to ensure it covers the screen for the animation loop
  const duplicated = [...items, ...items, ...items, ...items, ...items, ...items];

  return (
    <section className="bg-[#F8F5F0] overflow-hidden">
      <div className="ticker-track-reverse !gap-6">

        {duplicated.map((item, i) => (
          <div key={i} className="flex items-center gap-4 shrink-0 px-2">
            <img 
              src={item.icon} 
              alt={item.label} 
              className="w-6 h-6 object-contain"
            />
            <span className="font-geist font-medium text-[18px] leading-[25px] text-[#545454] tracking-[-0.54px] whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;
