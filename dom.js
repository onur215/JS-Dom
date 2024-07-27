const addNewMovie=document.getElementsByClassName("movie-item")
console.log(addNewMovie);
addNewMovie[0].style.color="red"

for (let i=0;i<addNewMovie.length;i++){
    console.log(addNewMovie[i].textContent);
}

const arrayMovies=[...addNewMovie]
console.log(arrayMovies);

arrayMovies.forEach((item)=>item.style.color="blue")



const listItems=document.getElementsByTagName("li")
console.log(listItems);

const h2Ler = document.getElementsByTagName("h2")
console.log(h2Ler);

const h2lerArray =[...h2Ler]
console.log(h2lerArray);

h2lerArray.forEach((item) => console.log(item.textContent))

document.querySelector("#tenet").style.backgroundColor="cadetblue"
document.querySelector(".add-new").style.backgroundColor="pink"
document.querySelector(".movie-item").style.backgroundColor="yellow"
document.querySelector(".movie-item").style.backgroundColor="red"


document.querySelector("#movie-ul #avatar").style.backgroundColor="crimson"


const movies = document.querySelectorAll(".movie-item")
console.log(movies);

const arrMovies = [...movies]
console.log(arrMovies);