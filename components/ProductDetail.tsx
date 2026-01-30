
import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import { getSmartPitch } from '../services/geminiService';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onBack: () => void;
  onNotify: (msg: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onAddToCart, onBack, onNotify }) => {
  const [aiPitch, setAiPitch] = useState<string>('');
  const [isLoadingPitch, setIsLoadingPitch] = useState(true);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const fetchPitch = async () => {
      setIsLoadingPitch(true);
      const pitch = await getSmartPitch(product.name, product.description);
      setAiPitch(pitch);
      setIsLoadingPitch(false);
    };
    fetchPitch();
  }, [product]);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    onNotify(!isWishlisted ? "Added to Wishlist" : "Removed from Wishlist");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center text-slate-400 hover:text-[#5E9E94] transition-colors font-medium"
      >
        <i className="fa-solid fa-arrow-left mr-2"></i>
        Back to Gallery
      </button>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-[#EAF3F2]">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div 
                key={i} 
                className="aspect-square rounded-2xl overflow-hidden border border-slate-200 cursor-pointer hover:border-[#5E9E94] transition-all"
                onClick={() => onNotify("Loading high-res preview...")}
              >
                <img src={`https://picsum.photos/seed/${product.id}-${i}/300/300`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-2">
            <span className="text-[#5E9E94] font-bold uppercase tracking-wider text-xs">{product.category}</span>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-800 mb-4">{product.name}</h1>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex text-[#5E9E94]">
              {[1, 2, 3, 4, 5].map(i => (
                <i key={i} className={`fa-solid fa-star ${i > Math.floor(product.rating) ? 'text-slate-200' : ''}`}></i>
              ))}
            </div>
            <span className="text-slate-400 font-medium">{product.rating} / 5.0 (Comfort Certified)</span>
          </div>

          <div className="text-3xl font-bold text-slate-800 mb-8">${product.price.toFixed(2)}</div>

          <div className="bg-[#F8FBFA] border border-[#EAF3F2] rounded-2xl p-6 mb-8 relative overflow-hidden">
            <div className="absolute top-2 right-4 flex items-center space-x-1 opacity-40">
              <i className="fa-solid fa-leaf text-[#5E9E94]"></i>
              <span className="text-[10px] font-bold text-[#5E9E94] uppercase tracking-tighter">Cozy Assistant</span>
            </div>
            <h4 className="text-[#5E9E94] font-bold mb-2 flex items-center">
              <i className="fa-solid fa-spa mr-2"></i>
              Why It's a Cozy Choice
            </h4>
            {isLoadingPitch ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-2 bg-[#EAF3F2] rounded"></div>
                  <div className="h-2 bg-[#EAF3F2] rounded w-5/6"></div>
                </div>
              </div>
            ) : (
              <p className="text-slate-600 leading-relaxed text-sm italic">"{aiPitch}"</p>
            )}
          </div>

          <div className="mb-8">
            <h4 className="font-bold text-slate-800 mb-4">The Details</h4>
            <p className="text-slate-500 leading-relaxed">{product.description}</p>
          </div>

          <div className="mb-10">
            <h4 className="font-bold text-slate-800 mb-4">Comfort Features</h4>
            <ul className="grid grid-cols-2 gap-3">
              {product.features.map(f => (
                <li key={f} className="flex items-center text-sm text-slate-600">
                  <i className="fa-solid fa-circle-check text-[#5E9E94] mr-2"></i>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex space-x-4">
            <button 
              onClick={() => onAddToCart(product)}
              className="flex-grow bg-[#5E9E94] text-white py-4 rounded-2xl font-bold hover:bg-[#4D827A] transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#5E9E94]/20"
            >
              <i className="fa-solid fa-bag-shopping"></i>
              <span>Add to Cart</span>
            </button>
            <button 
              onClick={toggleWishlist}
              className={`w-14 h-14 border rounded-2xl flex items-center justify-center transition-all ${isWishlisted ? 'border-red-100 bg-red-50 text-red-500' : 'border-slate-200 text-slate-300 hover:text-[#5E9E94] hover:border-[#EAF3F2]'}`}
            >
              <i className={`fa-solid fa-heart ${isWishlisted ? 'animate-ping opacity-75' : ''}`}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
