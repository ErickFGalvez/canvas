

     const canvas = document.querySelector('#canvas');
	  canvas.width = 500;
      canvas.height = 500;
     const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Função que desenha um retângulo roxo
      function drawPurpleRect() {
        ctx.fillStyle = 'purple';
        ctx.fillRect(50, 50, 200, 100);
      }

      // Função que desenha um círculo rosa
      function drawPinkCircle() {
        ctx.fillStyle = 'brown';
        ctx.beginPath();
        ctx.arc(250, 250, 50, 0, 2 * Math.PI);
        ctx.fill();
      }

      
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
        ctx.lineTo(400, 400);
        ctx.strokeStyle = 'blue';
        ctx.stroke();
      }

      // Função que desenha uma imagem
      function drawImage() {
        const img = new Image();
        img.src = 'img/imagem.png';
        img.onload = () => {
          ctx.drawImage(img, 100, 300, 200, 100);
        };
      }

      // Função que desenha uma linha reta amarela
      function drawYellowLine() {
        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(50, 120);
        ctx.lineTo(350, 120);
        ctx.stroke();
      }

      // Chama as funções de desenho em ordem
      drawPurpleRect();
      drawPinkCircle();
      drawColoredLines();
      drawImage();
      drawYellowLine();