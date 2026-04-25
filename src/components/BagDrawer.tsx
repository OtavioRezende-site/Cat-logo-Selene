import { motion, AnimatePresence } from 'motion/react';
import { useBag } from './BagContext';
import { useAuth } from '../context/AuthContext';
import { X, Plus, Minus, Trash2, ShoppingBag, LogIn, CreditCard, QrCode } from 'lucide-react';
import { useState } from 'react';
import { getImagePath } from '../lib/imageUtils';

interface BagDrawerProps {
  onOpenAuth: () => void;
}

export default function BagDrawer({ onOpenAuth }: BagDrawerProps) {
  const { items, isOpen, setIsOpen, updateQuantity, removeFromBag, totalPrice, itemsCount } = useBag();
  const { user, userData } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState<'Pix' | 'Cartão'>('Pix');

  const handleCheckout = () => {
    if (!user || !userData?.address) {
      setIsOpen(false);
      onOpenAuth();
    } else {
      const paymentText = paymentMethod === 'Pix' 
        ? 'Pix' 
        : 'Cartão de Crédito (até 3x)';
        
      // THE WHATSAPP NUMBER GOES HERE (21986251006)
      const whatsappNumber = "5521986251006"; 
      
      const message = `✨ *Novo Pedido - Selene* ✨\n\n` +
        `👤 *Cliente:* ${userData.fullName}\n` +
        `📍 *Endereço:* ${userData.address}, ${userData.city}-${userData.state}\n` +
        `📱 *Contato:* ${userData.phone}\n\n` +
        `🛍️ *Itens:* \n${items.map(i => `• ${i.product.name} (${i.selectedColor}) (x${i.quantity}) - ${(i.product.price * i.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`).join('\n')}\n\n` +
        `💰 *Total:* ${totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n` +
        `💳 *Forma de Pagamento:* ${paymentText}\n\n` +
        `Aguardando confirmação para prosseguir! 🌙`;

      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[200]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-offwhite z-[201] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-line flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ShoppingBag size={20} className="text-sage" />
                <h2 className="serif text-2xl">Sua Sacola</h2>
                <span className="text-xs bg-sage text-white px-2 py-0.5 rounded-full font-medium">
                  {itemsCount}
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-4 text-forest/40">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="font-light tracking-wide">Sua sacola está vazia.</p>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-sage text-xs uppercase tracking-widest font-bold border-b border-sage pb-1"
                  >
                    Continuar Comprando
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                   {items.map((item) => (
                    <div key={`${item.product.id}-${item.selectedColor}`} className="flex space-x-4 border-b border-line pb-6">
                      <div className="w-24 h-24 bg-white border border-line flex-shrink-0">
                        <img
                          src={getImagePath((item.product.colorImages && item.product.colorImages[item.selectedColor]) || item.product.images[0])}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xs uppercase tracking-wider font-semibold text-forest">
                              {item.product.name}
                            </h3>
                            <p className="text-[10px] text-forest/40 uppercase tracking-widest mt-1">
                              {item.selectedColor} • {item.product.category}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromBag(item.product.id, item.selectedColor)}
                            className="text-forest/30 hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center border border-line rounded-sm">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.selectedColor, -1)}
                              className="p-1.5 hover:bg-black/5 transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-8 text-center text-xs font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.selectedColor, 1)}
                              disabled={item.quantity >= item.product.stock}
                              className={`p-1.5 transition-colors ${item.quantity >= item.product.stock ? 'opacity-20 cursor-not-allowed' : 'hover:bg-black/5'}`}
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-sage">
                              {(item.product.price * item.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </p>
                            {item.quantity >= item.product.stock && (
                              <p className="text-[9px] text-orange-600 uppercase font-bold mt-1">Limite atingido</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Payment & Footer */}
            {items.length > 0 && (
              <div className="p-8 border-t border-line bg-white/50 space-y-6">
                {/* Payment Method Selection */}
                <div className="space-y-3">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-forest/40">Forma de Pagamento</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => setPaymentMethod('Pix')}
                      className={`flex items-center justify-center space-x-2 py-3 border transition-all ${paymentMethod === 'Pix' ? 'border-sage bg-sage/5 text-sage' : 'border-line text-forest/40'}`}
                    >
                      <QrCode size={14} />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Pix</span>
                    </button>
                    <button 
                      onClick={() => setPaymentMethod('Cartão')}
                      className={`flex items-center justify-center space-x-2 py-3 border transition-all ${paymentMethod === 'Cartão' ? 'border-sage bg-sage/5 text-sage' : 'border-line text-forest/40'}`}
                    >
                      <CreditCard size={14} />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Cartão (3x)</span>
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center text-forest pt-4 border-t border-line/40">
                  <span className="text-xs uppercase tracking-[0.2em] font-light">Subtotal</span>
                  <span className="text-xl serif">
                    {totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-sage text-white py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-sage/90 transition-all shadow-lg hover:shadow-sage/20 flex items-center justify-center space-x-2"
                >
                  {!user || !userData?.address ? <LogIn size={14} /> : null}
                  <span>{!user ? 'Entre para comprar' : !userData?.address ? 'Completar Cadastro' : 'Finalizar via WhatsApp'}</span>
                </button>
                <div className="text-center">
                   <p className="text-[10px] text-forest/40 uppercase tracking-widest">
                     Taxas e frete calculados no checkout
                   </p>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

