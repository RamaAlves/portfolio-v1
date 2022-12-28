const navToggle=document.querySelector(".nav-toggle")
const navList=document.querySelector(".nav-list")
const anchors=document.querySelectorAll(".nav-item-link")
const subtitle=document.querySelector(".subtitle-main")

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


let options = {
  strings: ['Ramiro <span class="color">Alves<span/> ', 'web <span class="color">developer<span/> '],
  typeSpeed: 40,
  backSpeed: 40,
  loop:true,
  showCursor:false,
};

let typed = new Typed('#change', options);

//proyects

const namesProyects = document.querySelectorAll(".proyect-name")
const cardsProyects = document.querySelectorAll(".card-proyect")

namesProyects.forEach((nameProyect, i)=>{
    namesProyects[i].addEventListener('click', ()=>{
        let posicion = i;
        namesProyects.forEach((nameProyect, i)=>{
            namesProyects[i].classList.remove('seleccionado');
        })
        cardsProyects.forEach((cardProyect, i)=>{
            cardsProyects[i].classList.remove('visible');
        })
        cardsProyects[posicion].classList.add('visible');
        namesProyects[posicion].classList.add('seleccionado');
    })
})