/* abre e fecha o menu */
const nav =  document.querySelector("#header nav")
const toggle = document.querySelectorAll("nav .toogle") //Retorna NodeList

for(const element of toggle){
    element.addEventListener("click", ()=>{
        nav.classList.toggle("show")
    })
}

 /* quando clicar em algum item de menu, esconder o menu */

 const links = document.querySelectorAll('nav ul  li a')

 for(link of links){
     link.addEventListener('click', ()=>{
         nav.classList.remove("show")
     })
 }



 /* mudar o menu da pagina quando der scroll */

 const header = document.querySelector("#header")  
 const navHeight = header.offsetHeight


  window.addEventListener('scroll', ()=>{
    if(window.scrollY >= navHeight){ //se scroll maior ou igual a altura da barra de menu
        header.classList.add("scroll")
    }else{
        header.classList.remove("scroll")
    }

  })


  /* Testimonials cards */

  const swiper = new Swiper('.swiper-container', {
   slidesPerview:1,
   pagination:{
       el:".swiper-pagination"
   },
   mousewheel:true,
   keyboard:true

  });


  /*  scroll reveal: mostrar os elementos quando dar o scroll na pag   */

  const scrollReveal = ScrollReveal({
    origin:'top',
    distance:'30px',
    duration:700,
    reset:true
  })

  scrollReveal.reveal(
      `#home .image,  #home .text,
      #about .image,  #about .text,
      #services header,  #services .card,
      #testimonials header,  #home .testimonials, 
      #contact .text, #contact .links`,
      {interval:100})