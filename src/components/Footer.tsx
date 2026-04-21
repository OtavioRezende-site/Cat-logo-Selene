import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-chumbo text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="serif text-4xl">Selene</h2>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Elevando a sua essência através de peças minimalistas e atemporais. 
              Feito para mulheres que valorizam cada detalhe.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sage transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-sage transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold border-b border-white/10 pb-2">Sobre a Selene</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Nossa História</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Políticas de Troca</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cuidados com a Peça</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Customers */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold border-b border-white/10 pb-2">Atendimento</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light text">
              <li className="flex items-center space-x-3">
                <Phone size={14} />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={14} />
                <span>contato@selene.com.br</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={14} />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold border-b border-white/10 pb-2">Fique por dentro</h4>
            <p className="text-sm text-gray-400 font-light">Receba novidades e ofertas exclusivas da Selene.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-transparent border border-white/20 px-4 py-2 text-sm w-full focus:border-white transition-colors outline-none"
              />
              <button className="bg-white text-chumbo px-4 py-2 text-[10px] uppercase tracking-widest font-bold hover:bg-sage hover:text-white transition-colors">
                Assinar
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] uppercase tracking-widest text-gray-500">
            © 2024 Selene Semijoias. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix.png" alt="Pix" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
}
