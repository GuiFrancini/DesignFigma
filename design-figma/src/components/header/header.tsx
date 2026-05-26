export function Header() {
  return (
    <header className="w-full bg-white px-6 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        <h1 className="text-2xl font-semibold tracking-tight text-black">
         <a href="#">Area </a>
        </h1>

        <button className="flex items-center gap-1 rounded-full bg-[#485c11] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#485c11]/90">
          Learn More <span className="text-xs font-bold leading-nome">↗</span>
        </button>
      </div>
    </header>
  );
}