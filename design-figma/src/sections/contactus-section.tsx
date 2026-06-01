import { Button } from '../components/ui/button';

export function ContactUsSection() {
  return (
    <section className="w-full bg-white text-black font-sans pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Bloco Central: Connect with us */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-28">
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-neutral-900 mb-6">
            Connect with us
          </h2>
          
          <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
            Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.
          </p>
          
          <Button 
            className="bg-[#44531a] hover:bg-[#374415] text-white rounded-full px-8 py-6 text-sm font-medium transition-colors border-none shadow-none flex items-center gap-1.5"
          >
            Learn More <span className="text-xs font-sans">↗</span>
          </Button>
        </div>

        {/* Linha Divisória Fina */}
        <hr className="border-t border-neutral-200 w-full mb-10" />

        {/* Links de Navegação do Rodapé */}
        <div className="flex flex-wrap gap-8 md:gap-12 text-sm font-semibold text-neutral-900 mb-20">
          <a href="#benefits" className="hover:opacity-70 transition-opacity">
            Benefits
          </a>
          <a href="#specifications" className="hover:opacity-70 transition-opacity">
            Specifications
          </a>
          <a href="#how-to" className="hover:opacity-70 transition-opacity">
            How-to
          </a>
        </div>

        {/* Linha Final: Código de Copyright, Logo e Direitos */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-xs md:text-sm text-[#7a8a66] font-medium">
          
          {/* Lado Esquerdo: Logo e Ano */}
          <div className="flex items-center gap-4">
            {/* Ícone Geométrico Minimalista (Símbolo da Marca) */}
            <svg 
              width="20" 
              height="32" 
              viewBox="0 0 20 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
            >
              {/* Cabeça/Topo */}
              <rect x="8" y="0" width="4" height="6" fill="currentColor" />
              {/* Corpo Central */}
              <rect x="8" y="9" width="4" height="12" fill="currentColor" />
              {/* Braço Esquerdo */}
              <path d="M3 11L7 13V17L3 14V11Z" fill="currentColor" />
              {/* Braço Direito */}
              <path d="M17 11L13 13V17L17 14V11Z" fill="currentColor" />
              {/* Perna Esquerda */}
              <path d="M8 23L5 32H9L10 23H8Z" fill="currentColor" />
              {/* Perna Direita */}
              <path d="M12 23L15 32H11L10 23H12Z" fill="currentColor" />
            </svg>
            
            <span className="tracking-wide">© Area. 2025</span>
          </div>
          
          {/* Lado Direito: All Rights Reserved */}
          <div className="tracking-wide sm:text-right">
            All Rights Reserved
          </div>
          
        </div>

      </div>
    </section>
  );
}