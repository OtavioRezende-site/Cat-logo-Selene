import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-[260px] md:h-[400px] w-full flex bg-[#F0EFEA] border-b border-line items-center overflow-hidden">
      {/* Content */}
      <div className="w-1/2 px-10 md:px-20 z-10">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="serif text-4xl md:text-5xl font-light mb-4 leading-tight text-charcoal"
        >
          Elegância em cada detalhe.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-charcoal/70 text-sm md:text-md mb-6 font-light"
        >
          Descubra a nova coleção de semijoias exclusivas.
        </motion.p>
      </div>

      {/* Image / Gray Area */}
      <div className="w-1/2 h-full bg-[#E5E4E0] border-l border-line flex items-center justify-center overflow-hidden relative">
        <img 
          src="https://picsum.photos/seed/jewelry-hero-dark/1200/800?grayscale"
          alt="Editorial"
          className="w-full h-full object-cover opacity-60 mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
        <span className="absolute inset-0 flex items-center justify-center serif italic text-charcoal/20 text-3xl pointer-events-none">
          Editorial: Nova Coleção
        </span>
      </div>
    </section>
  );
}
