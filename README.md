# canvas
Código de Desenho em Canvas
Este é um código JavaScript que utiliza a tag <canvas> do HTML para desenhar várias formas e imagens em um elemento de desenho no navegador.
  

Configuração do Canvas
O código começa configurando o elemento <canvas> com uma largura de 500 pixels e uma altura de 500 pixels.

const canvas = document.querySelector('#canvas');
canvas.width = 500;
canvas.height = 500;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  
Desenho de um Retângulo Roxo
A função drawPurpleRect() é responsável por desenhar um retângulo roxo no canvas. O retângulo tem uma posição inicial de (50, 50) e dimensões de 200 pixels de largura por 100 pixels de altura.

function drawPurpleRect() {
  ctx.fillStyle = 'purple';
  ctx.fillRect(50, 50, 200, 100);
}
  
  
Desenho de um Círculo Marrom
A função drawBrownCircle() desenha um círculo marrom no canvas. O círculo é desenhado utilizando a função arc() do contexto 2D. O círculo possui um centro em (250, 250), um raio de 50 pixels e é preenchido com a cor marrom.

function drawBrownCircle() {
  ctx.fillStyle = 'brown';
  ctx.beginPath();
  ctx.arc(250, 250, 50, 0, 2 * Math.PI);
  ctx.fill();
}
  
  
Desenho de Linhas Coloridas
A função drawColoredLines() desenha três linhas coloridas no canvas. Cada linha é desenhada utilizando os métodos do contexto 2D.

A primeira linha é vermelha e curva. Ela começa em (400, 100), vai até (450, 150) e possui uma curva de Bezier definida pelos pontos (450, 200), (400, 200) e (350, 150).
A segunda linha é verde e curva. Ela começa em (400, 200), vai até (450, 250) e possui uma curva quadrática definida pelos pontos (450, 300) e (400, 300), terminando em (350, 300).
A terceira linha é azul e reta. Ela começa em (400, 300), vai até (450, 350) e termina em (400, 400).
  function drawColoredLines() {
  ctx.lineWidth = 5;

  // Linha vermelha curva
  ctx.beginPath();
  ctx.moveTo(400, 100);
  ctx.lineTo(450, 150);
  ctx.bezierCurveTo(450, 200, 400, 200, 350, 150);
  ctx.strokeStyle = 'red';
  ctx.stroke();

  // Linha verde curva
  ctx.beginPath();
  ctx.moveTo(400, 200);
  ctx.lineTo(450, 250);
  ctx.quadraticCurveTo(450, 300, 400, 300);
  ctx.lineTo(350, 300);
  ctx.strokeStyle = 'green';
  ctx.stroke();

  // Linha azul reta
  ctx.beginPath();
  ctx.moveTo(400, 300);
  ctx.lineTo(450, 350);
  ctx.lineTo(400);
  
  
colocar a imagem
Esta função desenha uma imagem no canvas. A imagem é carregada a partir de um arquivo chamado "imagem.png" localizado na pasta "img". A imagem é desenhada nas coordenadas (100, 300) do canvas, com uma largura de 200 pixels e uma altura de 100 pixels.
 
  function drawImage() {
        const img = new Image();
        img.src = 'img/imagem.png';
        img.onload = () => {
          ctx.drawImage(img, 100, 300, 200, 100);
        };
      }

  
desenha uma linha amarela
Esta função desenha uma linha reta amarela no canvas. A linha começa em (50, 120) e termina em (350, 120). A cor da linha é amarela e sua espessura é de 5 pixels.
   function drawYellowLine() {
        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(50, 120);
        ctx.lineTo(350, 120);
        ctx.stroke();
      }
  

Chamada das Funções de Desenho
Após a definição das funções de desenho, o código chama as funções na seguinte ordem:
  
drawPurpleRect();
drawBrownCircle();
drawColoredLines();
drawImage();
drawYellowLine();
Essas chamadas de função executam o código necessário para desenhar os elementos no canvas, de acordo com a lógica definida em cada função.
