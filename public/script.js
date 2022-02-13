
let musicBtn = document.querySelector("#music-btn")
let music = document.querySelector("#music")
let musicStatus = document.querySelector("#music-status")
let letters = document.querySelectorAll(".intro-letters")
let aboutTitle = document.querySelectorAll(".about-me > .title")
let projectsTitle = document.querySelectorAll(".projects > .title")

let intervals = []

function words(element, letterCount, time1, time2) {
    let interval = setInterval(function(){
        let randNumLetters = Math.floor(Math.random() * letterCount);
        element[randNumLetters].style.color = "aqua";
        element[randNumLetters].style.bottom = "10px";
        setTimeout(function() {
            element[randNumLetters].style.color = "white";
            element[randNumLetters].style.bottom = "0px";
        }, time1)
    }, time2)

    intervals.push(interval)
}

musicBtn.addEventListener("click", function() {
    if(music.paused == true) {
        words(letters, 23, 1000, 300)
        words(aboutTitle, 7, 1000, 500)
        words(projectsTitle, 8, 1000, 500)

        music.play()
    
        musicStatus.innerHTML = "Music is <span class='red'>on</span>"
    } else {
        music.pause()

        intervals.forEach(clearInterval)
        // clearInterval(titleAnimation)

        musicStatus.innerHTML = "Music is <span class='red'>off</span>"
    }
})

/////////////////////////////////////////////////////////////////////////////////////////

const menuBtn = document.querySelector("#menuBtn")

menuBtn.addEventListener("click", function() {
    if(document.body.clientWidth <= 700) {
        document.querySelector(".side-navigation").classList.add("active")
        document.querySelector("#overlay").classList.add("overlay")
    }
})

/////////////////////////////////////////////////////////////////////////////////////////

const ov = document.querySelector("#overlay")

ov.addEventListener("click", function() {
    if(document.body.clientWidth <= 700) {
        document.querySelector(".side-navigation").classList.remove("active")
        document.querySelector("#overlay").classList.remove("overlay")
    }
})


setInterval(function() {
    if(music.paused == true) {
        document.querySelector("#music-btn").style.animation = "bounce 1s ease-in forwards infinite alternate"
        // document.querySelector("#music-btn").style.transform = "translateY(-20px)"
    } else {
        document.querySelector("#music-btn").style.animation = ""
    }
}, 1000)

/////////////////////////////////////////////////////////////////////////////////////////

// slider  -------- FIXME
let slide = document.querySelector(".slider")
let left = document.querySelector(".left-arrow")
let right = document.querySelector(".right-arrow")

// slider nav
let sliderNav = document.querySelector(".slider-nav")
let numBtn = slide.children.length

for(let i=0; i < numBtn; i++) {
    sliderNav.innerHTML += "<button class='slider-nav-btn'></button>"
}

sliderNav.children[0].style.background = "white"


// slider event listeners
right.addEventListener("click", function() {
    let activeSlide = slide.querySelector("[data-active]")
    let currentIndex = [...slide.children].indexOf(activeSlide)
    let newIndex = [...slide.children].indexOf(activeSlide) + 1
    if(newIndex >= slide.children.length) {
        newIndex = 0
    }
    delete activeSlide.dataset.active
    slide.children[newIndex].dataset.active = true
    sliderNav.children[currentIndex].style.background = "rgba(255, 255, 255, 0.7)"
    sliderNav.children[newIndex].style.background = "white"
})

left.addEventListener("click", function() {
    let activeSlide = slide.querySelector("[data-active]")
    let currentIndex = [...slide.children].indexOf(activeSlide)
    let newIndex = [...slide.children].indexOf(activeSlide) - 1
    if(newIndex < 0) {
        newIndex = slide.children.length -1
    }
    delete activeSlide.dataset.active
    slide.children[newIndex].dataset.active = true
    sliderNav.children[currentIndex].style.background = "rgba(255, 255, 255, 0.7)"
    sliderNav.children[newIndex].style.background = "white"
})

/////////////////////////////////////////////////////////////////////////////////////////

//mousemove

let mousemove = document.querySelector(".main-page")

function move(event) {
    let x = (event.clientX-this.offsetLeft),
        y = (event.clientY-this.offsetLeft);

    let el = document.createElement("span");
    el.setAttribute("class", "el-child")
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    this.appendChild(el);

    setTimeout(() => {
        el.remove()
    }, 700)
}

setInterval(function() {
    if(music.paused == false) {
        mousemove.addEventListener("mousemove", move)
    } else {
        mousemove.removeEventListener("mousemove", move)
    }
}, 500)