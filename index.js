const section = document.querySelectorAll('.page')
console.log(section)

const observer = new IntersectionObserver(
  (currentlySection) => {
    currentlySection.forEach((entry) => {
      if (entry.isIntersecting) {
        let id = entry.target.id
        const inactiveNavbar = document.querySelector('.navbar__a--active')
        const inactiveMenu = document.querySelector('.button--active')
        const activeNavbar = document.querySelector(
          `.navbar__ul [href="#${id}"]`
        )
        const activeMenu = document.querySelector(
          `.menu__buttons [href="#${id}"]`
        )
        if (activeNavbar) {
          activeNavbar.classList.add('navbar__a--active')
          activeMenu.classList.add('button--active')
        }
        if (inactiveNavbar) {
          inactiveNavbar.classList.remove('navbar__a--active')
          inactiveMenu.classList.remove('button--active')
        }
      }
    })
  },
  { rootMargin: '0px', threshold: 0.7 }
)

section.forEach((currentlySection) => {
  observer.observe(currentlySection)
})

const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
  window.scrollY > 100
    ? navbar.classList.add('navbar--active')
    : navbar.classList.remove('navbar--active')
})


const OpenMenuButton = document.querySelector('.navbar__button')
const menu = document.getElementById('menu')
const menuButtons = document.querySelectorAll('.button')

OpenMenuButton.addEventListener('click', () => {
  menu.classList.add('menu--active')
})

menuButtons.forEach(button => {
  button.addEventListener && menu.addEventListener('click', () => {
    menu.classList.remove('menu--active')
  })
})

