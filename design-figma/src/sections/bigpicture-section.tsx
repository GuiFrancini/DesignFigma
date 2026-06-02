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
    <section className="w-full bg-branco px-10 py-16 md:py-24">
      {/* conteiner principal 1600px */}
      <div className="mx-auto flex max-w-7xl flex-col 
      items-center justify-beteween gap-10 lg:flex-row lg:gap-16">
        
        {/* conteiner do texto */}
        <div className="flex w-full max-w-[590px] flex-col 
        gap-10">
          
          {/* div do titulo e sub */}
          <div className="flex w-full flex-col gap-6 lg:pr-[80px]">
            <h2 className="font-serif text-5xl font-medium 
            leading-[115%] tracking-tight text-preto">
              See the Big Picture
            </h2>
            <p className="text-base leading-relaxed text-cinza-escuro">
              Area turns your data into clear, vibrant visuals that show you exactly
              what's happening in each region.
            </p>
          </div>

          {/* Div dos topicos 1 a 4 */}
          <div className="flex w-full flex-col border-b-[0.5px]border-cinza-claro/60">
            {topics.map((topic, index) => (
              <div 
                key={index} 
                className="flex items-start gap-6 border-t border-cinza-claro py-5"
              >
                <span className="mt-0.5 text-sm font-medium text-cinza-escuro">
                  {topic.id}
                </span>
                <p className="text-sm leading-relaxed text-preto">
                  {topic.text}
                </p>
              </div>
            ))}
          </div>

          {/* button discover */}
          <button className="flex h-[48px] w-[138px] items-center justify-center rounded-full 
            bg-verde-musgo text-preto font-sans text-sm font-semibold transition-all duration-300 
            hover:bg-cinza-oliva hover:text-branco shadow-none border-none">
            <span className="whitespace-nowrap">
              Discover More
             </span>           
          </button>         
        </div>

        {/* div da imagem ao lado */}
        <div className="w-full max-w-[590px] aspect-[4/5]
         md:aspect-square lg:h-[640px] shrink-0
         overflow-hidden rounded-[40px] bg-cinza-claro">
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