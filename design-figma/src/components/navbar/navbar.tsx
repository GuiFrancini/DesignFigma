export function Navbar() {
  return (
    <div className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
      <nav className="flex w-[399px] h-[60px] gap-[27px] items-center rounded-full 
         bg-branco/30 px-6 py-5 backdrop-blur-[30px]"
     >

        <a href="#benefits" className="text-sm font-semibold
         text-preto transition-all duration-500 hover:text-cinza-escuro">
          Benefits
        </a>

        <a href="#specs" className="text-sm font-semibold
         text-preto transition hover:text-cinza-escuro">
          Specifications
        </a>

        <a href="#how-to" className="text-sm font-semibold
         text-preto transition hover:text-cinza-escuro">

             <span className="whitespace-nowrap">
               How-to
             </span>
         
        </a>

        <a href="#contactus" className="text-sm font-semibold
         text-preto transition hover:text-cinza-escuro">
             <span className="whitespace-nowrap">
              Contact Us
             </span>
        </a>
      </nav>
    </div>
  );
}