const slides = document.querySelectorAll(".slide")

for (const slide of slides) {
    slide.addEventListener("click", () => {
        clearActiveClasses()
        const randomColor = "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")"
        changeBackgroundColor(randomColor)
        slide.classList.add("active")
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
