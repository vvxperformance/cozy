
import React, { useState } from 'react';

interface FooterProps {
  onNavigateInfo: (title: string, content: string) => void;
  onNavigateCategory: (cat: string) => void;
  onNotify: (msg: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateInfo, onNavigateCategory, onNotify }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email || !email.includes('@')) {
      onNotify("Please enter a valid email");
      return;
    }
    onNotify("Subscribed to Newsletter!");
    setEmail('');
  };

  return (
    <footer className="bg-slate-800 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-[#5E9E94] rounded-lg flex items-center justify-center text-white">
              <i className="fa-solid fa-spa"></i>
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-2xl font-bold tracking-tight">
                Cozy<span className="text-[#5E9E94]">Core</span>
              </span>
              <span className="text-[8px] font-bold tracking-[0.2em] text-slate-400 mt-1 uppercase">Shop Comfortably</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Dedicated to creating peaceful living environments through innovative home solutions. Quality you can feel, design you can love.
          </p>
          <div className="flex space-x-4">
            <button onClick={() => onNotify("Connecting to Facebook...")} className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-[#5E9E94] transition-colors">
              <i className="fa-brands fa-facebook-f"></i>
            </button>
            <button onClick={() => onNotify("Connecting to Instagram...")} className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-[#5E9E94] transition-colors">
              <i className="fa-brands fa-instagram"></i>
            </button>
            <button onClick={() => onNotify("Connecting to Pinterest...")} className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-[#5E9E94] transition-colors">
              <i className="fa-brands fa-pinterest-p"></i>
            </button>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-[#5E9E94]">The Collection</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><button onClick={() => onNavigateCategory('Cleaning')} className="hover:text-white transition-colors">Living Space</button></li>
            <li><button onClick={() => onNavigateCategory('Kitchen')} className="hover:text-white transition-colors">Restful Kitchen</button></li>
            <li><button onClick={() => onNavigateCategory('Air Quality')} className="hover:text-white transition-colors">Pure Air Solutions</button></li>
            <li><button onClick={() => onNavigateCategory('All')} className="hover:text-white transition-colors">New Arrivals</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-[#5E9E94]">Support</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><button onClick={() => onNavigateInfo("Comfort Guarantee", "Your comfort is our top priority. If any CozyCore product doesn't meet your expectations for tranquility and ease-of-use within the first 30 days, we'll provide a full refund, no questions asked.")} className="hover:text-white transition-colors">Comfort Guarantee</button></li>
            <li><button onClick={() => onNavigateInfo("Shipping & Logistics", "We offer carbon-neutral shipping on all orders. Standard delivery typically arrives within 3-5 business days. You will receive a tracking link as soon as your order leaves our warehouse.")} className="hover:text-white transition-colors">Shipping & Logistics</button></li>
            <li><button onClick={() => onNavigateInfo("Privacy Circle", "Your data is treated with as much care as your home. We never sell your information and use bank-level encryption for all transactions. Our full policy is updated annually.")} className="hover:text-white transition-colors">Privacy Circle</button></li>
            <li><button onClick={() => onNotify("Connecting to a Comfort Expert...")} className="hover:text-white transition-colors">Contact Expert</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-[#5E9E94]">Newsletter</h4>
          <p className="text-slate-400 text-sm mb-4">Subscribe for comfort tips and early access.</p>
          <div className="flex">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email" 
              className="bg-slate-700 border-none rounded-l-lg px-4 py-3 text-sm focus:ring-1 focus:ring-[#5E9E94] w-full outline-none text-white"
            />
            <button 
              onClick={handleSubscribe}
              className="bg-[#5E9E94] px-4 py-3 rounded-r-lg hover:bg-[#4D827A] transition-colors"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-10 border-t border-slate-700 flex flex-col md:row justify-between items-center text-slate-500 text-xs text-center md:text-left">
        <p>&copy; 2024 CozyCore. Designing a better tomorrow, one room at a time.</p>
        <div className="flex space-x-6 mt-4 md:mt-0 text-slate-600">
          <button onClick={() => onNotify("Visa selected")} className="hover:text-[#5E9E94] transition-colors"><i className="fa-brands fa-cc-visa text-2xl"></i></button>
          <button onClick={() => onNotify("Mastercard selected")} className="hover:text-[#5E9E94] transition-colors"><i className="fa-brands fa-cc-mastercard text-2xl"></i></button>
          <button onClick={() => onNotify("PayPal selected")} className="hover:text-[#5E9E94] transition-colors"><i className="fa-brands fa-cc-paypal text-2xl"></i></button>
          <button onClick={() => onNotify("Apple Pay selected")} className="hover:text-[#5E9E94] transition-colors"><i className="fa-brands fa-cc-apple-pay text-2xl"></i></button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
