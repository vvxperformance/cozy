
import React from 'react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onHomeClick: () => void;
  onNavigateInfo: (title: string, content: string) => void;
  onNotify: (msg: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick, onHomeClick, onNavigateInfo, onNotify }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <button onClick={onHomeClick} className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-[#5E9E94] rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110">
            <i className="fa-solid fa-spa text-xl"></i>
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="text-2xl font-bold tracking-tight text-[#5E9E94]">
              Cozy<span className="text-slate-800">Core</span>
            </span>
            <span className="text-[8px] font-bold tracking-[0.2em] text-slate-400 mt-1 uppercase">Shop Comfortably</span>
          </div>
        </button>

        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={onHomeClick} className="text-sm font-semibold text-slate-600 hover:text-[#5E9E94] transition-colors">Collection</button>
          <button 
            onClick={() => onNavigateInfo("Our Mission", "At CozyCore, our mission is to redefine the home experience. We don't just sell appliances; we sell time, peace, and moments of serenity. Each product is selected for its ability to reduce friction in your daily life.")} 
            className="text-sm font-semibold text-slate-600 hover:text-[#5E9E94] transition-colors"
          >
            Our Mission
          </button>
          <button 
            onClick={() => onNavigateInfo("Comfort Guide", "Achieving home harmony is an art. Our Comfort Guide covers everything from ideal humidity levels to ergonomic kitchen layouts. Start your journey to a stress-free environment here.")}
            className="text-sm font-semibold text-slate-600 hover:text-[#5E9E94] transition-colors"
          >
            Comfort Guide
          </button>
          <button 
            onClick={() => onNotify("Opening Support Center...")}
            className="text-sm font-semibold text-slate-600 hover:text-[#5E9E94] transition-colors"
          >
            Support
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => onNotify("Search functionality coming soon!")}
            className="p-2 text-slate-400 hover:text-[#5E9E94] transition-colors"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button 
            onClick={onCartClick}
            className="relative p-2 text-slate-800 hover:text-[#5E9E94] transition-colors"
          >
            <i className="fa-solid fa-bag-shopping text-xl"></i>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#5E9E94] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
