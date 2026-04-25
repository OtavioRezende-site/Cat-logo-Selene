import { Product } from '../data/products';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, ArrowLeft, Heart, Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useBag } from './BagContext';
import { getImagePath } from '../lib/imageUtils';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetail({ product, onClose }: ProductDetailProps) {
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video', url: string }>({ 
    type: 'image', 
    url: getImagePath(product.images[0]) 
  });
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]);
  const { addToBag, items } = useBag();

  const allMedia = [
    ...product.images.map(img => ({ type: 'image' as const, url: getImagePath(img) })),
    ...(product.video ? [{ type: 'video' as const, url: getImagePath(product.video) }] : [])
  ];

  const currentIndex = allMedia.findIndex(m => m.url === selectedMedia.url);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % allMedia.length;
    setSelectedMedia(allMedia[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + allMedia.length) % allMedia.length;
    setSelectedMedia(allMedia[prevIndex]);
  };

  const bagItem = items.find(item => item.product.id === product.id && (item.selectedColor as string) === selectedColor);
  const currentBagQuantity = bagItem ? bagItem.quantity : 0;
  const isOutOfStock = product.stock <= 0;
  const isLimitReached = currentBagQuantity >= product.stock;

  const getColorLabel = (color: string) => {
    switch (color) {
      case 'Dourado': return 'Banho de Ouro';
      case 'Prata': return 'Banho de Prata';
      case 'Marrom': return 'Couro Marrom';
      case 'Preto': return 'Couro Preto';
      default: return color;
    }
  };

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
            <div className="relative w-full aspect-[3/4] max-w-2xl group touch-pan-y">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div 
                  key={selectedMedia.url}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_e, { offset, velocity }) => {
                    const swipeThreshold = 50;
                    if (offset.x < -swipeThreshold || velocity.x < -500) {
                      handleNext();
                    } else if (offset.x > swipeThreshold || velocity.x > 500) {
                      handlePrev();
                    }
                  }}
                  className="relative w-full h-full overflow-hidden rounded-sm bg-gray-50 flex items-center justify-center text-forest/40 cursor-grab active:cursor-grabbing"
                >
                    {selectedMedia.type === 'image' ? (
                      <img 
                          src={selectedMedia.url} 
                          alt={product.name} 
                          className={`w-full h-full object-cover pointer-events-none transition-transform duration-500 ${
                            product.imageStyle && selectedMedia.url === product.images[0]
                            ? product.imageStyle : ''
                          }`}
                          referrerPolicy="no-referrer"
                      />
                    ) : (
                      <video 
                        src={selectedMedia.url} 
                        controls 
                        autoPlay 
                        loop 
                        muted
                        playsInline
                        poster={product.videoPoster}
                        className="w-full h-full object-cover bg-stone-900 contrast-[1.05] saturate-[1.1]"
                      />
                    )}
                    {isOutOfStock && (
                      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center z-10 pointer-events-none">
                        <p className="border border-forest px-6 py-2 text-xs uppercase tracking-widest font-bold">Esgotado</p>
                      </div>
                    )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows - More discrete and transparent */}
              {allMedia.length > 1 && (
                <>
                  <button 
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-4 text-forest/30 hover:text-forest/70 transition-all z-20"
                  >
                    <ArrowLeft size={24} strokeWidth={1.5} />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-4 text-forest/30 hover:text-forest/70 transition-all z-20 rotate-180"
                  >
                    <ArrowLeft size={24} strokeWidth={1.5} />
                  </button>

                  {/* Desktop Index Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 z-20">
                    {allMedia.map((_, idx) => (
                      <div 
                        key={idx}
                        className={`h-1 transition-all rounded-full ${idx === currentIndex ? 'w-6 bg-sage' : 'w-1.5 bg-forest/20'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-4 overflow-x-auto pb-2 max-w-full">
              {product.images.map((img, idx) => (
                <button 
                  key={`img-${idx}`}
                  onClick={() => setSelectedMedia({ type: 'image', url: getImagePath(img) })}
                  className={`w-20 h-24 flex-shrink-0 border transition-all ${selectedMedia.type === 'image' && selectedMedia.url === getImagePath(img) ? 'border-sage ring-1 ring-sage' : 'border-line opacity-60 hover:opacity-100'}`}
                >
                  <img src={getImagePath(img)} alt={`${product.name} view ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
              {product.video && (
                <button 
                  onClick={() => setSelectedMedia({ type: 'video', url: product.video! })}
                  className={`w-20 h-24 flex-shrink-0 border transition-all relative group flex items-center justify-center bg-gray-100 ${selectedMedia.type === 'video' ? 'border-sage ring-1 ring-sage' : 'border-line opacity-60 hover:opacity-100'}`}
                >
                  {product.videoPoster ? (
                    <img src={product.videoPoster} alt="Video thumbnail" className="w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play size={24} className="text-forest" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <Play size={16} className="text-white drop-shadow-md" />
                  </div>
                  <span className="text-[8px] absolute bottom-1 uppercase tracking-tighter font-bold text-white drop-shadow-md">Vídeo</span>
                </button>
              )}
            </div>
        </div>

        {/* Info Section */}
        <div className="w-full md:w-2/5 p-8 md:p-16 lg:p-24 space-y-10">
          
          {/* Header for Desktop */}
          <div className="hidden md:flex justify-between items-start">
             <button onClick={onClose} className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-forest/60 hover:text-forest transition-colors">
                <ArrowLeft size={14} />
                <span>Voltar ao catálogo</span>
             </button>
             <div className="flex space-x-4">
               <button className="text-forest/60 hover:text-forest transition-colors">
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
                <p className={`text-[10px] font-bold uppercase tracking-widest animate-pulse ${product.stock === 1 ? 'text-sage' : 'text-orange-600'}`}>
                  {product.stock === 1 ? 'Última unidade disponível' : `Restam apenas ${product.stock} unidades`}
                </p>
              )}
            </div>
            <h1 className="serif text-4xl md:text-5xl lg:text-6xl text-forest leading-[1.1] font-light">
                {product.name}
            </h1>
            <div className="flex items-center space-x-4">
              <p className="text-2xl font-medium text-sage">
                  {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </p>
              {isOutOfStock ? (
                 <span className="text-[10px] text-red-500 uppercase font-bold tracking-widest border border-red-500/20 px-2 py-0.5">Esgotado</span>
              ) : (
                <span className="text-[10px] text-forest/40 uppercase font-medium tracking-widest">Estoque: {product.stock} un.</span>
              )}
            </div>
          </div>

          <div className="space-y-8 pt-8 border-t border-line">
            {/* Color Selection */}
            <div className="space-y-4">
              <h4 className="text-[11px] uppercase tracking-widest font-bold">Banho</h4>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => {
                      setSelectedColor(color);
                      if (product.colorImages && product.colorImages[color]) {
                        setSelectedMedia({ type: 'image', url: getImagePath(product.colorImages[color]) });
                      }
                    }}
                    className={`px-6 py-3 text-[10px] uppercase tracking-widest transition-all border ${
                      selectedColor === color
                        ? 'bg-sage border-sage text-white'
                        : 'border-line text-forest/60 hover:border-sage'
                    }`}
                  >
                    {getColorLabel(color)}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
                <h4 className="text-[11px] uppercase tracking-widest font-bold">Sobre a peça</h4>
                <p className="text-sm text-forest/70 leading-relaxed font-light">
                    {product.description || (
                      `Essa ${product.name.toLowerCase()} é aquela peça que não pode faltar no seu porta-joias. 
                      Com um brilho incrível e um design pensado para te acompanhar em todos os momentos, 
                      ela traz aquele toque de elegância descomplicada que a gente ama.`
                    )}
                </p>
                <p className="text-sm text-forest/70 leading-relaxed font-light">
                    Perfeita para usar sozinha ou montando aquele mix cheio de personalidade. 
                    Nossas peças são feitas para durar e brilhar junto com você.
                </p>
            </div>

            <div className="space-y-4">
                <h4 className="text-[11px] uppercase tracking-widest font-bold">Detalhes Técnicos</h4>
                <ul className="text-xs text-forest/60 space-y-2 list-disc pl-4 font-light">
                    {product.measurements && (
                      <>
                        <li>Comprimento: {product.measurements.length}</li>
                        <li>Extensor: {product.measurements.extender}</li>
                      </>
                    )}
                    {selectedColor === 'Dourado' ? (
                      <>
                        <li>Banho de Ouro 18k (8 milésimos)</li>
                        <li>Verniz Diamond para brilho extra</li>
                      </>
                    ) : selectedColor === 'Prata' ? (
                      <>
                        <li>Banho de Prata 925 (70 milésimos)</li>
                        <li>Verniz protetor de alta durabilidade</li>
                      </>
                    ) : (
                      <>
                        <li>Material de alta resistência e durabilidade</li>
                        <li>Acabamento artesanal</li>
                      </>
                    )}
                    <li>Hipoalergênico (livre de níquel)</li>
                    <li>Garantia de 3 meses para defeitos de fabricação</li>
                </ul>
            </div>

            <div className="pt-10 flex flex-col space-y-4">
                <button 
                  onClick={() => addToBag(product, selectedColor)}
                  disabled={isOutOfStock || isLimitReached}
                  className={`w-full py-5 text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-sm ${
                    isOutOfStock || isLimitReached
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-sage text-white hover:bg-sage/90 shadow-sage/10'
                  }`}
                >
                    {isOutOfStock ? 'Esgotado' : isLimitReached ? 'Limite na Sacola Atingido' : 'Adicionar à Sacola'}
                </button>
                <button className="w-full border border-forest/20 text-forest py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-forest hover:text-white transition-all">
                    Comprar via WhatsApp
                </button>
            </div>
          </div>

          {/* Policy Snippets */}
          <div className="grid grid-cols-2 gap-6 pt-10">
            <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-tight">Envio Rápido</p>
                <p className="text-[10px] text-forest/50 leading-tight">Postagem em até 24h úteis para todo o Brasil.</p>
            </div>
            <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-tight">Troca Fácil</p>
                <p className="text-[10px] text-forest/50 leading-tight">Até 7 dias para troca após o recebimento.</p>
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
