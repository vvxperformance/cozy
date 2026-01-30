
import React, { useState, useRef, useEffect } from 'react';
import { Product } from '../types';
import { getAIAssistance } from '../services/geminiService';

interface AIAssistantProps {
  selectedProduct: Product | null;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ selectedProduct }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const context = selectedProduct ? selectedProduct.name : 'our cozy collection';
    const response = await getAIAssistance(context, userMsg);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'ai', text: response || 'I am currently finding some peace. Please try again in a moment.' }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white w-80 md:w-96 rounded-2xl shadow-2xl border border-[#EAF3F2] flex flex-col animate-slideUp overflow-hidden">
          <div className="bg-[#5E9E94] p-4 flex items-center justify-between text-white">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-spa"></i>
              </div>
              <div>
                <h4 className="font-bold text-sm">CozyCore Expert</h4>
                <p className="text-[10px] text-white/70">Ready to help you comfort-shop</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-grow h-80 overflow-y-auto p-4 space-y-4 bg-[#F8FBFA]"
          >
            {messages.length === 0 && (
              <div className="text-center text-slate-400 py-10">
                <i className="fa-solid fa-leaf text-3xl mb-3 block text-[#5E9E94]/20"></i>
                <p className="text-xs">How can I make your home more comfortable today?</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-[#5E9E94] text-white rounded-br-none' 
                  : 'bg-white text-slate-600 shadow-sm border border-[#EAF3F2] rounded-bl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-[#EAF3F2] rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-[#5E9E94]/40 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-[#5E9E94]/40 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-[#5E9E94]/40 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..."
              className="flex-grow bg-[#F8FBFA] border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-[#5E9E94]/20 outline-none"
            />
            <button 
              onClick={handleSend}
              className="bg-[#5E9E94] text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-[#4D827A] transition-colors"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-[#5E9E94] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#4D827A] hover:scale-110 transition-all group"
        >
          <i className="fa-solid fa-hand-holding-heart text-2xl"></i>
          <span className="absolute right-full mr-4 bg-slate-800 text-white px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Chat with Comfort Expert
          </span>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
