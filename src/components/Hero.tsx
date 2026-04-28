import { motion } from 'motion/react';
import { PRODUCTS, Product } from '../data/products';

interface HeroProps {
  onSelectProduct: (product: Product) => void;
}

export default function Hero({ onSelectProduct }: HeroProps) {
  const featuredProduct = PRODUCTS.find(p => p.id === 'cj-1');

  const handleClick = () => {
    if (featuredProduct) {
      onSelectProduct(featuredProduct);
    }
  };

  return (
    <section 
      className="relative h-[260px] md:h-[400px] w-full flex bg-[#F0EFEA] border-b border-line items-center overflow-hidden cursor-pointer group"
      onClick={handleClick}
    >
      {/* Content */}
      <div className="w-1/2 px-10 md:px-20 z-10 transition-transform duration-500 group-hover:translate-x-2">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="serif text-4xl md:text-5xl font-light mb-4 leading-tight text-forest"
        >
          {featuredProduct ? featuredProduct.name : 'Seu brilho, sua essência.'}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-forest/70 text-sm md:text-md mb-6 font-light"
        >
          {featuredProduct 
            ? 'O equilíbrio perfeito entre sofisticação e cor. Cristais cravejados em formato de gota.' 
            : 'Peças pensadas para te acompanhar em em cada momento com leveza e estilo.'}
        </motion.p>
        
        <div className="mt-4">
          <span className="text-[10px] uppercase tracking-[3px] border-b border-forest/30 pb-1 group-hover:border-forest transition-colors">
            Ver Detalhes
          </span>
        </div>
      </div>

      {/* Image / Gray Area */}
      <div className="w-1/2 h-full bg-[#E5E4E0] border-l border-line flex items-center justify-center overflow-hidden relative">
        <img 
          src={featuredProduct ? `${import.meta.env.BASE_URL}${featuredProduct.images[0]}` : "https://picsum.photos/seed/jewelry-hero-dark/1200/800?grayscale"}
          alt="Editorial"
          className="w-full h-full object-cover object-center md:object-bottom opacity-60 mix-blend-multiply transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <span className="absolute inset-0 flex items-center justify-center serif italic text-forest/20 text-3xl pointer-events-none uppercase tracking-widest opacity-40 group-hover:opacity-60 transition-opacity">
          {featuredProduct ? featuredProduct.name : 'Editorial: Nova Coleção'}
        </span>
      </div>
    </section>
  );
}
