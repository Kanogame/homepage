const container = document.querySelector(".background");

boxes = [];

for (let i = 0; i < 10; i++) {
    const floatingBox = document.createElement("div");
    floatingBox.classList.add("floating");
    boxes.push({element: floatingBox,
    vx: Math.floor(Math.random() * 50) - 25,
    vy: Math.floor(Math.random() * 50) - 25,
    left: getRndInteger(0, window.innerWidth ),
    top: getRndInteger(0, window.innerHeight ),
    rotate: Math.random() * 100});
}

function moveBoxes() {
    container.innerHTML = "";
    for (var i = 0, x = boxes.length; i < x; i++) {
        var s = boxes[i];
      
        s.left += s.vx / 60;
        s.top += s.vy / 60;
        s.rotate += ((s.vx + s.vy) / 2) / 100;
        s.element.style.rotate = s.rotate + "deg";
        s.element.style.left = s.left + "px";
        s.element.style.top = s.top + "px"; 
        container.append(s.element);

        if (s.left < 0 || s.left > window.innerWidth -100) s.vx = -s.vx;
        if (s.top < 0 || s.top > window.innerHeight - 100) s.vy = -s.vy;
    }
}

function tick() {
    moveBoxes();
    requestAnimationFrame(tick);
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

tick();