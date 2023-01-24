// Constants

const navToggle=document.querySelector(".nav-toggle");
const navList=document.querySelector(".nav-list");
const anchors=document.querySelectorAll(".nav-item-link");
const subtitle=document.querySelector(".subtitle-main");


//proyects
const namesProyects = document.querySelectorAll(".proyect-name");
const cardsProyects = document.querySelectorAll(".card-proyect");
const btnInfoBlog = document.querySelector("#info-blog");
const btnInfoPixel = document.querySelector("#info-pixel");
const btnInfoPortfolio = document.querySelector("#info-portfolio");

//modal
const modal = document.querySelector("#modal-blog-info");
const modalOverlay = document.querySelector("#modal-overlay");
const modalContent = document.querySelector("#modal-content");
const modalBtnClose = document.querySelector("#modal-btn-close");

const hidden = "hidden";

//tecnologies
// const descriptionsTecnologies = document.querySelectorAll(".description-tec"); 
// const descriptionHtml= document.querySelector("#tec-html");
// const buttonHtml= document.querySelector("#btn-tec-html");
// const descriptionCss= document.querySelector("#tec-css");
// const buttonCss= document.querySelector("#btn-tec-css");
// const descriptionSass= document.querySelector("#tec-sass");
// const buttonSass= document.querySelector("#btn-tec-sass");
// const descriptionJs= document.querySelector("#tec-js");
// const buttonJs= document.querySelector("#btn-tec-js");
// const descriptionPython= document.querySelector("#tec-python");
// const buttonPython= document.querySelector("#btn-tec-python");
// const descriptionDjango= document.querySelector("#tec-django");
// const buttonDjango= document.querySelector("#btn-tec-django");
// const descriptionMysql= document.querySelector("#tec-mysql");
// const buttonMysql= document.querySelector("#btn-tec-mysql");
// const descriptionGit= document.querySelector("#tec-git");
// const buttonGit= document.querySelector("#btn-tec-git");
// const descriptionGithub= document.querySelector("#tec-github");
// const buttonGithub= document.querySelector("#btn-tec-github");

//Footer
const btnLib = document.querySelector("#btn-lib");
const containerLib = document.querySelector("#container-lib");
// Variables

// let conjuntoTec=[
//     [buttonHtml,
//     descriptionHtml],
//     [buttonCss,
//     descriptionCss],
//     [buttonSass,
//     descriptionSass],
//     [buttonJs,
//     descriptionJs],
//     [buttonPython,
//     descriptionPython],
//     [buttonDjango,
//     descriptionDjango],
//     [buttonMysql,
//     descriptionMysql],
//     [buttonGit,
//     descriptionGit],
//     [buttonGithub,
//     descriptionGithub],
// ];

//funciones generales

//recibe un HTMLCollection y la clase que se desea eliminar de los elementos en forma de string
function cleanClass(elementos, clase ){
    elementos.forEach((elemento, i)=>{
        elementos[i].classList.remove(clase);
    })
}

//navbar

navToggle.addEventListener("click", ()=>{
    navBtnToggle();
})

anchors.forEach(anchor => {
    anchor.addEventListener("click", ()=>{
        navBtnToggle();
        anchorToglle(anchor);
    })
});

function navBtnToggle(){
    navList.classList.toggle("nav-list_visible");
    
    if(navList.classList.contains("nav-list_visible")){
        navToggle.setAttribute("aria-label","Close menu")
    }else{
        navToggle.setAttribute("aria-label","Open menu")
    }
}

function anchorToglle(anchor){
    anchors.forEach(anchor => {
        if(anchor.classList.contains("nav-item-link_active")){
            anchor.classList.toggle("nav-item-link_active")
        }
    });
    anchor.classList.toggle("nav-item-link_active")
}

//animations page
ScrollReveal().reveal('.nav', {
    origin:"top",
    duration:1000,
    distance:'50px',
});

ScrollReveal().reveal('.section', {
    origin:"left",
    distance:'100px',
    duration:2000,
    reset:true,
});
ScrollReveal().reveal('.paragraph', {
    origin:"left",
    distance:'100px',
    duration:2000,
    reset:true,
});
/* ScrollReveal().reveal('.cv', {
    scale:0.5,
    duration:1000,
    reset:true,
}); */


//About me

//animation text
let options = {
  strings: ['Ramiro <span class="color">Alves<span/> ', 'FRONT-END <span class="color">developer<span/> '],
  typeSpeed: 40,
  backSpeed: 40,
  loop:true,
  showCursor:false,
};

let typed = new Typed('#change', options);

//proyects

namesProyects.forEach((nameProyect, i)=>{
    namesProyects[i].addEventListener('click', ()=>{
        let posicion = i;
        cleanClass(namesProyects, "seleccionado");
        cleanClass(cardsProyects, "visible");
        cardsProyects[posicion].classList.add('visible');
        namesProyects[posicion].classList.add('seleccionado');
    })
})

//modal
function openModal(){
    modal.classList.remove(hidden);
}

function closeModal(){
    modal.classList.add(hidden);
}

btnInfoBlog.addEventListener("click", openModal);
btnInfoPixel.addEventListener("click", openModal);
btnInfoPortfolio.addEventListener("click", openModal);

modalBtnClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function(e){
    if(e.key==="Escape" && !modal.classList.contains(hidden)){
        closeModal()
    }
})

// tecnologies
//recibe un array con arrays de pares boton y parrafo a mostrar)
// function showInfoTec(array){
//     array.forEach((conjunto)=>{
//         conjunto[0].addEventListener('click', ()=>{
//             cleanClass(descriptionsTecnologies, 'visible');
//             conjunto[1].classList.add('visible');
//         })
//     })
// }

// showInfoTec(conjuntoTec);

// footer
btnLib.addEventListener('click', ()=>{
    containerLib.classList.toggle("expanded");
    if (btnLib.textContent.includes("▲")){
        btnLib.innerHTML = "librerias ▼"
    } else {
        btnLib.innerHTML = "librerias ▲"
    }
})