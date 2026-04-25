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
  imageStyle?: string; // Tailwind classes for specific image adjustments
}

export const PRODUCTS: Product[] = [
  // COLARES
  { 
    id: 'c-1', 
    name: 'Colar bolinhas trevo cravejado', 
    price: 74.90, 
    category: 'Colares', 
    images: [
      '/IMG-20260424-WA0225.jpg',
      '/IMG-20260424-WA0227.jpg'
    ], 
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
    images: [
      '/IMG-20260424-WA0242.jpg',
      '/IMG-20260424-WA0243.jpg'
    ], 
    stock: 3, 
    colors: ['Dourado'],
    description: 'O elo português é um clássico que a gente ama, e esse pingente trevo com textura traz um charme rústico e chic ao mesmo tempo. É para atrair sorte e muito estilo!',
    measurements: { length: '45cm', extender: '5cm' }
  },
  { 
    id: 'c-3', 
    name: 'Colar relicário concha', 
    price: 69.90, 
    category: 'Colares', 
    images: [
      '/IMG-20260424-WA0250.jpg',
      '/IMG-20260424-WA0246.jpg',
      '/IMG-20260424-WA0252.jpg',
      '/IMG-20260424-WA0247.jpg'
    ], 
    stock: 3, 
    colors: ['Dourado'],
    description: 'Um relicário em formato de concha que é puro encanto. Perfeito para guardar momentos especiais e levar o mar sempre com você.',
    measurements: { length: '45cm', extender: '5cm' }
  },
  { 
    id: 'c-4', 
    name: 'Colar Estrela do Mar', 
    price: 87.90, 
    category: 'Colares', 
    images: [
      '/IMG-20260424-WA0262.jpg',
      '/IMG-20260424-WA0264.jpg',
      '/IMG-20260424-WA0266.jpg'
    ], 
    stock: 3, 
    colors: ['Dourado'],
    description: 'Sinta a vibração do oceano com este colar estrela do mar. Com uma corrente elegante e um pingente detalhado, ele é a peça ideal para quem ama o estilo náutico com um toque de sofisticação.',
    measurements: { length: '45cm', extender: '5cm' }
  },
  { id: 'c-5', name: 'Colar mini relicário', price: 102.90, category: 'Colares', images: ['/IMG-20260424-WA0271.jpg', '/IMG-20260424-WA0278.jpg', '/IMG-20260424-WA0276.jpg', '/IMG-20260424-WA0274.jpg'], stock: 2, colors: ['Dourado', 'Prata'] },
  { 
    id: 'c-6', 
    name: 'Colar Cruz pérola cravejada', 
    price: 116.90, 
    category: 'Colares', 
    images: ['/IMG-20260424-WA0283.jpg', '/IMG-20260424-WA0280.jpg', '/IMG-20260424-WA0285.jpg'], 
    stock: 3, 
    colors: ['Dourado'],
    description: 'Um colar que une a fé e a sofisticação da pérola com o brilho clássico da cruz cravejada. Perfeito para iluminar qualquer composição com um toque de luz e delicadeza.',
    measurements: { length: '40cm', extender: '5cm' }
  },
  { 
    id: 'c-7', 
    name: 'Colar vários trevos', 
    price: 116.90, 
    category: 'Colares', 
    images: [
      '/IMG-20260424-WA0432.jpg',
      '/IMG-20260424-WA0433.jpg'
    ], 
    stock: 3, 
    colors: ['Dourado'],
    description: 'A sofisticação dos trevos em um design fluido e elegante. Este colar com vários trevos é a peça perfeita para quem deseja um visual marcante e cheio de boas energias.',
    measurements: { length: '40cm', extender: '5cm' }
  },
  { 
    id: 'c-8', 
    name: 'Colar Espírito Santo', 
    price: 119.90, 
    category: 'Colares', 
    images: [
      '/IMG-20260424-WA0353.jpg',
      '/IMG-20260424-WA0355.jpg',
      '/IMG-20260424-WA0280.jpg',
      '/IMG-20260424-WA0283.jpg'
    ], 
    stock: 3, 
    colors: ['Dourado', 'Prata'],
    description: 'Uma peça com muito significado e proteção. O pingente é rico em detalhes e perfeito para quem gosta de carregar sua fé com elegância e luz.',
    measurements: { length: '45cm', extender: '5cm' }
  },
  { 
    id: 'c-9', 
    name: 'Colar Cristais', 
    price: 116.90, 
    category: 'Colares', 
    subcategory: 'Chokers', 
    images: [
      '/IMG-20260424-WA0363.jpg',
      '/IMG-20260424-WA0366.jpg',
      '/IMG-20260424-WA0367.jpg',
      '/IMG-20260424-WA0371.jpg'
    ], 
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
    colors: ['Dourado'],
    description: 'Um colar lúdico e cheio de encantos. Com pingentes variados que trazem movimento e personalidade para o seu mix de colares. Perfeito para quem ama acessórios com história e significados.',
    measurements: { length: '40cm', extender: '5cm' }
  },
  { 
    id: 'c-11', 
    name: 'Colar Sol de Outono', 
    price: 82.90, 
    category: 'Colares', 
    subcategory: 'Chokers', 
    images: [
      '/IMG-20260424-WA0381.jpg',
      '/IMG-20260424-WA0382.jpg',
      '/IMG-20260424-WA0386.jpg',
      '/IMG-20260424-WA0388.jpg'
    ], 
    stock: 3, 
    colors: ['Dourado'] 
  },
  { 
    id: 'c-12', 
    name: 'Colar Baguete Pérolas', 
    price: 95.90, 
    category: 'Colares', 
    images: [
      '/IMG-20260424-WA0371.jpg',
      '/IMG-20260424-WA0377.jpg',
      '/IMG-20260424-WA0378.jpg',
      '/IMG-20260424-WA0382.jpg'
    ], 
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
    colors: ['Dourado'],
    imageStyle: 'scale-[1.8]'
  },
  { 
    id: 'c-14', 
    name: 'Colar Lua Madrepérola', 
    price: 104.90, 
    category: 'Colares', 
    images: ['/IMG-20260424-WA0607.jpg', '/IMG-20260424-WA0608.jpg'], 
    stock: 3, 
    colors: ['Prata'] 
  },
  { 
    id: 'c-16', 
    name: 'Colar coração com pérolas', 
    price: 74.90, 
    category: 'Colares', 
    images: [
      '/IMG-20260424-WA0308.jpg',
      '/IMG-20260424-WA0311.jpg',
      '/IMG-20260424-WA0312.jpg'
    ], 
    stock: 3, 
    colors: ['Prata'],
    description: 'A delicadeza das pérolas encontra o romantismo do coração cravejado neste colar banhado a prata. Uma peça que une o clássico e o moderno com perfeição.',
    measurements: { length: '40cm', extender: '5cm' }
  },
  { 
    id: 'c-18', 
    name: 'Choker Gotinhas e pérolas', 
    price: 104.90, 
    category: 'Colares', 
    subcategory: 'Chokers', 
    images: [
      '/IMG-20260424-WA0321.jpg',
      '/IMG-20260424-WA0326.jpg',
      '/IMG-20260424-WA0328.jpg',
      '/IMG-20260424-WA0330.jpg'
    ], 
    stock: 3, 
    colors: ['Prata'],
    description: 'A delicadeza em forma de semijoia. Esta choker banhada a prata une o brilho das gotinhas polidas com a suavidade das pérolas, criando um visual romântico e sofisticado.',
    measurements: { length: '35cm', extender: '5cm' }
  },
  { 
    id: 'c-19', 
    name: 'Colar gravatinha Star', 
    price: 73.90, 
    category: 'Colares', 
    images: [
      '/IMG-20260424-WA0402.jpg',
      '/IMG-20260424-WA0403.jpg',
      '/IMG-20260424-WA0404.jpg',
      '/IMG-20260424-WA0406.jpg'
    ], 
    stock: 2, 
    colors: ['Prata'] 
  },
  { 
    id: 'c-20', 
    name: 'Choker Star', 
    price: 73.90, 
    category: 'Colares', 
    subcategory: 'Chokers', 
    images: [
      '/IMG-20260424-WA0409.jpg',
      '/IMG-20260424-WA0410.jpg'
    ], 
    stock: 2, 
    colors: ['Prata'] 
  },
  { 
    id: 'c-21', 
    name: 'Choker corações pérola', 
    price: 98.90, 
    category: 'Colares', 
    subcategory: 'Chokers', 
    images: ['/IMG-20260424-WA0006.jpg'], 
    stock: 3, 
    colors: ['Dourado'] 
  },

  // PULSEIRAS
  { 
    id: 'p-16', 
    name: 'Pulseira Medalhas', 
    price: 67.90, 
    category: 'Pulseiras', 
    images: [
      '/IMG-20260424-WA0502.jpg',
      '/IMG-20260424-WA0503.jpg',
      '/IMG-20260424-WA0504.jpg',
      '/IMG-20260424-WA0508.jpg'
    ], 
    stock: 3, 
    colors: ['Dourado', 'Prata'],
    colorImages: {
      'Dourado': '/IMG-20260424-WA0503.jpg',
      'Prata': '/IMG-20260424-WA0502.jpg'
    },
    description: 'Delicadeza que balança com você. Essa pulseira com medalhinhas traz um movimento leve e um brilho encantador, perfeita para compor mixes ou brilhar sozinha.',
    measurements: { length: '15cm', extender: '5cm' }
  },
  { 
    id: 'p-4', 
    name: 'Pulseira pérolas', 
    price: 74.90, 
    category: 'Pulseiras', 
    images: [
      '/IMG-20260424-WA0474.jpg',
      '/IMG-20260424-WA0477.jpg',
      '/IMG-20260424-WA0476.jpg'
    ], 
    stock: 3, 
    colors: ['Dourado', 'Prata'],
    colorImages: {
      'Dourado': '/IMG-20260424-WA0476.jpg',
      'Prata': '/IMG-20260424-WA0474.jpg'
    },
    description: 'Pérolas são eternas e trazem aquela luz especial para o visual. Essa pulseira é puro charme e sofisticação, ideal para quem ama o estilo clássico mas com um toque moderno. Uma peça versátil que te acompanha do dia a dia a um evento super especial.',
    measurements: { length: '16cm', extender: '4cm' }
  },
  { 
    id: 'p-1', 
    name: 'Pulseira Star', 
    price: 60.90, 
    category: 'Pulseiras', 
    images: [
      '/IMG-20260424-WA0140.jpg',
      '/IMG-20260424-WA0144.jpg'
    ], 
    stock: 1, 
    colors: ['Dourado'],
    description: 'Um céu estrelado no seu pulso. Essa pulseira é super leve e delicada, perfeita para quem ama um brilho discreto mas cheio de significado.',
    measurements: { length: '15cm', extender: '5cm' }
  },
  { 
    id: 'p-2', 
    name: 'Pulseira charms praia', 
    price: 71.90, 
    category: 'Pulseiras', 
    images: [
      '/IMG-20260424-WA0140.jpg',
      '/IMG-20260424-WA0144.jpg',
      '/IMG-20260424-WA0145.jpg',
      '/IMG-20260424-WA0146.jpg'
    ], 
    stock: 3, 
    colors: ['Dourado'],
    video: '/VID-20260424-WA0147.mp4',
    videoPoster: '/IMG-20260424-WA0145.jpg',
    description: 'Sinta a brisa do mar no seu pulso. Com pingentes de estrela do mar, búzios, cavalo marinho e conchas, essa pulseira é a tradução perfeita do estilo sereia chic.',
    measurements: { length: '16cm', extender: '5cm' }
  },
  { 
    id: 'p-3', 
    name: 'Pulseira mini cristais quadrados e bolinhas', 
    price: 74.90, 
    category: 'Pulseiras', 
    images: [
      '/IMG-20260424-WA0152.jpg',
      '/IMG-20260424-WA0153.jpg'
    ], 
    stock: 3, 
    colors: ['Dourado', 'Prata'],
    colorImages: {
      'Dourado': '/IMG-20260424-WA0152.jpg',
      'Prata': '/IMG-20260424-WA0153.jpg'
    },
    video: '/VID-20260424-WA0149.mp4',
    videoPoster: '/IMG-20260424-WA0152.jpg',
    description: 'A união perfeita entre o moderno e o delicado. Com mini cristais em formato quadrado intercalados por bolinhas polidas, essa pulseira traz uma geometria charmosa e um brilho discreto que ilumina o pulso. Ideal para quem busca uma peça atemporal com um toque contemporâneo.',
    measurements: { length: '15cm', extender: '5cm' }
  },
  { 
    id: 'p-5', 
    name: 'Pulseira dupla concha e cristais', 
    price: 74.90, 
    category: 'Pulseiras', 
    images: [
      '/IMG-20260424-WA0163.jpg',
      '/IMG-20260424-WA0167.jpg',
      '/IMG-20260424-WA0169.jpg'
    ], 
    stock: 3, 
    colors: ['Dourado', 'Prata'],
    colorImages: {
      'Dourado': '/IMG-20260424-WA0167.jpg',
      'Prata': '/IMG-20260424-WA0169.jpg'
    },
    video: '/VID-20260424-WA0158.mp4',
    videoPoster: '/IMG-20260424-WA0163.jpg',
    description: 'Uma composição poética que une a delicadeza dos cristais à simbolismo da concha. Esta pulseira dupla é a escolha perfeita para quem busca um acessório com movimento e sofisticação. O brilho dos cristais complementa perfeitamente o detalhe central, criando um visual náutico chic.',
    measurements: { length: '16cm', extender: '5cm' }
  },
  { 
    id: 'p-7', 
    name: 'Pulseira dupla corrente e ponto de luz', 
    price: 88.90, 
    category: 'Pulseiras', 
    images: [
      '/IMG-20260424-WA0602.jpg',
      '/IMG-20260424-WA0601.jpg',
      '/IMG-20260424-WA0598.jpg'
    ],
    stock: 3, 
    colors: ['Dourado', 'Prata'],
    colorImages: {
      'Dourado': '/IMG-20260424-WA0598.jpg',
      'Prata': '/IMG-20260424-WA0601.jpg'
    },
    description: 'Pulseira dupla, duas em uma, corrente Cartier e corrente em mini elo português com pingente ponto de luz.',
    measurements: { length: '13cm', extender: '7cm' }
  },
  { 
    id: 'p-8', 
    name: 'Pulseira pérolas sol', 
    price: 72.90, 
    category: 'Pulseiras', 
    images: [
      '/IMG-20260424-WA0167.jpg',
      '/IMG-20260424-WA0169.jpg'
    ], 
    stock: 1, 
    colors: ['Dourado'],
    description: 'A luminosidade do sol encontra a pureza das pérolas nesta pulseira encantadora. Com pérolas de água doce selecionadas e um pingente central de sol radiante, esta peça transmite luz e positividade. Um acessório atemporal que eleva qualquer composição com um toque de brilho solar.',
    measurements: { length: '16cm', extender: '4cm' }
  },
  { 
    id: 'p-9', 
    name: 'Bracelete orgânico', 
    price: 128.90, 
    category: 'Pulseiras', 
    images: [
      '/IMG-20260424-WA0171.jpg',
      '/IMG-20260424-WA0172.jpg',
      '/IMG-20260424-WA0173.jpg',
      '/IMG-20260424-WA0176.jpg',
      '/IMG-20260424-WA0178.jpg'
    ], 
    stock: 2, 
    colors: ['Dourado', 'Prata'],
    colorImages: {
      'Dourado': '/IMG-20260424-WA0176.jpg',
      'Prata': '/IMG-20260424-WA0178.jpg'
    },
    description: 'Um bracelete com design orgânico e textura martelada que traz uma modernidade absoluta para o pulso. Sua forma ondulada e acabamento de alto brilho fazem dele uma peça statement, perfeita para ser usada sozinha ou em dupla para um visual ainda mais impactante.'
  },
  { 
    id: 'p-11', 
    name: 'Bracelete sol pérola', 
    price: 79.90, 
    category: 'Pulseiras', 
    images: [
      '/IMG-20260424-WA0181.jpg',
      '/IMG-20260424-WA0185.jpg',
      '/IMG-20260424-WA0186.jpg',
      '/IMG-20260424-WA0189.jpg',
      '/IMG-20260424-WA0193.jpg'
    ], 
    stock: 2, 
    colors: ['Dourado', 'Prata'],
    colorImages: {
      'Dourado': '/IMG-20260424-WA0189.jpg',
      'Prata': '/IMG-20260424-WA0193.jpg'
    },
    description: 'Um bracelete delicado e luminoso que une o simbolismo do sol com a elegância clássica da pérola. Com um design aberto e ajustável, apresenta um sol central banhado em metal nobre com uma pérola de água doce encastelada no centro.'
  },
  { 
    id: 'p-12', 
    name: 'Pulseira charms lover', 
    price: 82.90, 
    category: 'Pulseiras', 
    images: ['/IMG-20260424-WA0611.jpg'], 
    stock: 3, 
    colors: ['Dourado'],
    description: 'Uma pulseira repleta de significados e encantos. Com diversos charms que representam amor, fé e sorte, esta peça é perfeita para quem gosta de acessórios com personalidade e movimento. Detalhes em pérolas e metal dourado de alta qualidade.'
  },
  { 
    id: 'p-13', 
    name: 'Pulseira trevo madrepérola', 
    price: 50.90, 
    category: 'Pulseiras', 
    images: [
      '/IMG-20260424-WA0205.jpg'
    ], 
    stock: 3, 
    colors: ['Prata'],
    description: 'A delicadeza da madrepérola em formato de trevo, unida à sofisticação do banho de prata. Uma peça leve, feminina e cheia de boas energias para o seu dia a dia.',
    measurements: { length: '16cm', extender: '4cm' }
  },
  { 
    id: 'p-14', 
    name: 'Pulseira sal grosso', 
    price: 171.90, 
    category: 'Pulseiras', 
    images: [
      '/IMG-20260424-WA0217.jpg',
      '/IMG-20260424-WA0219.jpg'
    ], 
    stock: 3, 
    colors: ['Prata'],
    description: 'Um amuleto clássico de proteção. Esta pulseira traz a pureza do sal grosso em um compartimento de vidro selado com acabamento em prata de alta qualidade. Elegante, minimalista e cheia de significado.',
    measurements: { length: '17cm', extender: '3cm' }
  },
  { 
    id: 'p-17', 
    name: 'Pulseira mini relicário', 
    price: 89.90, 
    category: 'Pulseiras', 
    images: [
      '/IMG-20260424-WA0301.jpg',
      '/IMG-20260424-WA0298.jpg',
      '/IMG-20260424-WA0294.jpg',
      '/IMG-20260424-WA0293.jpg'
    ], 
    stock: 3, 
    colors: ['Prata'],
    description: 'A delicadeza do mini relicário agora no seu pulso. Uma peça banhada a prata, perfeita para carregar memórias com elegância e um toque vintage.',
    measurements: { length: '16cm', extender: '4cm' }
  },
  { 
    id: 'p-18', 
    name: 'Pulseira olho de grego', 
    price: 72.90, 
    category: 'Pulseiras', 
    images: [
      '/IMG-20260424-WA0301.jpg',
      '/IMG-20260424-WA0303.jpg'
    ], 
    stock: 3, 
    colors: ['Dourado'],
    description: 'Proteção e estilo em uma só peça. Esta pulseira olho de grego banhada a ouro traz um amuleto clássico em um design moderno e sofisticado.',
    measurements: { length: '16cm', extender: '5cm' }
  },
  { 
    id: 'p-19', 
    name: 'Pulseira de mão ponto de luz', 
    price: 69.90, 
    category: 'Pulseiras', 
    images: ['/IMG-20260424-WA0629.jpg', '/IMG-20260424-WA0592.jpg'], 
    stock: 4, 
    colors: ['Dourado'],
    description: 'Uma pulseira de mão (também conhecida como anel-pulseira) delicada e moderna. Com dois fios que abraçam o punho e se conectam a um anel através de um charmoso ponto de luz, esta peça é perfeita para quem busca um acessório único e sofisticado.'
  },

  // BRINCOS
  { 
    id: 'b-1', 
    name: 'Trio Coração Cravejado', 
    price: 168.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0353.jpg', '/IMG-20260424-WA0355.jpg'], 
    stock: 2, 
    colors: ['Dourado', 'Prata'],
    colorImages: {
      'Dourado': '',
      'Prata': ''
    },
    description: 'O trio perfeito para quem tem vários furos ou quer praticidade no dia a dia. Três tamanhos de corações cravejados que iluminam o rosto com muita sofisticação.',
  },
  { 
    id: 'b-2', 
    name: 'Trio Argola Cravejada', 
    price: 168.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0144.jpg', '/IMG-20260424-WA0145.jpg', '/IMG-20260424-WA0146.jpg'], 
    stock: 2, 
    colors: ['Prata'],
    colorImages: {
      'Prata': '/IMG-20260424-WA0595.jpg'
    },
    description: 'Argolas nunca saem de moda, e esse trio cravejado é o upgrade que seu visual precisava. Brilho na medida certa para te acompanhar do trabalho ao jantar especial.',
  },
  { 
    id: 'b-3', 
    name: 'Trio quadradinho reto', 
    price: 147.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0613.jpg', '/IMG-20260424-WA0612.jpg'], 
    stock: 2, 
    colors: ['Prata'],
    colorImages: {
      'Prata': ''
    },
    description: 'Design minimalista e geométrico para quem ama um estilo moderno. O trio quadradinho reto é versátil e traz um ar de sofisticação geométrica para sua composição.'
  },
  { 
    id: 'b-4', 
    name: 'Trio Quadradinho Slim', 
    price: 147.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0178.jpg', '/IMG-20260424-WA0176.jpg'], 
    stock: 2, 
    colors: ['Dourado', 'Prata'],
    colorImages: {
      'Dourado': '/IMG-20260424-WA0178.jpg',
      'Prata': '/IMG-20260424-WA0176.jpg'
    },
    description: 'A versão mais delicada do clássico quadrado. O trio slim é perfeito para um brilho sutil e elegante em todos os furos.'
  },
  { 
    id: 'b-5', 
    name: 'Trio argola bolinhas', 
    price: 147.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0607.jpg', '/IMG-20260424-WA0608.jpg'], 
    stock: 2, 
    colors: ['Prata'],
    colorImages: {
      'Prata': ''
    },
    description: 'Textura e movimento definem esse trio. As esferas polidas captam a luz de forma única, criando um visual dinâmico e moderno.'
  },
  { id: 'b-6', name: 'Trio Argola Gotas', price: 168.90, category: 'Brincos', images: ['/IMG-20260424-WA0619.jpg', '/IMG-20260424-WA0620.jpg'], stock: 2, colors: ['Prata'] },
  { 
    id: 'b-7', 
    name: 'Argolinha pedra marrom oval', 
    price: 67.90, 
    category: 'Brincos', 
    images: [
      '/IMG-20260424-WA0406.jpg',
      '/IMG-20260424-WA0410.jpg',
      '/IMG-20260424-WA0409.jpg'
    ], 
    stock: 2, 
    colors: ['Prata', 'Dourado'],
    colorImages: {
      'Prata': '/IMG-20260424-WA0409.jpg',
      'Dourado': '/IMG-20260424-WA0406.jpg'
    }
  },
  { 
    id: 'b-8', 
    name: 'Argolinha charms praia', 
    price: 79.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0198.jpg', '/IMG-20260424-WA0199.jpg', '/IMG-20260424-WA0195.jpg', '/IMG-20260424-WA0193.jpg'], 
    stock: 2, 
    colors: ['Prata', 'Dourado'],
    colorImages: {
      'Prata': '/IMG-20260424-WA0198.jpg',
      'Dourado': '/IMG-20260424-WA0199.jpg'
    }
  },
  { 
    id: 'b-9', 
    name: 'Duo argolinha pedra turquesa', 
    price: 79.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0208.jpg', '/IMG-20260424-WA0209.jpg', '/IMG-20260424-WA0205.jpg'], 
    stock: 2, 
    colors: ['Prata'] 
  },
  { 
    id: 'b-10', 
    name: 'Argolinha círculo texturizado', 
    price: 42.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0217.jpg', '/IMG-20260424-WA0219.jpg', '/IMG-20260424-WA0221.jpg'], 
    stock: 2, 
    colors: ['Prata', 'Dourado'],
    colorImages: {
      'Prata': '/IMG-20260424-WA0219.jpg',
      'Dourado': '/IMG-20260424-WA0221.jpg'
    }
  },
  { 
    id: 'b-11', 
    name: 'Argola losango texturizado', 
    price: 42.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0223.jpg', '/IMG-20260424-WA0225.jpg', '/IMG-20260424-WA0227.jpg'], 
    stock: 2, 
    colors: ['Prata', 'Dourado'],
    colorImages: {
      'Prata': '/IMG-20260424-WA0227.jpg',
      'Dourado': '/IMG-20260424-WA0225.jpg'
    }
  },
  { 
    id: 'b-12', 
    name: 'Argolinha gota texturizada', 
    price: 42.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0234.jpg', '/IMG-20260424-WA0235.jpg', '/IMG-20260424-WA0236.jpg'], 
    stock: 2, 
    colors: ['Prata', 'Dourado'],
    colorImages: {
      'Prata': '/IMG-20260424-WA0235.jpg',
      'Dourado': '/IMG-20260424-WA0236.jpg'
    }
  },
  { 
    id: 'b-14', 
    name: 'Brinco orgânico Pedra branca', 
    price: 79.90, 
    category: 'Brincos', 
    images: [
      '/IMG-20260424-WA0266.jpg',
      '/IMG-20260424-WA0262.jpg',
      '/IMG-20260424-WA0264.jpg'
    ], 
    stock: 2, 
    colors: ['Prata'],
    description: 'A elegância do design orgânico encontra a suavidade da pedra branca. Um brinco marcante e sofisticado, banhado a prata, que traz um toque de luz natural para o seu visual.'
  },
  { 
    id: 'b-26', 
    name: 'Brinco orgânico pedra azul marinho', 
    price: 79.90, 
    category: 'Brincos', 
    images: [
      '/IMG-20260424-WA0353.jpg',
      '/IMG-20260424-WA0355.jpg'
    ], 
    stock: 1, 
    colors: ['Dourado'],
    description: 'A elegância da pedra azul marinho em um design orgânico e moderno. Banhado a ouro, este brinco é a peça perfeita para um visual de impacto e sofisticação atemporal.'
  },
  { id: 'b-15', name: 'Brinco orgânico pérola', price: 87.90, category: 'Brincos', images: ['/IMG-20260424-WA0271.jpg', '/IMG-20260424-WA0274.jpg', '/IMG-20260424-WA0276.jpg', '/IMG-20260424-WA0278.jpg'], stock: 3, colors: ['Dourado', 'Prata'] },
  { 
    id: 'b-16', 
    name: 'Brinco folha de outono', 
    price: 77.90, 
    category: 'Brincos', 
    images: [
      '/IMG-20260424-WA0283.jpg',
      '/IMG-20260424-WA0280.jpg',
      '/IMG-20260424-WA0285.jpg'
    ], 
    stock: 2, 
    colors: ['Dourado', 'Prata'],
    description: 'A elegância da natureza traduzida em metal. Este brinco em formato de folha apresenta uma textura orgânica e detalhada que captura a luz de forma única. Disponível nos banhos dourado e prata, é a escolha ideal para adicionar um toque artístico e sofisticado ao seu visual.'
  },
  { 
    id: 'b-17', 
    name: 'Brinco orgânico', 
    price: 82.90, 
    category: 'Brincos', 
    images: [
      '/IMG-20260424-WA0290.jpg',
      '/IMG-20260424-WA0293.jpg',
      '/IMG-20260424-WA0294.jpg',
      '/IMG-20260424-WA0295.jpg'
    ], 
    stock: 2, 
    colors: ['Dourado', 'Prata'],
    description: 'Design fluido e moderno com acabamento polido. Este brinco orgânico traz a sofisticação das formas assimétricas, disponível nos banhos de ouro e prata. Uma peça versátil que adiciona um toque contemporâneo a qualquer look.'
  },
  { 
    id: 'b-18', 
    name: 'Brinco sol pérola', 
    price: 82.90, 
    category: 'Brincos', 
    images: [
      '/IMG-20260424-WA0298.jpg',
      '/IMG-20260424-WA0301.jpg',
      '/IMG-20260424-WA0303.jpg'
    ], 
    stock: 2, 
    colors: ['Dourado', 'Prata'],
    description: 'A luminosidade do sol combinada com o clássico da pérola. Este brinco apresenta um design radiante em formato de sol com uma pérola central, trazendo um brilho sofisticado e atemporal. Disponível nos banhos dourado e prata.'
  },
  { 
    id: 'b-19', 
    name: 'Brinco sol vazado', 
    price: 67.90, 
    category: 'Brincos', 
    images: [
      '/IMG-20260424-WA0308.jpg',
      '/IMG-20260424-WA0311.jpg',
      '/IMG-20260424-WA0312.jpg'
    ], 
    stock: 2, 
    colors: ['Dourado', 'Prata'],
    description: 'Leveza e modernidade em um design radiante. Este brinco sol vazado traz a energia do astro rei em uma forma minimalista e elegante. Disponível nos banhos dourado e prata.'
  },
  { 
    id: 'b-20', 
    name: 'Brinco orgânico pedra oval marrom', 
    price: 82.90, 
    category: 'Brincos', 
    images: [
      '/IMG-20260424-WA0319.jpg',
      '/IMG-20260424-WA0317.jpg',
      '/IMG-20260424-WA0321.jpg'
    ], 
    stock: 2, 
    colors: ['Dourado', 'Prata'],
    description: 'Elegância orgânica com um toque sofisticado. Este brinco apresenta uma base de metal com design fluido e uma pedra oval em tom marrom profundo, criando um contraste harmônico e moderno. Disponível nos banhos dourado e prata.'
  },
  { 
    id: 'b-21', 
    name: 'Argola boho medalhas e pérolas', 
    price: 91.90, 
    category: 'Brincos', 
    images: [
      '/IMG-20260424-WA0330.jpg',
      '/IMG-20260424-WA0328.jpg',
      '/IMG-20260424-WA0326.jpg'
    ], 
    stock: 2, 
    colors: ['Dourado'],
    description: 'Estilo boho-chic com um toque clássico. Esta argola apresenta medalhas metálicas e pérolas pendentes, criando um movimento charmoso e um visual cheio de personalidade. Perfeita para quem busca um acessório marcante e atemporal.'
  },


  // ANÉIS
  { 
    id: 'a-1', 
    name: 'Anel sol místico regulável', 
    price: 93.90, 
    category: 'Anéis', 
    images: ['/IMG-20260424-WA0424.jpg', '/IMG-20260424-WA0422.jpg', '/IMG-20260424-WA0420.jpg'], 
    stock: 3, 
    colors: ['Prata'],
    description: 'Um toque de misticismo e poder. O detalhe do sol traz uma energia única, e o melhor: ele é regulável, então serve em qualquer dedo e fica perfeito em composições de anéis.',
  },
  { 
    id: 'a-2', 
    name: 'Anel sol vazado regulável', 
    price: 104.90, 
    category: 'Anéis', 
    images: ['/IMG-20260424-WA0428.jpg', '/IMG-20260424-WA0432.jpg', '/IMG-20260424-WA0433.jpg'], 
    stock: 3, 
    colors: ['Prata'],
    description: 'Leveza e brilho em um só anel. O design vazado do sol é moderno e super ventilado, ideal para quem busca uma peça marcante mas que não pesa no visual.',
  },
  { id: 'a-3', name: 'Anel max croissant regulável', price: 104.90, category: 'Anéis', images: ['/IMG-20260424-WA0445.jpg', '/IMG-20260424-WA0444.jpg', '/IMG-20260424-WA0442.jpg', '/IMG-20260424-WA0437.jpg'], stock: 3, colors: ['Prata'] },
  { id: 'a-4', name: 'Anel coração regulável', price: 104.90, category: 'Anéis', images: ['/IMG-20260424-WA0457.jpg', '/IMG-20260424-WA0453.jpg', '/IMG-20260424-WA0454.jpg', '/IMG-20260424-WA0458.jpg'], stock: 3, colors: ['Prata'] },
  { id: 'a-5', name: 'Anel tartaruga azul', price: 104.90, category: 'Anéis', images: ['/IMG-20260424-WA0463.jpg', '/IMG-20260424-WA0464.jpg'], stock: 3, colors: ['Prata'] },
  { id: 'a-6', name: 'Anel solitário slim', price: 88.90, category: 'Anéis', images: ['/IMG-20260424-WA0467.jpg', '/IMG-20260424-WA0471.jpg'], stock: 4, colors: ['Dourado'] },
  { id: 'a-7', name: 'Anel estrela do mar regulável', price: 87.90, category: 'Anéis', images: ['/IMG-20260424-WA0474.jpg', '/IMG-20260424-WA0477.jpg', '/IMG-20260424-WA0476.jpg', '/IMG-20260424-WA0467.jpg'], stock: 3, colors: ['Dourado'] },
  { id: 'a-8', name: 'Anel medalha sol regulável', price: 77.90, category: 'Anéis', images: ['/IMG-20260424-WA0483.jpg', '/IMG-20260424-WA0477.jpg', '/IMG-20260424-WA0476.jpg'], stock: 1, colors: ['Dourado'] },

  // NOVOS ITENS - BOHO
  { id: 'bo-1', name: 'Colar lenço marrom coração', price: 94.90, category: 'Colares', subcategory: 'Boho', images: ['/IMG-20260424-WA0541.jpg', '/IMG-20260424-WA0543.jpg', '/IMG-20260424-WA0545.jpg'], stock: 2, colors: ['Marrom'] },
  { id: 'bo-2', name: 'Choker camurça coração', price: 54.90, category: 'Colares', subcategory: 'Boho', images: ['/IMG-20260424-WA0495.jpg', '/IMG-20260424-WA0496.jpg'], stock: 3, colors: ['Preto'] },
  { id: 'bo-3', name: 'Choker camurça orgânico', price: 61.90, category: 'Colares', subcategory: 'Boho', images: ['/IMG-20260424-WA0498.jpg'], stock: 2, colors: ['Marrom'] },
  { id: 'bo-4', name: 'Colar Lenço Marrom Pedra Oval', price: 73.90, category: 'Colares', subcategory: 'Boho', images: ['/IMG-20260424-WA0319.jpg', '/IMG-20260424-WA0317.jpg'], stock: 3, colors: ['Marrom'], imageStyle: 'scale-[1.8]' },
  { id: 'bo-5', name: 'Choker malha telha', price: 89.90, category: 'Colares', subcategory: 'Boho', images: ['/IMG-20260424-WA0280.jpg', '/IMG-20260424-WA0283.jpg'], stock: 2, colors: ['Dourado'] },

  // NOVOS ITENS - BRINCOS
  { 
    id: 'b-22', 
    name: 'Brinco coração orgânico', 
    price: 74.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0367.jpg', '/IMG-20260424-WA0366.jpg', '/IMG-20260424-WA0363.jpg'], 
    stock: 2, 
    colors: ['Dourado', 'Prata'],
    description: 'Romantismo com um toque moderno. Este brinco em formato de coração apresenta um design orgânico e fluido, trazendo leveza e sofisticação para o visual. Disponível nos banhos dourado e prata.',
  },
  { 
    id: 'b-23', 
    name: 'Brinco correntinhas pérolas', 
    price: 76.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0382.jpg', '/IMG-20260424-WA0381.jpg', '/IMG-20260424-WA0378.jpg', '/IMG-20260424-WA0377.jpg', '/IMG-20260424-WA0371.jpg'], 
    stock: 2, 
    colors: ['Dourado', 'Prata'],
    description: 'Delicadeza e movimento em uma única peça. Este brinco de argola traz cascatas de mini pérolas em correntinhas finas, criando um efeito iluminado e sofisticado. Perfeito para ocasiões especiais ou para elevar o look do dia a dia. Disponível nos banhos dourado e prata.',
  },
  { 
    id: 'b-24', 
    name: 'Argola gotas turquesa moedas boho', 
    price: 84.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0386.jpg', '/IMG-20260424-WA0388.jpg'], 
    stock: 2, 
    colors: ['Prata'],
    description: 'Estilo boho chic em cada detalhe. Esta argola prateada é adornada com pingentes de gotas em tom turquesa e mini moedas, trazendo um ar cigano e sofisticado para o look. Ideal para quem busca uma peça com personalidade e atitude.',
  },
  { 
    id: 'b-25', 
    name: 'Brinco correntinhas e bolinhas', 
    price: 69.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0404.jpg', '/IMG-20260424-WA0403.jpg', '/IMG-20260424-WA0402.jpg'], 
    stock: 2, 
    colors: ['Dourado'],
    description: 'Um brinco que une o brilho das correntes com o charme das esferas. Esta peça apresenta cascatas de correntinhas douradas intercaladas com pequenas bolinhas, finalizadas com um ponto de luz em cristal. Um design dinâmico e moderno que traz movimento e sofisticação para qualquer produção.',
  },

  // NOVOS ITENS - ANÉIS
  { id: 'a-9', name: 'Anel croissant coração marrom', price: 89.90, category: 'Anéis', subcategory: 'Boho', images: ['/IMG-20260424-WA0485.jpg', '/IMG-20260424-WA0486.jpg'], stock: 3, colors: ['Marrom'] },
  { id: 'a-10', name: 'Anel croissant marrom', price: 89.90, category: 'Anéis', subcategory: 'Boho', images: ['/IMG-20260424-WA0502.jpg', '/IMG-20260424-WA0504.jpg', '/IMG-20260424-WA0503.jpg'], stock: 2, colors: ['Marrom'] },
  { id: 'a-11', name: 'Anel mandala lua', price: 79.90, category: 'Anéis', subcategory: 'Boho', images: ['/IMG-20260424-WA0508.jpg', '/IMG-20260424-WA0510.jpg'], stock: 1, colors: ['Prata'] },
  { id: 'a-12', name: 'Anel indiano', price: 79.90, category: 'Anéis', subcategory: 'Boho', images: ['/IMG-20260424-WA0514.jpg', '/IMG-20260424-WA0516.jpg'], stock: 3, colors: ['Prata'] },
  { id: 'a-13', name: 'Anel folha de outono regulável', price: 89.90, category: 'Anéis', subcategory: 'Boho', images: ['/IMG-20260424-WA0520.jpg', '/IMG-20260424-WA0521.jpg', '/IMG-20260424-WA0522.jpg'], stock: 1, colors: ['Prata'] },
  { id: 'a-14', name: 'Anel flor de lótus', price: 79.90, category: 'Anéis', subcategory: 'Boho', images: ['/IMG-20260424-WA0524.jpg', '/IMG-20260424-WA0535.jpg'], stock: 2, colors: ['Prata'] },
  { id: 'a-16', name: 'Anel concha', price: 69.90, category: 'Anéis', subcategory: 'Boho', images: ['/IMG-20260424-WA0539.jpg', '/IMG-20260424-WA0537.jpg'], stock: 1, colors: ['Prata'] },
  { id: 'a-18', name: 'Anel sol perola regulável', price: 89.90, category: 'Anéis', subcategory: 'Boho', images: ['/IMG-20260424-WA0550.jpg', '/IMG-20260424-WA0549.jpg', '/IMG-20260424-WA0551.jpg'], video: '/VID-20260424-WA0562.mp4', videoPoster: '/IMG-20260424-WA0550.jpg', stock: 1, colors: ['Dourado'] },
  { id: 'a-17', name: 'Anel duplo regulável', price: 89.90, category: 'Anéis', subcategory: 'Boho', images: ['/IMG-20260424-WA0557.jpg', '/IMG-20260424-WA0559.jpg', '/IMG-20260424-WA0560.jpg'], video: '/VID-20260424-WA0561.mp4', videoPoster: '/IMG-20260424-WA0557.jpg', stock: 2, colors: ['Prata'] },
  { 
    id: 'a-19', 
    name: 'Anel trevo texturizado', 
    price: 89.90, 
    category: 'Anéis', 
    images: ['/IMG-20260424-WA0563.jpg', '/IMG-20260424-WA0564.jpg'], 
    video: '/VID-20260424-WA0564.mp4',
    videoPoster: '/IMG-20260424-WA0563.jpg',
    stock: 3, 
    colors: ['Dourado'],
    description: 'Um anel que une a sorte do trevo com uma textura acetinada deslumbrante. Sua forma clássica ganha um toque contemporâneo através do acabamento rico em detalhes, perfeito para brilhar em qualquer ocasião.'
  },
  { 
    id: 'a-20', 
    name: 'Anel cravejado', 
    price: 94.90, 
    category: 'Anéis', 
    images: ['/IMG-20260424-WA0580.jpg'], 
    video: '/VID-20260424-WA0582.mp4',
    videoPoster: '/IMG-20260424-WA0580.jpg',
    stock: 2, 
    colors: ['Dourado'],
    description: 'Um anel sofisticado com cravação impecável que reluz elegância. O design entrelaçado traz um ar de modernidade e luxo para suas composições.',
    imageStyle: 'scale-[1.8]'
  },
  { 
    id: 'a-21', 
    name: 'Anel dedinho', 
    price: 69.90, 
    category: 'Anéis', 
    images: ['/IMG-20260424-WA0583.jpg'], 
    stock: 4, 
    colors: ['Dourado'],
    description: 'O clássico anel de dedinho com acabamento liso e polido. Minimalista e atemporal, é a peça perfeita para criar mix de anéis cheios de estilo.',
    imageStyle: 'scale-[1.8]'
  },
  { 
    id: 'a-22', 
    name: 'Anel cravejado slim', 
    price: 59.90, 
    category: 'Anéis', 
    images: ['/IMG-20260424-WA0586.jpg'], 
    stock: 5, 
    colors: ['Dourado'],
    description: 'Um anel cravejado slim com mini zircônias que trazem um brilho delicado e sofisticado. Ideal para usar solitário ou em composições de falanje e mix de anéis.',
    imageStyle: 'scale-[1.8]'
  },
  { 
    id: 'a-23', 
    name: 'Anel ondulado', 
    price: 74.90, 
    category: 'Anéis', 
    images: ['/IMG-20260424-WA0588.jpg'], 
    stock: 3, 
    colors: ['Dourado'],
    description: 'Um anel de design orgânico e moderno, com formas onduladas que trazem movimento e sofisticação para o seu visual.',
    imageStyle: 'scale-[1.5]'
  },
  { 
    id: 'a-24', 
    name: 'Anel star regulável', 
    price: 65.90, 
    category: 'Anéis', 
    images: ['/IMG-20260424-WA0589.jpg'], 
    stock: 4, 
    colors: ['Dourado'],
    description: 'Anel delicado com design de estrelas cravejadas com mini zircônias. Sua estrutura regulável permite o ajuste perfeito em qualquer dedo, tornando-o versátil e encantador.',
    imageStyle: 'scale-[1.8]'
  },
  { 
    id: 'a-25', 
    name: 'Anel nozinho', 
    price: 64.90, 
    category: 'Anéis', 
    images: ['/IMG-20260424-WA0590.jpg'], 
    stock: 4, 
    colors: ['Dourado'],
    description: 'Um anel charmoso com detalhe central em formato de nó. Design minimalista e delicado, perfeito para simbolizar conexões especiais.',
    imageStyle: 'scale-[1.8]'
  },
  { 
    id: 'a-26', 
    name: 'Anel ponto de luz', 
    price: 52.90, 
    category: 'Anéis', 
    images: ['/IMG-20260424-WA0595.jpg'], 
    stock: 6, 
    colors: ['Dourado'],
    description: 'Um clássico atemporal, este anel apresenta uma delicada zircônia solitária que captura a luz, trazendo brilho e elegância discreta para o seu dia a dia.',
    imageStyle: 'scale-[1.8]'
  },
  
  // MAIS BRINCOS DOURADOS
  { id: 'b-28', name: 'Argolinha oval pedra marrom', price: 62.90, category: 'Brincos', images: ['/IMG-20260424-WA0406.jpg', '/IMG-20260424-WA0410.jpg', '/IMG-20260424-WA0409.jpg'], stock: 2, colors: ['Dourado'] },
  { 
    id: 'b-29', 
    name: 'Brinco estrela do mar cravejado', 
    price: 72.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0596.jpg'], 
    stock: 4, 
    colors: ['Dourado'],
    description: 'Delicados brincos em formato de estrela do mar, inteiramente cravejados com mini zircônias que trazem um brilho sofisticado e encantador. Banhados a ouro, são a escolha perfeita para quem ama a elegância do mar com um toque de luxo.',
    imageStyle: 'scale-[1.8]'
  },
  { 
    id: 'b-30', 
    name: 'Trio de brincos pontos de luz coloridos', 
    price: 89.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0598.jpg', '/IMG-20260424-WA0601.jpg'], 
    stock: 4, 
    colors: ['Rosa', 'Azul'],
    colorImages: {
      'Rosa': '/IMG-20260424-WA0598.jpg',
      'Azul': '/IMG-20260424-WA0601.jpg'
    },
    description: 'Um trio encantador de pontos de luz coloridos com brilho sofisticado. Disponível nas cores Rosa e Azul, com três tamanhos diferentes, esses brincos banhados a ouro trazem versatilidade e charme para o seu mix de brincos.',
    imageStyle: 'scale-[1.2]'
  },
  { 
    id: 'b-31', 
    name: 'Trio pontos de luz', 
    price: 89.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0617.jpg', '/IMG-20260424-WA0616.jpg', '/IMG-20260424-WA0613.jpg', '/IMG-20260424-WA0612.jpg'], 
    stock: 5, 
    colors: ['Prata'],
    description: 'A elegância clássica em um trio de pontos de luz banhados a prata. Com três tamanhos diferentes, eles trazem um brilho cristalino e sofisticado, perfeitos para quem ama composições atemporais e iluminadas.',
    imageStyle: 'scale-[1.2]'
  },
  { 
    id: 'c-22', 
    name: 'Colar longo pontos de luz', 
    price: 89.90, 
    category: 'Colares', 
    images: ['/IMG-20260424-WA0602.jpg'], 
    stock: 3, 
    colors: ['Dourado'],
    description: 'Um acessório versátil e iluminado. Este colar longo banhado a ouro é intercalado com delicados pontos de luz que captam e refletem o brilho de forma sutil. Perfeito para usar sozinho ou em camadas com outros colares.',
    measurements: { length: '70cm', extender: '5cm' }
  },
  { 
    id: 'c-23', 
    name: 'Choker gotinhas cristais', 
    price: 94.90, 
    category: 'Colares', 
    subcategory: 'Chokers', 
    images: ['/IMG-20260424-WA0615.jpg', '/IMG-20260424-WA0616.jpg'], 
    stock: 4, 
    colors: ['Dourado'],
    description: 'A delicadeza em forma de choker. Com pequenas gotas de cristais penduradas que brilham intensamente a cada movimento, esta peça banhada a ouro traz um ar romântico e sofisticado para o seu colo.',
    measurements: { length: '35cm', extender: '5cm' }
  },
  { 
    id: 'c-24', 
    name: 'Colar cruz elo português', 
    price: 89.90, 
    category: 'Colares', 
    images: ['/IMG-20260424-WA0664.jpg', '/IMG-20260424-WA0666.jpg', '/IMG-20260424-WA0667.jpg', '/IMG-20260424-WA0668.jpg'], 
    stock: 3, 
    colors: ['Dourado'],
    description: 'A força da fé unida à elegância do elo português. Este colar banhado a ouro apresenta uma cruz sofisticada com detalhes em cristais, pendurada em uma corrente de elos portugueses clássicos. Uma peça atemporal e cheia de brilho.',
    measurements: { length: '45cm', extender: '5cm' }
  },
  { 
    id: 'b-32', 
    name: 'Brinco trevo texturizado', 
    price: 49.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0622.jpg', '/IMG-20260424-WA0619.jpg'], 
    stock: 5, 
    colors: ['Dourado'],
    description: 'A sofisticação do trevo em um design minimalista e moderno. Este brinco banhado a ouro apresenta uma textura acetinada deslumbrante que captura a luz de forma única, trazendo elegância e brilho para o seu dia a dia.',
    imageStyle: 'scale-[1.2]'
  },
  { 
    id: 'b-33', 
    name: 'Brinco trevo textura', 
    price: 49.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0621.jpg', '/IMG-20260424-WA0620.jpg'], 
    stock: 5, 
    colors: ['Prata'],
    description: 'A sofisticação do trevo em um design minimalista e moderno em banho de prata. Este brinco apresenta uma textura acetinada deslumbrante que captura a luz de forma única, trazendo elegância e brilho para o seu dia a dia.',
    imageStyle: 'scale-[1.2]'
  },
  { 
    id: 'b-34', 
    name: 'Trio místico', 
    price: 64.90, 
    category: 'Brincos', 
    subcategory: 'Trios',
    images: ['/IMG-20260424-WA0636.jpg'], 
    stock: 5, 
    colors: ['Prata'],
    description: 'Um conjunto encantador e místico. Este trio de brincos em banho de prata combina o simbolismo do olho grego, a luz das estrelas e o brilho clássico do cristal. Perfeito para quem ama composições com significado e estilo.',
    imageStyle: 'scale-[1.2]'
  },
  { 
    id: 'b-35', 
    name: 'Trio bolinhas', 
    price: 49.90, 
    category: 'Brincos', 
    subcategory: 'Trios',
    images: ['/IMG-20260424-WA0637.jpg'], 
    stock: 5, 
    colors: ['Prata'],
    description: 'O clássico indispensável para o dia a dia. Este trio de brincos em banho de prata apresenta três tamanhos de bolinhas polidas, perfeitos para quem tem múltiplos furos ou busca uma composição delicada e versátil.',
    imageStyle: 'scale-[1.2]'
  },
  { 
    id: 'b-36', 
    name: 'Brinco mini raio', 
    price: 49.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0641.jpg'], 
    stock: 5, 
    colors: ['Dourado'],
    description: 'Pequenos detalhes que fazem a diferença. Este brinco mini raio banhado a ouro possui uma textura acetinada única que brilha com elegância. Um design minimalista e moderno, perfeito para compor mixes cheios de personalidade.',
    imageStyle: 'scale-[1.2]'
  },
  { 
    id: 'b-37', 
    name: 'Argola pérola barroca', 
    price: 64.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0647.jpg'], 
    stock: 5, 
    colors: ['Prata'],
    description: 'A elegância atemporal da pérola em um design contemporâneo. Esta argola em banho de prata apresenta uma linda pérola barroca pendente, trazendo sofisticação e um toque orgânico único para o seu visual. Perfeita para iluminar o rosto com classe.',
    imageStyle: 'object-center'
  },
  { 
    id: 'cj-1', 
    name: 'Conjunto gota cravejada', 
    price: 134.90, 
    category: 'Conjuntos', 
    images: ['/IMG-20260424-WA0653.jpg'], 
    stock: 8, 
    colors: ['Azul', 'Rosa'],
    colorImages: {
      'Azul': '/IMG-20260424-WA0650.jpg',
      'Rosa': '/IMG-20260424-WA0653.jpg'
    },
    description: 'O equilíbrio perfeito entre sofisticação e cor. Este conjunto traz a delicadeza dos cristais cravejados em formato de gota, tanto no colar quanto nos brincos. Uma composição iluminada que traz um ar romântico e moderno para qualquer ocasião.',
    imageStyle: 'object-bottom'
  },
  { 
    id: 'b-38', 
    name: 'Argolinha concha', 
    price: 54.90, 
    category: 'Brincos', 
    images: ['/IMG-20260424-WA0652.jpg'], 
    stock: 5, 
    colors: ['Prata'],
    description: 'Leve a essência do mar com você. Esta argolinha delicada em banho de prata apresenta um pingente de concha detalhado, perfeita para quem ama acessórios com temática praiana e um toque de frescor no visual.',
    imageStyle: 'scale-[1.2]'
  },
  { 
    id: 'cj-2', 
    name: 'Conjunto cravejado', 
    price: 129.90, 
    category: 'Conjuntos', 
    images: ['/IMG-20260424-WA0654.jpg', '/IMG-20260424-WA0656.jpg'], 
    stock: 5, 
    colors: ['Azul', 'Lilás'],
    colorImages: {
      'Azul': '/IMG-20260424-WA0654.jpg',
      'Lilás': '/IMG-20260424-WA0656.jpg'
    },
    description: 'A sofisticação do brilho clássico em um conjunto deslumbrante. Com cristais cravejados que capturam a luz de forma espetacular, este conjunto de colar e brincos em banho de prata é a escolha ideal para momentos que pedem um toque extra de glamour e elegância.',
    imageStyle: 'object-center'
  },
  { 
    id: 'c-25', 
    name: 'Trio de colares gotas', 
    price: 149.90, 
    category: 'Colares', 
    images: ['/IMG-20260424-WA0660.jpg'], 
    stock: 3, 
    colors: ['Prata'],
    description: 'A harmonia perfeita em três camadas. Este trio de colares em banho de prata traz diferentes texturas e correntes, todas adornadas com delicados pingentes de gotas. Uma peça versátil que já vem pronta para criar o mix perfeito no seu colo.',
    imageStyle: 'scale-[1.1]'
  },
  { 
    id: 'c-17', 
    name: 'Colar bolinha coração cravejado', 
    price: 89.90, 
    category: 'Colares', 
    images: ['/IMG-20260424-WA0662.jpg'], 
    stock: 5, 
    colors: ['Prata'],
    description: 'O brilho do amor em cada detalhe. Este colar delicado possui uma corrente estilo bolinha em banho de prata e um pingente de coração inteiramente cravejado com cristais. Uma peça romântica e moderna que ilumina o colo com sofisticação.',
    imageStyle: 'scale-[1.2]'
  },
];

