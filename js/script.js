const sections = document.querySelectorAll('[class^=section-]')
const navSection = document.querySelector('.navigation')
const arrowUp = document.querySelector('.arrow-up')
const arrowDown = document.querySelector('.arrow-down')
const checkbox = document.querySelector('.checkbox')

const scrollFunction = () => {
    const scrollPosition = window.scrollY
    const windowHeight = document.documentElement.clientHeight / 1.5
    const visibleSections = document.querySelectorAll('.visible')

    if (scrollPosition < windowHeight) {
        removeClass(visibleSections)
        sections[0].classList.add('visible')
    } else if (scrollPosition >= windowHeight && scrollPosition < 2 * windowHeight) {
        removeClass(visibleSections)
        sections[1].classList.add('visible')
    } else if (scrollPosition >= 2 * windowHeight && scrollPosition < 3 * windowHeight) {
        removeClass(visibleSections)
        sections[2].classList.add('visible')
    } else if (scrollPosition >= 3 * windowHeight && scrollPosition < 4 * windowHeight) {
        removeClass(visibleSections)
        sections[3].classList.add('visible')
    } else if (scrollPosition >= 4 * windowHeight && scrollPosition < 5 * windowHeight) {
        removeClass(visibleSections)
        sections[4].classList.add('visible')
    } else if (scrollPosition >= 5 * windowHeight && scrollPosition < 6 * windowHeight) {
        removeClass(visibleSections)
        sections[5].classList.add('visible')
    } else if (scrollPosition >= 6 * windowHeight && scrollPosition < 7 * windowHeight) {
        removeClass(visibleSections)
        sections[6].classList.add('visible')
    } else if (scrollPosition >= 7 * windowHeight && scrollPosition < 8 * windowHeight) {
        removeClass(visibleSections)
        sections[7].classList.add('visible')
    } else if (scrollPosition >= 8 * windowHeight && scrollPosition < 9 * windowHeight) {
        removeClass(visibleSections)
        sections[8].classList.add('visible')
    } else if (scrollPosition >= 9 * windowHeight && scrollPosition < 10 * windowHeight) {
        removeClass(visibleSections)
        sections[9].classList.add('visible')
    } else if (scrollPosition >= 10 * windowHeight && scrollPosition < 11 * windowHeight) {
        removeClass(visibleSections)
        sections[10].classList.add('visible')
    }
}

const removeClass = (visibleSections) => {
    visibleSections.forEach((section) => {
        section.classList.remove('visible')
    })
}

const arrowNav = (e) => {
    const activeSection = document.querySelector('.visible')
    const activeSectionClass = activeSection.classList[0]
    const activeNumber = parseInt(activeSectionClass.replace(/[^\d.]/g, ''))

    if (activeNumber == 9 && e.target.classList[0] == 'arrow-down') {
        navSection.style.display = 'none'
        document.body.style.overflow = 'auto';
        checkbox.checked = false;
    }

    if (activeNumber != 10 && e.target.classList[0] == 'arrow-down') {
        sections[activeNumber].classList.remove('visible')
        sections[activeNumber + 1].classList.add('visible')
    } else if (activeNumber != 0 && e.target.classList[0] == 'arrow-up'){
        sections[activeNumber].classList.remove('visible')
        sections[activeNumber - 1].classList.add('visible')
    }
}

const chooseNav = (e) => {
    if (e.target.checked) {
        navSection.style.display = 'block'
        document.body.style.overflow = 'hidden';
    } else {
        navSection.style.display = 'none'
        document.body.style.overflow = 'auto';
    }
}

window.addEventListener('scroll', scrollFunction)
checkbox.addEventListener('click', chooseNav)
arrowDown.addEventListener('click', arrowNav)
arrowUp.addEventListener('click', arrowNav)
arrowNav