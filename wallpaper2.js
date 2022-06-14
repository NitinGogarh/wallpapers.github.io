var viewmodal2
var viewmodal = [...animals]
let serials = 1
const right = document.querySelector('.right')
const left = document.querySelector('.left')
const cross = document.querySelector('.cross')
const section = document.querySelector('.section')
const modal = document.querySelector('.modal')
const parent = document.querySelector('.parent')
const image = document.querySelector('.modalimg')
const dot1 = document.querySelector('.dot1')
var preloader = document.querySelector('.preloader')
//________________________________________________________________________________________________________________

//PRELOADER FUNCTION

var preloader = document.querySelector('.preloader')
function preload() {
    preloader.style.display = "none"

}

//_____________________________________________________________________________________________________________

//  PHOTOS CLICK FUNCTION

function photos(animalswallpaper) {


    viewmodal2 = [...animalswallpaper]
    modal.style.display = "flex"
    parent.style.display = "none"

    let initial = animalswallpaper.filter((e) => {
        return e.serial == 1
    })



    section.innerHTML = initial.map((e) => {
        return ` <img src="${e.image}" alt="" class="modalimg">
        <h2 class="name">${e.name}</h2>
          <ul class ="dot1"></ul>`
    })

      cross.addEventListener('click', () => {
        modal.style.display = "none"
        parent.style.display = "flex"
        serials = 1

    })
    dot1.innerHTML = viewmodal2.map((e) => {
        return `<li class="dot"></li>`
    })
    dot1.children[0].style.backgroundColor = "yellow"
}




//______________________________________________________________________________________________________

//MODAL INNER HTML

function modalseries() {
    section.innerHTML = viewmodal.map((e) => {
        return ` <img src="${e.image}" alt="" class="modalimg">
    <h2 class="name">${e.name}</h2>
    <ul class ="dot1"></ul>`
    })

}
//_______________________________________________________________________________________________

//RIGHT KEY

right.addEventListener('click', () => {
    if (serials != viewmodal2.length) {

        dot1.children[serials].style.backgroundColor = "yellow"
        dot1.children[serials - 1].style.backgroundColor = "grey"
    }
    if (serials == viewmodal2.length) {
        dot1.children[serials - 1].style.backgroundColor = "grey"
        serials = 0;
    }
    dot1.children[serials].style.backgroundColor = "yellow"
    serials++;

    viewmodal = viewmodal2.filter((e) => {
        return e.serial == serials
    })
    modalseries()

})
//___________________________________________________________________________________________________

//LEFT KEY

left.addEventListener('click', () => {
    for (let i = 0; i < viewmodal2.length; i++) {
        dot1.children[i].style.backgroundColor = "grey"
    }

    if (serials == 1) {
        serials = viewmodal2.length + 1;
    }
    serials--;
    dot1.children[serials - 1].style.backgroundColor = "yellow"

    viewmodal = viewmodal2.filter((e) => {
        return e.serial == serials
    })
    modalseries()
})
//_________________________________________________________________________________________________

