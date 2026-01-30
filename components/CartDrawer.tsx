
import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, onUpdateQty, onCheckout }) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-[#F8FBFA]">
          <div className="flex items-center space-x-2">
            <i className="fa-solid fa-spa text-[#5E9E94]"></i>
            <h2 className="text-xl font-bold text-slate-800">Your Selection ({items.length})</h2>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-800">
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <div className="w-20 h-20 bg-[#EAF3F2] rounded-full flex items-center justify-center text-[#5E9E94]/40">
                <i className="fa-solid fa-couch text-4xl"></i>
              </div>
              <p className="text-slate-400 font-medium">Your cart is currently empty.</p>
              <button onClick={onClose} className="text-[#5E9E94] font-bold hover:underline">Find your comfort</button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex space-x-4 animate-fadeIn">
                <img src={item.image} className="w-20 h-20 rounded-xl object-cover border border-slate-100" alt={item.name} />
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h4 className="font-bold text-slate-800 text-sm">{item.name}</h4>
                    <button onClick={() => onRemove(item.id)} className="text-slate-300 hover:text-red-400 transition-colors">
                      <i className="fa-solid fa-trash-can text-xs"></i>
                    </button>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 mb-3">${item.price.toFixed(2)}</p>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                      <button 
                        onClick={() => onUpdateQty(item.id, -1)}
                        className="px-3 py-1 text-slate-400 hover:bg-slate-200 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3 text-xs font-bold text-slate-800">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQty(item.id, 1)}
                        className="px-3 py-1 text-slate-400 hover:bg-slate-200 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-slate-100 bg-[#F8FBFA]">
          <div className="flex justify-between mb-2">
            <span className="text-slate-400">Subtotal</span>
            <span className="text-slate-800 font-bold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-slate-400">Shipping</span>
            <span className="text-[#5E9E94] font-bold uppercase tracking-widest text-[10px]">Comfort Delivery (Free)</span>
          </div>
          <button 
            disabled={items.length === 0}
            onClick={onCheckout}
            className={`w-full py-4 rounded-xl font-bold shadow-lg transition-all transform ${items.length === 0 ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-[#5E9E94] text-white shadow-[#5E9E94]/10 hover:bg-[#4D827A] hover:-translate-y-1'}`}
          >
            Secure Checkout
          </button>
          <div className="flex items-center justify-center space-x-2 mt-4 text-slate-300">
            <i className="fa-solid fa-shield-halved text-[10px]"></i>
            <p className="text-[10px] uppercase tracking-widest font-bold">Encrypted & Secure</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
