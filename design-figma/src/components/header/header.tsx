import setinha from "../../assets/icons/setinha.svg";

export function Header() {
  return (
    <header className="w-full bg-branco px-6 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
 {/* div area  text-2xl font-normal tracking-tight text-black*/}
        <h1 className="w-[59px] h-[36x] text-[30px] font-medium leading-[120%] tracking-[-0.05em] text-black">
         <a href="#">Area </a>
        </h1>

 {/* botão*/}
       <button className="group flex h-[48px] w-[127px] items-center justify-center 
          gap-1 rounded-full bg-verde-oliva px-[22px] py-[14px] text-center 
          text-sm font-bold leading-[140%] tracking-[-0.025em] 
          text-white transition-colors duration-300 hover:bg-cinza-oliva">

              <span className="whitespace-nowrap">
                  Learn More 
              </span>
        

          <img 
            src={setinha} 
            alt="Seta" 
            className="w-[8px] h-[8px] transition-transform duration-300 
            ease-in-out group-hover:-translate-y-1" 
          />
          </button>
      </div>
    </header>
  );
}