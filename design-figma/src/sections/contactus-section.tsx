import { Button } from '../components/ui/button';
import setinha from "../assets/icons/setinha.svg";
import bonequinho from "../assets/icons/bonequinho.svg"; 

export function ContactUsSection() {
  return (
   <section id="contactus" className="w-full bg-branco text-preto font-sans pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* connect with us */}
       <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-28">
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-preto mb-6">
            Connect with us
          </h2>
          
          <p className="font-sans text-[#6F6F6F] text-sm md:text-base leading-relaxed mb-8 max-w-xl">
            Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.
          </p>
          
       <Button 
       onClick={() => window.open("https://www.figma.com/exit?url=https%3A%2F%2Fwww.figma.com%2Fsites", "_blank")}
       className="group bg-verde-oliva hover:bg-cinza-oliva text-branco rounded-full
        px-[230px] py-6 text-sm font-medium transition-colors border-none shadow-none flex
         items-center gap-1.5">
            Learn More

            <img 
              src={setinha} 
              alt="Seta" 
              className="w-[10px] h-[10px] transition-transform duration-300 ease-in-out group-hover:-translate-y-1" 
            />
            
          </Button>
        </div>

        {/* linha div fina */}
        <hr className="border-t border-cinza-claro w-full mb-12" />

        {/* Links do rodape */}
      <div className="flex flex-wrap gap-8 md:gap-12 text-sm font-bold text-preto mb-16">
          <a href="#benefits" className="hover:text-cinza-escuro transition-colors">
            Benefits
          </a>
          <a href="#specs" className="hover:text-cinza-escuro transition-colors">
            Specifications
          </a>
          <a href="#how-to" className="hover:text-cinza-escuro transition-colors">
            How-to
          </a>
        </div>

        {/* Código de Copyright, Logo e Direitos */}
        <div className="flex flex-col sm:flex-row justify-between
         items-start sm:items-end gap-6 text-xs md:text-sm text-cinza-oliva font-medium">
          
          {/* Lado Esquerdo: Logo e Ano */}
        <div className="flex items-end gap-3">
            <img 
              src={bonequinho} 
              alt="Logo Area" 
              className="w-9 h-15 object-contain" 
            />
            <span className="tracking-wide font-mono leading-none pb-[2px]">
              © Area. 2025
            </span>
          </div>
          <div className="tracking-wide sm:text-right font-mono leading-none pb-[2px]">
            All Rights Reserved
          </div>
          
        </div>

      </div>
    </section>
  );
}