

function anim() { 
    var msg = document.querySelector("#msg");

    setTimeout(function() {
        msg.classList.add("hidden");
    }, 8000);
    
 }

window.onload = anim;