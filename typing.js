var i = 0;
var txt = './welcome';
var greetings = [
"Welcome back, kanogames",
"Приветсвую, kanogames",
"おかえり、カノガメス"
];
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".greeter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {geeter = document.querySelector(".greetings"); geeter.classList.add("active"); geeter.innerHTML=greetings[Math.floor(Math.random() * 3)] }, 200);
    setTimeout(() => {document.querySelector(".date").classList.add("active");}, 400);
    setTimeout(() => {document.querySelector(".activities").classList.add("active_flex");}, 450);
  }
}

typeWriter();