"use strict";
// Header and Footer on all - - - - - - - - - - - - - - - - - - - - - - - - - - 
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="main-header">
            <nav class="main-nav">  
                <ul class="nav-list">
                    <li class="navbar-element">
                        <a href="index.html">Home
                            <div class="main-circle circle4">
                                <div class="main-circle circle3">
                                    <div class="main-circle circle2">
                                        <div class="main-circle circle1"></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="navbar-element">
                        <a href="about.html">About
                            <div class="main-circle circle4">
                                <div class="main-circle circle3">
                                    <div class="main-circle circle2">
                                        <div class="main-circle circle1"></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="navbar-element">
                        <a href="career.html">Career
                            <div class="main-circle circle4">
                                <div class="main-circle circle3">
                                    <div class="main-circle circle2">
                                        <div class="main-circle circle1"></div>
                                    </div>
                                </div>
                            </div>
                        </a>   
                    </li>
                    <li class="navbar-element">
                        <a href="links.html">Links
                            <div class="main-circle circle4">
                                <div class="main-circle circle3">
                                    <div class="main-circle circle2">
                                        <div class="main-circle circle1"></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="navbar-element">
                        <a href="contact.html">Contact
                            <div class="main-circle circle4">
                                <div class="main-circle circle3">
                                    <div class="main-circle circle2">
                                        <div class="main-circle circle1"></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="hamburger-container">
                <input class="menu-btn" type="checkbox" id="menu-btn" />
                <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
                <ul class="menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="career.html">Career</a></li>
                    <li><a href="links.html">Links</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        </header>
        `
    }
}

customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footer-container">
                <div class="inner-footer-left">
                    <div class="linkedin-container">
                        <a href="https://www.linkedin.com/in/ivan-jankovic-3a1a16102/" title="LinkedIn" rel="noopener noreferrer">
                            <img src="../pictures/icons8-linkedin-circled-51.png" id="li-icon" alt="linkedin image">
                        </a>
                    </div>
                    <div class="copyright-container">
                        <p>&copy; 2021 Ivan Janković<br/>All Rights Reserved</p>
                    </div>
                </div>
                <div class="inner-footer-right">
                    <ul class="footer-contact">
                        <li>Ivan Jankovic</li>
                        <li><a href="mailto:i.jankovic@rocketmail.com">i.jankovic@rocketmail.com</a></li>
                        <li>+385989326491</li>
                        <li>FRONT-END DEVELOPER</li>
                    </ul>
                    <div class="parallel-container">
                        <div class="parallel-box parallel1"></div>
                        <div class="parallel-box parallel2"></div>
                        <div class="parallel-box parallel3"></div>
                        <div class="parallel-box parallel4"></div>
                    </div>
                </div>              
            </div>
        </footer>
        `
    }
}

customElements.define('my-footer', MyFooter);

// Career Slider - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
//console.log(slideWidth);

//arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'em';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }   else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is.hidden');
        nextButton.classList.add('is-hidden');
    }   else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
};

//when I click left, move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex); 
});

//when I click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex); 
});


//when I click the nav indicators, move to that slide
// dotsNav.addEventListener('click', e => {
//     // what indicator was clicked on?
//     const targetDot = e.target.closest('button');

//     if(!targetDot) return;
    
//     const currentSlide = track.querySelector('.current-slide');
//     const currentDot = dotsNav.querySelector('.current-slide');
//     const targetIndex = dots.findIndex(dot => dot === targetDot);
//     const targetSlide = slides[targetIndex];

//     moveToSlide(track, currentSlide, targetSlide);
//     updateDots(currentDot, targetDot);
//     hideShowArrows(slides, prevButton, nextButton, targetIndex); 
// });