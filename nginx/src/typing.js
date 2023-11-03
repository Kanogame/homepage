var j = 0;
var txt = './welcome';
var greetings = [
"Welcome back, kanogames",
"Приветсвую, kanogames",
"おかえり、カノガメス"
];
var speed = 100;

function typeWriter() {
  if (j < txt.length) {
    document.querySelector(".greeter").innerHTML += txt.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {geeter = document.querySelector(".greetings"); 
    document.querySelector(".date").classList.add("active");
    document.querySelector(".daily").classList.add("active");
    document.querySelector(".daily-g").classList.add("active");
    document.querySelector(".activities").classList.add("active_flex");
    geeter.classList.add("active"); 
    geeter.innerHTML=greetings[Math.floor(Math.random() * 3)];
  }, 200);
  }
}

typeWriter();