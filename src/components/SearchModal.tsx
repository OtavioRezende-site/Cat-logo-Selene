import { motion, AnimatePresence } from 'motion/react';
import { Search as SearchIcon, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PRODUCTS, Product } from '../data/products';
import ProductCard from './ProductCard';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export default function SearchModal({ isOpen, onClose, onSelectProduct }: SearchModalProps) {
  const [query, setQuery] = useState('');
  
  const results = query.trim() === '' 
    ? [] 
    : PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.colors.some(c => c.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 8);

  useEffect(() => {
    if (isOpen) setQuery('');
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-offwhite/90 backdrop-blur-md z-[60]"
          />
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[70] pointer-events-none"
          >
            <div className="max-w-2xl mx-auto pt-20 px-6 pointer-events-auto">
              <div className="relative">
                <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-forest/40" size={20} />
                <input
                  autoFocus
                  type="text"
                  placeholder="O que você está procurando?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-white border-b-2 border-forest/10 py-6 pl-16 pr-16 text-xl serif focus:outline-none focus:border-sage transition-colors placeholder:text-forest/20"
                />
                <button 
                  onClick={onClose}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-forest/40 hover:text-forest transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Results */}
              <div className="mt-8">
                {results.length > 0 ? (
                  <div className="space-y-8">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-forest/40">Resultados da busca</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {results.map((product) => (
                        <div 
                          key={product.id} 
                          onClick={() => {
                            onSelectProduct(product);
                            onClose();
                          }}
                          className="cursor-pointer group"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-20 aspect-[3/4] overflow-hidden bg-gray-50 border border-gray-100">
                              <img 
                                src={`${import.meta.env.BASE_URL}${product.images[0]}`} 
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-forest group-hover:text-sage transition-colors line-clamp-1">{product.name}</h4>
                              <p className="text-xs text-forest/60 mt-1 uppercase tracking-wider">{product.category}</p>
                              <p className="text-xs font-semibold mt-1">R$ {product.price.toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : query.trim() !== '' ? (
                  <div className="text-center py-20">
                    <p className="serif text-lg text-forest/60">Nenhuma peça encontrada para "{query}"</p>
                    <p className="text-xs text-forest/40 mt-2 uppercase tracking-widest">Tente usar outros termos</p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-forest/40">Sugestões de busca</p>
                    <div className="flex flex-wrap gap-3">
                      {['Colares', 'Pulseira de Pérolas', 'Boho', 'Prata', 'Dourado'].map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setQuery(tag)}
                          className="px-4 py-2 border border-forest/10 text-[10px] uppercase tracking-widest hover:border-sage hover:text-sage transition-colors"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
