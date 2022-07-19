const slideContainer = document.querySelector('.slide-container')
const slides = document.querySelector('.slides')
const slidesImages = document.querySelectorAll('.slides img')
// Button
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
// Pagination button
const pagination = document.querySelector('.pagination')
const paginationBtns = document.querySelectorAll('.paginate-btn')
// Else
let counter = 0;
let size = slidesImages[counter].clientWidth;

// Next Button click
function next() {
    // 1. Add class active
    // 2. Chuyển slide
    var currentBtn = paginationBtns[counter]

    ++counter
    if (counter > paginationBtns.length - 1) {
        counter = 0
    }

    paginationBtns[counter].classList.add('active')
    currentBtn.classList.remove('active')
    slides.style.transform = 'translate(-' + (size * counter) + 'px)'
}

// Prev button click
function prev() {
    // 1. Add class active
    // 2. Chuyển slide
    var currentBtn = paginationBtns[counter]

    --counter
    if (counter < 0) {
        counter = paginationBtns.length - 1
    }

    paginationBtns[counter].classList.add('active')
    currentBtn.classList.remove('active')
    slides.style.transform = 'translate(-' + (size * counter) + 'px)'
}

// Pagination click (Manual)
function paginationClick() {
    for (let i = 0; i < paginationBtns.length; i++) {
        paginationBtns[i].addEventListener('click', () => {
            paginationBtns[i].classList.add('active')
            paginationBtns[counter].classList.remove('active')
            counter = i
            slides.style.transform = 'translate(-' + (size * counter) + 'px)'
        })
    }
}
paginationClick()

// Auto next slide
setInterval(() => {
    next()
}, 5000)