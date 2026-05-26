import { Header } from "./components/header/header";
import { Navbar } from "./components/navbar/navbar";
import { HeroSection } from "./sections/hero-section";
import { LogoSection } from "./sections/logo-section";
import { BenefitsSection } from "./sections/benefits-section";

export function App() {
  return (
    <div className="w-full min-h-screen bg-white text-zinc-900" >
      <Header />
      <Navbar />
      <main>
        <HeroSection />
        <LogoSection />
        <BenefitsSection />
      </main> 
      </div>
  );
} 

export default App;
