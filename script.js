let butterflyContainer = document.querySelector(".butterfly-container")
let butterfly = document.querySelector(".butterfly")
let flowerCount = 0

let button = document.querySelector("button")
button.addEventListener("click", () => {
    
    document.querySelector("#page2").scrollIntoView()
})

// butterflyContainer.addEventListener("animationend", () => {
//     butterfly.classList.remove("butterfly-animate")

//     flowerCount++

//     setTimeout(() => {
//         butterflyContainer.classList.remove("animate-path")

//         if (flowerCount == 1) { // reached at first flower
//             butterflyContainer.classList.remove("first-path")
//             butterflyContainer.classList.add("second-path")
//         }
//         else if (flowerCount == 2) {
//             butterflyContainer.classList.remove("second-path")
//             butterflyContainer.classList.add("third-path")
//         }

//         else if (flowerCount == 3) {
//             butterflyContainer.classList.add("animate-path")
//             return
//         }

//         butterfly.classList.add("butterfly-animate")
//         setTimeout(() => {
//             butterflyContainer.classList.add("animate-path")
//         }, 50)
//     }, 1000)
// })

// window.addEventListener('load', function () {
//     butterflyContainer.classList.add("animate-path")
// })