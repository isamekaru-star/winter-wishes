function formatarPreco(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}

const botaoMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");
botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
});

const botaoTopo = document.getElementById("topo");
window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";
  }
});
botaoTopo.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const tela = document.getElementById("neve");
const pincel = tela.getContext("2d");
let flocos = [];

function criarFlocos() {
  tela.width = window.innerWidth;
  tela.height = window.innerHeight;
  flocos = [];
  for (let i = 0; i < 130; i++) {
    flocos.push({
      x: Math.random() * tela.width,
      y: Math.random() * tela.height,
      raio: Math.random() * 3 + 1,
      vel: Math.random() * 1 + 0.5
    });
  }
}

function nevar() {
  pincel.clearRect(0, 0, tela.width, tela.height);
  pincel.fillStyle = "rgba(255, 255, 255, 0.9)";
  for (let i = 0; i < flocos.length; i++) {
    let f = flocos[i];
    f.y += f.vel;
    if (f.y > tela.height) {
      f.y = -5;
      f.x = Math.random() * tela.width;
    }
    pincel.beginPath();
    pincel.arc(f.x, f.y, f.raio, 0, Math.PI * 2);
    pincel.fill();
  }
  requestAnimationFrame(nevar);
}

criarFlocos();
nevar();
window.addEventListener("resize", criarFlocos);

const musica = new Audio("audio/musica-natal.mpeg");
musica.loop = true;
musica.volume = 0.5;
const botaoMusica = document.getElementById("btn-musica");
botaoMusica.addEventListener("click", function () {
  if (musica.paused) {
    musica.play();
    botaoMusica.classList.add("tocando");
    botaoMusica.textContent = "♪ Pausar música";
  } else {
    musica.pause();
    botaoMusica.classList.remove("tocando");
    botaoMusica.textContent = "♪ Tocar música";
  }
});

const slider = document.getElementById("slider");
if (slider) {
  const slides = slider.querySelectorAll(".slide");
  const pontos = document.getElementById("pontos");
  let atual = 0;

  for (let i = 0; i < slides.length; i++) {
    const ponto = document.createElement("button");
    ponto.addEventListener("click", function () {
      mostrarSlide(i);
    });
    pontos.appendChild(ponto);
  }

  function mostrarSlide(indice) {
    atual = (indice + slides.length) % slides.length;
    const botoesPontos = pontos.querySelectorAll("button");
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.toggle("ativo", i === atual);
      botoesPontos[i].classList.toggle("ativo", i === atual);
    }
  }

  document.getElementById("proximo").addEventListener("click", function () {
    mostrarSlide(atual + 1);
  });
  document.getElementById("anterior").addEventListener("click", function () {
    mostrarSlide(atual - 1);
  });

  setInterval(function () {
    mostrarSlide(atual + 1);
  }, 5000);

  mostrarSlide(0);
}

function criarCard(p) {
  return `
    <article class="card">
      <button class="arco" data-detalhe="${p.id}">
        <img src="${p.imagem}" alt="${p.nome}">
      </button>
      <div class="card-corpo">
        <small>${p.categoria}</small>
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
        <div class="card-rodape">
          <strong>${formatarPreco(p.preco)}</strong>
          <button class="btn-comprar" data-id="${p.id}">+</button>
        </div>
      </div>
    </article>`;
}

function mostrarProdutos(lista, area) {
  if (lista.length === 0) {
    area.innerHTML = `<p class="vazio">Nenhum produto encontrado.</p>`;
    return;
  }
  let html = "";
  for (let i = 0; i < lista.length; i++) {
    html += criarCard(lista[i]);
  }
  area.innerHTML = html;
}

const areaDestaques = document.getElementById("destaques");
if (areaDestaques) {
  const destaques = produtos.filter(function (p) { return p.destaque; });
  mostrarProdutos(destaques, areaDestaques);
}

const areaLista = document.getElementById("lista-produtos");
if (areaLista) {
  const campoBusca = document.getElementById("busca");
  const seletorCategoria = document.getElementById("categoria");
  const seletorOrdem = document.getElementById("ordem");
  const contador = document.getElementById("contador");

  let categorias = [];
  for (let i = 0; i < produtos.length; i++) {
    let cat = produtos[i].categoria;
    if (!categorias.includes(cat)) {
      categorias.push(cat);
      seletorCategoria.innerHTML += `<option value="${cat}">${cat}</option>`;
    }
  }

  function filtrar() {
    const texto = campoBusca.value.toLowerCase();
    const categoria = seletorCategoria.value;
    const ordem = seletorOrdem.value;

    let resultado = produtos.filter(function (p) {
      const bateNome = p.nome.toLowerCase().includes(texto);
      const bateCategoria = categoria === "todas" || p.categoria === categoria;
      return bateNome && bateCategoria;
    });

    if (ordem === "menor") resultado.sort(function (a, b) { return a.preco - b.preco; });
    if (ordem === "maior") resultado.sort(function (a, b) { return b.preco - a.preco; });
    if (ordem === "nome") resultado.sort(function (a, b) { return a.nome.localeCompare(b.nome); });

    mostrarProdutos(resultado, areaLista);
    contador.textContent = `Mostrando ${resultado.length} de ${produtos.length} produtos`;
  }

  campoBusca.addEventListener("input", filtrar);
  seletorCategoria.addEventListener("change", filtrar);
  seletorOrdem.addEventListener("change", filtrar);
  filtrar();
}

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
const gaveta = document.getElementById("carrinho");
const fundo = document.getElementById("fundo");

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  desenharCarrinho();
}

function adicionarAoCarrinho(id) {
  let item = carrinho.find(function (i) { return i.id === id; });
  if (item) {
    item.qtd++;
  } else {
    carrinho.push({ id: id, qtd: 1 });
  }
  salvarCarrinho();
}

function alterarQuantidade(id, delta) {
  let item = carrinho.find(function (i) { return i.id === id; });
  if (item) {
    item.qtd += delta;
    carrinho = carrinho.filter(function (i) { return i.qtd > 0; });
    salvarCarrinho();
  }
}

function desenharCarrinho() {
  let qtdTotal = 0;
  let valorTotal = 0;
  let html = "";

  for (let i = 0; i < carrinho.length; i++) {
    let item = carrinho[i];
    let prod = produtos.find(function (p) { return p.id === item.id; });
    if (prod) {
      qtdTotal += item.qtd;
      valorTotal += prod.preco * item.qtd;
      html += `
        <div class="item-carrinho">
          <h3>${prod.nome}</h3>
          <strong>${formatarPreco(prod.preco * item.qtd)}</strong>
          <div class="quantidade">
            <button data-menos="${prod.id}">−</button>
            <span>${item.qtd}</span>
            <button data-mais="${prod.id}">+</button>
          </div>
        </div>`;
    }
  }

  document.getElementById("qtd-carrinho").textContent = qtdTotal;
  if (!gaveta) return;

  document.getElementById("total-carrinho").textContent = formatarPreco(valorTotal);
  document.getElementById("lista-carrinho").innerHTML = html || "<p>Seu carrinho está vazio.</p>";
}

function abrirCarrinho(abrir) {
  gaveta.classList.toggle("aberta", abrir);
  fundo.hidden = !abrir;
}

document.getElementById("abrir-carrinho").addEventListener("click", function () {
  if (gaveta) abrirCarrinho(true);
  else window.location.href = "produtos.html#carrinho";
});

if (gaveta) {
  fundo.addEventListener("click", function () { abrirCarrinho(false); });
  document.getElementById("fechar-carrinho").addEventListener("click", function () { abrirCarrinho(false); });
  document.getElementById("limpar").addEventListener("click", function () {
    carrinho = [];
    salvarCarrinho();
  });
  document.getElementById("finalizar").addEventListener("click", function () {
    if (carrinho.length === 0) return;
    alert("Pedido enviado! Obrigado por comprar na Winter Wishes.");
    carrinho = [];
    salvarCarrinho();
    abrirCarrinho(false);
  });
  document.getElementById("lista-carrinho").addEventListener("click", function (e) {
    if (e.target.dataset.mais) alterarQuantidade(Number(e.target.dataset.mais), 1);
    if (e.target.dataset.menos) alterarQuantidade(Number(e.target.dataset.menos), -1);
  });
  if (window.location.hash === "#carrinho") abrirCarrinho(true);
}
desenharCarrinho();

const modal = document.getElementById("modal");
let produtoAberto = null;

if (modal) {
  function abrirModal(id, oferta) {
    const p = produtos.find(function (x) { return x.id === id; });
    produtoAberto = id;
    document.getElementById("modal-arte").innerHTML = `<img src="${p.imagem}" alt="${p.nome}">`;
    document.getElementById("modal-categoria").textContent = p.categoria;
    document.getElementById("modal-nome").textContent = p.nome;
    document.getElementById("modal-descricao").textContent = p.descricao;
    if (oferta) {
      const precoAntigo = oferta.querySelector("s").textContent;
      const precoNovo = oferta.querySelector("strong").textContent;
      document.getElementById("modal-preco").innerHTML = `<s>${precoAntigo}</s> ${precoNovo}`;
    } else {
      document.getElementById("modal-preco").textContent = formatarPreco(p.preco);
    }
    modal.hidden = false;
  }

  document.getElementById("fechar-modal").addEventListener("click", function () { modal.hidden = true; });
  modal.addEventListener("click", function (e) { if (e.target === modal) modal.hidden = true; });
  document.getElementById("modal-comprar").addEventListener("click", function () { adicionarAoCarrinho(produtoAberto); });

  document.addEventListener("click", function (e) {
    const item = e.target.closest("[data-detalhe]");
    if (item) abrirModal(Number(item.dataset.detalhe), item.closest(".oferta"));
  });
}

document.addEventListener("click", function (e) {
  const botao = e.target.closest(".btn-comprar");
  if (botao) adicionarAoCarrinho(Number(botao.dataset.id));
});

function atualizarContagem() {
  const agora = new Date();
  let natal = new Date(agora.getFullYear(), 11, 25);
  if (agora > natal) natal = new Date(agora.getFullYear() + 1, 11, 25);

  const falta = natal - agora;
  const dias = Math.floor(falta / 86400000);
  const horas = Math.floor(falta / 3600000) % 24;
  const minutos = Math.floor(falta / 60000) % 60;
  const segundos = Math.floor(falta / 1000) % 60;

  document.getElementById("c-dias").textContent = String(dias).padStart(2, "0");
  document.getElementById("c-horas").textContent = String(horas).padStart(2, "0");
  document.getElementById("c-min").textContent = String(minutos).padStart(2, "0");
  document.getElementById("c-seg").textContent = String(segundos).padStart(2, "0");
}

if (document.getElementById("contagem")) {
  setInterval(atualizarContagem, 1000);
  atualizarContagem();
}

const formulario = document.getElementById("form-contato");
if (formulario) {
  const retorno = document.getElementById("mensagem-form");

  function mostrarErro(campo, texto) {
    document.querySelector(`[data-erro="${campo}"]`).textContent = texto;
    document.getElementById(campo).parentElement.classList.toggle("invalido", texto !== "");
    return texto === "";
  }

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    const okNome = mostrarErro("nome", nome.length < 3 ? "Digite seu nome completo." : "");
    const okEmail = mostrarErro("email", email.includes("@") && email.includes(".") ? "" : "Digite um e-mail válido.");
    const okAssunto = mostrarErro("assunto", assunto === "" ? "Informe o assunto." : "");
    const okMsg = mostrarErro("mensagem", mensagem.length < 10 ? "Escreva pelo menos 10 caracteres." : "");

    retorno.classList.remove("ok");
    if (okNome && okEmail && okAssunto && okMsg) {
      retorno.textContent = "Obrigado, " + nome + "! Sua mensagem foi enviada.";
      retorno.classList.add("ok");
      formulario.reset();
    } else {
      retorno.textContent = "Corrija os campos destacados.";
    }
  });
}
