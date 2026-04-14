function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Fundo Vermelho Construtivista
  background("#B62020"); 

  // 1. O Rosto (Bege papel envelhecido)
  fill('#E3D6B5');
  stroke(0);
  strokeWeight(4);
  circle(200, 210, 280);

  // 2. Chapéu Ushanka (Formas retangulares e rígidas)
  fill(30); // Cinza quase preto
  rect(80, 60, 240, 80); // Topo do chapéu
  rect(60, 80, 50, 150);  // Protetor orelha esquerda
  rect(290, 80, 50, 150); // Protetor orelha direita
  
  // A Estrela Vermelha no chapéu
  fill("#FFD700"); // Amarelo Ouro
  push();
  translate(200, 100);
  rotate(PI/1); 
  triangle(-20, 15, 20, 15, 0, -25); // Estrela simplificada
  pop();

  // 3. Olhos (Rigorosos e geométricos)
  fill(255);
  rect(130, 170, 50, 30); // Olho esquerdo retangular
  rect(220, 170, 50, 30); // Olho direito retangular
  
  fill(0);
  circle(155, 185, 15); // Pupilas fixas
  circle(245, 185, 15);

  // 4. Sobrancelhas (Grossas e de determinação)
  strokeWeight(8);
  line(125, 155, 185, 160);
  line(215, 160, 275, 155);

  // 5. O Nariz (Triângulo sólido, estilo cartaz de propaganda)
  noStroke();
  fill(30);
  triangle(200, 195, 185, 240, 215, 240);

  // 6. Boca (Séria e reta)
  stroke(0);
  strokeWeight(5);
  line(170, 290, 230, 290);

  // 7. Detalhes de Fundo (Engrenagens ou Raios)
  stroke(255, 50); // Branco transparente
  strokeWeight(2);
  for(let i = 0; i < 8; i++) {
    push();
    translate(200, 210);
    rotate(TWO_PI * i / 8);
    line(150, 0, 300, 0);
    pop();
  }

  if(mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}