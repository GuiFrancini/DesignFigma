import esferasGesso from "../assets/images/esferasGesso.avif";

export function ImagemSection() {
  return (
    <section className="w-full bg-branco text-preto font-sans py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/*  esquerda */}
        <div className="w-full overflow-hidden rounded-[2.5rem] shadow-sm">
          <img 
            src={esferasGesso} 
            alt="Esferas de Gesso em Equilíbrio" 
            className="w-full h-full object-cover aspect-square md:aspect-[3/4] lg:aspect-square"
          />
        </div>

        {/* direita*/}
        
        <div className="flex flex-col justify-center max-w-xl md:pl-2 gap-12">
             <hr className="border-t-[0.5px] border-cinza-claro/60 w-full mb-20" />
          
          <blockquote className="text-2xl md:text-4xl lg:text-[32px] font-serif font-normal leading-[140%] tracking-tight text-preto">
            “I was skeptical, but Area has completely transformed the way I manage my business. 
            The data visualizations are so clear and intuitive, and the platform is so easy 
            to use. I can't imagine running my company without it.”
          </blockquote>
          
          {/* autor */}
          <div className="mt-8 flex flex-col space-y-1">
            <span className="font-sans text-sm font-bold tracking-tight text-preto">
              John Smith
            </span>
            <span className="font-mono text-[11px] font-medium tracking-wider text-cinza-oliva ">
              Head of Data
            </span>
             
          </div>
        </div>

      </div>
    </section>
  );
}