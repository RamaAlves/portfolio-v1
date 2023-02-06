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

function updateModal(content){
    modalContent.innerHTML= content;
}

function modalInfo(){
    content= `
    <div class="container-paragraph-modal">
        <p>Este blog fue el proyecto final de la segunda etapa del informatorio.</p>
        <p>Lo realizamos de manera grupal y ademas de desarrollar me encargué de organizar y distribuir las tareas.</p>
        <p>En este proyecto me involucre en todas las etapas del desarrolo. Tanto en la creacion y administracion de la base de datos, la conección con el backend y el frontend.</p>
        <p>Para el desarrollo de este proyecto utilizamos django, con python para el backend y html y css para el frontend. La base de datos utilizamos MySQL.</p>
        <p>Además en el frontend utilizamos bootstrap para acelerar el diseño del blog debido a que los plazos de entrega del proyecto eran cortos.</p>
        <p>Tambien utilizamos servicios de terceros (disqus) para los comentarios de los posteos</p>
        <p>Para trabajar en equipo utilizamos git y github para el control de versiones</p>
        <p>Para ver el blog lo puedes visitar desde el siguiente enlace: <a target=_blank href="https://info2022.pythonanywhere.com/" >Blog bomberos voluntarios</a></p>
        <p>El código del proyecto puedes consultarlo en el <a target=_blank href="https://github.com/RamaAlves/proyecto-informatorio">repositorio</a> de github</p>
    </div>
    <div class="slide-tec">
        <div class="container-tecnologies">
            <button class="btn-tec" id="btn-tec-html">
                <svg class="ico-tec" preserveAspectRatio="xMidYMid" viewBox="0 0 256 361"  xmlns="http://www.w3.org/2000/svg"><path d="m255.554813 70.7657143-23.241143 260.3597367-104.469802 28.962461-104.1821537-28.92167-23.21652749-260.4005277z" fill="#e44d26"/><path d="m128 337.950242 84.416703-23.403605 19.861099-222.4893183h-104.277802z" fill="#f16529"/><path d="m82.8202198 155.932132h45.1797802v-31.937407h-80.082989l.7644835 8.568264 7.8494945 88.009846h71.469011v-31.936703h-42.2610989z" fill="#ebebeb"/><path d="m90.0177582 236.54189h-32.0597802l4.4743736 50.145758 65.4206594 18.161231.146989-.040791v-33.227956l-.139956.037275-35.5685275-9.60422z" fill="#ebebeb"/><path d="m24.1807473 0h16.229978v16.0351648h14.8465934v-16.0351648h16.2306813v48.5584176h-16.229978v-16.2602198h-14.8465934v16.2602198h-16.2299781v-48.5584176z"/><path d="m92.8309451 16.1026813h-14.2881759v-16.1026813h44.8140658v16.1026813h-14.294505v32.4557363h-16.2306816v-32.4557363z"/><path d="m130.469275 0h16.923428l10.410198 17.061978 10.399648-17.061978h16.929759v48.5584176h-16.163165v-24.0682198l-11.166242 17.2652308h-.279209l-11.173978-17.2652308v24.0682198h-15.880439z"/><path d="m193.20967 0h16.234901v32.5077802h22.824088v16.0506374h-39.058989z"/><g fill="#fff"><path d="m127.889582 220.572835h39.326945l-3.707076 41.419956-35.619869 9.614066v33.22655l65.472704-18.145759.480351-5.395692 7.504879-84.079824.779253-8.576h-74.237187z"/><path d="m127.889582 155.854066v.078066h77.143209l.640704-7.17855 1.45512-16.190593.763781-8.568264h-80.002814z"/></g></svg>
            </button>
            <button class="btn-tec" id="btn-tec-css">
                <svg class="ico-tec" preserveAspectRatio="xMidYMid" viewBox="0 0 256 361"  xmlns="http://www.w3.org/2000/svg"><path d="m127.843868 360.087912-104.1821537-28.92167-23.21652749-260.4005277h255.10962619l-23.241143 260.3597367z" fill="#264de4"/><path d="m212.416703 314.546637 19.861099-222.4893183h-104.277802v245.8929233z" fill="#2965f1"/><g fill="#ebebeb"><path d="m53.6685714 188.636132 2.8624176 31.936703h71.469011v-31.936703z"/><path d="m47.917011 123.994725 2.9032088 31.937407h77.1797802v-31.937407z"/><path d="m128 271.580132-.139956.037275-35.5685275-9.60422-2.2737583-25.471297h-32.0597802l4.4743736 50.145758 65.4206594 18.161231.146989-.040791z"/></g><path d="m60.4835165 0h38.6813187v16.1758242h-22.5054945v16.1758242h22.5054945v16.1758241h-38.6813187z"/><path d="m106.901099 0h38.681319v14.0659341h-22.505495v2.8131868h22.505495v32.3516483h-38.681319v-14.7692307h22.505494v-2.8131869h-22.505494z"/><path d="m153.318681 0h38.681319v14.0659341h-22.505495v2.8131868h22.505495v32.3516483h-38.681319v-14.7692307h22.505495v-2.8131869h-22.505495z"/><path d="m202.126769 188.636132 5.765627-64.641407h-80.002814v31.937407h45.00255l-2.906022 32.704h-42.096528v31.936703h39.326945l-3.707076 41.419956-35.619869 9.614066v33.22655l65.472704-18.145759.480351-5.395692 7.504879-84.079824z" fill="#fff"/></svg>
            </button>
            <button class="btn-tec" id="btn-tec-python">
                <svg class="ico-tec" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" gradientTransform="matrix(189.38 0 0 189.81 25243.061 38519.17)" gradientUnits="userSpaceOnUse" x1="-133.268" x2="-133.198" y1="-202.91" y2="-202.84"><stop offset="0" stop-color="#387eb8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="b" gradientTransform="matrix(189.38 0 0 189.81 25309.061 38583.42)" gradientUnits="userSpaceOnUse" x1="-133.575" x2="-133.495" y1="-203.203" y2="-203.133"><stop offset="0" stop-color="#ffe052"/><stop offset="1" stop-color="#ffc331"/></linearGradient><path d="m15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v1h-9.441s-4.545-.56-4.545 6.645 4.013 6.912 4.013 6.912h2.317v-3.361s-.13-4.013 3.9-4.013h6.762s3.772.06 3.772-3.652v-6.091s.572-3.712-6.842-3.712zm-3.732 2.137a1.214 1.214 0 1 1 -1.183 1.244v-.02a1.214 1.214 0 0 1 1.214-1.214z" fill="url(#a)"/><path d="m16.085 29.91c7.1 0 6.651-3.08 6.651-3.08v-3.18h-6.751v-1h9.47s4.545.508 4.545-6.655-4.013-6.912-4.013-6.912h-2.347v3.317s.13 4.013-3.9 4.013h-6.765s-3.775-.057-3.775 3.655v6.132s-.572 3.712 6.842 3.712h.04zm3.732-2.147a1.214 1.214 0 1 1 1.183-1.244v.03a1.214 1.214 0 0 1 -1.214 1.214h.03z" fill="url(#b)"/></svg>
            </button>
            <button class="btn-tec" id="btn-tec-django">
                <svg class="ico-tec" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#2ba977"><path d="M21.093 0h7.933v36.022c-4.064.762-7.055 1.061-10.292 1.061C9.044 37.073 4 32.785 4 24.55c0-7.936 5.35-13.086 13.641-13.086 1.287 0 2.267.1 3.452.4zm.278 18.355c-.93-.3-1.695-.4-2.676-.4-4.012 0-6.33 2.424-6.33 6.673 0 4.137 2.216 6.422 6.28 6.422.878 0 1.592-.05 2.726-.2z"/><path d="M42 12.43v18.035c0 6.212-.47 9.199-1.848 11.774-1.287 2.476-2.982 4.037-6.484 5.761l-7.362-3.437c3.503-1.612 5.198-3.037 6.28-5.211 1.133-2.223 1.49-4.798 1.49-11.572V12.43zM33.277 0h7.934v7.986h-7.934z"/></g></svg>
            </button>
            <button class="btn-tec" id="btn-tec-mysql">
                <svg class="ico-tec" viewBox="0 0 73 73" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect fill="#fff" fill-rule="nonzero" height="71" rx="14" stroke="#013247" stroke-width="2" width="71" x="1" y="1"/><g fill="#00618a"><path d="m40.8827605 33.7385756c-2.4212689-.0656386-4.2708067.1594958-5.8519622.826311-.4493487.1895546-1.1658529.1944621-1.2391596.757605.2469117.2588739.2852521.6453445.4815546.9637227.3775756.6109916 1.0149454 1.4296344 1.5836092 1.8590462.6214202.468979 1.2618572.9707773 1.9280588 1.3768782 1.1848698.7226386 2.5077648 1.1351806 3.6487732 1.8590462.6723361.4266512 1.3403781.9640294 1.9964579 1.445584.3242059.2380168.5422858.6082311.9637227.7572983 0-.0226975 0-.0457017 0-.0687059-.2214538-.2818781-.2785042-.6695756-.4818613-.9640294-.2981345-.2981344-.5965756-.5965756-.8950168-.8950168-.8750799-1.1615588-1.9860294-2.1817185-3.1669118-3.0291933-.9416386-.6760168-3.049437-1.5891302-3.4423487-2.6850504-.0230042-.0230042-.0457017-.0460084-.0690126-.0690126.6677353-.075147 1.4495714-.3168445 2.0657773-.4818613 1.0351891-.2775841 1.9602647-.2058109 3.0291933-.4818614.4818613-.1377185.9637226-.2757437 1.4458907-.4131554 0-.0920168 0-.1834202 0-.275437-.5404454-.5545546-.9256891-1.2882353-1.5149034-1.7900336-1.5415882-1.3127731-3.2242689-2.6243193-4.9569453-3.7179698-.9609622-.6065748-2.1485925-1.0007441-3.1669118-1.51475-.3426092-.1728382-.9443992-.2627079-1.1707605-.5508432-.5349244-.6820593-.8263109-1.5464958-1.2388529-2.3408769-.8643446-1.6641853-1.7130463-3.4817626-2.4786261-5.2325357-.5223487-1.1939488-.8634244-2.3714265-1.5145966-3.4425635-3.1261177-5.1396907-6.4911723-8.24197604-11.7039244-11.29122898-1.1091092-.64847311-2.4445798-.90458656-3.8558109-1.23915967-.7569916-.04582437-1.51459666-.09195546-2.27189498-.13777983-.46223109-.19320462-.94317227-.75873991-1.37687815-1.03279664-1.72684874-1.09091138-6.15623109-3.46381933-7.43526471-.34417353-.80760084 1.96912899 1.20695378 3.89065462 1.92744538 4.88839286.50578571.70000252 1.15327731 1.48478319 1.51459664 2.2719563.23771008.51731849.27881092 1.03610925.48216807 1.58363989.50057142 1.3485063.93581092 2.8156223 1.58330252 4.0619899.32727311.6305299.68797899 1.2948912 1.1017479 1.8588929.25365966.3459832.68828571.4984244.75699159 1.0327966-.42511764.5948887-.44934874 1.5183387-.68828571 2.271987-1.07598319 3.392813-.67018908 7.6099433.89501681 10.1209593.48032773.7707941 1.611521 2.4240294 3.16691174 1.7900336 1.3606219-.5542479 1.0566597-2.2715883 1.4458908-3.786737.0880294-.3435908.0340462-.5960849.2064243-.8261269v.0688899c.4131555.8261269.826311 1.6522231 1.2394664 2.4781967.9171009 1.4771764 2.5448782 3.0209117 3.9242101 4.062542.7152773.5401386 1.2784202 1.4741092 2.2031891 1.7900336 0-.0230042 0-.0457017 0-.0690126-.0233109 0-.0460084 0-.0690126 0-.1791261-.2794244-.4594706-.3950588-.6882857-.6195798-.5389118-.5281765-1.1379412-1.1848698-1.5836093-1.7900337-1.2544958-1.7032311-2.3632983-3.5674916-3.3733361-5.5079726-.4824748-.9264559-.9017647-1.9487627-1.308479-2.8917202-.1567353-.3636198-.154895-.9132668-.4815546-1.1016559-.4453614.6910155-1.1014412 1.2496496-1.4458908 2.0655626-.5508739 1.3041849-.6220336 2.8946954-.8260042 4.5440046-.1208487.0432479-.0671722.0134958-.1380252.0687059-.95881511-.2312689-1.29590335-1.2183945-1.65200839-2.0651639-.90145798-2.1416605-1.06892857-5.590205-.2757437-8.0553659.20519748-.6377072 1.13272689-2.6466794.75729832-3.235863-.17912605-.5879874-.77048739-.9279589-1.10144117-1.3772463-.40947479-.5553521-.81833614-1.2865176-1.1017479-1.9278134-.73766807-1.6698903-1.08211765-3.54439539-1.8587395-5.23225967-.37113445-.80695673-.9989958-1.6234832-1.51459664-2.34084622-.57081092-.79465715-1.21002101-1.37997605-1.65231512-2.34115294-.15734874-.34147437-.37113446-.88814622-.13771849-1.23919034.07422689-.23694328.17881933-.33576933.41315546-.41306345.39935294-.30791584 1.51152941.10244538 1.92744538.27528362 1.10420168.45858109 2.02559664.89529286 2.96079412 1.51475.44904201.29773571.90299159.87342353 1.44558403 1.03279664h.61957983c.9692437.22283403 2.05504197.06919664 2.96048737.34414285 1.600479.48646219 3.0347143 1.24308572 4.3373656 2.06559328 3.9683781 2.50561765 7.2128907 6.07246513 9.4323361 10.32732223.3570252.6850345.5116135 1.3389366.8260042 2.0655933.6346093 1.465337 1.4339286 2.9731857 2.0651639 4.4061328.6300084 1.4296958 1.2440672 2.87255 2.1344832 4.0622966.4683655.6254076 2.2764958.9609009 3.0982059 1.3080496.5760252.2435378 1.5198109.4971975 2.0654705.8260042 1.0422437.6287815 2.0519748 1.3771849 3.0295 2.0657773.4886093.3441429 1.9903236 1.0989874 2.0651639 1.721021z" fill-rule="nonzero" transform="translate(14.786008 16.109629)"/><path d="m1.23946639.0092937c-.50486555-.0092937-.86189076.05511806-1.23946639.13750378v.06888992h.06901261c.24077731.49480504.66589495.81321386.96372268 1.23946638.22942858.48195336.45885715.96390672.68859244 1.44555336.02269748-.02278949.0460084-.04582437.06870588-.06861386.42634454-.30043488.62172689-.78116135.61957984-1.51471933-.17084454-.1797395-.1959958-.40527269-.34414286-.61976387-.19691597-.28574285-.57786555-.44809117-.8260042-.68831638z" transform="translate(23.654588 23.607551)"/></g></g></svg>
            </button>
            <button class="btn-tec" id="btn-tec-git">
                <svg class="ico-tec" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="m251.172245 116.593517-111.773492-111.76506398c-6.43232-6.43793736-16.872901-6.43793736-23.313647 0l-23.2097197 23.20971908 29.4426087 29.4426088c6.842415-2.3117025 14.687598-.7612046 20.14243 4.6936272 5.480111 5.4885383 7.019374 13.4011341 4.651494 20.2660201l28.375237 28.3752368c6.864886-2.365071 14.785908-.834235 20.268829 4.657112 7.662606 7.659797 7.662606 20.075017 0 27.740432-7.665415 7.665415-20.080635 7.665415-27.748859 0-5.763807-5.769426-7.187906-14.23537-4.269487-21.336201l-26.462394-26.4623945-.002809 69.6375845c1.867901.926928 3.631873 2.160023 5.187989 3.710521 7.662606 7.659797 7.662606 20.075017 0 27.746049-7.665415 7.662607-20.086252 7.662607-27.740432 0-7.662606-7.671032-7.662606-20.086252 0-27.746049 1.893181-1.890372 4.084102-3.320088 6.421084-4.280723v-70.2864335c-2.336982-.9550168-4.525094-2.3763067-6.421084-4.2807229-5.805941-5.7975142-7.201951-14.3168264-4.227354-21.4457468l-29.0212779-29.0268954-76.64010496 76.6344876c-6.44074623 6.443555-6.44074623 16.884136 0 23.322074l111.77349086 111.767872c6.435129 6.437938 16.872901 6.437938 23.316456 0l111.251042-111.248231c6.437935-6.440746 6.437935-16.886945 0-23.324883" fill="#de4c36"/></svg>
            </button>
            <button class="btn-tec" id="btn-tec-github">
                <svg class="ico-tec" preserveAspectRatio="xMidYMid" viewBox="0 0 256 259.3"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><clipPath id="a"><path d="m98.1 244.8c1.6 7.5 5.5 11.9 9.4 14.5h41.1c5-3.4 10.1-9.8 10.1-21.8v-31s.6-7.7 7.7-10.2c0 0 4.1-2.9-.3-4.5 0 0-19.5-1.6-19.5 14.4v23.6s.8 8.7-3.8 12.3v-29.2s.3-9.3 5.1-12.8c0 0 3.2-5.7-3.8-4.2 0 0-13.4 1.9-14 17.6l-.3 30h-3.2l-.3-30c-.6-15.6-14-17.6-14-17.6-7-1.6-3.8 4.2-3.8 4.2 4.8 3.5 5.1 12.8 5.1 12.8v29.5c-4.6-3.3-3.8-12.6-3.8-12.6v-23.6c0-16-19.5-14.4-19.5-14.4-4.5 1.6-.3 4.5-.3 4.5 7 2.6 7.7 10.2 7.7 10.2v21.7z"/></clipPath><path d="m200.9 199.8c0 13.9-32.2 25.1-71.9 25.1s-71.9-11.3-71.9-25.1c0-13.9 32.2-25.1 71.9-25.1s71.9 11.2 71.9 25.1zm0 0" fill="#9edcf2"/><path clip-path="url(#a)" d="m200.9 199.8c0 13.9-32.2 25.1-71.9 25.1s-71.9-11.3-71.9-25.1c0-13.9 32.2-25.1 71.9-25.1s71.9 11.2 71.9 25.1zm0 0" fill="#7dbce7"/><path d="m46.9 125.9-2.1 7.2s-.5 2.6 1.9 3.1c2.6-.1 2.4-2.5 2.2-3.2zm0 0" fill="#9edcf2"/><path d="m255.8 95.6.2-.9c-21.1-4.2-42.7-4.3-55.8-3.7 2.1-7.7 2.8-16.7 2.8-26.6 0-14.3-5.4-25.7-14-34.3 1.5-4.9 3.5-15.8-2-29.7 0 0-9.8-3.1-32.1 11.8-8.7-2.2-18-3.3-27.3-3.3-10.2 0-20.5 1.3-30.2 3.9-23-15.7-33.1-12.5-33.1-12.5-6.6 16.5-2.5 28.8-1.3 31.8-7.8 8.4-12.5 19.1-12.5 32.2 0 9.9 1.1 18.8 3.9 26.5-13.2-.5-34-.3-54.4 3.8l.2.9c20.4-4.1 41.4-4.2 54.5-3.7.6 1.6 1.3 3.2 2 4.7-13 .4-35.1 2.1-56.3 8.1l.3.9c21.4-6 43.7-7.6 56.6-8 7.8 14.4 23 23.8 50.2 26.7-3.9 2.6-7.8 7-9.4 14.5-5.3 2.5-21.9 8.7-31.9-8.5 0 0-5.6-10.2-16.3-11 0 0-10.4-.2-.7 6.5 0 0 6.9 3.3 11.7 15.6 0 0 6.3 21 36.4 14.2v21.5s-.6 7.7-7.7 10.2c0 0-4.2 2.9.3 4.5 0 0 19.5 1.6 19.5-14.4v-23.6s-.8-9.4 3.8-12.6v38.8s-.3 9.3-5.1 12.8c0 0-3.2 5.7 3.8 4.2 0 0 13.4-1.9 14-17.6l.3-39.3h3.2l.3 39.3c.6 15.6 14 17.6 14 17.6 7 1.6 3.8-4.2 3.8-4.2-4.8-3.5-5.1-12.8-5.1-12.8v-38.5c4.6 3.6 3.8 12.3 3.8 12.3v23.6c0 16 19.5 14.4 19.5 14.4 4.5-1.6.3-4.5.3-4.5-7-2.6-7.7-10.2-7.7-10.2v-31c0-12.1-5.1-18.5-10.1-21.8 29-2.9 42.9-12.2 49.3-26.8 12.7.3 35.6 1.9 57.4 8.1l.3-.9c-21.7-6.1-44.4-7.7-57.3-8.1.6-1.5 1.1-3 1.6-4.6 13.4-.5 35.1-.5 56.3 3.7zm0 0" fill="#010101"/><path d="m174.6 63.7c6.2 5.7 9.9 12.5 9.9 19.8 0 34.4-25.6 35.3-57.2 35.3s-57.2-4.8-57.2-35.3c0-7.3 3.6-14.1 9.8-19.7 10.3-9.4 27.7-4.4 47.4-4.4s37-5.1 47.3 4.3zm0 0" fill="#f5ccb3"/><path d="m108.3 85.3c0 9.5-5.3 17.1-11.9 17.1s-11.9-7.7-11.9-17.1c0-9.5 5.3-17.1 11.9-17.1 6.6-.1 11.9 7.6 11.9 17.1zm0 0" fill="#fff"/><path d="m104.5 85.5c0 6.3-3.6 11.4-7.9 11.4-4.4 0-7.9-5.1-7.9-11.4s3.6-11.4 7.9-11.4 7.9 5.1 7.9 11.4zm0 0" fill="#af5c51"/><path d="m172.2 85.3c0 9.5-5.3 17.1-11.9 17.1s-11.9-7.7-11.9-17.1c0-9.5 5.3-17.1 11.9-17.1 6.5-.1 11.9 7.6 11.9 17.1zm0 0" fill="#fff"/><path d="m168.3 85.5c0 6.3-3.6 11.4-7.9 11.4-4.4 0-7.9-5.1-7.9-11.4s3.6-11.4 7.9-11.4c4.4 0 7.9 5.1 7.9 11.4zm0 0" fill="#af5c51"/><path d="m130.5 100.5c0 1.6-1.3 3-3 3-1.6 0-3-1.3-3-3s1.3-3 3-3c1.6 0 3 1.3 3 3zm0 0" fill="#af5c51"/><path d="m120.6 108c-.2-.5.1-1 .6-1.2s1 .1 1.2.6c.8 2.2 2.8 3.6 5.1 3.6s4.3-1.5 5.1-3.6c.2-.5.7-.8 1.2-.6s.8.7.6 1.2c-1 2.9-3.8 4.9-6.9 4.9s-5.9-2-6.9-4.9zm0 0" fill="#af5c51"/><g fill="#c4e5d9"><path d="m54.5 121.6c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4 2.1.6 2.1 1.4zm0 0"/><path d="m60.3 124.8c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4 2.1.6 2.1 1.4zm0 0"/><path d="m63.8 129c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4zm0 0"/><path d="m67 133.8c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4zm0 0"/><path d="m70.5 138.2c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4 2.1.6 2.1 1.4zm0 0"/><path d="m75.3 142.1c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4zm0 0"/><path d="m82 144.6c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4 2.1.6 2.1 1.4zm0 0"/><path d="m88.7 144.6c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4 2.1.6 2.1 1.4zm0 0"/><path d="m95.5 143.5c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4c1.1 0 2.1.6 2.1 1.4zm0 0"/></g></svg>
            </button>
        </div>
    </div>`;
    updateModal(content)
    openModal()
}

function modalPixel(){
    content= `
    <div class="container-paragraph-modal">
        <p>Este juego fue el proyecto final de la segunda etapa de PixelLab.</p>
        <p>En este proyecto me encargué de la totalidad del desarrollo siguiendo las indicaciones del profesor</p>
        <p>Es mi primer juego, totalmente jugable y del género plataformas, inspirado en otros juegos como mario.</p>
        <p>El juego fue completamente desarrollado usando Godot Engine</p>
        <p>Para jugar al juego accede desde el siguiente enlace: <a target=_blank href="https://ramaalves.itch.io/saltarina-pixellab" >Saltarina</a></p>
        <p>El código del juego puedes consultarlo en el <a target=_blank href="https://github.com/RamaAlves/Saltarina-PixelLab">repositorio</a> de github</p>
    </div>
    <div class="slide-tec">
        <div class="container-tecnologies" style= "width: 100%; justify-content: center;">
            <button class="btn-tec" id="btn-tec-html">
                <image class="ico-tec" src="./assets/icons/600px-Godot_icon.svg.png" ></image>
            </button>
        </div>
    </div>`;
    updateModal(content)
    openModal()
}
function modalPortfolio(){
    content= `
    <div class="container-paragraph-modal">
        <p>Este portfolio lo cree con el fin de practicar y aplicar los conocimientos que estoy aprendiendo.</p>
        <p>Lo realicé utilizando html, sass, js.</p>
        <p>Tambien utilicé librerias de terceros: scrollreveal por <a target=_blank href="https://jlmakes.vercel.app/">@jlmakes</a> y typed.js de <a target=_blank href="https://mattboldt.com/">Matt Boldt</a>.</p>
        <p>Para el control de versiones usé git y github.</p>
        <p>El código del proyecto puedes consultarlo en el <a target=_blank href="https://github.com/RamaAlves/portfolio-v1">repositorio</a> de github</p>
    </div>
    <div class="slide-tec">
        <div class="container-tecnologies" style= "width: 200%;">
            <button class="btn-tec" id="btn-tec-html">
                <svg class="ico-tec" preserveAspectRatio="xMidYMid" viewBox="0 0 256 361"  xmlns="http://www.w3.org/2000/svg"><path d="m255.554813 70.7657143-23.241143 260.3597367-104.469802 28.962461-104.1821537-28.92167-23.21652749-260.4005277z" fill="#e44d26"/><path d="m128 337.950242 84.416703-23.403605 19.861099-222.4893183h-104.277802z" fill="#f16529"/><path d="m82.8202198 155.932132h45.1797802v-31.937407h-80.082989l.7644835 8.568264 7.8494945 88.009846h71.469011v-31.936703h-42.2610989z" fill="#ebebeb"/><path d="m90.0177582 236.54189h-32.0597802l4.4743736 50.145758 65.4206594 18.161231.146989-.040791v-33.227956l-.139956.037275-35.5685275-9.60422z" fill="#ebebeb"/><path d="m24.1807473 0h16.229978v16.0351648h14.8465934v-16.0351648h16.2306813v48.5584176h-16.229978v-16.2602198h-14.8465934v16.2602198h-16.2299781v-48.5584176z"/><path d="m92.8309451 16.1026813h-14.2881759v-16.1026813h44.8140658v16.1026813h-14.294505v32.4557363h-16.2306816v-32.4557363z"/><path d="m130.469275 0h16.923428l10.410198 17.061978 10.399648-17.061978h16.929759v48.5584176h-16.163165v-24.0682198l-11.166242 17.2652308h-.279209l-11.173978-17.2652308v24.0682198h-15.880439z"/><path d="m193.20967 0h16.234901v32.5077802h22.824088v16.0506374h-39.058989z"/><g fill="#fff"><path d="m127.889582 220.572835h39.326945l-3.707076 41.419956-35.619869 9.614066v33.22655l65.472704-18.145759.480351-5.395692 7.504879-84.079824.779253-8.576h-74.237187z"/><path d="m127.889582 155.854066v.078066h77.143209l.640704-7.17855 1.45512-16.190593.763781-8.568264h-80.002814z"/></g></svg>
            </button>
            <button class="btn-tec" id="btn-tec-sass">
                <svg class="ico-tec" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><rect fill="#c69" height="512" rx="15%" width="512"/><path d="m258 88c-96 33-158 100-152 140s66 72 93 93c-35 18-79 45-78 80 2 48 54 33 76 19s44-53 30-94c31-8 58 2 66 8 31 22 15 47 4 51s-4 6 3 4 22-12 22-29c0-43-46-63-103-48-33-35-78-51-76-89 1-14 6-50 95-95s152-27 144 14c-12 62-120 104-158 68-2-4-9-7-5 4 20 50 182 27 189-79 2-56-79-71-150-47zm-86 320c-25 8-24-8-23-14 3-17 17-38 59-59 12 38-15 67-36 73z" fill="#fff"/></svg>
            </button>
            <button class="btn-tec" id="btn-tec-js">
                <svg class="ico-tec" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h256v256h-256z" fill="#f7df1e"/><path d="m67.311746 213.932292 19.590908-11.856051c3.7794539 6.701105 7.2175746 12.370896 15.464432 12.370896 7.905117 0 12.88899-3.092318 12.88899-15.120254v-81.798096h24.057499v82.13821c0 24.917333-14.605816 36.258946-35.915175 36.258946-19.2451048 0-30.4164571-9.96734-36.0870603-21.995683"/><path d="m152.380952 211.354413 19.58847-11.341613c5.156572 8.421181 11.858489 14.607035 23.714946 14.607035 9.968153 0 16.324673-4.983873 16.324673-11.857676 0-8.248483-6.529625-11.170134-17.527873-15.980089l-6.012749-2.579505c-17.357206-7.387835-28.871111-16.667225-28.871111-36.257727 0-18.04353 13.7472-31.791543 35.228444-31.791543 15.294172 0 26.292013 5.327645 34.195911 19.247137l-18.731073 12.028343c-4.124444-7.388648-8.591034-10.309486-15.464431-10.309486-7.045689 0-11.513905 4.467809-11.513905 10.309486 0 7.217574 4.468216 10.139631 14.777702 14.607847l6.013968 2.577473c20.449524 8.764546 31.963428 17.699353 31.963428 37.804292 0 21.653537-17.012215 33.509588-39.86692 33.509588-22.339454 0-36.774603-10.653664-43.819073-24.573562"/></svg>
            </button>
            <button class="btn-tec" id="btn-tec-git">
                <svg class="ico-tec" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="m251.172245 116.593517-111.773492-111.76506398c-6.43232-6.43793736-16.872901-6.43793736-23.313647 0l-23.2097197 23.20971908 29.4426087 29.4426088c6.842415-2.3117025 14.687598-.7612046 20.14243 4.6936272 5.480111 5.4885383 7.019374 13.4011341 4.651494 20.2660201l28.375237 28.3752368c6.864886-2.365071 14.785908-.834235 20.268829 4.657112 7.662606 7.659797 7.662606 20.075017 0 27.740432-7.665415 7.665415-20.080635 7.665415-27.748859 0-5.763807-5.769426-7.187906-14.23537-4.269487-21.336201l-26.462394-26.4623945-.002809 69.6375845c1.867901.926928 3.631873 2.160023 5.187989 3.710521 7.662606 7.659797 7.662606 20.075017 0 27.746049-7.665415 7.662607-20.086252 7.662607-27.740432 0-7.662606-7.671032-7.662606-20.086252 0-27.746049 1.893181-1.890372 4.084102-3.320088 6.421084-4.280723v-70.2864335c-2.336982-.9550168-4.525094-2.3763067-6.421084-4.2807229-5.805941-5.7975142-7.201951-14.3168264-4.227354-21.4457468l-29.0212779-29.0268954-76.64010496 76.6344876c-6.44074623 6.443555-6.44074623 16.884136 0 23.322074l111.77349086 111.767872c6.435129 6.437938 16.872901 6.437938 23.316456 0l111.251042-111.248231c6.437935-6.440746 6.437935-16.886945 0-23.324883" fill="#de4c36"/></svg>
            </button>
            <button class="btn-tec" id="btn-tec-github"> 
                <svg class="ico-tec" preserveAspectRatio="xMidYMid" viewBox="0 0 256 259.3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <clipPath id="a"><path d="m98.1 244.8c1.6 7.5 5.5 11.9 9.4 14.5h41.1c5-3.4 10.1-9.8 10.1-21.8v-31s.6-7.7 7.7-10.2c0 0 4.1-2.9-.3-4.5 0 0-19.5-1.6-19.5 14.4v23.6s.8 8.7-3.8 12.3v-29.2s.3-9.3 5.1-12.8c0 0 3.2-5.7-3.8-4.2 0 0-13.4 1.9-14 17.6l-.3 30h-3.2l-.3-30c-.6-15.6-14-17.6-14-17.6-7-1.6-3.8 4.2-3.8 4.2 4.8 3.5 5.1 12.8 5.1 12.8v29.5c-4.6-3.3-3.8-12.6-3.8-12.6v-23.6c0-16-19.5-14.4-19.5-14.4-4.5 1.6-.3 4.5-.3 4.5 7 2.6 7.7 10.2 7.7 10.2v21.7z"/></clipPath><path d="m200.9 199.8c0 13.9-32.2 25.1-71.9 25.1s-71.9-11.3-71.9-25.1c0-13.9 32.2-25.1 71.9-25.1s71.9 11.2 71.9 25.1zm0 0" fill="#9edcf2"/><path clip-path="url(#a)" d="m200.9 199.8c0 13.9-32.2 25.1-71.9 25.1s-71.9-11.3-71.9-25.1c0-13.9 32.2-25.1 71.9-25.1s71.9 11.2 71.9 25.1zm0 0" fill="#7dbce7"/><path d="m46.9 125.9-2.1 7.2s-.5 2.6 1.9 3.1c2.6-.1 2.4-2.5 2.2-3.2zm0 0" fill="#9edcf2"/>
                <path d="m255.8 95.6.2-.9c-21.1-4.2-42.7-4.3-55.8-3.7 2.1-7.7 2.8-16.7 2.8-26.6 0-14.3-5.4-25.7-14-34.3 1.5-4.9 3.5-15.8-2-29.7 0 0-9.8-3.1-32.1 11.8-8.7-2.2-18-3.3-27.3-3.3-10.2 0-20.5 1.3-30.2 3.9-23-15.7-33.1-12.5-33.1-12.5-6.6 16.5-2.5 28.8-1.3 31.8-7.8 8.4-12.5 19.1-12.5 32.2 0 9.9 1.1 18.8 3.9 26.5-13.2-.5-34-.3-54.4 3.8l.2.9c20.4-4.1 41.4-4.2 54.5-3.7.6 1.6 1.3 3.2 2 4.7-13 .4-35.1 2.1-56.3 8.1l.3.9c21.4-6 43.7-7.6 56.6-8 7.8 14.4 23 23.8 50.2 26.7-3.9 2.6-7.8 7-9.4 14.5-5.3 2.5-21.9 8.7-31.9-8.5 0 0-5.6-10.2-16.3-11 0 0-10.4-.2-.7 6.5 0 0 6.9 3.3 11.7 15.6 0 0 6.3 21 36.4 14.2v21.5s-.6 7.7-7.7 10.2c0 0-4.2 2.9.3 4.5 0 0 19.5 1.6 19.5-14.4v-23.6s-.8-9.4 3.8-12.6v38.8s-.3 9.3-5.1 12.8c0 0-3.2 5.7 3.8 4.2 0 0 13.4-1.9 14-17.6l.3-39.3h3.2l.3 39.3c.6 15.6 14 17.6 14 17.6 7 1.6 3.8-4.2 3.8-4.2-4.8-3.5-5.1-12.8-5.1-12.8v-38.5c4.6 3.6 3.8 12.3 3.8 12.3v23.6c0 16 19.5 14.4 19.5 14.4 4.5-1.6.3-4.5.3-4.5-7-2.6-7.7-10.2-7.7-10.2v-31c0-12.1-5.1-18.5-10.1-21.8 29-2.9 42.9-12.2 49.3-26.8 12.7.3 35.6 1.9 57.4 8.1l.3-.9c-21.7-6.1-44.4-7.7-57.3-8.1.6-1.5 1.1-3 1.6-4.6 13.4-.5 35.1-.5 56.3 3.7zm0 0" fill="#010101"/><path d="m174.6 63.7c6.2 5.7 9.9 12.5 9.9 19.8 0 34.4-25.6 35.3-57.2 35.3s-57.2-4.8-57.2-35.3c0-7.3 3.6-14.1 9.8-19.7 10.3-9.4 27.7-4.4 47.4-4.4s37-5.1 47.3 4.3zm0 0" fill="#f5ccb3"/><path d="m108.3 85.3c0 9.5-5.3 17.1-11.9 17.1s-11.9-7.7-11.9-17.1c0-9.5 5.3-17.1 11.9-17.1 6.6-.1 11.9 7.6 11.9 17.1zm0 0" fill="#fff"/>
                <path d="m104.5 85.5c0 6.3-3.6 11.4-7.9 11.4-4.4 0-7.9-5.1-7.9-11.4s3.6-11.4 7.9-11.4 7.9 5.1 7.9 11.4zm0 0" fill="#af5c51"/><path d="m172.2 85.3c0 9.5-5.3 17.1-11.9 17.1s-11.9-7.7-11.9-17.1c0-9.5 5.3-17.1 11.9-17.1 6.5-.1 11.9 7.6 11.9 17.1zm0 0" fill="#fff"/><path d="m168.3 85.5c0 6.3-3.6 11.4-7.9 11.4-4.4 0-7.9-5.1-7.9-11.4s3.6-11.4 7.9-11.4c4.4 0 7.9 5.1 7.9 11.4zm0 0" fill="#af5c51"/><path d="m130.5 100.5c0 1.6-1.3 3-3 3-1.6 0-3-1.3-3-3s1.3-3 3-3c1.6 0 3 1.3 3 3zm0 0" fill="#af5c51"/><path d="m120.6 108c-.2-.5.1-1 .6-1.2s1 .1 1.2.6c.8 2.2 2.8 3.6 5.1 3.6s4.3-1.5 5.1-3.6c.2-.5.7-.8 1.2-.6s.8.7.6 1.2c-1 2.9-3.8 4.9-6.9 4.9s-5.9-2-6.9-4.9zm0 0" fill="#af5c51"/><g fill="#c4e5d9"><path d="m54.5 121.6c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4 2.1.6 2.1 1.4zm0 0"/><path d="m60.3 124.8c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4 2.1.6 2.1 1.4zm0 0"/><path d="m63.8 129c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4zm0 0"/><path d="m67 133.8c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4zm0 0"/><path d="m70.5 138.2c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4 2.1.6 2.1 1.4zm0 0"/><path d="m75.3 142.1c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4zm0 0"/><path d="m82 144.6c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4 2.1.6 2.1 1.4zm0 0"/><path d="m88.7 144.6c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4 2.1.6 2.1 1.4zm0 0"/><path d="m95.5 143.5c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4s.9-1.4 2.1-1.4c1.1 0 2.1.6 2.1 1.4zm0 0"/></g></svg>
            </button>
        </div>
    </div>`;
    updateModal(content)
    openModal()
}

btnInfoBlog.addEventListener("click", modalInfo);
btnInfoPixel.addEventListener("click", modalPixel);
btnInfoPortfolio.addEventListener("click", modalPortfolio);

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