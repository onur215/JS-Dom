/* -------------------------------------------------------------------------- */
/*                              DOM MANIPULATION                              */
/* -------------------------------------------------------------------------- */

// 1.Element ekleme

const movieUl = document.getElementById("movie-ul")

const yeniEleman = document.createElement("li")
yeniEleman.textContent = "Black List"
yeniEleman.className = "movie-item"

movieUl.appendChild(yeniEleman)

//2 Yeni eleman ekleme / Daha kolay yöntem

movieUl.innerHTML += `<li id="inception" class="movie-item">God Father</li>`

//2. Element Silme
// removeChild(childElement):
const matrix = document.getElementById("matrix")
movieUl.removeChild(matrix)

//Özellik ekleme
//SetAttribute
const movieInput = document.querySelector("#movie-input")
movieInput.setAttribute("placeholder","Enter a movie name")

/* ---------------------------------------------- */

// Class ekleme
const avatar = document.getElementById("avatar")
avatar.classList.add("highlight")

const inters = document.getElementById("interstellar")
inters.classList.remove("interstellar")

// Bir element bir classa sahip mi kontrolü
//contains => içeriyor mu - True False

const check = inters.classList.contains("interstellar")
console.log(check);

const check1 = avatar.classList.contains("highlight")
console.log(check1);

if (avatar.classList.contains("highlight")) {
    avatar.style.fontSize = "3rem"
}