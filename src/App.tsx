import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import BagDrawer from './components/BagDrawer';
import { PRODUCTS, Product } from './data/products';
import { motion, AnimatePresence } from 'motion/react';
import { BagProvider } from './components/BagContext';
import { AuthProvider } from './context/AuthContext';
import AuthModal from './components/AuthModal';
import SearchModal from './components/SearchModal';
import { ChatBot } from './components/ChatBot';

function AppContent() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [activeSubcategory, setActiveSubcategory] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const categories = ['Todos', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const subcategoriesMap: { [key: string]: string[] } = {
    'Colares': ['Todos', ...Array.from(new Set(PRODUCTS.filter(p => p.category === 'Colares' && p.subcategory).map(p => p.subcategory as string)))]
  };

  const filteredProducts = activeCategory === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => {
        const categoryMatch = p.category === activeCategory;
        if (!categoryMatch) return false;
        if (activeSubcategory === 'Todos') return true;
        return p.subcategory === activeSubcategory;
      });

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setActiveSubcategory('Todos');
  };

  return (
    <div className={`min-h-screen ${selectedProduct || isAuthModalOpen || isSearchOpen ? 'overflow-hidden' : ''}`}>
      <Navbar 
        onOpenAuth={() => setIsAuthModalOpen(true)} 
        onOpenSearch={() => setIsSearchOpen(true)}
      />
      
      <Hero onSelectProduct={setSelectedProduct} />

      <main id="catalogo" className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-[11px] font-semibold text-forest/60 uppercase tracking-[2px] mb-4">Destaques da Temporada</h2>
          <div className="h-[1px] w-16 bg-line"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <div className="flex flex-wrap justify-center gap-4 px-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-2 text-[10px] tracking-[0.2em] uppercase transition-all duration-300 border ${
                  activeCategory === cat 
                  ? 'bg-sage border-sage text-white' 
                  : 'bg-transparent border-gray-200 text-gray-500 hover:border-chumbo'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Subcategory Filters */}
          <AnimatePresence>
            {subcategoriesMap[activeCategory] && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-wrap justify-center gap-3 px-4"
              >
                {subcategoriesMap[activeCategory].map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setActiveSubcategory(sub)}
                    className={`px-4 py-1.5 text-[9px] tracking-[0.1em] uppercase transition-all duration-300 border rounded-full ${
                      activeSubcategory === sub 
                      ? 'bg-chumbo border-chumbo text-white' 
                      : 'bg-white border-gray-200 text-gray-400 hover:border-sage hover:text-sage'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} onSelect={setSelectedProduct} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      {/* Brand Ethos / Features Section */}
      <section className="bg-offwhite py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="space-y-4">
              <h3 className="serif text-xl">Curadoria Exclusiva</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed px-4">
                Cada peça é selecionada com olhar minucioso para trazer o que há de mais refinado no mundo das semijoias.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="serif text-xl">Banho Premium</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed px-4">
                Utilizamos processos de galvanoplastia de alta tecnologia para garantir o brilho eterno e a durabilidade da sua peça.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="serif text-xl">Design Autêntico</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed px-4">
                Equilíbrio perfeito entre as tendências globais e a elegância clássica que nunca sai de moda.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
            <ProductDetail 
                product={selectedProduct} 
                onClose={() => setSelectedProduct(null)} 
            />
        )}
      </AnimatePresence>

      <BagDrawer onOpenAuth={() => setIsAuthModalOpen(true)} />
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onSelectProduct={setSelectedProduct}
      />
      <ChatBot />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BagProvider>
        <AppContent />
      </BagProvider>
    </AuthProvider>
  );
}
