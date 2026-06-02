import MontanhaBarro from "@/assets/images/montanhaBarro.avif";
import CableIcon from "@/assets/icons/cable-icon.svg";
import EarthIcon from "@/assets/icons/earth-icon.svg";
import AccountIcon from "@/assets/icons/account-icon.svg";
import ChartIcon from "@/assets/icons/chart-icon.svg";

export function BenefitsSection() {
  const features = [
    {
      icon: CableIcon,
      title: "Amplify Insights",
      description:
        "Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.",
    },
    {
      icon: EarthIcon,
      title: "Control Your Global Presence",
      description:
        "Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.",
    },
    {
      icon: AccountIcon,
      title: "Remove Language Barriers",
      description:
        "Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.",
    },
    {
      icon: ChartIcon,
      title: "Visualize Growth",
      description:
        "Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.",
    },
  ];

  return (
    <section id="benefits" className="w-full bg-branco px-6 py-20">
      <div className="mx-auto max-w-7xl">
        
        {/* cabeçalho palavra titulo e subtitulo */}
        <div className="mb-20 max-w-3xl">
          <p className="mb-[67px] font-mono text-sm font-medium tracking-wide text-verde-oliva">
            Benefits
          </p>
          <h2 className="mb-[71px] font-serif text-5xl font-medium tracking-tight text-preto md:text-[64px] leading-[110%]">
            We've cracked the code.
          </h2>
          <p className="text-lg text-cinza-escuro">
            Area provides real insights, without the data overload.
          </p>
        </div>

        {/* grid de features */}
         <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="border-t border-cinza-claro pt-6">
              <div className="mb-6">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="h-6 w-6"  
                />
              </div>
              <h3 className="mb-4 font-serif text-xl font-medium text-preto">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-cinza-escuro">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* imagem da montanha  */}
        <div className="mt-24 w-full overflow-hidden rounded-[40px] bg-branco">
          <img
            src={MontanhaBarro}
            alt="Landscape view showing growth"
            className="h-auto w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}