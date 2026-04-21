import { motion } from 'motion/react';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { useBag } from '../context/BagContext';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  onOpenAuth: () => void;
}

export default function Navbar({ onOpenAuth }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemsCount, setIsOpen } = useBag();
  const { user } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-offwhite/95 backdrop-blur-sm border-b border-gray-100">
      {/* Announcement Bar */}
      <div className="bg-sage py-2 px-4 text-center">
        <p className="text-white text-[10px] tracking-[0.2em] uppercase font-medium">
          FRETE GRÁTIS EM COMPRAS ACIMA DE R$ 150
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-10">
        <div className="flex items-center justify-between h-20">
          
          {/* Desktop Links - Left (Empty or Socials?) */}
          <div className="hidden md:flex items-center space-x-10 flex-1">
            {/* Nav links removed per user request */}
          </div>

          {/* Logo - Centered */}
          <div className="flex-1 text-center">
            <a href="/" className="serif text-3xl tracking-[4px] uppercase hover:opacity-80 transition-opacity">
              Selene
            </a>
          </div>

          {/* Icons - Right */}
          <div className="flex items-center justify-end space-x-6 flex-1">
            <button className="hidden lg:flex items-center space-x-1 text-[11px] uppercase tracking-wider hover:text-sage transition-colors">
              <Search size={14} />
              <span>Busca</span>
            </button>
            <button 
              onClick={onOpenAuth}
              className="flex items-center space-x-1 text-[11px] uppercase tracking-wider hover:text-sage transition-colors"
            >
              <User size={14} className={user ? "text-sage" : ""} />
              <span>{user ? 'Minha Conta' : 'Conta'}</span>
            </button>
            <button 
              onClick={() => setIsOpen(true)}
              className="flex items-center space-x-1 text-[11px] uppercase tracking-wider hover:text-sage transition-colors relative"
            >
              <div className="relative">
                <ShoppingBag size={14} />
                {itemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-sage text-white text-[6px] flex items-center justify-center rounded-full">
                    {itemsCount}
                  </span>
                )}
              </div>
              <span>Sacola ({itemsCount})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-offwhite border-b border-gray-100 py-6 px-4 space-y-4"
        >
          <a href="#" className="block text-xs tracking-widest uppercase">Início</a>
          <a href="#colares" className="block text-xs tracking-widest uppercase">Colares</a>
          <a href="#pulseiras" className="block text-xs tracking-widest uppercase">Pulseiras</a>
          <a href="#brincos" className="block text-xs tracking-widest uppercase">Brincos</a>
          <a href="#aneis" className="block text-xs tracking-widest uppercase">Anéis</a>
        </motion.div>
      )}
    </nav>
  );
}
