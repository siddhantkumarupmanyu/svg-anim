let butterflyContainer = document.querySelector(".butterfly-container")
let butterfly = document.querySelector(".butterfly")
let flowerCount = 0

let flowerNext = document.querySelector(".flower-next")
flowerNext.addEventListener("click", () => {
    document.querySelector("#page2").scrollIntoView()
    // todo: reset the butterfly
})

butterflyContainer.addEventListener("animationend", () => {
    butterfly.classList.remove("butterfly-animate")

    flowerCount++

    if (flowerCount == 3) {
        flowerNext.style.visibility = "visible"
        return
    }

    setTimeout(() => {
        butterflyContainer.classList.remove("animate-path")

        if (flowerCount == 1) { // reached at first flower
            butterflyContainer.classList.remove("first-path")
            butterflyContainer.classList.add("second-path")
        }
        else if (flowerCount == 2) {
            butterflyContainer.classList.remove("second-path")
            butterflyContainer.classList.add("third-path")
        }

        butterfly.classList.add("butterfly-animate")
        setTimeout(() => {
            butterflyContainer.classList.add("animate-path")
        }, 50)
    }, 1000)
})

window.addEventListener('load', function () {
    butterflyContainer.classList.add("animate-path")
})