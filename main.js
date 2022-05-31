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

/* changes page's header when its scrolled*/
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
  if(window.scrollY >= navHeight){
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/* Testimonials caroussel slider swiper, here its has been used the swiper API */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* ScrollReveal: shows elements when the page is scrolled*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px', /* it begins thirty pixels above then starts goes down */
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Button back to top */
/* when the page is scrolling down the button will appear, see more at class four at 0:39 min*/
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function(){
  if(window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})