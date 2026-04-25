import { Product } from '../data/products';
import { useBag } from './BagContext';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const { addToBag, items } = useBag();

  const bagItem = items.find(item => item.product.id === product.id);
  const currentBagQuantity = bagItem ? bagItem.quantity : 0;
  const isOutOfStock = product.stock <= 0;
  const isLimitReached = currentBagQuantity >= product.stock;

  return (
    <div 
      className="group text-center cursor-pointer"
      onClick={() => onSelect(product)}
    >
      <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-white border border-line">
        <img 
          src={'/' + product.images[0]} 
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${product.imageStyle || 'group-hover:scale-105'} ${isOutOfStock ? 'opacity-40 grayscale' : ''}`}
          referrerPolicy="no-referrer"
        />
        {isOutOfStock && (
           <div className="absolute inset-0 flex items-center justify-center">
             <span className="text-[10px] uppercase tracking-widest font-bold bg-white/90 px-4 py-2 border border-forest/10 shadow-sm">Esgotado</span>
           </div>
        )}
        {!isOutOfStock && product.stock === 1 && (
           <div className="absolute top-2 left-2 z-10">
             <span className="text-[9px] uppercase tracking-widest font-medium bg-sage/90 text-white px-2 py-1 shadow-sm">Última Unidade</span>
           </div>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="serif text-[14px] font-normal leading-tight text-forest">{product.name}</h3>
        <p className="text-[13px] font-semibold text-sage">
          {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            if (!isOutOfStock && !isLimitReached) addToBag(product, product.colors[0]);
          }}
          disabled={isOutOfStock || isLimitReached}
          className={`mt-3 inline-block text-[10px] uppercase tracking-[0.5px] border-b pb-0.5 transition-all ${
            isOutOfStock || isLimitReached 
            ? 'border-transparent text-gray-400 cursor-not-allowed' 
            : 'border-forest/30 opacity-70 hover:opacity-100'
          }`}
        >
          {isOutOfStock ? 'Esgotado' : isLimitReached ? 'Limite atingido' : 'Adicionar à Sacola'}
        </button>
      </div>
    </div>
  );
}
