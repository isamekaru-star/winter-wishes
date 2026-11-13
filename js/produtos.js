const produtos = [
  {
    id: 1,
    nome: "Panetone Tradicional de Frutas Nobres",
    categoria: "Panetones",
    preco: 68.90,
    imagem: "img/produtos/panetone-tradicional-frutas.jpg",
    descricao: "Panetone artesanal de fermentação natural com frutas cristalizadas e uvas-passas.",
    destaque: true
  },
  {
    id: 2,
    nome: "Trio de Cupcakes Árvore de Natal",
    categoria: "Bolos e Tortas",
    preco: 38.50,
    imagem: "img/produtos/cupcakes-arvore-de-natal.jpg",
    descricao: "Cupcakes de baunilha com cobertura cremosa em formato de pinheiro natalino.",
    destaque: true
  },
  {
    id: 3,
    nome: "Rabanada Real com Frutas Vermelhas",
    categoria: "Doces e Kits",
    preco: 45.90,
    imagem: "img/produtos/torta-rabanada-frutas-vermelhas.jpg",
    descricao: "Fatias douradas de rabanada com canela, calda de especiarias e frutas vermelhas.",
    destaque: false
  },
  {
    id: 4,
    nome: "Tronco Natalino Floresta Encantada",
    categoria: "Bolos e Tortas",
    preco: 125.00,
    imagem: "img/produtos/tronco-natalino-chocolate.jpg",
    descricao: "Tradicional rocambole natalino recheado com trufa de chocolate e decorado como tronco.",
    destaque: true
  },
  {
    id: 5,
    nome: "Bolo Festivo de Especiarias e Cerejas",
    categoria: "Bolos e Tortas",
    preco: 115.00,
    imagem: "img/produtos/bolo-festivo-especiarias.jpg",
    descricao: "Bolo amanteigado de especiarias natalinas coberto com glacê branco e cerejas.",
    destaque: false
  },
  {
    id: 6,
    nome: "Chocolate Quente com Boneco de Neve",
    categoria: "Bebidas e Chocolates",
    preco: 26.90,
    imagem: "img/produtos/chocolate-quente-boneco-neve.jpg",
    descricao: "Chocolate quente cremoso com chantilly, bengalinha doce e boneco de marshmallow.",
    destaque: true
  },
  {
    id: 7,
    nome: "Caixa Presente de Macarons Natalinos",
    categoria: "Doces e Kits",
    preco: 56.00,
    imagem: "img/produtos/caixa-macarons-natalinos.jpg",
    descricao: "Caixa decorada com macarons artesanais de pistache, frutas vermelhas e baunilha.",
    destaque: true
  },
  {
    id: 8,
    nome: "Trio de Brigadeiros Papai Noel e Rena",
    categoria: "Doces e Kits",
    preco: 24.90,
    imagem: "img/produtos/trio-brigadeiros-natalinos.jpg",
    descricao: "Brigadeiros gourmet de chocolate belga decorados à mão com temas natalinos.",
    destaque: false
  },
  {
    id: 9,
    nome: "Biscoitos Amanteigados Decorados",
    categoria: "Biscoitos",
    preco: 44.00,
    imagem: "img/produtos/biscoitos-amanteigados-decorados.jpg",
    descricao: "Biscoitos finos decorados com glacê real em formatos de árvore, estrela e boneco de neve.",
    destaque: true
  },
  {
    id: 10,
    nome: "Casinha de Biscoito de Gengibre",
    categoria: "Biscoitos",
    preco: 149.00,
    imagem: "img/produtos/casinha-biscoito-gengibre.jpg",
    descricao: "Casinha natalina montada em biscoito de gengibre artesanal com glacê e confeitos.",
    destaque: true
  },
  {
    id: 11,
    nome: "Churros Dourados com Calda Dupla",
    categoria: "Doces e Kits",
    preco: 34.90,
    imagem: "img/produtos/churros-natalinos-doce-leite.jpg",
    descricao: "Churros crocantes com açúcar e canela acompanhados de doce de leite e chocolate.",
    destaque: false
  },
  {
    id: 12,
    nome: "Cheesecake Natalino de Frutas Vermelhas",
    categoria: "Bolos e Tortas",
    preco: 98.00,
    imagem: "img/produtos/cheesecake-frutas-vermelhas.jpg",
    descricao: "Cheesecake cremoso com base de biscoito e cobertura de morangos, cerejas e framboesas.",
    destaque: true
  },
  {
    id: 13,
    nome: "Guirlanda de Pavlova com Frutas Frescas",
    categoria: "Doces e Kits",
    preco: 89.90,
    imagem: "img/produtos/guirlanda-pavlova-frutas.jpg",
    descricao: "Merengue crocante em formato de guirlanda coberto com chantilly, morango, kiwi e romã.",
    destaque: false
  },
  {
    id: 14,
    nome: "Brownie de Nozes com Floco de Neve",
    categoria: "Bolos e Tortas",
    preco: 46.00,
    imagem: "img/produtos/brownie-nozes-floco-neve.jpg",
    descricao: "Brownie intenso de cacau com nozes crocantes e decoração nevada de açúcar.",
    destaque: false
  },
  {
    id: 15,
    nome: "Torta de Maçã e Canela Estrela de Belém",
    categoria: "Bolos e Tortas",
    preco: 78.90,
    imagem: "img/produtos/torta-maca-canela-estrela.jpg",
    descricao: "Torta folhada de maçãs caramelizadas com canela e estrela amanteigada no topo.",
    destaque: false
  },
  {
    id: 16,
    nome: "Cookies de Cacau com Gotas e Menta",
    categoria: "Biscoitos",
    preco: 36.00,
    imagem: "img/produtos/cookies-cacau-menta.jpg",
    descricao: "Cookies macios de chocolate amargo com pedacinhos refrescantes de menta natalina.",
    destaque: false
  },
  {
    id: 17,
    nome: "Torre de Waffles Pinheiro de Natal",
    categoria: "Doces e Kits",
    preco: 52.00,
    imagem: "img/produtos/torre-waffles-natalinos.jpg",
    descricao: "Waffles empilhados com chantilly, frutas vermelhas frescas e calda de chocolate.",
    destaque: false
  },
  {
    id: 18,
    nome: "Gemada Natalina Cremosa com Canela",
    categoria: "Bebidas e Chocolates",
    preco: 22.50,
    imagem: "img/produtos/gemada-natalina-eggnog.jpg",
    descricao: "Bebida clássica natalina cremosa com toque de baunilha, noz-moscada e canela em pau.",
    destaque: false
  },
  {
    id: 19,
    nome: "Bebida Quente de Uva e Especiarias",
    categoria: "Bebidas e Chocolates",
    preco: 28.00,
    imagem: "img/produtos/quentao-vinho-especiarias.jpg",
    descricao: "Bebida quente aromática preparada com suco de uva integral, laranja, cravo e canela.",
    destaque: false
  },
  {
    id: 20,
    nome: "Pudim de Leite Condensado com Cerejas",
    categoria: "Doces e Kits",
    preco: 65.00,
    imagem: "img/produtos/pudim-natalino-cerejas.jpg",
    descricao: "Pudim cremoso tradicional com bastante calda de caramelo e cerejas frescas.",
    destaque: false
  },
  {
    id: 21,
    nome: "Bolo Inglês Natalino com Calda Dourada",
    categoria: "Bolos e Tortas",
    preco: 92.00,
    imagem: "img/produtos/bolo-ingles-frutas-secas.jpg",
    descricao: "Bolo natalino escuro rico em frutas secas, castanhas e calda quente de caramelo.",
    destaque: false
  },
  {
    id: 22,
    nome: "Mini Pudim Gourmet Individual",
    categoria: "Doces e Kits",
    preco: 22.00,
    imagem: "img/produtos/mini-pudim-festa-natal.jpg",
    descricao: "Versão individual do nosso pudim tradicional com calda de caramelo e cereja.",
    destaque: false
  },
  {
    id: 23,
    nome: "Caixa com 4 Donuts Natalinos",
    categoria: "Doces e Kits",
    preco: 42.00,
    imagem: "img/produtos/caixa-donuts-decorados.jpg",
    descricao: "Donuts macios glacados nas cores do Natal e decorados com estrelinhas douradas.",
    destaque: false
  },
  {
    id: 24,
    nome: "Bolo Red Velvet com Frutas Vermelhas",
    categoria: "Bolos e Tortas",
    preco: 118.00,
    imagem: "img/produtos/bolo-red-velvet-natalino.jpg",
    descricao: "Bolo aveludado vermelho com recheio de cream cheese, alecrim e frutas vermelhas.",
    destaque: false
  },
  {
    id: 25,
    nome: "Milkshake Natalino de Menta e Chantilly",
    categoria: "Bebidas e Chocolates",
    preco: 25.00,
    imagem: "img/produtos/milkshake-menta-natalino.jpg",
    descricao: "Milkshake refrescante sabor menta com chantilly, confeitos coloridos e bengala doce.",
    destaque: false
  },
  {
    id: 26,
    nome: "Suco Quente de Maçã com Cravo e Canela",
    categoria: "Bebidas e Chocolates",
    preco: 21.90,
    imagem: "img/produtos/sidra-quente-maca-canela.jpg",
    descricao: "Bebida reconfortante de maçã cozida com paus de canela, anis-estrelado e cravo.",
    destaque: false
  },
  {
    id: 27,
    nome: "Cappuccino Cremoso com Biscoito Noel",
    categoria: "Bebidas e Chocolates",
    preco: 23.50,
    imagem: "img/produtos/cappuccino-biscoito-gengibre.jpg",
    descricao: "Cappuccino artesanal decorado com floco de neve acompanhado de biscoito de gengibre.",
    destaque: false
  },
  {
    id: 28,
    nome: "Chocotone Trufado de Chocolate Belga",
    categoria: "Panetones",
    preco: 79.90,
    imagem: "img/produtos/chocotone-trufado-belga.jpg",
    descricao: "Chocotone macio recheado e coberto com ganache cremosa de chocolate meio amargo.",
    destaque: false
  },
  {
    id: 29,
    nome: "Bolo de Chocolate com Creme de Menta",
    categoria: "Bolos e Tortas",
    preco: 109.00,
    imagem: "img/produtos/bolo-chocolate-menta-natal.jpg",
    descricao: "Bolo de cacau em camadas com recheio refrescante de menta e calda de chocolate.",
    destaque: false
  },
  {
    id: 30,
    nome: "Bolo de Caramelo Salgado e Nozes",
    categoria: "Bolos e Tortas",
    preco: 89.00,
    imagem: "img/produtos/bolo-caramelo-nozes.jpg",
    descricao: "Bolo caseiro fofinho coberto com calda espessa de caramelo toffee e nozes inteiras.",
    destaque: false
  },
  {
    id: 31,
    nome: "Mocha Natalino com Chantilly e Cacau",
    categoria: "Bebidas e Chocolates",
    preco: 24.90,
    imagem: "img/produtos/mocha-natalino-chantilly.jpg",
    descricao: "Café mocha quente com chocolate cremoso, topo de chantilly e bengalinha de açúcar.",
    destaque: false
  },
  {
    id: 32,
    nome: "Alfajores Nevados Recheados com Trufa",
    categoria: "Biscoitos",
    preco: 39.00,
    imagem: "img/produtos/alfajores-nevados-chocolate.jpg",
    descricao: "Biscoitos duplos recheados com ganache de chocolate e decorados com glacê branco.",
    destaque: false
  },
  {
    id: 33,
    nome: "Bolo de Especiarias Flocos de Neve",
    categoria: "Bolos e Tortas",
    preco: 85.00,
    imagem: "img/produtos/bolo-especiarias-flocos-neve.jpg",
    descricao: "Bolo perfumado com canela e noz-moscada, coberto com chocolate e flocos de açúcar.",
    destaque: false
  },
  {
    id: 34,
    nome: "Caixa Dourada de Bombons de Cereja",
    categoria: "Bebidas e Chocolates",
    preco: 58.00,
    imagem: "img/produtos/caixa-bombons-cereja.jpg",
    descricao: "Bombons artesanais de chocolate nobre recheados com cereja em calda.",
    destaque: false
  },
  {
    id: 35,
    nome: "Pão de Mel Gigante Recheado",
    categoria: "Biscoitos",
    preco: 54.00,
    imagem: "img/produtos/pao-de-mel-recheado-natal.jpg",
    descricao: "Pão de mel macio com bastante doce de leite cremoso e cobertura de chocolate.",
    destaque: false
  },
  {
    id: 36,
    nome: "Cesta e Tábua Degustação de Doces",
    categoria: "Doces e Kits",
    preco: 89.90,
    imagem: "img/produtos/tabua-doces-ceia-natal.jpg",
    descricao: "Seleção especial com brigadeiros, beijinhos, quadradinhos de brownie e frutas.",
    destaque: false
  },
  {
    id: 37,
    nome: "Torta de Limão com Merengue Tostado",
    categoria: "Bolos e Tortas",
    preco: 82.00,
    imagem: "img/produtos/torta-limao-merengue-natal.jpg",
    descricao: "Torta crocante recheada com creme de limão siciliano e merengue suíço dourado.",
    destaque: false
  },
  {
    id: 38,
    nome: "Chá Natalino de Frutas e Especiarias",
    categoria: "Bebidas e Chocolates",
    preco: 26.00,
    imagem: "img/produtos/cha-frutas-citricas-canela.jpg",
    descricao: "Infusão quente de laranja, maçã, mirtilos, anis-estrelado e canela em casca.",
    destaque: false
  },
  {
    id: 39,
    nome: "Caixa de Brigadeiros de Pistache",
    categoria: "Doces e Kits",
    preco: 34.00,
    imagem: "img/produtos/brigadeiros-pistache-dourado.jpg",
    descricao: "Brigadeiros gourmet de pistache cobertos com castanhas picadas e pérolas douradas.",
    destaque: false
  },
  {
    id: 40,
    nome: "Torta Nevada de Morangos e Chantilly",
    categoria: "Bolos e Tortas",
    preco: 86.00,
    imagem: "img/produtos/torta-morangos-chantilly-neve.jpg",
    descricao: "Torta recheada com creme leve, morangos frescos selecionados e chantilly nevado.",
    destaque: false
  },
  {
    id: 41,
    nome: "Frappé Gelado de Chocolate com Brownie",
    categoria: "Bebidas e Chocolates",
    preco: 27.90,
    imagem: "img/produtos/frappe-chocolate-brownie.jpg",
    descricao: "Bebida gelada batida com chocolate cremoso, chantilly e pedaços de brownie.",
    destaque: false
  },
  {
    id: 42,
    nome: "Bolo Dourado de Laranja com Especiarias",
    categoria: "Bolos e Tortas",
    preco: 69.00,
    imagem: "img/produtos/bolo-laranja-glaceada-canela.jpg",
    descricao: "Bolo fofinho de laranja com calda cítrica brilhante e rodelas caramelizadas.",
    destaque: false
  },
  {
    id: 43,
    nome: "Chá Aconchego de Gengibre e Laranja",
    categoria: "Bebidas e Chocolates",
    preco: 19.90,
    imagem: "img/produtos/cha-gengibre-laranja-mel.jpg",
    descricao: "Chá quentinho preparado com gengibre fresco, rodelas de laranja, cravo e mel.",
    destaque: false
  },
  {
    id: 44,
    nome: "Bolo Floresta Negra Especial de Natal",
    categoria: "Bolos e Tortas",
    preco: 119.00,
    imagem: "img/produtos/bolo-floresta-negra-cerejas.jpg",
    descricao: "Bolo de chocolate recheado com chantilly e cerejas, coberto com ganache meio amargo.",
    destaque: false
  },
  {
    id: 45,
    nome: "Rosca Natalina Vulcão de Doce de Leite",
    categoria: "Panetones",
    preco: 64.90,
    imagem: "img/produtos/rosca-natalina-doce-de-leite.jpg",
    descricao: "Rosca doce artesanal macia com açúcar e canela e farto doce de leite cremoso.",
    destaque: false
  },
  {
    id: 46,
    nome: "Pote Presente de Suspiros Natalinos",
    categoria: "Biscoitos",
    preco: 29.90,
    imagem: "img/produtos/pote-suspiros-natalinos.jpg",
    descricao: "Pote de vidro decorado cheio de mini suspiros crocantes vermelhos e verdes.",
    destaque: false
  },
  {
    id: 47,
    nome: "Café Gelado com Caramelo e Canela",
    categoria: "Bebidas e Chocolates",
    preco: 23.90,
    imagem: "img/produtos/cafe-gelado-caramelo-canela.jpg",
    descricao: "Bebida gelada de café com leite cremoso, calda de caramelo, chantilly e canela.",
    destaque: false
  },
  {
    id: 48,
    nome: "Manjar Branco de Coco com Romã",
    categoria: "Doces e Kits",
    preco: 62.00,
    imagem: "img/produtos/manjar-coco-frutas-vermelhas.jpg",
    descricao: "Manjar cremoso de leite de coco decorado com coco ralado, framboesas e romã.",
    destaque: false
  },
  {
    id: 49,
    nome: "Panetone Trufado de Creme de Avelã",
    categoria: "Panetones",
    preco: 84.90,
    imagem: "img/produtos/panetone-trufado-pistache.jpg",
    descricao: "Panetone macio super recheado com creme de avelã e cobertura de chocolate nobre.",
    destaque: false
  },
  {
    id: 50,
    nome: "Mini Panetone Artesanal para Presente",
    categoria: "Panetones",
    preco: 32.90,
    imagem: "img/produtos/mini-panetone-presenteavel.jpg",
    descricao: "Versão presenteável do nosso panetone clássico com frutas cristalizadas selecionadas.",
    destaque: false
  }
];
