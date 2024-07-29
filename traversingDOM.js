console.log("**** TRAVERSING DOM ****")

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------
//! parentElement, parentNode

const btn = document.getElementById("btn")

console.log(btn.parentElement) //? section.add-item
console.log(btn.parentNode) //? section.add-item
console.log(btn.parentNode.parentNode.parentNode) //? body
console.log(btn.parentNode.parentNode.parentNode.parentNode.parentNode) //? #document
console.log(
  btn.parentElement.parentElement.parentElement.parentElement.parentElement
) //? null

const iPhone15 = document.querySelector("ul li:nth-child(1)")
console.log(iPhone15.closest("section")) //? section.product-list
console.log(iPhone15.closest(".container")) //? main.container.mt-4

console.log(iPhone15.closest(".container").querySelector("#deneme")) //? h2#deneme

//* 2- Asagi Yonde traverse
//*----------------------------------------------
//? Children, firstElementChild, lastElementChild

console.log(iPhone15.firstChild) //? text
console.log(iPhone15.firstElementChild) //? null

const section = document.querySelector(".product-list")
console.log(section.firstChild) //? bir yazi dgumunun yazi elemntini gosterir.
console.log(section.firstElementChild) //? h2
console.log(section.lastElementChild) //? ul

const deneme =
  document.querySelector("main").firstElementChild.firstElementChild

console.log(deneme)

//* 3- Yatay Yonde traverse
//*----------------------------------------------
//! nextElementSibling ,previousElementSibling


const s24 = document.querySelector("ul li:nth-child(3)")
console.log(s24.previousElementSibling.textContent)
console.log(s24.nextElementSibling.textContent)