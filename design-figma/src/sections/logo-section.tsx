import Logo1 from "@/assets/images/logo1.png";
import Logo2 from "@/assets/images/logo2.png";
import Logo3 from "@/assets/images/logo3.png";
import Logo4 from "@/assets/images/logo4.png";
import Logo5 from "@/assets/images/logo5.png";
import Logo6 from "@/assets/images/logo6.png";

export function LogoSection() {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

  return (
    <section className="w-full bg-branco px-6 pt-16 pb-8">
      <div className="mx-auto max-w-7xl">
       
        <p className="mb-10 text-sm font-normal text-cinza-escuro">
          Trusted by:
        </p>

        <div className="border-b border-cinza-claro pb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6
          gap-8 items-center justify-items-center">
            
            {logos.map((logo, index) => (
              <div key={index} 
              className="flex h-12 items-center justify-center bg-branco">
                <img
                  src={logo}
                  alt={`Logo partner ${index + 1}`}
                  className="max-h-full max-w-full object-contain
                   transition-opacity duration-300 hover:opacity-70"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}