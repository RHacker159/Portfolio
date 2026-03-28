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


function showWarning(){
    let w = document.getElementById("warning");
    w.style.display = "block";

    setTimeout(()=>{
        w.style.display = "none";
    },3000);
}

// Disable Right Click
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
    showWarning();
});

// Disable keyboard shortcuts
document.addEventListener("keydown", function(e){

    if(e.key === "F12"){
        e.preventDefault();
        showWarning();
    }

    if(e.ctrlKey && e.key === "u"){
        e.preventDefault();
        showWarning();
    }

    if(e.ctrlKey && e.key === "i"){
        e.preventDefault();
        showWarning();
    }

    if(e.ctrlKey && e.shiftKey && e.key === "I"){
        e.preventDefault();
        showWarning();
    }

    if(e.ctrlKey && e.shiftKey && e.key === "J"){
        e.preventDefault();
        showWarning();
    }

});