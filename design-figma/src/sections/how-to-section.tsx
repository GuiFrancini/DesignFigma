import { Button } from "../components/ui/button";
import  MontanhaVerde from "../assets/images/montanhaVerde.avif"

interface numbersItem{
  id: string;
  title: string;
  description: string;
}


const numbers : numbersItem[] = [
  {
    id: '01',
    title: 'Get Started',
    description: 'With our intuitive setup, you’re up and running in minutes.',
  },
  {
    id: '02',
    title: 'Customize and Configure',
    description: 'Adapt Area to your specific requirements and preferences.',
  },
  {
    id: '03',
    title: 'Grow Your Business',
    description: 'Make informed decisions to exceed your goals.',
  },
];


export function HowToSection() {
  return (
    <section id="how-to" className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24 bg-white text-black font-sans">
      {/* linha divisoria superior */}
      <hr className="border-t-[0.5px] border-cinza-claro/60 w-full mb-12" />

      {/* titulo e button*/}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-neutral-900">
          Map Your Success
        </h2>
        
            <button className="flex h-[48px] w-[138px] items-center justify-center rounded-full 
            bg-verde-musgo text-preto font-sans text-sm font-semibold transition-all duration-300 
            hover:bg-cinza-oliva hover:text-branco shadow-none border-none">
            <span className="whitespace-nowrap">
              Discover More
             </span>           
          </button>         
        
      </div>

      {/* linha */}
      <hr className="border-t-[0.5px] border-cinza-claro/60 w-full mb-16" />

      {/* grid dos 3 passos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        {numbers.map((step) => (
          <div key={step.id} className="flex flex-col space-y-4">
            {/* Número grande  */}
            <span className="text-7xl md:text-8xl font-light text-neutral-400/70 tracking-tighter block leading-none select-none">
              {step.id}
            </span>
            
            {/* título do passo  */}
            <h3 className="text-xl md:text-2xl font-serif text-neutral-900 pt-2">
              {step.title}
            </h3>
            
            {/* Descrição do passo (Sans-serif muted) */}
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-xs">
              {step.description}
            </p>
          </div>
        ))}
      </div>

       <div className="mt-24 w-full overflow-hidden rounded-[40px] bg-zinc-100 shadow-lg">
          <img
            src={MontanhaVerde}
            alt="Landscape view showing growth"
            className="h-auto w-full object-cover"
          />
        </div>

    </section>
  );
}