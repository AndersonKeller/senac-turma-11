const pokemon = JSON.parse(localStorage.getItem("@pokemon"))
console.log(pokemon)
const h3 = document.querySelector("h3")
h3.innerText = pokemon.name