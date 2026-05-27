import cilindrosRose from "@/assets/images/clindrosRose.avif";

export function BigPictureSection() {
  const topics = [
    {
      id: "01",
      text: "Spot Trends in Seconds: No more digging through numbers.",
    },
    {
      id: "02",
      text: "Get Everyone on the Same Page: Share easy-to-understand reports with your team.",
    },
    {
      id: "03",
      text: "Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.",
    },
    {
      id: "04",
      text: "Your Global Snapshot: Get a quick, clear overview of your entire operation.",
    },
  ];

  return (
    <section className="w-full bg-white px-6">
      {/* Contêiner Principal - Max Width 1600px */}
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-center gap-[20px] border-b border-[#E9E9E9] lg:flex-row lg:justify-between lg:gap-[40px] xl:gap-[80px]">
        
        {/* Div do Texto */}
        <div className="flex w-full max-w-[590px] flex-col gap-[40px] pb-[80px] pt-[60px]">
          
          {/* Div do Título e Subtítulo */}
          <div className="flex w-full flex-col gap-6 lg:pr-[80px]">
            <h2 className="font-serif text-[3.5rem] font-medium leading-tight tracking-tight text-black">
              See the Big Picture
            </h2>
            <p className="text-base leading-relaxed text-[#929292]">
              Area turns your data into clear, vibrant visuals that show you exactly
              what's happening in each region.
            </p>
          </div>

          {/* Div dos Tópicos 01 a 04 */}
          <div className="flex w-full flex-col border-b border-[#E9E9E9]">
            {topics.map((topic, index) => (
              <div 
                key={index} 
                className="flex items-start gap-6 border-t border-[#E9E9E9] py-5"
              >
                <span className="mt-0.5 text-sm font-medium text-[#929292]">
                  {topic.id}
                </span>
                <p className="text-sm leading-relaxed text-black">
                  {topic.text}
                </p>
              </div>
            ))}
          </div>

          {/* Botão Discover */}
          <button className="flex h-[48px] w-[138px] items-center justify-center rounded-full bg-[#DFECC6] px-[22px] py-[14px] text-sm font-semibold text-black transition hover:bg-[#cbe3a1]">
            Discover More
          </button>
          
        </div>

        {/* Div da Imagem (Card) */}
        <div className="h-[711px] w-full max-w-[590px] shrink-0 overflow-hidden rounded-[40px] bg-[#E9E9E9]">
          <img
            src={cilindrosRose}
            alt="Geometric shapes composition"
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}