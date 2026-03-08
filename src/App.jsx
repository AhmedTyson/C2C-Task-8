import TeamSection from './components/TeamSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="h-[76px] bg-[#2257e5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-full flex items-center justify-between">
          
          <div className="flex items-center gap-[6px]">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 26L26 8" stroke="white" strokeWidth="7" strokeLinecap="round" />
              <path d="M8 22L13.5 14" stroke="white" strokeWidth="7" strokeLinecap="round" />
            </svg>
            <span className="text-white font-bold text-[22px] tracking-tight ml-1.5">Startup</span>
          </div>

          <div className="hidden lg:flex items-center h-full text-white text-[14px] font-semibold">
            <a href="#home" className="h-full px-5 flex items-center transition-colors">Home</a>
            <a href="#services" className="h-full px-5 flex items-center transition-colors">Services</a>
            <a href="#pricing" className="h-full px-5 flex items-center transition-colors">Pricing</a>
            <a href="#team" className="h-full px-6 flex items-center bg-white/15">Team</a>
            <a href="#testimonial" className="h-full px-5 flex items-center transition-colors">Testimonial</a>
            <a href="#contact" className="h-full px-5 flex items-center transition-colors">Contact</a>
          </div>

          <div>
            <button className="bg-white text-[#2257e5] rounded px-[24px] py-[10px] text-[14px] font-bold hover:bg-gray-50 transition-colors">
              Get In Touch
            </button>
          </div>
        </div>
      </nav>

      <main>
        <TeamSection />
      </main>
    </div>
  );
}