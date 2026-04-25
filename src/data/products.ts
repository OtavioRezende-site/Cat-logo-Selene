export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Colares' | 'Pulseiras' | 'Brincos' | 'Anéis' | 'Conjuntos';
  subcategory?: string;
  images: string[];
  video?: string;
  videoPoster?: string;
  stock: number;
  colors: ('Dourado' | 'Prata' | 'Marrom' | 'Preto' | 'Rosa' | 'Azul' | 'Lilás')[];
  colorImages?: { [key: string]: string };
  description?: string;
  measurements?: { length: string; extender: string };
  imageStyle?: string;
}

export const PRODUCTS: Product[] = [
  // COLARES
  {
    id: 'c-1',
    name: 'Colar bolinhas trevo cravejado',
    price: 74.90,
    category: 'Colares',
    images: ['/IMG-20260423-WA0225.jpg', '/IMG-20260423-WA0227.jpg', '/IMG-20260423-WA0229.jpg', '/IMG-20260423-WA0231.jpg', '/IMG-20260423-WA0233.jpg'],
    stock: 4,
    colors: ['Dourado', 'Prata'],
    description: 'Sabe aquele colar que a gente coloca e não quer mais tirar? Ele tem esse trevo delicado e todo cravejado que traz um brilho surreal para o colo.',
    measurements: { length: '40cm', extender: '5cm' }
  },
  {
    id: 'c-2',
    name: 'Colar trevo texturizado elo português',
    price: 53.90,
    category: 'Colares',
    images: ['/IMG-20260423-WA0238.jpg', '/IMG-20260423-WA0240.jpg'],
    stock: 3,
    colors: ['Dourado'],
    description: 'O elo português é um clássico que a gente ama, e esse pingente trevo com textura traz um charme rústico e chic ao mesmo tempo.',
    measurements: { length: '45cm', extender: '5cm' }
  },
  {
    id: 'c-3',
    name: 'Colar relicário concha',
    price: 69.90,
    category: 'Colares',
    images: ['/IMG-20260423-WA0250.jpg', '/IMG-20260423-WA0246.jpg', '/IMG-20260423-WA0248.jpg', '/IMG-20260423-WA0252.jpg', '/IMG-20260423-WA0254.jpg'],
    stock: 3,
    colors: ['Dourado'],
    description: 'Um relicário em formato de concha que é puro encanto. Perfeito para guardar momentos especiais.',
    measurements: { length: '45cm', extender: '5cm' }
  },
  {
    id: 'c-4',
    name: 'Colar Estrela do Mar',
    price: 87.90,
    category: 'Colares',
    images: ['/IMG-20260423-WA0261.jpg', '/IMG-20260423-WA0263.jpg', '/IMG-20260423-WA0265.jpg'],
    stock: 3,
    colors: ['Dourado'],
    description: 'Sinta a vibração do oceano com este colar estrela do mar.',
    measurements: { length: '45cm', extender: '5cm' }
  },
  {
    id: 'c-5',
    name: 'Colar mini relicário',
    price: 102.90,
    category: 'Colares',
    images: ['/IMG-20260423-WA0271.jpg', '/IMG-20260423-WA0278.jpg', '/IMG-20260423-WA0276.jpg'],
    stock: 2,
    colors: ['Dourado', 'Prata']
  },
  {
    id: 'c-6',
    name: 'Colar Cruz pérola cravejada',
    price: 116.90,
    category: 'Colares',
    images: ['/IMG-20260423-WA0284.jpg', '/IMG-20260423-WA0282.jpg', '/IMG-20260423-WA0280.jpg'],
    stock: 3,
    colors: ['Dourado'],
    description: 'Um colar que une a fé e a sofisticação da pérola.',
    measurements: { length: '40cm', extender: '5cm' }
  },
  {
    id: 'c-7',
    name: 'Colar vários trevos',
    price: 116.90,
    category: 'Colares',
    images: ['/IMG-20260423-WA0343.jpg', '/IMG-20260423-WA0345.jpg', '/IMG-20260423-WA0347.jpg'],
    stock: 3,
    colors: ['Dourado'],
    description: 'A sofisticação dos trevos em um design fluido e elegante.',
    measurements: { length: '40cm', extender: '5cm' }
  },
  {
    id: 'c-8',
    name: 'Colar Espírito Santo',
    price: 119.90,
    category: 'Colares',
    images: ['/IMG-20260423-WA0349.jpg', '/IMG-20260423-WA0351.jpg', '/IMG-20260423-WA0353.jpg', '/IMG-20260423-WA0355.jpg'],
    stock: 3,
    colors: ['Dourado', 'Prata'],
    description: 'Uma peça com muito significado e proteção.',
    measurements: { length: '45cm', extender: '5cm' }
  },
  {
    id: 'c-9',
    name: 'Colar Cristais',
    price: 116.90,
    category: 'Colares',
    images: ['/IMG-20260423-WA0364.jpg', '/IMG-20260423-WA0366.jpg', '/IMG-20260423-WA0368.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'c-10',
    name: 'Colar charms',
    price: 140.90,
    category: 'Colares',
    images: ['/IMG-20260424-WA0008.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'c-11',
    name: 'Colar Sol de Outono',
    price: 82.90,
    category: 'Colares',
    images: ['/IMG-20260423-WA0387.jpg', '/IMG-20260423-WA0389.jpg', '/IMG-20260423-WA0385.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'c-12',
    name: 'Colar Baguete Pérolas',
    price: 95.90,
    category: 'Colares',
    images: ['/IMG-20260423-WA0374.jpg', '/IMG-20260423-WA0378.jpg', '/IMG-20260423-WA0380.jpg', '/IMG-20260423-WA0376.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'c-13',
    name: 'Colar gravatinha medalhas',
    price: 86.90,
    category: 'Colares',
    images: ['/IMG-20260424-WA0005.jpg', '/IMG-20260424-WA0003.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'c-14',
    name: 'Colar Lua Madrepérola',
    price: 104.90,
    category: 'Colares',
    images: ['/IMG-20260423-WA0326(1).jpg', '/IMG-20260423-WA0328(1).jpg'],
    stock: 3,
    colors: ['Prata']
  },
  {
    id: 'c-16',
    name: 'Colar coração com pérolas',
    price: 74.90,
    category: 'Colares',
    images: ['/IMG-20260423-WA0307.jpg', '/IMG-20260423-WA0309.jpg', '/IMG-20260423-WA0311.jpg', '/IMG-20260423-WA0313.jpg', '/IMG-20260423-WA0315.jpg'],
    stock: 3,
    colors: ['Prata']
  },
  {
    id: 'c-18',
    name: 'Choker Gotinhas e pérolas',
    price: 104.90,
    category: 'Colares',
    images: ['/IMG-20260423-WA0321.jpg', '/IMG-20260423-WA0322.jpg'],
    stock: 3,
    colors: ['Prata']
  },
  {
    id: 'c-19',
    name: 'Colar gravatinha Star',
    price: 73.90,
    category: 'Colares',
    images: ['/IMG-20260423-WA0401.jpg', '/IMG-20260423-WA0399.jpg', '/IMG-20260423-WA0394.jpg'],
    stock: 2,
    colors: ['Prata']
  },
  {
    id: 'c-20',
    name: 'Choker Star',
    price: 73.90,
    category: 'Colares',
    images: ['/IMG-20260423-WA0391.jpg', '/IMG-20260423-WA0390.jpg', '/IMG-20260423-WA0392.jpg'],
    stock: 2,
    colors: ['Prata']
  },
  {
    id: 'c-21',
    name: 'Choker corações pérola',
    price: 98.90,
    category: 'Colares',
    images: ['/IMG-20260424-WA0006.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'c-22',
    name: 'Colar longo pontos de luz',
    price: 79.90,
    category: 'Colares',
    images: ['/IMG-20260424-WA0602.jpg', '/IMG-20260424-WA0675.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'c-23',
    name: 'Choker gotinhas cristais',
    price: 84.90,
    category: 'Colares',
    images: ['/IMG-20260424-WA0615.jpg', '/IMG-20260424-WA0675.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'c-24',
    name: 'Colar cruz elo português',
    price: 92.90,
    category: 'Colares',
    images: ['/IMG-20260424-WA0664.jpg', '/IMG-20260424-WA0666.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'c-25',
    name: 'Trio de colares gotas',
    price: 129.90,
    category: 'Colares',
    images: ['/IMG-20260424-WA0660.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'c-17',
    name: 'Colar bolinha coração cravejado',
    price: 89.90,
    category: 'Colares',
    images: ['/IMG-20260424-WA0662.jpg'],
    stock: 5,
    colors: ['Prata']
  },
  {
    id: 'bo-1',
    name: 'Colar lenço marrom coração',
    price: 59.90,
    category: 'Colares',
    images: ['/IMG-20260425-WA0075.jpg', '/IMG-20260425-WA0077.jpg'],
    stock: 3,
    colors: ['Marrom']
  },
  {
    id: 'bo-2',
    name: 'Choker camurça coração',
    price: 49.90,
    category: 'Colares',
    images: ['/IMG-20260425-WA0085.jpg', '/IMG-20260425-WA0084.jpg', '/IMG-20260425-WA0081.jpg', '/IMG-20260425-WA0079.jpg'],
    stock: 3,
    colors: ['Preto']
  },
  {
    id: 'bo-3',
    name: 'Choker camurça orgânico',
    price: 49.90,
    category: 'Colares',
    images: ['/IMG-20260425-WA0094.jpg', '/IMG-20260425-WA0092.jpg', '/IMG-20260425-WA0090.jpg', '/IMG-20260425-WA0097.jpg'],
    stock: 3,
    colors: ['Preto']
  },
  {
    id: 'bo-4',
    name: 'Colar Lenço Marrom Pedra Oval',
    price: 64.90,
    category: 'Colares',
    images: ['/IMG-20260425-WA0098.jpg', '/IMG-20260425-WA0101.jpg'],
    stock: 3,
    colors: ['Marrom']
  },
  {
    id: 'bo-5',
    name: 'Choker malha telha',
    price: 39.90,
    category: 'Colares',
    images: ['/1000247581.jpg'],
    stock: 5,
    colors: ['Dourado']
  },

  // PULSEIRAS
  {
    id: 'b-24',
    name: 'Pulseira Medalhas',
    price: 67.90,
    category: 'Pulseiras',
    images: ['/1000247650.jpg', '/1000247659.jpg', '/1000247658.jpg'],
    stock: 3,
    colors: ['Dourado', 'Prata']
  },
  {
    id: 'b-25',
    name: 'Pulseira pérolas',
    price: 74.90,
    category: 'Pulseiras',
    images: ['/1000247637.jpg', '/1000247664.jpg', '/1000247643.jpg'],
    stock: 3,
    colors: ['Dourado', 'Prata']
  },
  {
    id: 'p-1',
    name: 'Pulseira Star',
    price: 60.90,
    category: 'Pulseiras',
    images: ['/IMG-20260423-WA0137.jpg', '/IMG-20260423-WA0139.jpg'],
    stock: 1,
    colors: ['Dourado']
  },
  {
    id: 'p-2',
    name: 'Pulseira charms praia',
    price: 71.90,
    category: 'Pulseiras',
    images: ['/IMG-20260423-WA0143.jpg', '/IMG-20260423-WA0145.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'p-3',
    name: 'Pulseira mini cristais quadrados e bolinhas',
    price: 74.90,
    category: 'Pulseiras',
    images: ['/IMG-20260423-WA0149.jpg', '/IMG-20260423-WA0154.jpg', '/IMG-20260423-WA0156.jpg'],
    stock: 3,
    colors: ['Dourado', 'Prata']
  },
  {
    id: 'p-5',
    name: 'Pulseira dupla concha e cristais',
    price: 74.90,
    category: 'Pulseiras',
    images: ['/IMG-20260423-WA0157.jpg', '/IMG-20260423-WA0158.jpg', '/IMG-20260423-WA0159.jpg', '/IMG-20260423-WA0160.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'b-26',
    name: 'Pulseira dupla corrente e ponto de luz',
    price: 88.90,
    category: 'Pulseiras',
    images: ['/1000247675.jpg', '/1000247695.jpg', '/1000247684.jpg', '/1000247689.jpg'],
    stock: 3,
    colors: ['Dourado', 'Prata']
  },
  {
    id: 'p-8',
    name: 'Pulseira pérolas sol',
    price: 72.90,
    category: 'Pulseiras',
    images: ['/IMG-20260423-WA0168.jpg', '/IMG-20260423-WA0166.jpg'],
    stock: 1,
    colors: ['Dourado']
  },
  {
    id: 'p-9',
    name: 'Bracelete orgânico',
    price: 128.90,
    category: 'Pulseiras',
    images: ['/IMG-20260423-WA0174.jpg', '/IMG-20260423-WA0178.jpg', '/IMG-20260423-WA0176.jpg', '/IMG-20260423-WA0180.jpg'],
    stock: 2,
    colors: ['Dourado', 'Prata']
  },
  {
    id: 'p-11',
    name: 'Bracelete sol pérola',
    price: 79.90,
    category: 'Pulseiras',
    images: ['/IMG-20260423-WA0187.jpg', '/IMG-20260423-WA0189.jpg', '/IMG-20260423-WA0191.jpg', '/IMG-20260423-WA0193.jpg'],
    stock: 2,
    colors: ['Dourado', 'Prata']
  },
  {
    id: 'p-12',
    name: 'Pulseira charms lover',
    price: 82.90,
    category: 'Pulseiras',
    images: ['/IMG-20260423-WA0196.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'p-13',
    name: 'Pulseira trevo madrepérola',
    price: 50.90,
    category: 'Pulseiras',
    images: ['/IMG-20260423-WA0202.jpg', '/IMG-20260423-WA0204.jpg', '/IMG-20260423-WA0206.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'p-14',
    name: 'Pulseira sal grosso',
    price: 171.90,
    category: 'Pulseiras',
    images: ['/IMG-20260423-WA0214.jpg', '/IMG-20260423-WA0216.jpg', '/IMG-20260423-WA0218.jpg'],
    stock: 3,
    colors: ['Prata']
  },
  {
    id: 'p-17',
    name: 'Pulseira mini relicário',
    price: 89.90,
    category: 'Pulseiras',
    images: ['/IMG-20260423-WA0301.jpg', '/IMG-20260423-WA0299.jpg', '/IMG-20260423-WA0297.jpg', '/IMG-20260423-WA0295.jpg'],
    stock: 3,
    colors: ['Prata']
  },
  {
    id: 'p-18',
    name: 'Pulseira olho de grego',
    price: 72.90,
    category: 'Pulseiras',
    images: ['/IMG-20260423-WA0305.jpg', '/IMG-20260423-WA0303.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'p-19',
    name: 'Pulseira de mão ponto de luz',
    price: 69.90,
    category: 'Pulseiras',
    images: ['/IMG-20260424-WA0629.jpg', '/IMG-20260424-WA0592.jpg'],
    stock: 4,
    colors: ['Dourado']
  },

  // BRINCOS
  {
    id: 'b-27',
    name: 'Trio Coração Cravejado',
    price: 168.90,
    category: 'Brincos',
    images: ['/trio-coracao-mix.jpg', '/trio-coracao-dourado-2.jpg', '/trio-coracao-prata-2.jpg', '/trio-coracao-grupo.jpg'],
    stock: 2,
    colors: ['Dourado', 'Prata']
  },
  {
    id: 'b-2',
    name: 'Trio Argola Cravejada',
    price: 168.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0144.jpg', '/IMG-20260424-WA0145.jpg', '/IMG-20260424-WA0146.jpg'],
    stock: 2,
    colors: ['Prata']
  },
  {
    id: 'b-3',
    name: 'Trio quadradinho reto',
    price: 147.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0152.jpg', '/IMG-20260424-WA0153.jpg'],
    stock: 2,
    colors: ['Prata']
  },
  {
    id: 'b-4',
    name: 'Trio Quadradinho Slim',
    price: 147.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0181.jpg', '/IMG-20260424-WA0176.jpg', '/IMG-20260424-WA0178.jpg'],
    stock: 2,
    colors: ['Dourado', 'Prata']
  },
  {
    id: 'b-5',
    name: 'Trio argola bolinhas',
    price: 147.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0163.jpg', '/IMG-20260424-WA0167.jpg', '/IMG-20260424-WA0169.jpg', '/IMG-20260424-WA0171.jpg'],
    stock: 2,
    colors: ['Prata']
  },
  {
    id: 'b-6',
    name: 'Trio Argola Gotas',
    price: 168.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0173.jpg', '/IMG-20260424-WA0172.jpg'],
    stock: 2,
    colors: ['Prata']
  },
  {
    id: 'b-7',
    name: 'Argolinha pedra marrom oval',
    price: 67.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0406.jpg', '/IMG-20260424-WA0410.jpg', '/IMG-20260424-WA0409.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'b-8',
    name: 'Argolinha charms praia',
    price: 79.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0198.jpg', '/IMG-20260424-WA0199.jpg', '/IMG-20260424-WA0195.jpg', '/IMG-20260424-WA0193.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'b-9',
    name: 'Duo argolinha pedra turquesa',
    price: 64.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0208.jpg', '/IMG-20260424-WA0209.jpg', '/IMG-20260424-WA0205.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'b-10',
    name: 'Argolinha círculo texturizado',
    price: 42.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0217.jpg', '/IMG-20260424-WA0219.jpg', '/IMG-20260424-WA0221.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'b-11',
    name: 'Argola losango texturizado',
    price: 42.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0223.jpg', '/IMG-20260424-WA0225.jpg', '/IMG-20260424-WA0227.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'b-12',
    name: 'Argolinha gota texturizada',
    price: 42.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0234.jpg', '/IMG-20260424-WA0235.jpg', '/IMG-20260424-WA0236.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'b-14',
    name: 'Brinco orgânico Pedra branca',
    price: 79.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0266.jpg', '/IMG-20260424-WA0262.jpg', '/IMG-20260424-WA0264.jpg'],
    stock: 2,
    colors: ['Prata']
  },
  {
    id: 'b-15',
    name: 'Brinco orgânico pérola',
    price: 79.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0271.jpg', '/IMG-20260424-WA0274.jpg', '/IMG-20260424-WA0276.jpg', '/IMG-20260424-WA0278.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'b-16',
    name: 'Brinco folha de outono',
    price: 74.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0283.jpg', '/IMG-20260424-WA0280.jpg', '/IMG-20260424-WA0285.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'b-17',
    name: 'Brinco orgânico',
    price: 79.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0290.jpg', '/IMG-20260424-WA0293.jpg', '/IMG-20260424-WA0294.jpg', '/IMG-20260424-WA0295.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'b-18',
    name: 'Brinco sol pérola',
    price: 72.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0298.jpg', '/IMG-20260424-WA0301.jpg', '/IMG-20260424-WA0303.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'b-19',
    name: 'Brinco sol vazado',
    price: 67.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0308.jpg', '/IMG-20260424-WA0311.jpg', '/IMG-20260424-WA0312.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'b-20',
    name: 'Brinco orgânico pedra oval marrom',
    price: 84.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0319.jpg', '/IMG-20260424-WA0317.jpg', '/IMG-20260424-WA0321.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'b-21',
    name: 'Argola boho medalhas e pérolas',
    price: 79.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0330.jpg', '/IMG-20260424-WA0328.jpg', '/IMG-20260424-WA0326.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'b-22',
    name: 'Brinco coração orgânico',
    price: 72.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0367.jpg', '/IMG-20260424-WA0366.jpg', '/IMG-20260424-WA0363.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'b-23',
    name: 'Brinco correntinhas pérolas',
    price: 79.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0382.jpg', '/IMG-20260424-WA0381.jpg', '/IMG-20260424-WA0378.jpg', '/IMG-20260424-WA0377.jpg', '/IMG-20260424-WA0371.jpg'],
    stock: 2,
    colors: ['Prata']
  },
  {
    id: 'b-50',
    name: 'Argola gotas turquesa moedas boho',
    price: 87.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0386.jpg', '/IMG-20260424-WA0388.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'b-51',
    name: 'Brinco correntinhas e bolinhas',
    price: 42.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0404.jpg', '/IMG-20260424-WA0403.jpg', '/IMG-20260424-WA0402.jpg'],
    stock: 2,
    colors: ['Prata']
  },
  {
    id: 'b-52',
    name: 'Brinco orgânico pedra azul marinho',
    price: 84.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0353.jpg', '/IMG-20260424-WA0355.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'b-28',
    name: 'Argolinha oval pedra marrom',
    price: 67.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0406.jpg', '/IMG-20260424-WA0410.jpg', '/IMG-20260424-WA0409.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'b-29',
    name: 'Brinco estrela do mar cravejado',
    price: 91.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0596.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'b-30',
    name: 'Trio de brincos pontos de luz coloridos',
    price: 64.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0598.jpg', '/IMG-20260424-WA0601.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'b-31',
    name: 'Trio pontos de luz',
    price: 54.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0617.jpg'],
    stock: 3,
    colors: ['Prata']
  },
  {
    id: 'b-32',
    name: 'Brinco trevo texturizado',
    price: 34.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0622.jpg', '/IMG-20260424-WA0619.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'b-33',
    name: 'Brinco trevo textura',
    price: 34.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0621.jpg'],
    stock: 2,
    colors: ['Prata']
  },
  {
    id: 'b-34',
    name: 'Trio místico',
    price: 62.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0636.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'b-35',
    name: 'Trio bolinhas',
    price: 54.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0637.jpg'],
    stock: 3,
    colors: ['Prata']
  },
  {
    id: 'b-36',
    name: 'Brinco mini raio',
    price: 24.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0641.jpg'],
    stock: 5,
    colors: ['Dourado']
  },
  {
    id: 'b-37',
    name: 'Argola pérola barroca',
    price: 69.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0647.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'b-38',
    name: 'Argolinha concha',
    price: 32.90,
    category: 'Brincos',
    images: ['/IMG-20260424-WA0652.jpg'],
    stock: 3,
    colors: ['Dourado']
  },

  // ANÉIS
  {
    id: 'a-1',
    name: 'Anel sol místico regulável',
    price: 67.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0424.jpg', '/IMG-20260424-WA0422.jpg', '/IMG-20260424-WA0420.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'a-2',
    name: 'Anel sol vazado regulável',
    price: 62.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0428.jpg', '/IMG-20260424-WA0432.jpg', '/IMG-20260424-WA0433.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'a-3',
    name: 'Anel max croissant regulável',
    price: 74.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0445.jpg', '/IMG-20260424-WA0444.jpg', '/IMG-20260424-WA0442.jpg', '/IMG-20260424-WA0437.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'a-4',
    name: 'Anel coração regulável',
    price: 67.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0457.jpg', '/IMG-20260424-WA0453.jpg', '/IMG-20260424-WA0454.jpg', '/IMG-20260424-WA0458.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'a-5',
    name: 'Anel tartaruga azul',
    price: 64.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0463.jpg', '/IMG-20260424-WA0464.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'a-6',
    name: 'Anel solitário slim',
    price: 49.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0467.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'a-7',
    name: 'Anel estrela do mar regulável',
    price: 87.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0474.jpg', '/IMG-20260424-WA0477.jpg', '/IMG-20260424-WA0476.jpg', '/IMG-20260424-WA0467.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'a-8',
    name: 'Anel medalha sol regulável',
    price: 52.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0477.jpg', '/IMG-20260424-WA0483.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'a-9',
    name: 'Anel croissant coração marrom',
    price: 74.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0485.jpg', '/IMG-20260424-WA0486.jpg', '/IMG-20260424-WA0477.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'a-10',
    name: 'Anel croissant marrom',
    price: 74.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0502.jpg', '/IMG-20260424-WA0504.jpg', '/IMG-20260424-WA0503.jpg', '/IMG-20260424-WA0498.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'a-11',
    name: 'Anel mandala lua',
    price: 67.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0508.jpg', '/IMG-20260424-WA0510.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'a-12',
    name: 'Anel indiano',
    price: 67.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0514.jpg', '/IMG-20260424-WA0516.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'a-13',
    name: 'Anel folha de outono regulável',
    price: 57.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0520.jpg', '/IMG-20260424-WA0521.jpg', '/IMG-20260424-WA0522.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'a-14',
    name: 'Anel flor de lótus',
    price: 67.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0524.jpg', '/IMG-20260424-WA0535.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'a-16',
    name: 'Anel concha',
    price: 67.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0539.jpg', '/IMG-20260424-WA0537.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'a-17',
    name: 'Anel duplo regulável',
    price: 57.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0557.jpg', '/IMG-20260424-WA0559.jpg', '/IMG-20260424-WA0560.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'a-18',
    name: 'Anel sol perola regulável',
    price: 67.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0550.jpg', '/IMG-20260424-WA0549.jpg', '/IMG-20260424-WA0551.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'a-19',
    name: 'Anel trevo texturizado',
    price: 57.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0563.jpg', '/IMG-20260424-WA0564.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'a-20',
    name: 'Anel cravejado',
    price: 49.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0580.jpg'],
    stock: 5,
    colors: ['Prata']
  },
  {
    id: 'a-21',
    name: 'Anel dedinho',
    price: 42.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0583.jpg', '/IMG-20260424-WA0607.jpg', '/IMG-20260424-WA0608.jpg'],
    stock: 3,
    colors: ['Dourado']
  },
  {
    id: 'a-22',
    name: 'Anel cravejado slim',
    price: 37.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0586.jpg', '/IMG-20260424-WA0607.jpg'],
    stock: 4,
    colors: ['Prata']
  },
  {
    id: 'a-23',
    name: 'Anel ondulado',
    price: 32.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0588.jpg'],
    stock: 5,
    colors: ['Prata']
  },
  {
    id: 'a-24',
    name: 'Anel star regulável',
    price: 32.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0589.jpg'],
    stock: 5,
    colors: ['Prata']
  },
  {
    id: 'a-25',
    name: 'Anel nozinho',
    price: 32.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0590.jpg'],
    stock: 5,
    colors: ['Prata']
  },
  {
    id: 'a-26',
    name: 'Anel ponto de luz',
    price: 32.90,
    category: 'Anéis',
    images: ['/IMG-20260424-WA0595.jpg'],
    stock: 5,
    colors: ['Prata']
  },

  // CONJUNTOS
  {
    id: 'cj-1',
    name: 'Conjunto gota cravejada',
    price: 189.90,
    category: 'Conjuntos',
    images: ['/IMG-20260424-WA0650.jpg', '/IMG-20260424-WA0653.jpg'],
    stock: 2,
    colors: ['Dourado']
  },
  {
    id: 'cj-2',
    name: 'Conjunto cravejado',
    price: 159.90,
    category: 'Conjuntos',
    images: ['/IMG-20260424-WA0654.jpg', '/IMG-20260424-WA0656.jpg'],
    stock: 2,
    colors: ['Dourado']
  }
];
