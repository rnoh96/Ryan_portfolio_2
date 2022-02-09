
let musicBtn = document.querySelector("#music-btn")
let music = document.querySelector("#music")
let musicStatus = document.querySelector("#music-status")
let letters = document.querySelectorAll(".intro-letters")
let title = document.querySelectorAll(".title")

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
        // words = setInterval(function(){
        //     let randNumLetters = Math.floor(Math.random() * 23);
        //     let randNumTitle = Math.floor(Math.random() * 7);
        //     letters[randNumLetters].style.color = "aqua";
        //     letters[randNumLetters].style.bottom = "10px";
        //     title[randNumTitle].style.color = "aqua";
        //     title[randNumTitle].style.bottom = "10px";
        //     setTimeout(function() {
        //         letters[randNumLetters].style.color = "white";
        //         letters[randNumLetters].style.bottom = "0px";
        //         title[randNumTitle].style.color = "white";
        //         title[randNumTitle].style.bottom = "0px";
        //     }, 1000)
        // }, 300)
        words(letters, 23, 1000, 300)
        words(title, 7, 1000, 1000)

        music.play()
    
        musicStatus.innerHTML = "music is <span class='red'>on</span>"
    } else {
        music.pause()

        intervals.forEach(clearInterval)
        // clearInterval(titleAnimation)

        musicStatus.innerHTML = "music is <span class='red'>off</span>"
    }
})

// const awindow = document.querySelector("body")

// document.addEventListener("scroll", function() {
//     if(document.body.clientWidth <= 700) {
//         // if(awindow.scrollTop > 100) {
//         //     // this.location.href = "#about-me"
//         //     console.log('h')
//         // }
//         y = awindow.scrollTop
//         console.log(y);
//     }
// })

const menuBtn = document.querySelector("#menuBtn")

menuBtn.addEventListener("click", function() {
    if(document.body.clientWidth <= 700) {
        document.querySelector(".side-navigation").classList.add("active")
        document.querySelector("#overlay").classList.add("overlay")
    }
})

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
}, 100)
