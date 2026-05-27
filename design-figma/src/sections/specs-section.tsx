import { Check, X } from "lucide-react";

export function SpecsSection() {
  // Dados da tabela divididos por colunas para facilitar a manutenção
  const columns = [
    {
      title: "Area",
      isHighlighted: true,
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
      isHighlighted: false,
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
      isHighlighted: false,
      items: [
        { text: "Moderate speeds", icon: "cross" },
        { text: "No AI assistance", icon: "cross" },
        { text: "Steep learning curve", icon: "cross" },
        { text: "No AI assistance", icon: "cross" },
        { text: "Moderate speeds", icon: "cross" },
        { text: "Partial UTF-8 support", icon: "cross" },
      ],
    },
  ];

  return (
    <section className="w-full bg-white px-6">
      {/* Contêiner Principal da Seção (1200px max, 1500px como limite responsivo) */}
      <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center gap-[20px] pb-[120px] xl:max-w-[1200px]">
        
        {/* Cabeçalho: Why Choose Area? */}
        <div className="flex w-full flex-col items-center border-t border-[#E9E9E9] py-[80px] lg:px-[240px]">
          
          <div className="flex w-full max-w-[720px] flex-col items-center gap-[40px]">
            {/* Tag / Specs */}
            <span className="font-mono text-sm font-medium text-[#8E9C78]">
              Specs
            </span>

            {/* Título e Subtítulo */}
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
            <button className="flex h-[48px] w-[138px] items-center justify-center gap-[10px] rounded-full bg-[#DFECC6] px-[22px] py-[14px] text-sm font-semibold text-black transition hover:bg-[#cbe3a1]">
              Discover More
            </button>
          </div>
        </div>

        {/* Tabela de Comparação (Container Flex Column-based) */}
        <div className="relative mt-8 flex w-full max-w-[1200px] flex-col md:flex-row">
          
          {columns.map((col, colIndex) => (
            <div
              key={colIndex}
              className={`flex flex-1 min-w-[200px] flex-col ${
                col.isHighlighted
                  ? "relative z-10 rounded-[20px] border border-[#E9E9E9] bg-white shadow-[0_4px_40px_rgba(0,0,0,0.04)]"
                  : "border-t border-[#E9E9E9] md:border-t-0"
              }`}
            >
              {/* Header da Coluna */}
              <div className="flex h-[96px] items-center justify-center px-[30px] py-[40px] border-b border-[#E9E9E9]">
                <h3
                  className={`text-center font-sans ${
                    col.isHighlighted
                      ? "text-xl font-semibold text-black"
                      : "text-lg font-medium text-[#929292]"
                  }`}
                >
                  {col.title}
                </h3>
              </div>

              {/* Linhas da Tabela */}
              {col.items.map((item, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`flex h-[96px] items-center gap-[16px] px-[30px] py-[40px] ${
                    // Adiciona borda inferior apenas se não for a coluna destacada OU não for o último item
                    (!col.isHighlighted || rowIndex !== col.items.length - 1) &&
                    rowIndex !== col.items.length - 1
                      ? "border-b border-[#E9E9E9]"
                      : ""
                  } ${
                    !col.isHighlighted && rowIndex === col.items.length - 1 
                      ? "border-b border-[#E9E9E9] md:border-b-0" // Borda no mobile para o último
                      : ""
                  }`}
                >
                  {item.icon === "check" ? (
                    <Check className="h-4 w-4 shrink-0 text-black" strokeWidth={2} />
                  ) : (
                    <X className="h-4 w-4 shrink-0 text-[#929292]" strokeWidth={2} />
                  )}
                  <span className="font-mono text-xs font-medium text-black">
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