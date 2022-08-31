const slides = document.querySelectorAll(".slide")
const firstSlide = document.getElementById("avatar")
const avatars = ["avatar1.jpg", "avatar2.jpg", "avatar4.jpg", "avatar5.jpg", "avatar6.jpg", "avatar7.jpg",]
console.log(firstSlide.style.backgroundImage)




for (const slide of slides) {
    slide.addEventListener("click", () => {
        clearActiveClasses()
        const randomColor = "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")"
        changeBackgroundColor(randomColor)
        slide.classList.add("active")
        if (firstSlide.classList == "slide active") {
            let makeNewAvatar = "url(" + avatars[getRandomInt(avatars.length)] + ")"
            firstSlide.style.backgroundImage = makeNewAvatar
        } 
    })
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove("active")
    })
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color 
}
