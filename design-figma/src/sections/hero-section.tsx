import Ipad from "@/assets/images/ipad.png";
import Iphone from "@/assets/images/iphone.png";

export function HeroSection() {
  return (
    //<section className="border-b border-zinc-200 px-6 pb-20 pt-28">
     
     <section className="relative flex flex-col items-center pt-16 md:pt-24 pb-0 overflow-hidden">
       
        <h1
          className="mb-16 max-w-5xl text-center text-6xl md:text-[8rem] font-medium leading-nome tracking-tight text-black">
          Browse everything.
        </h1>

        <div className="relative w-full  px-4 md:px-8 max-w-[1400px]">
            <div className="absolute bottom-0 left-4 right-4 md:left-8 md:right-8 h-[60%] rounded-t-[40px] bg-[#8e9c78]">
            </div>
            <div className="relative z-10 mx-auto flex w-full max-w-5xl justify-center">
              <img
                 src={Ipad}
                 alt="Hero desktop"
                 className="hidden w-full object-contain drop-shadow-2xl md:block"
          />

              <img
                 src={Iphone}
                 alt="Hero mobile"
                 className="block w-full object-contain drop-shadow-2xl md:hidden"
          />
        </div>
      </div>
    </section>
  );
}