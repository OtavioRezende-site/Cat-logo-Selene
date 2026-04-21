import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import BagDrawer from './components/BagDrawer';
import { PRODUCTS, Product } from './data/products';
import { motion, AnimatePresence } from 'motion/react';
import { BagProvider } from './context/BagContext';
import { AuthProvider } from './context/AuthContext';
import AuthModal from './components/AuthModal';

function AppContent() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const categories = ['Todos', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filteredProducts = activeCategory === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className={`min-h-screen ${selectedProduct || isAuthModalOpen ? 'overflow-hidden' : ''}`}>
      <Navbar onOpenAuth={() => setIsAuthModalOpen(true)} />
      
      <Hero />

      <main id="catalogo" className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-[11px] font-semibold text-charcoal/60 uppercase tracking-[2px] mb-4">Destaques da Temporada</h2>
          <div className="h-[1px] w-16 bg-line"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
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

        {/* Pagination / Load More (Placeholder) */}
        <div className="mt-24 flex justify-center">
          <button className="border border-chumbo px-12 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-chumbo hover:text-white transition-all duration-500">
            Carregar Mais
          </button>
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
