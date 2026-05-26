import Logo1 from "@/assets/images/logo1.png";
import Logo2 from "@/assets/images/logo2.png";
import Logo3 from "@/assets/images/logo3.png";
import Logo4 from "@/assets/images/logo4.png";
import Logo5 from "@/assets/images/logo5.png";
import Logo6 from "@/assets/images/logo6.png";

export function LogoSection() {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

  return (
    <section className="w-full bg-white px-6 pt-16 pb-8">
      <div className="mx-auto max-w-7xl">
       
        <p className="mb-10 text-sm font-medium text-[#929292]">
          Trusted by:
        </p>

        <div className="border-b border-[#E9E9E9] pb-16">
          <div className="flex flex-wrap items-center justify-between gap-8 sm:gap-6">
            
            {logos.map((logo, index) => (
              
              <div 
                key={index} 
                className="flex h-12 w-28 sm:w-36 items-center justify-center bg-white"
              >
                <img
                  src={logo}
                  alt={`Logo partner ${index + 1}`}
                  className="max-h-full max-w-full object-contain transition-opacity duration-300 hover:opacity-70"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}