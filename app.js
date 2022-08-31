const slides = document.querySelectorAll(".slide")
const a = document.querySelector(".card")

for (const slide of slides) {
    slide.addEventListener("click", () => {
        clearActiveClasses()
        changeBackgroundColor(getRandomColor())
        // changeBorderColor(getRandomColor())
        slide.classList.add("active")
    })
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getRandomColor() {
    return "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")"
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove("active")
    })
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color 
}

// function changeBorderColor(color) {
//     a.style.borderColor = color
// }