import { Product } from '../data/products';
import { motion } from 'motion/react';
import { X, ShoppingBag, ArrowLeft, Heart } from 'lucide-react';
import { useState } from 'react';
import { useBag } from '../context/BagContext';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetail({ product, onClose }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const { addToBag, items } = useBag();

  const bagItem = items.find(item => item.product.id === product.id);
  const currentBagQuantity = bagItem ? bagItem.quantity : 0;
  const isOutOfStock = product.stock <= 0;
  const isLimitReached = currentBagQuantity >= product.stock;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-offwhite overflow-y-auto"
    >
      {/* Mobile Sticky Header */}
      <div className="sticky top-0 z-10 bg-offwhite/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-line md:hidden">
        <button onClick={onClose} className="p-2 -ml-2">
          <ArrowLeft size={20} />
        </button>
        <div className="flex items-center space-x-4">
          <Heart size={18} />
          <ShoppingBag size={18} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto min-h-screen flex flex-col md:flex-row">
        
        {/* Gallery Section */}
        <div className="w-full md:w-3/5 bg-white p-6 md:p-12 lg:p-24 flex flex-col items-center justify-center space-y-8">
            <motion.div 
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full aspect-square max-w-2xl overflow-hidden rounded-sm"
            >
                <img 
                    src={selectedImage} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
                {isOutOfStock && (
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
                    <p className="border border-charcoal px-6 py-2 text-xs uppercase tracking-widest font-bold">Esgotado</p>
                  </div>
                )}
            </motion.div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 border transition-all ${selectedImage === img ? 'border-sage ring-1 ring-sage' : 'border-line opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`${product.name} view ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
        </div>

        {/* Info Section */}
        <div className="w-full md:w-2/5 p-8 md:p-16 lg:p-24 space-y-10">
          
          {/* Header for Desktop */}
          <div className="hidden md:flex justify-between items-start">
             <button onClick={onClose} className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-charcoal/60 hover:text-charcoal transition-colors">
                <ArrowLeft size={14} />
                <span>Voltar ao catálogo</span>
             </button>
             <div className="flex space-x-4">
               <button className="text-charcoal/60 hover:text-charcoal transition-colors">
                  <Heart size={20} />
               </button>
             </div>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <p className="text-[11px] uppercase tracking-[0.3em] text-sage font-semibold">
                  {product.category}
              </p>
              {!isOutOfStock && product.stock <= 3 && (
                <p className="text-[10px] text-orange-600 font-bold uppercase tracking-widest animate-pulse">
                  Restam apenas {product.stock} unidades
                </p>
              )}
            </div>
            <h1 className="serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] font-light">
                {product.name}
            </h1>
            <div className="flex items-center space-x-4">
              <p className="text-2xl font-medium text-sage">
                  {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </p>
              {isOutOfStock ? (
                 <span className="text-[10px] text-red-500 uppercase font-bold tracking-widest border border-red-500/20 px-2 py-0.5">Esgotado</span>
              ) : (
                <span className="text-[10px] text-charcoal/40 uppercase font-medium tracking-widest">Estoque: {product.stock} un.</span>
              )}
            </div>
          </div>

          <div className="space-y-8 pt-8 border-t border-line">
            {/* Description placeholder... */}
            <div className="space-y-4">
                <h4 className="text-[11px] uppercase tracking-widest font-bold">Descrição</h4>
                <p className="text-sm text-charcoal/70 leading-relaxed font-light">
                    Uma peça exclusiva da coleção Selene, banhada com as melhores camadas de metal nobre. 
                    Nossas peças são hipoalergênicas e livres de níquel, garantindo conforto e durabilidade excepcionais. 
                    O design minimalista permite que esta semijoia seja a protagonista de qualquer composição.
                </p>
            </div>

            <div className="space-y-4">
                <h4 className="text-[11px] uppercase tracking-widest font-bold">Detalhes Técnicos</h4>
                <ul className="text-xs text-charcoal/60 space-y-2 list-disc pl-4 font-light">
                    <li>Banho de alta qualidade (10 milésimos)</li>
                    <li>Verniz protetor antialérgico</li>
                    <li>Garantia perpétua no metal</li>
                </ul>
            </div>

            <div className="pt-10 flex flex-col space-y-4">
                <button 
                  onClick={() => addToBag(product)}
                  disabled={isOutOfStock || isLimitReached}
                  className={`w-full py-5 text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-sm ${
                    isOutOfStock || isLimitReached
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-sage text-white hover:bg-sage/90 shadow-sage/10'
                  }`}
                >
                    {isOutOfStock ? 'Esgotado' : isLimitReached ? 'Limite na Sacola Atingido' : 'Adicionar à Sacola'}
                </button>
                <button className="w-full border border-charcoal/20 text-charcoal py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-charcoal hover:text-white transition-all">
                    Comprar via WhatsApp
                </button>
            </div>
          </div>

          {/* Policy Snippets */}
          <div className="grid grid-cols-2 gap-6 pt-10">
            <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-tight">Envio Rápido</p>
                <p className="text-[10px] text-charcoal/50 leading-tight">Postagem em até 24h úteis para todo o Brasil.</p>
            </div>
            <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-tight">Troca Fácil</p>
                <p className="text-[10px] text-charcoal/50 leading-tight">Até 7 dias para troca após o recebimento.</p>
            </div>
          </div>

        </div>
      </div>

      <button 
        onClick={onClose}
        className="fixed top-8 right-8 hidden md:flex items-center justify-center w-12 h-12 bg-white/50 backdrop-blur-sm rounded-full border border-line hover:bg-white transition-all shadow-sm"
      >
        <X size={24} />
      </button>
    </motion.div>
  );
}
