
import React, { useState, useEffect } from 'react';
import { Product, CartItem, View, InfoContent } from './types';
import { PRODUCTS, CATEGORIES } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [infoContent, setInfoContent] = useState<InfoContent | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const notify = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
    notify(`Added ${product.name} to cart!`);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToInfo = (title: string, content: string) => {
    setInfoContent({ title, content });
    setCurrentView('info');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCategory = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentView('home');
    setTimeout(() => {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-bounce">
          <div className="bg-slate-800 text-white px-6 py-3 rounded-full shadow-2xl flex items-center space-x-3 border border-[#5E9E94]/30">
            <i className="fa-solid fa-circle-check text-[#5E9E94]"></i>
            <span className="text-sm font-bold uppercase tracking-widest">{notification}</span>
          </div>
        </div>
      )}

      <Header 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)}
        onHomeClick={() => { setCurrentView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        onNavigateInfo={navigateToInfo}
        onNotify={notify}
      />

      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero 
              onShopNow={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} 
              onStoryClick={() => navigateToInfo("Our Story", "Founded on the principles of tranquility and efficiency, CozyCore has been transforming houses into homes since 2020. We believe that technology should be invisible, leaving only the feeling of comfort behind.")}
            />
            
            <div id="products" className="max-w-7xl mx-auto px-4 py-12">
              <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 md:mb-0">Curated Comfort</h2>
                <div className="flex space-x-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === cat 
                        ? 'bg-[#5E9E94] text-white shadow-md' 
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              
              <ProductGrid 
                products={filteredProducts} 
                onProductClick={handleProductClick} 
                onAddToCart={addToCart}
              />
            </div>
          </>
        )}

        {currentView === 'product' && selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            onAddToCart={addToCart}
            onBack={() => setCurrentView('home')}
            onNotify={notify}
          />
        )}

        {currentView === 'info' && infoContent && (
          <div className="max-w-4xl mx-auto px-4 py-20 animate-fadeIn">
            <button 
              onClick={() => setCurrentView('home')}
              className="mb-8 text-[#5E9E94] font-bold flex items-center hover:translate-x-[-4px] transition-transform"
            >
              <i className="fa-solid fa-arrow-left mr-2"></i>
              Back to Shopping
            </button>
            <h1 className="text-4xl font-extrabold text-slate-800 mb-8">{infoContent.title}</h1>
            <div className="prose prose-slate lg:prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-wrap">
                {infoContent.content}
              </p>
              <div className="mt-12 p-8 bg-[#EAF3F2] rounded-3xl border border-[#5E9E94]/10">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Need more help?</h3>
                <p className="text-slate-500 mb-6">Our comfort experts are available 24/7 to assist with your specific needs.</p>
                <button 
                  onClick={() => notify("Connecting to Support...")}
                  className="bg-[#5E9E94] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#4D827A] transition-all"
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer 
        onNavigateInfo={navigateToInfo}
        onNavigateCategory={navigateToCategory}
        onNotify={notify}
      />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onRemove={removeFromCart}
        onUpdateQty={updateQuantity}
        onCheckout={() => notify("Secure Checkout System Initialized...")}
      />

      <AIAssistant selectedProduct={selectedProduct} />
    </div>
  );
};

export default App;
