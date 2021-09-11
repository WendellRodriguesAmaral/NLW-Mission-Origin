/* abre e fecha o menu */
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toogle"); //Retorna NodeList

for (const element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

/* quando clicar em algum item de menu, esconder o menu */

const links = document.querySelectorAll("nav ul  li a");

for (link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}

/* Testimonials cards */

const swiper = new Swiper(".swiper-container", {
  slidesPerview: 1, // 1 slide por vez
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true, //rolar com o mouse 
  keyboard: true, //rolar com as setas do teclado
  breakpoints:{
    767:{//de 767px de largura para cima....
      slidesPerView:2, //2 slides por vez
      setWrapperSize:true
    }
  }
});

/*  scroll reveal: mostrar os elementos quando dar o scroll na pag   */

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#home .image,  #home .text,
      #about .image,  #about .text,
      #services header,  #services .card,
      #testimonials header,  #home .testimonials, 
      #contact .text, #contact .links,
      footer .brand, footer .social  
      `,
  { interval: 100 }
);

/* mudar o menu da pagina quando der scroll */

function changeHeaderWhenScroll() {
  const header = document.querySelector("#header");
  const navHeight = header.offsetHeight;

  if (window.scrollY >= navHeight) {
    //se scroll maior ou igual a altura da barra de menu
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

/* botão voltar para o topo  */

function backToTop() {
  const backToTopButton = document.querySelector(".back-to-top");
  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}


/*executando as funções de alterar o menu quando rolar a pag e aparecer botão de voltar ao topo */

window.addEventListener("scroll", () => {
    changeHeaderWhenScroll()
    backToTop()
});
