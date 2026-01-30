
import React from 'react';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onProductClick: (p: Product) => void;
  onAddToCart: (p: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductClick, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map(product => (
        <div 
          key={product.id}
          className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-[#5E9E94]/10 transition-all duration-300 flex flex-col"
        >
          <div className="relative aspect-square overflow-hidden cursor-pointer" onClick={() => onProductClick(product)}>
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#5E9E94] text-[10px] font-bold uppercase rounded-full shadow-sm">
                {product.category}
              </span>
            </div>
            <button 
              className="absolute bottom-4 right-4 w-12 h-12 bg-[#5E9E94] rounded-full shadow-lg flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#4D827A]"
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>

          <div className="p-6 flex-grow flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h3 
                className="font-bold text-lg text-slate-800 group-hover:text-[#5E9E94] transition-colors cursor-pointer"
                onClick={() => onProductClick(product)}
              >
                {product.name}
              </h3>
              <div className="flex items-center text-[#5E9E94] text-sm">
                <i className="fa-solid fa-star mr-1"></i>
                <span className="text-slate-500 font-medium">{product.rating}</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm line-clamp-2 mb-4 flex-grow">
              {product.description}
            </p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
              <span className="text-xl font-bold text-slate-800">${product.price.toFixed(2)}</span>
              <button 
                onClick={() => onProductClick(product)}
                className="text-sm font-bold text-[#5E9E94] hover:text-[#4D827A] transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
