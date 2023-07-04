up = document.querySelector(".up")

window.onscroll = function () {
  if (this.scrollY >= 1000) {
    up.style.display = "block"
  }
  else {
        up.style.display = "none"
  }
}

up.onclick = function () {
  window.scrollTo ({
    top:0,
    behavior:"smooth",
  })
}

// ------------------------------------------------
let click = document.querySelector(".click")
let show = document.querySelector(".show")
let done = document.querySelector(".done")

click.onclick = function () {
  show.style.display = "block"
  click.style.display = "none"
  done.style.display = "block"
}

done.onclick = function () {
  show.style.display = "none"
    done.style.display = "none"
    click.style.display = "block"
}

// ------------------------------
let lis = document.querySelectorAll(".portfolio li")
let boxes = document.querySelectorAll(".prics .box")

lis.forEach((li) => {
  li.addEventListener("click", removeactive)
  li.addEventListener("click", manges)
})

// remove active class 

function removeactive () {
  lis.forEach((li)=> {
    li.classList.remove("active")
    this.classList.add("active")
  })
}

// mange boxes

function manges () {
  boxes.forEach((box) => {
    box.style.display = "none"
  })
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
  el.style.display = "block"
  })
}


// --------------------------------------------

let listow = document.querySelectorAll(".explore li")
let boxestow = document.querySelectorAll(".explore .box")

listow.forEach((li)=> {
  li.addEventListener("click", removeclass)
  li.addEventListener("click", mangeboxes)
})

// remove active class 

function removeclass () {
  listow.forEach((li)=> {
  li.classList.remove("active")
  this.classList.add("active")
  })
}


// mange boxes

function mangeboxes() {
  boxestow.forEach((box)=> {
    box.style.display = "none"
    document.querySelectorAll(this.dataset.cat).forEach((el)=> {
      el.style.display = "block"
    })
  })
}


// ---------------------------

let nav = document.querySelector("nav ul")
let toogle = document.querySelector(".navbar .toggle")
let close = document.querySelector(".navbar .close")

toogle.onclick = function () {
    toogle.style.display = "none"
    close.style.display = "block"
    nav.style.transform = "translateX(0%)"
}

close.onclick = function () {
    nav.style.transform = "translateX(-200%)"
    toogle.style.display = "block"
    close.style.display = "none"
}



document.onkeyup = function (e) {
  if (e.key === "Escape") {
    nav.style.transform = "translateX(-200%)"
    toogle.style.display = "block"
    close.style.display = "none"
  }
}

let color = document.querySelectorAll(".frist")

color.onclick = function () {
  // color.style.color = "var(--main-color)"
  color.style.color = "red"
}

// console.log(color)











// let frist = document.querySelector("ul")
// let lista = document.querySelector(".list")

// frist.onclick = function () {
//   lista.style.display = "block"
// }

// lista.onclick = function () {
//     lista.style.display = "none"

// }