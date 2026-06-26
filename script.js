const nav = document.querySelector("header");

window.addEventListener("scroll", () => {
if (window.scrollY > 50) {
    nav.classList.add("scroll");
} else {
    nav.classList.remove("scrill");
}
});

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior:"smooth"
        });

    });

});

const numeros = document.querySelectorAll(".status-item h2");

numeros.forEach(numero=>{

    const final = parseInt(numero.innerText.replace(/\D/g,""));

    let atual = 0;

    const timer = setInterval(()=>{

        atual += Math.ceil(final/100);

        if(atual >= final){
            atual = final;
            clearInterval(timer);
        }

        numero.innerText = "+"+atual;

    },20);

});

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("mostrar");
        }

    });

});

cards.forEach(card=>observer.observe(card));


const topo = document.getElementById("topo");

window.addEventListener("scroll",()=>{

    topo.style.display =
    window.scrollY > 400 ? "block":"none";

});

topo.onclick=()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}
