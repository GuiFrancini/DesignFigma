import { Check, X } from "lucide-react";

export function SpecsSection() {
  // Dados da tabela divididos temns, title isSelected
  const columns = [
    {
      title: "Area",
      isSelected: true,
      items: [
        { text: "Ultra-fast browsing", icon: "check" },
        { text: "Advanced AI insights", icon: "check" },
        { text: "Seamless integration", icon: "check" },
        { text: "Advanced AI insights", icon: "check" },
        { text: "Ultra-fast browsing", icon: "check" },
        { text: "Full UTF-8 support", icon: "check" },
      ],
    },
    {
      title: "WebSurge",
      isSelected: false,
      items: [
        { text: "Fast browsing", icon: "check" },
        { text: "Basic AI recommendations", icon: "check" },
        { text: "Restricts customization", icon: "check" },
        { text: "Basic AI insights", icon: "cross" },
        { text: "Fast browsing", icon: "check" },
        { text: "Potential display errors", icon: "cross" },
      ],
    },
    {
      title: "HyperView",
      isSelected: false,
      items: [
        { text: "Moderate speeds", icon: "x" },
        { text: "No AI assistance", icon: "cross" },
        { text: "Steep learning curve", icon: "cross" },
        { text: "No AI assistance", icon: "cross" },
        { text: "Moderate speeds", icon: "cross" },
        { text: "Partial UTF-8 support", icon: "cross" },
      ],
    },
  ];

  return (

  //* 1° seção*
    <section id= "specs"className="w-full bg-white px-6">
      {/* container principal [--] */}
      <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center gap-[20px] pb-[120px] xl:max-w-[1200px]">
        {/* Why Choose Area */}
        <div className="flex w-full flex-col items-center border-t border-[#E9E9E9] py-[80px] lg:px-[240px]">
          <div className="flex w-full max-w-[720px] flex-col items-center gap-[40px]">
            {/* Specs */}
            <span className="font-mono text-sm font-medium text-[#8E9C78]">
              Specs
            </span>

            {/* titulo */}
            <div className="flex flex-col items-center gap-6">
              <h2 className="text-center font-serif text-[60px] font-normal leading-[0.9] tracking-[-0.03em] text-black">
                Why Choose Area?
              </h2>
              <p className="text-center font-sans text-[15px] font-normal leading-[1.4] tracking-[-0.005em] text-[#929292]">
                You need a solution that keeps up. That's why we developed Area. A
                developer-friendly approach to streamline your business.
              </p>
            </div>

            {/* Botão */}
          <button className="flex h-[48px] w-[138px] items-center justify-center rounded-full 
            bg-verde-musgo text-preto font-sans text-sm font-semibold transition-all duration-300 
            hover:bg-cinza-oliva hover:text-branco shadow-none border-none">
            <span className="whitespace-nowrap">
              Discover More
             </span>           
          </button>         
          </div>
        </div>
        
        {/* Tabela de Comparação */}
        <div className="relative mt-8 flex w-full max-w-[1200px] flex-col md:flex-row">
          
          {columns.map((col, colIndex) => (
            <div 
              key={colIndex}
              className={`flex flex-1 min-w-[200px] flex-col ${col.isSelected
                  ? "relative z-10 rounded-[20px] border border-cinza-claro bg-white shadow-[0_4px_40px_rgba(0,0,0,0.04)]"
                  : "border-t border-cinza-claro md:border-t-0"
              }`}>

              {/* header das colunas */}
              <div className="flex h-[96px] items-center justify-center px-[30px] py-[40px] border-b border-cinza-escuro">
                <h3
                  className={`text-center font-sans ${ col.isSelected
                             ? "text-[25.71px] font-medium font-sans tracking-[-0.08em] text-preto"
                             : "text-lg font-medium text-cinza-escuro"
                  }`}>
                  {col.title}
                </h3>
              </div>

              {/*linhas da tabela */}
              {col.items.map((item, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`flex h-[96px] items-center gap-[16px] px-[30px] py-[40px] ${
                    // Adiciona borda inferior apenas se não for a coluna destacada ou se não for o último item
                    (!col.isSelected || rowIndex !== col.items.length - 1) &&
                    rowIndex !== col.items.length - 1
                      ? "border-b border-cinza-claro"
                      : ""
                  } ${
                    !col.isSelected && rowIndex === col.items.length - 1 
                      ? "border-b border-cinza-claro md:border-b-0" // Borda no mobile para o último
                      : ""
                  }`}
                >
                  {item.icon === "check" ? (
                    <Check className="h-4 w-4 shrink-0 text-preto" strokeWidth={2} />
                  ) : (
                    <X className="h-4 w-4 shrink-0 text-cinza-escuro" strokeWidth={2} />
                  )}
                  <span className="font-mono text-xs font-medium text-preto">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}