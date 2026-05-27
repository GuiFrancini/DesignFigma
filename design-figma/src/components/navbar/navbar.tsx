export function Navbar() {
  return (
    <div className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-6 rounded-full 
         bg-white/30 px-5 py-2.5 backdrop-blur-xl">

        <a href="#" className="text-sm font-semibold
         text-black transition-all duration-500 hover:text-[#929292]">
          Benefits
        </a>

        <a href="#" className="text-sm font-semibold
         text-black transition hover:text-[#929292]">
          Specifications
        </a>

        <a href="#" className="text-sm font-semibold
         text-black transition hover:text-[#929292]">
          How-to
        </a>

        <a href="#" className="text-sm font-semibold
         text-black transition hover:text-[#929292]">
          Contact Us
        </a>
      </nav>
    </div>
  );
}