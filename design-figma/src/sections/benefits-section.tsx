import MontanhaBarro from "@/assets/images/montanhaBarro.avif";
import { Cable, Globe, UserPlus, TrendingUp } from "lucide-react";

export function BenefitsSection() {
  const features = [
    {
      icon: <Cable className="h-6 w-6 text-black" strokeWidth={1.5} />,
      title: "Amplify Insights",
      description:
        "Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.",
    },
    {
      icon: <Globe className="h-6 w-6 text-black" strokeWidth={1.5} />,
      title: "Control Your Global Presence",
      description:
        "Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.",
    },
    {
      icon: <UserPlus className="h-6 w-6 text-black" strokeWidth={1.5} />,
      title: "Remove Language Barriers",
      description:
        "Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-black" strokeWidth={1.5} />,
      title: "Visualize Growth",
      description:
        "Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.",
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-20 max-w-3xl">
          <p className="mb-6 font-mono text-sm font-medium tracking-wide text-[#485C11]">
            Benefits
          </p>
          <h2 className="mb-6 font-serif text-5xl font-medium tracking-tight text-black md:text-6xl">
            We've cracked the code.
          </h2>
          <p className="text-lg text-[#929292]">
            Area provides real insights, without the data overload.
          </p>
        </div>

        {/* Grid de Features Responsivo */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="border-t border-[#E9E9E9] pt-6">
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="mb-4 font-serif text-xl font-medium text-black">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#929292]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Imagem inferior com bordas arredondadas */}
        <div className="mt-24 w-full overflow-hidden rounded-[40px] bg-zinc-100 shadow-lg">
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