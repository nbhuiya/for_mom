function showPage(pageId){

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}



/* CONFETTI */

function createConfetti(){

    const confettiContainer = document.createElement("div");

    confettiContainer.classList.add("confetti-container");

    document.body.appendChild(confettiContainer);

    for(let i=0; i<140; i++){

        const confetti = document.createElement("span");

        confetti.classList.add("confetti");

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            (Math.random() * 4 + 4) + "s";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        confetti.style.background =
            `hsl(${Math.random()*360},100%,50%)`;

        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {

        confettiContainer.remove();

    }, 8000);
}



/* GIFT OPEN */

const giftBox = document.getElementById("giftBox");
const bgMusic = document.getElementById("bgMusic");

giftBox.addEventListener("click", () => {
    
    bgMusic.play();

    giftBox.classList.add("open-gift");

    createConfetti();

    setTimeout(() => {

        showPage("letterPage");

    }, 1200);

});



/* LETTER PAGE */

function openLetter(){

    showPage("messagePage");

}


function showLetterPhoto(){

    document.querySelector(".letter-emoji").style.display = "none";

    document.querySelector(".tap-jump").style.display = "none";

    document.getElementById("hiddenPhoto").style.display = "block";

}



/* MEMORY PAGE */

function openMemoryPage(){

    showPage("memoryPage");

}

function flipCard(card){

    card.classList.toggle("flipped");

}



/* POEM PAGE */

function openPoemPage(){

    showPage("poemPage");

}



/* BALLOON PHOTOS */

function showPhoto(number){

    if(number === 1){

        document.getElementById("photo1").style.display = "flex";

    }

    if(number === 2){

        document.getElementById("photo2").style.display = "flex";

    }

}



/* CLOSE POPUP */

window.addEventListener("click",(e)=>{

    const popup1 = document.getElementById("photo1");
    const popup2 = document.getElementById("photo2");

    if(e.target === popup1){

        popup1.style.display = "none";

    }

    if(e.target === popup2){

        popup2.style.display = "none";

    }

});

/* BALLOON POP EFFECT */

const balloons = document.querySelectorAll(".balloon");

let poppedCount = 0;

balloons.forEach(balloon => {

    balloon.addEventListener("click", () => {

        if(balloon.classList.contains("pop")) return;

        balloon.classList.add("pop");

        poppedCount++;

        setTimeout(() => {

            balloon.style.display = "none";

            if(poppedCount === balloons.length){

                setTimeout(() => {

                    showPage("finalPage");

                }, 1800);

            }

        }, 500);

    });

});