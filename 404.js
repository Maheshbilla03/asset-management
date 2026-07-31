
const particles = document.querySelector(".particles");

for(let i = 0; i < 40; i++){

    let span = document.createElement("span");

    span.style.left = Math.random() * 100 + "%";

    span.style.animationDuration =
    (Math.random() * 8 + 5) + "s";

    span.style.opacity = Math.random();

    particles.appendChild(span);
   
}