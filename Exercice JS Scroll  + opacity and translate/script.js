// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

let playOnce = true;
const firstImg = document.getElementById("imgImprovise");
const popUp = document.getElementById("popup");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        navbar.style.height = "50px";
    } else {
        navbar.style.height = "90px";
    }

    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;

    if (scrollValue > 0.45) {
        firstImg.style.opacity = 1;
        firstImg.style.transform = "none";
    }

    if (scrollValue > 0.85 && playOnce) {
        popUp.style.opacity = 1;
        popUp.style.transform = "none";
        playOnce = false;
    } 
});


closeBtn.addEventListener("click", () => {
    popUp.style.opacity = "0";
    popUp.style.transform = "translateX(400px)"
});


