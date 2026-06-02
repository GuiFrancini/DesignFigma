import Ipad from "@/assets/images/ipad.png";
import Iphone from "@/assets/images/iphone.png";

export function HeroSection() {
  return (
    //<section className="border-b border-zinc-200 px-6 pb-20 pt-28">
    //md >768px lg xl 2xl 1024 1280 1536
     
     <section className="relative flex flex-col items-center pt-16 md:pt-24 pb-12 overflow-hidden bg-branco">
       
        <h1 className="mb-12 md:mb-20 max-w-5xl text-center text-5xl md:text-[7.5rem] font-serif leading-none tracking-tight text-preto">
          Browse everything.
        </h1>

        <div className="relative w-full max-w-[1200px] h-[240px] md:h-[520px] overflow-hidden px-4 md:px-0 ">
            <div className="absolute bottom-0 w-full h-[220px] md:h-[362px] rounded-[20px] md:rounded-[30px] bg-cinza-oliva z-0">
            </div>
            <div className="relative z-10 flex justify-center items-end w-full">
              <img
                 src={Ipad}
                 alt="Hero desktop"
                 className="hidden md:block w-full max-w-[907px]
                  h-auto rounded-[24px] drop-shadow-2xl object-contain"/>

               <img
                 src={Iphone}
                 alt="Hero mobile"
                 className="block w-full object-contain
                 drop-shadow-2xl md:hidden"/>
        </div>
      </div>
    </section>
  );
}