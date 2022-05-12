//DOM Document Object Model
/* open and close menu when the icon hamburguer is clicked*/

const nav = document.querySelector('#header nav')        /* "querySelector means procurarSeletor" */
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle){
  element.addEventListener('click', function(){
    nav.classList.toggle('show')
  })            
}

/* when click in an item of menu, hide it */
const links = document.querySelectorAll('nav ul li a') 
for (const link of links) {
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}
