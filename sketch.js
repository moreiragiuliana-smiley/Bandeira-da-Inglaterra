function setup() {
  // Cria uma tela de 600x400 (proporção comum para bandeiras)
  createCanvas(600, 400);
  noStroke(); // Remove as bordas dos desenhos
}

function draw() {
  // 1. Fundo Branco
  background(255);

  // Definindo a largura da cruz (proporcional à bandeira)
  let espessuraCruz = 80;

  // Configura a cor para Vermelho
  fill(206, 17, 38); 

  // 2. Faixa Vertical (centralizada no meio da largura)
  // rect(x, y, largura, altura)
  rect(width / 2 - espessuraCruz / 2, 0, espessuraCruz, height);

  // 3. Faixa Horizontal (centralizada no meio da altura)
  rect(0, height / 2 - espessuraCruz / 2, width, espessuraCruz);
}