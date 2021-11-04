// you know what I hate this code...
// worst code i have ever written

let butterflyContainer = document.querySelector(".butterfly-container")
let butterfly = document.querySelector(".butterfly")


let pages = [{
    flowersLenght: 3,
    paths: ["m -3.9127973,9.0660627 c 0,0 35.8140983,78.2804783 108.4797173,83.3384323 72.66561,5.057947 105.71567,-77.901496 135.96286,-63.5555 21.72662,10.304761 27.94712,74.606045 63.25491,74.239355 13.481,-0.14 49.47979,-24.996233 62.24259,-11.417206 5.32021,5.660469 24.90052,79.136626 -58.92038,83.470256 -10.73294,0.47703 -106.7941,-7.78324 -107.03847,76.12865",
        "m 200.06843,251.27005 c 0,0 -4.29087,32.45953 -91.03728,35.27499 -23.478271,0.76202 -87.446707,17.72412 -60.864917,69.36168 16.881887,32.79463 72.929057,30.53217 72.929057,30.53217 0,0 40.3751,-2.51917 82.50858,-47.48824 0,0 14.98645,-13.94166 25.01114,-3.0583 10.02469,10.88335 6.89952,20.93009 -5.31534,39.9052 -12.21485,18.97513 -32.77231,18.08591 -42.21133,45.33406 -9.43902,27.2481 -3.04522,36.74279 3.00221,42.10641 11.62809,10.31322 21.28789,8.84252 40.4427,6.31365 36.37629,-4.80249 71.32399,-23.55077 71.32399,-23.55077",
        "m 295.85724,446.0009 c 0,0 68.14376,-31.1968 71.57335,76.43084 3.42959,107.62765 -169.95901,31.82628 -186.39389,26.8656 -48.46466,-14.62852 -137.929665,-14.60809 -141.182139,56.29851 -3.252473,70.9066 99.214579,53.37579 99.214579,53.37579"
    ],
    netsClearForPath: (currentFlower) => {
        return true
    }
},
{
    flowersLenght: 4,
    paths: ["",
        "",
        "",
        ""
    ],
    netsClearForPath: (currentFlower) => {
        if (currentFlower == 0) {
            return true
        }
        else if (currentFlower == 1) {
            return netsInDocument().includes("net-0") || netsInDocument().includes("net-1")
        }
    }
}]


let currentFlower = 0
let currentPageIndex = 0
let currentPage = pages[currentPageIndex]

let flowerNext = document.querySelector(".flower-next")
flowerNext.addEventListener("click", () => {
    document.querySelector("#page2").scrollIntoView()

    currentFlower = 0
    currentPageIndex++
    currentPage = pages[currentPageIndex]

    butterflyContainer.style["offset-path"] = `path('${currentPage.paths[currentFlower]}')`

    butterfly.classList.add("butterfly-animate")
    setTimeout(() => {
        butterflyContainer.classList.add("animate-path")
    }, 50)
})

let spiderNets = document.querySelectorAll(".spider-net")
spiderNets.forEach((net, index) => {
    net.setAttribute("id", `net-${index}`)
    net.addEventListener("click", (event) => {
        event.target.remove()

        if (currentPage.netsClearForPath(currentFlower)) {
            runNextButterflyPathAnimation()
        }
    })
})

butterflyContainer.addEventListener("animationend", () => {
    butterfly.classList.remove("butterfly-animate")

    currentFlower++

    if (currentFlower == currentPage.flowersLenght) {
        flowerNext.style.visibility = "visible"
        return
    }

    setTimeout(() => {
        if (currentPage.netsClearForPath(currentFlower)) {
            runNextButterflyPathAnimation()
        }
    }, 1000)
})

window.addEventListener('load', function () {
    butterflyContainer.style["offset-path"] = `path('${currentPage.paths[currentFlower]}')`
    document.querySelector("#page1").scrollIntoView()
    butterflyContainer.classList.add("animate-path")
})

function runNextButterflyPathAnimation() {
    butterflyContainer.classList.remove("animate-path")

    butterflyContainer.style["offset-path"] = `path('${currentPage.paths[currentFlower]}')`

    butterfly.classList.add("butterfly-animate")
    setTimeout(() => {
        butterflyContainer.classList.add("animate-path")
    }, 50)
}

function netsInDocument() {
    return Array.from(document.querySelectorAll(".spider-net")).map((elem, index) => (elem.id))
}