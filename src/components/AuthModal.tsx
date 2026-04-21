import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User as UserIcon, Phone, MapPin, Loader2, ArrowRight, LogOut, Package, ClipboardCheck } from 'lucide-react';
import { auth, db } from '../lib/firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { doc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { user, userData, loading, refreshUserData } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  // Sync form data with userData when modal opens or isEditing starts
  useState(() => {
    if (userData) {
      setFormData({
        fullName: userData.fullName || '',
        phone: userData.phone || '',
        address: userData.address || '',
        city: userData.city || '',
        state: userData.state || '',
        zipCode: userData.zipCode || ''
      });
    }
  });

  const handleGoogleSignIn = async () => {
    try {
      setFormLoading(true);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user document exists, if not create it
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        uid: user.uid,
        email: user.email,
        fullName: user.displayName || '',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      }, { merge: true });
      
      await refreshUserData();
    } catch (error) {
      console.error("Auth error:", error);
    } finally {
      setFormLoading(false);
    }
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      setFormLoading(true);
      await updateDoc(doc(db, 'users', user.uid), {
        ...formData,
        updatedAt: serverTimestamp()
      });
      await refreshUserData();
      setIsEditing(false);
    } catch (error) {
      console.error("Update error:", error);
    } finally {
      setFormLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           onClick={onClose}
           className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-offwhite shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[90vh]"
        >
          <div className="p-8 border-b border-line flex justify-between items-center bg-white">
            <h2 className="serif text-2xl text-charcoal">
              {user ? (isEditing ? 'Completar Cadastro' : 'Minha Conta') : 'Boas-vindas'}
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <Loader2 className="animate-spin text-sage" size={32} />
                <p className="text-[10px] uppercase tracking-widest text-charcoal/40">Carregando...</p>
              </div>
            ) : !user ? (
              <div className="space-y-8">
                <div className="text-center space-y-2">
                  <p className="text-sm text-charcoal/60 font-light">
                    Entre para salvar seus endereços e acompanhar seus pedidos com elegância.
                  </p>
                </div>

                <div className="space-y-4">
                  <button 
                    onClick={handleGoogleSignIn}
                    disabled={formLoading}
                    className="w-full flex items-center justify-center space-x-3 border border-line bg-white py-4 px-6 hover:bg-black/[0.02] transition-all group"
                  >
                    {formLoading ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>
                        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                        <span className="text-xs uppercase tracking-widest font-bold">Continuar com Google</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-6 border-t border-line">
                  <p className="text-[9px] text-center text-charcoal/40 uppercase tracking-widest leading-loose">
                    Ao continuar, você concorda com nossos <br />
                    <span className="underline cursor-pointer">Termos de Uso</span> e <span className="underline cursor-pointer">Política de Privacidade</span>.
                  </p>
                </div>
              </div>
            ) : isEditing || !userData?.address ? (
              <form onSubmit={handleSaveProfile} className="space-y-6">
                <p className="text-[10px] uppercase tracking-widest text-sage font-bold mb-4">Informações de Entrega</p>
                
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Nome Completo</label>
                    <div className="relative">
                      <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20" size={16} />
                      <input 
                        required
                        type="text" 
                        value={formData.fullName}
                        onChange={e => setFormData({...formData, fullName: e.target.value})}
                        className="w-full bg-white border border-line p-4 pl-12 text-sm focus:border-sage focus:ring-0 transition-all outline-none"
                        placeholder="Ex: Maria Silvia"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">WhatsApp / Telefone</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20" size={16} />
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-white border border-line p-4 pl-12 text-sm focus:border-sage transition-all outline-none"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Endereço Completo</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20" size={16} />
                      <input 
                        required
                        type="text" 
                        value={formData.address}
                        onChange={e => setFormData({...formData, address: e.target.value})}
                        className="w-full bg-white border border-line p-4 pl-12 text-sm focus:border-sage transition-all outline-none"
                        placeholder="Rua, número, complemento e bairro"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Cidade</label>
                      <input 
                        required
                        type="text" 
                        value={formData.city}
                        onChange={e => setFormData({...formData, city: e.target.value})}
                        className="w-full bg-white border border-line p-4 text-sm focus:border-sage transition-all outline-none"
                        placeholder="Cidade"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">UF</label>
                      <input 
                        required
                        type="text" 
                        maxLength={2}
                        value={formData.state}
                        onChange={e => setFormData({...formData, state: e.target.value.toUpperCase()})}
                        className="w-full bg-white border border-line p-4 text-sm focus:border-sage transition-all outline-none"
                        placeholder="SP"
                      />
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={formLoading}
                  className="w-full bg-sage text-white py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-sage/90 transition-all flex items-center justify-center space-x-2"
                >
                  {formLoading ? <Loader2 className="animate-spin" size={16} /> : <span>Salvar Cadastro</span>}
                </button>
              </form>
            ) : (
              <div className="space-y-8">
                <div className="flex items-center space-x-4 p-4 bg-white border border-line">
                  <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center text-sage font-bold serif text-xl">
                    {user.displayName?.[0] || 'S'}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{userData?.fullName || user.displayName}</p>
                    <p className="text-[10px] text-charcoal/40 uppercase tracking-widest">{user.email}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-charcoal/40">Dados de Entrega</h4>
                      <button onClick={() => setIsEditing(true)} className="text-[10px] uppercase tracking-widest font-bold text-sage underline">Editar</button>
                    </div>
                    <div className="p-4 border border-line space-y-2 bg-white/50">
                      <p className="text-xs text-charcoal/70">{userData?.address}</p>
                      <p className="text-xs text-charcoal/70">{userData?.city}, {userData?.state}</p>
                      <p className="text-xs text-charcoal/70">{userData?.phone}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-charcoal/40">Meus Pedidos</h4>
                    <div className="p-12 border border-dashed border-line flex flex-col items-center justify-center space-y-4 grayscale opacity-40">
                      <Package size={24} />
                      <p className="text-[10px] uppercase tracking-widest">Nenhum pedido realizado</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleSignOut}
                  className="w-full flex items-center justify-center space-x-2 py-4 text-xs uppercase tracking-widest font-bold text-red-400 hover:text-red-500 transition-colors border border-red-400/20"
                >
                  <LogOut size={16} />
                  <span>Sair da Conta</span>
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
