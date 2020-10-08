const section0 = document.querySelector('.section-0')
const section1 = document.querySelector('.section-1')
const section2 = document.querySelector('.section-2')
const section3 = document.querySelector('.section-3')
const section4 = document.querySelector('.section-4')
const section5 = document.querySelector('.section-5')
const section6 = document.querySelector('.section-6')

const scrollFunction = () => {
    const scrollPosition = window.scrollY
    const windowHeight = document.documentElement.clientHeight
    const visibleSections = document.querySelectorAll('.visible')

    if (scrollPosition < windowHeight) {
        removeClass(visibleSections)
        section0.classList.add('visible')
    } else if (scrollPosition >= windowHeight && scrollPosition < 2 * windowHeight) {
        removeClass(visibleSections)
        section1.classList.add('visible')
    } else if (scrollPosition >= 2 * windowHeight && scrollPosition < 3 * windowHeight) {
        removeClass(visibleSections)
        section2.classList.add('visible')
    } else if (scrollPosition >= 3 * windowHeight && scrollPosition < 4 * windowHeight) {
        removeClass(visibleSections)
        section3.classList.add('visible')
    } else if (scrollPosition >= 4 * windowHeight && scrollPosition < 5 * windowHeight) {
        removeClass(visibleSections)
        section4.classList.add('visible')
    } else if (scrollPosition >= 5 * windowHeight && scrollPosition < 6 * windowHeight) {
        removeClass(visibleSections)
        section5.classList.add('visible')
    }
}

const removeClass = (visibleSections) => {
    visibleSections.forEach((section) => {
        section.classList.remove('visible')
    })
}

window.addEventListener('scroll', scrollFunction)