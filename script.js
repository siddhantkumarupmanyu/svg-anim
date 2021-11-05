// you know what I hate this code...
// worst code i have ever written
// worst git message I have ever written

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
    paths: ["m -8.9381905,33.51564 c 0,0 50.1495705,54.608681 119.4229505,42.81926 69.27337,-11.789421 59.28911,-24.370403 108.97329,-36.547249 26.54684,-6.506233 65.02691,9.171878 80.41486,33.850487 5.01354,8.040519 22.85084,50.289692 22.85084,50.289692",
        "m 323.86099,125.47776 c 0,0 69.32044,29.67406 26.30682,75.77551 -43.01362,46.10145 -78.96164,30.18337 -91.88306,24.50684 -40.83633,-17.93988 -33.72907,-27.87049 -81.96153,-46.32763 -43.45084,-16.62736 -81.864546,9.10015 -100.836269,28.25062 -30.163417,30.4476 -21.228559,60.38448 -16.053917,69.83792 18.198175,33.24584 60.039376,26.05744 60.039376,26.05744",
        "m 119.47241,303.57846 c 0,0 59.36548,-4.7773 161.6676,-37.17156 19.08525,-6.0434 74.72954,-7.92311 99.32282,24.20182 37.57637,49.08407 1.08274,90.22241 -20.68406,100.25687 -27.0935,12.49005 -101.0996,20.7249 -138.67279,-3.36667 C 162.40694,349.86166 95.817188,355.74666 65.121842,400.12033 34.426495,444.494 19.492555,487.25831 48.456365,540.05181 c 28.963811,52.7935 78.957195,15.47732 91.261405,5.66467 12.3042,-9.81265 42.21017,-49.20947 80.60417,-64.13455 46.38108,-18.02994 89.7272,-16.90428 116.3442,-14.10964",
        "m 336.66614,467.47229 c 0,0 61.86229,52.29125 14.94996,101.68294 -46.91233,49.39169 -69.50549,4.21946 -111.81546,24.93341 -42.30996,20.71395 -32.96767,55.58667 -83.45866,80.54969 -50.49099,24.96302 -80.821411,-10.64968 -80.821411,-10.64968"
    ],
    netsClearForPath: (currentFlower) => {
        if (currentFlower == 0) {
            return true
        }
        else if (currentFlower == 1) {
            return !(netsInDocument().includes("net-0") || netsInDocument().includes("net-1"))
        }

        else if (currentFlower == 2) {
            return !(
                netsInDocument().includes("net-2") ||
                netsInDocument().includes("net-3") ||
                netsInDocument().includes("net-4") ||
                netsInDocument().includes("net-5")
            )
        }

        else if (currentFlower == 3) {
            return !(netsInDocument().includes("net-6") || netsInDocument().includes("net-7"))
        }
    }
}, {
    flowersLenght: 1,
    paths: ["m -17.998749,20.389969 c 0,0 9.8671572,68.546341 89.209564,37.285934 29.985915,-11.814261 92.346925,-62.7912594 157.450315,-3.406234 38.78429,35.377667 46.07683,69.162541 107.5484,33.757843 67.61604,-38.943625 59.47317,115.554058 -16.06189,129.331408 -53.12863,9.69049 -81.63118,12.57911 -159.59469,-24.344 C 51.091844,141.17471 -10.582443,296.10998 63.444321,362.88333 140.08747,432.0167 182.6991,384.74609 287.37735,308.10837 392.0556,231.47064 432.13518,422.7893 318.41651,476.364 248.56669,509.27139 216.01985,518.71138 216.01985,518.71138"],
    netsClearForPath: (currentFlower) => {
        return netsInDocument().length == 0
    }
}]


let currentFlower = 0
let currentPageIndex = 0
let currentPage = pages[currentPageIndex]

let flowerNext = document.querySelector(".flower-next")
flowerNext.addEventListener("click", () => {
    flowerNext.style.visibility = "hidden"

    butterflyContainer.classList.remove("animate-path")

    currentFlower = 0
    currentPageIndex++
    currentPage = pages[currentPageIndex]

    document.querySelector(`#page${currentPageIndex + 1}`).scrollIntoView()

    butterflyContainer.style["offset-path"] = `path('${currentPage.paths[currentFlower]}')`

    if (currentPage.netsClearForPath(currentFlower)) {
        runNextButterflyPathAnimation()
    }
})

let spiderNets = document.querySelectorAll(".spider-net")
spiderNets.forEach((net, index) => {
    net.setAttribute("id", `net-${index}`)
    net.addEventListener("click", (event) => {
        event.target.remove()

        if (currentPage.netsClearForPath(currentFlower) && !Array.from(butterfly.classList).includes("butterfly-animate")) {
            runNextButterflyPathAnimation()
        }
    })
})

butterflyContainer.addEventListener("animationend", () => {
    butterfly.classList.remove("butterfly-animate")

    currentFlower++

    if (currentFlower == currentPage.flowersLenght) {
        if (currentPageIndex == 2) {
            setTimeout(thankYou, 1000)
            return
        }
        flowerNext.style.visibility = "visible"
        return
    }

    setTimeout(() => {
        if (currentPage.netsClearForPath(currentFlower) && !Array.from(butterfly.classList).includes("butterfly-animate")) {
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

function thankYou() {
    document.querySelector("#last-svg-path").remove()

    setTimeout(() => {
        butterflyHeartPath()
    }, 500)

    setTimeout(() => {
        document.querySelector("#heart-svg-path").style.visibility = "visible"
    }, 7000)

    setTimeout(() => {
        document.querySelector(".text.thank-you").style.visibility = "visible"
    }, 14000)
    setTimeout(() => {
        document.querySelector(".text.the-end").style.visibility = "visible"
        document.querySelector(".text.by").style.visibility = "visible"
    }, 20000)

    // should I stop butterfly animation after two rounds??
    // thank you is already beating thought that's why. IDK

}

function butterflyHeartPath() {
    butterflyContainer.classList.remove("animate-path")

    const heartPath = "m 225.84582,518.01352 c 0,0 163.446,-60.49448 178.68435,-201.67801 C 419.76853,175.15198 220.65881,205.7152 230.74908,313.33978 240.83935,205.7152 41.72963,175.15198 56.967987,316.33551 72.206345,457.51904 225.84582,518.01352 225.84582,518.01352"

    butterflyContainer.style["offset-path"] = `path('${heartPath}')`

    butterfly.classList.add("butterfly-animate")
    setTimeout(() => {
        butterflyContainer.classList.add("animate-path")
    }, 50)
}

// todo: tell shris if she's having any problem or the page gets cuts. Like in case of my mobile or moto g4 in chrome responsive.
// Goto to desktop chrome and open dev tools and change device to pixel 2 and reload the page.
// if she uses firfox do it with firefox instead. (TBH chrome would be better for her)