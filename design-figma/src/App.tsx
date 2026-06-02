import { Header } from "./components/header/header";
import { Navbar } from "./components/navbar/navbar";
import { HeroSection } from "./sections/hero-section";
import { LogoSection } from "./sections/logo-section";
import { BenefitsSection } from "./sections/benefits-section";
import { BigPictureSection } from "./sections/bigpicture-section";
import { SpecsSection } from "./sections/specs-section";
import { ImagemSection } from "./sections/imagem-section";
import { HowToSection }  from "./sections/how-to-section";
import { ContactUsSection}  from "./sections/contactus-section";

export function App() {

  return (
    <div className="w-full min-h-screen bg-branco text-preto" >
      <Header />
      <Navbar />
      <main>
        <HeroSection />
        <LogoSection />
        <BenefitsSection />
        <BigPictureSection />
        <SpecsSection />
        <ImagemSection />
        <HowToSection />
        <ContactUsSection />
      </main> 
      </div>
  );
} 

 
export default App;
