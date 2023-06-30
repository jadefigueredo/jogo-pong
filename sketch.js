// Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro /2; // ajuda na verificação da colisão com a borda
let raqueteComprimento = 10;
let raqueteAltura = 90;

// variáveis raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimento = 10;  
let altura = 90;

// variáveis raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let chanceDeErrar = 0;
let velocidadeYOponente;

let colidiu = false;

// placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

// sons do jogo
let raquetada;
let ponto;
let trilha;

//cria a velocidade da bolinha -> diretamente proporcional 
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


function preload(){
  trilha = loadSound("sons/trilha.mp3");
  ponto = loadSound("sons/ponto.mp3");
  raquetada = loadSound("sons/raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  //trilha.loop();
}

// altera a cor do preview e chama funções
function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda(); // verifica a colisão da bolinha com a borda
    mostraRaquete(xRaquete, yRaquete);
    movimentaMinhaRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    incluiPlacar();
    marcaPonto();

}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

// cria movimento para bolinhas
function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}


//verifica se a bolinha está colidindo
function verificaColisaoBorda(){
    if (xBolinha + raio > width || 
        xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || 
        yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}

function mostraRaquete(x,y){
  rect(x, y, comprimento, altura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
  // limita a movimentação da minha raquete para que ela não saia da tela
  yRaquete = constrain(yRaquete, 10, 310)
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento /2 -30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
}

/*function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}*/

function verificaColisaoRaquete(x, y){
  colidiu = 
collideRectCircle(x, y, comprimento, altura, xBolinha, yBolinha, raio);
  
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0))
  rect(170, 10, 40, 20);
  fill(255);
  text(meusPontos, 190, 26);
  fill(color(255, 140, 0))
  rect(450, 10, 40, 20);
  fill(255)
  text(pontosDoOponente, 470, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosDoOponente += 1;
  //  ponto.play();
  }
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}