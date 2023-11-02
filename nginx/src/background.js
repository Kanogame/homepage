const canvas = document.querySelector(".background");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

circles = [];

for (var i = 0; i < 10; i++) {
    circles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.floor(Math.random() * 100),
      vx: Math.floor(Math.random() * 50) - 25,
      vy: Math.floor(Math.random() * 50) - 25
    });
  }

function update() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.globalCompositeOperation = "lighter";

    for (var i = 0, x = circles.length; i < x; i++) {
        var s = circles[i];
      
        ctx.fillStyle = "#62719b";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = 'black';
        ctx.stroke();
    }

    for (var i = 0, x = circles.length; i < x; i++) {
        var s = circles[i];
      
        s.x += s.vx / 100;
        s.y += s.vy / 100;
        
        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
    }
}

function tick() {
    update();
    requestAnimationFrame(tick);
}

tick();