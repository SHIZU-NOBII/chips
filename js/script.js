const navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('nav-close'),
      navToggle = document.getElementById('nav-toggle')
// SHOW MENU 
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
// REMOVE MENU 
}

if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })  
} 

const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n =>n.addEventListener('click', linkAction))

/*=============== SWIPER FAVORITES ===============*/ 
const swiperFavourites = new Swiper('.favourite-swiper', {
    // Optional parameters
    loop: true,
    grabCursur: true,
    slidesPerView: 'auto',
    centeredSlides:'auto',
})

/*=============== SCROLL UP ===============*/

// const scrollUp = () =>{
//     const scrollUp = document.getElementById('scroll-up')

//     this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
//                         : scrollUp.classList.remove('show-scroll')
// }

// window.addEventListener('scroll', scrollUp)




    
