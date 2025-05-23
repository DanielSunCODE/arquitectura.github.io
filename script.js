let navbar = document.querySelector(".header_nav");
let navbarMenuBtn = document.querySelector(".nav_menu_btn-container");
let navbarList = document.querySelector(".nav_menu_list");
let navbarItems = document.querySelectorAll(".nav_menu_list-item");
let navbarMenuBtnSvg = document.querySelector(".nav_menu-btn");


window.addEventListener("scroll", function(){
    if(window.scrollY > window.innerHeight * 0.8){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
});

navbarItems.forEach(item => {
    item.addEventListener("click", ()=>{
        navbarList.classList.toggle("--clicked");
        navbarMenuBtn.classList.toggle("--clicked");
    })
});

navbarMenuBtn.addEventListener("click", ()=>{
    navbarList.classList.toggle("--clicked");
    navbarMenuBtn.classList.toggle("--clicked");
})

document.addEventListener('DOMContentLoaded', () => {
  let tabs = document.querySelectorAll('.practicas_list-item');
  let docs = document.querySelectorAll('.practica_doc');

  // Inicializa mostrando la primera pestaña activa
  tabs[0].classList.add('--clicked');
  docs[0].style.display = 'block';

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // 1. Quitar resaltado de todas
      tabs.forEach(t => t.classList.remove('--clicked'));
      // 2. Ocultar todos los PDFs
      docs.forEach(d => d.style.display = 'none');

      // 3. Resaltar la clickeada
      tab.classList.add('--clicked');
      // 4. Mostrar el PDF correspondiente
      docs[index].style.display = 'block';
    });
  });
});
