//Galaxy Script

const galaxy = document.querySelector(".galaxy");

for(let i=0;i<500;i++){

let star = document.createElement("div");
star.classList.add("star");

star.style.left = Math.random()*100 + "vw";
star.style.top = Math.random()*100 + "vh";

star.style.animationDuration = (Math.random()*10+5) + "s";

galaxy.appendChild(star);

}


//code yengba yadanabani


