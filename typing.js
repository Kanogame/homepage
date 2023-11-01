var i = 0;
var txt = 'Welcome back, kanogame';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".greeter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {document.querySelector(".date").classList.add("active");}, 200);
    setTimeout(() => {document.querySelector(".activities").classList.add("active_flex");}, 250);
  }
}

typeWriter();