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
let currentIndex = 0;
let size = slidesImages[counter||currentIndex].clientWidth;

// Next/Prev slides onclick (Manual)
function next() {
    var currentActive = paginationBtns[counter];
    counter++;
    if (counter > slidesImages.length - 1) {
        counter = 0;
    }
     
    currentActive.classList.remove('active'); //Remove Class active
    paginationBtns[counter].classList.add('active'); //Add class active
    slides.style.transform = 'translateX(-' +(size * counter) + 'px)'; //Transform slide
    currentIndex = counter; //update current slide
}
    
// Prev slides onclick (Manual)
function prev() {
    var currentActive = paginationBtns[counter];
    counter--;
    if (counter < 0) {
        counter = slidesImages.length - 1
    }

    currentActive.classList.remove('active'); //Remove Class active
    paginationBtns[counter].classList.add('active'); //Add class active
    slides.style.transform = 'translateX(-' +(size * counter) + 'px)'; //Transform slide
    currentIndex = counter; //update current slide
}

// Pagination onclick (Manual)
function paginationClick() {
    for (let i = 0; i < paginationBtns.length; i++) {
        paginationBtns[i].addEventListener('click', () => {

            paginationBtns[currentIndex].classList.remove('active'); //Remove Class active
            paginationBtns[i].classList.add('active'); //Add class active
            slides.style.transform = 'translateX(-' +(size * i) + 'px)'; //Transform slide
            currentIndex = i; //update current slide
        })  
    }
}
paginationClick()

// Auto next slide
setInterval(() => {
    const currentSlide = paginationBtns[currentIndex];
    currentIndex++;
    if (currentIndex > slidesImages.length - 1) {
        currentIndex = 0;
    }
    
    currentSlide.classList.remove('active'); //Remove Class active
    paginationBtns[currentIndex].classList.add('active'); //Add class active
    slides.style.transform = 'translateX(-' +(size * currentIndex) + 'px)'; //Transform slide
}, 5000)