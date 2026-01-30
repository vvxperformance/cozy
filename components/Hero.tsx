
import React from 'react';

interface HeroProps {
  onShopNow: () => void;
  onStoryClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopNow, onStoryClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#EAF3F2] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10 text-center md:text-left">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white text-[#5E9E94] text-xs font-bold uppercase tracking-widest shadow-sm">
            Shop Comfortably
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 leading-tight mb-6">
            Designing Your <span className="text-[#5E9E94]">Daily Peace</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            CozyCore brings harmony to your home with premium appliances that simplify your life and soothe your senses. Experience the art of comfortable living.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <button 
              onClick={onShopNow}
              className="px-8 py-4 bg-[#5E9E94] text-white font-bold rounded-xl shadow-xl shadow-[#5E9E94]/20 hover:bg-[#4D827A] transform hover:-translate-y-1 transition-all"
            >
              Browse Essentials
            </button>
            <button 
              onClick={onStoryClick}
              className="px-8 py-4 bg-white text-slate-800 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-all"
            >
              The CozyCore Story
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center md:justify-start space-x-6 text-slate-500">
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-leaf text-[#5E9E94]"></i>
              <span className="text-sm font-medium">Eco-Friendly</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-heart-pulse text-[#5E9E94]"></i>
              <span className="text-sm font-medium">Wellness Focused</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#5E9E94]/10 rounded-full blur-3xl -z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" 
            alt="Cozy Home Setting" 
            className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 border-8 border-white"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden lg:block border border-[#EAF3F2]">
            <div className="flex items-center space-x-4">
              <div className="bg-[#EAF3F2] p-3 rounded-xl text-[#5E9E94]">
                <i className="fa-solid fa-house-chimney-heart text-2xl"></i>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">Trusted Quality</p>
                <p className="text-[10px] text-slate-500 font-medium">Over 10k homes improved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
