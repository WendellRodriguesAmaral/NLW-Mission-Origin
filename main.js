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


