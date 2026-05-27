export function Header() {
  return (
    <header className="w-full bg-white px-6 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
 {/* div area  text-2xl font-normal tracking-tight text-black*/}
        <h1 className="text-[30px] font-medium leading-[120%] tracking-[-0.05em] text-black">
        
         <a href="#">Area </a>
        </h1>

 {/* div botão*/}
        <button className="flex h-12 w-[127px] items-center justify-center
         gap-[2px] rounded-full bg-[#485c11] px-[22px] py-[14px] text-center
         text-sm font-bold leading-[140%] tracking-[-0.025em]
         text-white transition hover:bg-[#8e8c78]/90">
          Learn More <span className="text-xs font-bold leading-nome">↗</span>
        </button>
      </div>
    </header>
  );
}