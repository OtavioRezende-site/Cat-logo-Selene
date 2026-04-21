export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  images: string[];
  stock: number;
}

export const PRODUCTS: Product[] = [
  // COLARES DOURADOS
  { id: 'cd-1', name: 'Colar bolinhas trevo cravejado', price: 74.90, category: 'Colares Dourados', images: ['https://picsum.photos/seed/jewelry1/800/800', 'https://picsum.photos/seed/jewelry1-alt/800/800'], stock: 5 },
  { id: 'cd-2', name: 'Colar trevo texturizado elo português', price: 53.90, category: 'Colares Dourados', images: ['https://picsum.photos/seed/jewelry2/800/800', 'https://picsum.photos/seed/jewelry2-alt/800/800'], stock: 3 },
  { id: 'cd-3', name: 'Colar relicário concha', price: 69.90, category: 'Colares Dourados', images: ['https://picsum.photos/seed/jewelry3/800/800', 'https://picsum.photos/seed/jewelry3-alt/800/800'], stock: 8 },
  { id: 'cd-4', name: 'Colar estrela do mar', price: 87.90, category: 'Colares Dourados', images: ['https://picsum.photos/seed/jewelry4/800/800'], stock: 2 },
  { id: 'cd-5', name: 'Colar mini relicário', price: 102.90, category: 'Colares Dourados', images: ['https://picsum.photos/seed/jewelry5/800/800'], stock: 4 },
  { id: 'cd-6', name: 'Colar Cruz pérola cravejada', price: 116.90, category: 'Colares Dourados', images: ['https://picsum.photos/seed/jewelry6/800/800'], stock: 6 },
  { id: 'cd-7', name: 'Colar vários trevos', price: 116.90, category: 'Colares Dourados', images: ['https://picsum.photos/seed/jewelry7/800/800'], stock: 1 },
  { id: 'cd-8', name: 'Colar Espírito Santo', price: 119.90, category: 'Colares Dourados', images: ['https://picsum.photos/seed/jewelry8/800/800'], stock: 3 },
  { id: 'cd-9', name: 'Choker pérola barroca', price: 116.90, category: 'Colares Dourados', images: ['https://picsum.photos/seed/jewelry9/800/800'], stock: 5 },
  { id: 'cd-10', name: 'Colar charms', price: 140.90, category: 'Colares Dourados', images: ['https://picsum.photos/seed/jewelry10/800/800'], stock: 2 },
  { id: 'cd-11', name: 'Choker sol marrom', price: 82.90, category: 'Colares Dourados', images: ['https://picsum.photos/seed/jewelry11/800/800'], stock: 7 },
  { id: 'cd-12', name: 'Colar baguete pérola e coração', price: 95.90, category: 'Colares Dourados', images: ['https://picsum.photos/seed/jewelry12/800/800'], stock: 4 },
  { id: 'cd-13', name: 'Choker corações pérola', price: 106.90, category: 'Colares Dourados', images: ['https://picsum.photos/seed/jewelry13/800/800'], stock: 0 }, // Esgotado
  { id: 'cd-14', name: 'Colar gravatinha medalhas', price: 86.90, category: 'Colares Dourados', images: ['https://picsum.photos/seed/jewelry14/800/800'], stock: 3 },

  // PULSEIRAS BANHADAS A OURO
  { id: 'po-1', name: 'Pulseira estrelas dourada', price: 60.90, category: 'Pulseiras Douradas', images: ['https://picsum.photos/seed/jewelry15/800/800'], stock: 5 },
  { id: 'po-2', name: 'Pulseira charms praia', price: 71.90, category: 'Pulseiras Douradas', images: ['https://picsum.photos/seed/jewelry16/800/800'], stock: 10 },
  { id: 'po-3', name: 'Pulseira mini cristais quadrados e bolinhas', price: 74.90, category: 'Pulseiras Douradas', images: ['https://picsum.photos/seed/jewelry17/800/800'], stock: 2 },
  { id: 'po-4', name: 'Pulseira pérola', price: 74.90, category: 'Pulseiras Douradas', images: ['https://picsum.photos/seed/jewelry18/800/800'], stock: 5 },
  { id: 'po-5', name: 'Pulseira dupla concha e cristais', price: 74.90, category: 'Pulseiras Douradas', images: ['https://picsum.photos/seed/jewelry19/800/800'], stock: 4 },
  { id: 'po-6', name: 'Pulseira medalhas', price: 88.90, category: 'Pulseiras Douradas', images: ['https://picsum.photos/seed/jewelry20/800/800'], stock: 3 },
  { id: 'po-7', name: 'Pulseira dupla corrente e ponto de luz', price: 88.90, category: 'Pulseiras Douradas', images: ['https://picsum.photos/seed/jewelry21/800/800'], stock: 2 },
  { id: 'po-8', name: 'Pulseira pérolas sol', price: 72.90, category: 'Pulseiras Douradas', images: ['https://picsum.photos/seed/jewelry22/800/800'], stock: 6 },
  { id: 'po-9', name: 'Bracelete', price: 128.90, category: 'Pulseiras Douradas', images: ['https://picsum.photos/seed/jewelry23/800/800'], stock: 8 },
  { id: 'po-10', name: 'Pulseira tripla perolas', price: 77.90, category: 'Pulseiras Douradas', images: ['https://picsum.photos/seed/jewelry24/800/800'], stock: 5 },
  { id: 'po-11', name: 'Bracelete sol pérola', price: 79.90, category: 'Pulseiras Douradas', images: ['https://picsum.photos/seed/jewelry25/800/800'], stock: 4 },
  { id: 'po-12', name: 'Pulseira charms', price: 82.90, category: 'Pulseiras Douradas', images: ['https://picsum.photos/seed/jewelry26/800/800'], stock: 3 },

  // PULSEIRAS PRATA
  { id: 'pp-1', name: 'Pulseira dupla corrente e ponto de luz', price: 88.90, category: 'Pulseiras Prata', images: ['https://picsum.photos/seed/jewelry27/800/800'], stock: 4 },
  { id: 'pp-2', name: 'Pulseira medalhas', price: 88.90, category: 'Pulseiras Prata', images: ['https://picsum.photos/seed/jewelry28/800/800'], stock: 5 },
  { id: 'pp-3', name: 'Pulseira dupla concha e cristais', price: 74.90, category: 'Pulseiras Prata', images: ['https://picsum.photos/seed/jewelry19/800/800'], stock: 2 },
  { id: 'pp-4', name: 'Pulseira pérola', price: 74.90, category: 'Pulseiras Prata', images: ['https://picsum.photos/seed/jewelry18/800/800'], stock: 3 },
  { id: 'pp-5', name: 'Pulseira mini cristais quadrados e bolinhas', price: 74.90, category: 'Pulseiras Prata', images: ['https://picsum.photos/seed/jewelry17/800/800'], stock: 6 },
  { id: 'pp-6', name: 'Pulseira trevo madrepérola', price: 50.90, category: 'Pulseiras Prata', images: ['https://picsum.photos/seed/jewelry29/800/800'], stock: 10 },
  { id: 'pp-7', name: 'Pulseira sal grosso', price: 171.90, category: 'Pulseiras Prata', images: ['https://picsum.photos/seed/jewelry30/800/800'], stock: 1 },
  { id: 'pp-8', name: 'Pulseira regulável cristais verdes', price: 125.90, category: 'Pulseiras Prata', images: ['https://picsum.photos/seed/jewelry31/800/800'], stock: 2 },
  { id: 'pp-9', name: 'Bracelete sol pérola', price: 79.90, category: 'Pulseiras Prata', images: ['https://picsum.photos/seed/jewelry25/800/800'], stock: 3 },
  { id: 'pp-10', name: 'Bracelete', price: 128.90, category: 'Pulseiras Prata', images: ['https://picsum.photos/seed/jewelry23/800/800'], stock: 5 },

  // COLARES PRATA
  { id: 'cp-1', name: 'Lua madrepérola com bolinhas', price: 104.90, category: 'Colares Prata', images: ['https://picsum.photos/seed/jewelry32/800/800'], stock: 4 },
  { id: 'cp-2', name: 'Colar cristais', price: 104.90, category: 'Colares Prata', images: ['https://picsum.photos/seed/jewelry33/800/800'], stock: 3 },
  { id: 'cp-3', name: 'Colar trevo cravejado com bolinhas', price: 74.90, category: 'Colares Prata', images: ['https://picsum.photos/seed/jewelry34/800/800'], stock: 5 },
  { id: 'cp-4', name: 'Colar coração com pérolas', price: 74.90, category: 'Colares Prata', images: ['https://picsum.photos/seed/jewelry35/800/800'], stock: 2 },
  { id: 'cp-5', name: 'Colar mini relicário', price: 102.90, category: 'Colares Prata', images: ['https://picsum.photos/seed/jewelry5/800/800'], stock: 1 },
  { id: 'cp-6', name: 'Colar Espírito Santo', price: 119.90, category: 'Colares Prata', images: ['https://picsum.photos/seed/jewelry8/800/800'], stock: 4 },
  { id: 'cp-7', name: 'Choker Indiana bolinhas', price: 104.90, category: 'Colares Prata', images: ['https://picsum.photos/seed/jewelry36/800/800'], stock: 6 },
  { id: 'cp-8', name: 'Choker Gotinhas e pérolas', price: 104.90, category: 'Colares Prata', images: ['https://picsum.photos/seed/jewelry37/800/800'], stock: 3 },
  { id: 'cp-9', name: 'Colar gravatinha estrelas', price: 73.90, category: 'Colares Prata', images: ['https://picsum.photos/seed/jewelry38/800/800'], stock: 5 },
  { id: 'cp-10', name: 'Choker estrelas', price: 73.90, category: 'Colares Prata', images: ['https://picsum.photos/seed/jewelry39/800/800'], stock: 8 },

  // BRINCOS PRATA
  { id: 'bp-1', name: 'Trio coração cravejado', price: 168.90, category: 'Brincos Prata', images: ['https://picsum.photos/seed/jewelry40/800/800'], stock: 2 },
  { id: 'bp-2', name: 'Trio argola cravejada', price: 168.90, category: 'Brincos Prata', images: ['https://picsum.photos/seed/jewelry41/800/800'], stock: 4 },
  { id: 'bp-3', name: 'Trio quadradinho reto', price: 147.90, category: 'Brincos Prata', images: ['https://picsum.photos/seed/jewelry42/800/800'], stock: 3 },
  { id: 'bp-4', name: 'Trio quadradinho slim', price: 147.90, category: 'Brincos Prata', images: ['https://picsum.photos/seed/jewelry43/800/800'], stock: 5 },
  { id: 'bp-5', name: 'Trio bolinhas', price: 147.90, category: 'Brincos Prata', images: ['https://picsum.photos/seed/jewelry44/800/800'], stock: 7 },
  { id: 'bp-6', name: 'Trio argola gota', price: 168.90, category: 'Brincos Prata', images: ['https://picsum.photos/seed/jewelry45/800/800'], stock: 2 },
  { id: 'bp-7', name: 'Argola com pedra marrom oval', price: 67.90, category: 'Brincos Prata', images: ['https://picsum.photos/seed/jewelry46/800/800'], stock: 4 },
  { id: 'bp-8', name: 'Argola mix praia', price: 79.90, category: 'Brincos Prata', images: ['https://picsum.photos/seed/jewelry47/800/800'], stock: 3 },
  { id: 'bp-9', name: 'Duo argolinha pedra turquesa', price: 79.90, category: 'Brincos Prata', images: ['https://picsum.photos/seed/jewelry48/800/800'], stock: 1 },
  { id: 'bp-10', name: 'Argolinha geométrica círculo', price: 42.90, category: 'Brincos Prata', images: ['https://picsum.photos/seed/jewelry49/800/800'], stock: 10 },
  { id: 'bp-11', name: 'Argolinha geométrica losango', price: 42.90, category: 'Brincos Prata', images: ['https://picsum.photos/seed/jewelry50/800/800'], stock: 10 },
  { id: 'bp-12', name: 'Argolinha geométrica gota', price: 42.90, category: 'Brincos Prata', images: ['https://picsum.photos/seed/jewelry51/800/800'], stock: 10 },
  { id: 'bp-13', name: 'Argolinha mix medalhas', price: 77.90, category: 'Brincos Prata', images: ['https://picsum.photos/seed/jewelry52/800/800'], stock: 5 },
  { id: 'bp-14', name: 'Brinco orgânico pedra branca', price: 79.90, category: 'Brincos Prata', images: ['https://picsum.photos/seed/jewelry53/800/800'], stock: 4 },

  // BRINCOS DOURADOS
  { id: 'bd-1', name: 'Brinco orgânico pérola', price: 87.90, category: 'Brincos Dourados', images: ['https://picsum.photos/seed/jewelry54/800/800'], stock: 6 },
  { id: 'bd-2', name: 'Brinco folha de outono', price: 77.90, category: 'Brincos Dourados', images: ['https://picsum.photos/seed/jewelry55/800/800'], stock: 4 },
  { id: 'bd-3', name: 'Brinco grande orgânico', price: 82.90, category: 'Brincos Dourados', images: ['https://picsum.photos/seed/jewelry56/800/800'], stock: 3 },
  { id: 'bd-4', name: 'Brinco sol pérola', price: 82.90, category: 'Brincos Dourados', images: ['https://picsum.photos/seed/jewelry57/800/800'], stock: 5 },
  { id: 'bd-5', name: 'Brinco sol vazado', price: 67.90, category: 'Brincos Dourados', images: ['https://picsum.photos/seed/jewelry58/800/800'], stock: 2 },
  { id: 'bd-6', name: 'Brinco orgânico pedra oval marrom', price: 82.90, category: 'Brincos Dourados', images: ['https://picsum.photos/seed/jewelry59/800/800'], stock: 4 },
  { id: 'bd-7', name: 'Argola boho medalhas e pérolas', price: 91.90, category: 'Brincos Dourados', images: ['https://picsum.photos/seed/jewelry60/800/800'], stock: 3 },

  // ANÉIS PRATA
  { id: 'ap-1', name: 'Anel sol místico regulável', price: 93.90, category: 'Anéis Prata', images: ['https://picsum.photos/seed/jewelry61/800/800'], stock: 5 },
  { id: 'ap-2', name: 'Anel sol vazado regulável', price: 104.90, category: 'Anéis Prata', images: ['https://picsum.photos/seed/jewelry62/800/800'], stock: 4 },
  { id: 'ap-3', name: 'Anel max croissant regulável', price: 104.90, category: 'Anéis Prata', images: ['https://picsum.photos/seed/jewelry63/800/800'], stock: 3 },
  { id: 'ap-4', name: 'Anel coração regulável', price: 104.90, category: 'Anéis Prata', images: ['https://picsum.photos/seed/jewelry64/800/800'], stock: 2 },
  { id: 'ap-5', name: 'Anel tartaruga azul', price: 104.90, category: 'Anéis Prata', images: ['https://picsum.photos/seed/jewelry65/800/800'], stock: 1 },

  // COLARES BOHO
  { id: 'cb-1', name: 'Colar lenço marrom coração', price: 91.90, category: 'Colares Boho', images: ['https://picsum.photos/seed/jewelry66/800/800'], stock: 5 },
  { id: 'cb-2', name: 'Colar camurça coração marrom', price: 67.90, category: 'Colares Boho', images: ['https://picsum.photos/seed/jewelry67/800/800'], stock: 4 },

  // ANÉIS DOURADOS
  { id: 'ad-1', name: 'Anel solitário slim', price: 88.90, category: 'Anéis Dourados', images: ['https://picsum.photos/seed/jewelry68/800/800'], stock: 6 },
  { id: 'ad-2', name: 'Anel estrelas do mar regulável', price: 87.90, category: 'Anéis Dourados', images: ['https://picsum.photos/seed/jewelry69/800/800'], stock: 3 },
  { id: 'ad-3', name: 'Anel medalha sol regulável', price: 77.90, category: 'Anéis Dourados', images: ['https://picsum.photos/seed/jewelry70/800/800'], stock: 2 },
];

