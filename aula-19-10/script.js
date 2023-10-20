// // const res =
// // async function imprime1(){
// //     setTimeout(()=>{
// //         console.log("1")
// //     },2000)
// // } 
// // async function imprime2(){
// //     await imprime1()
// //     console.log("2")
// // }
// // imprime2()
const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
const pokemonsJson = await pokemons.json()
console.log(pokemonsJson)
const ul = document.querySelector(".poke-ul")

renderList(pokemonsJson.results)

function renderList(list=[]){
 
    ul.innerHTML = ""
    list.forEach(async(pokemon)=>{
        const pokemonInfos = await fetch(pokemon.url)
        const infosJson = await pokemonInfos.json()
            
         ul.insertAdjacentHTML("beforeend",`
         <div>
         <li id="${infosJson.id}">
         <p>${pokemon.name}</p>
         <img src=${infosJson.sprites.front_default} >
         </li>
         </div>
         `)
         const li = document.getElementById(infosJson.id)
            li.addEventListener("click",()=>{
                navigateToPokemon(infosJson)
            })
     })
}
function navigateToPokemon(pokemon){
    localStorage.setItem("@pokemon",JSON.stringify(pokemon))
    window.location.replace("/pokemon")
}
let offset = 0
const nextBtn = document.querySelector("#next-page")
nextBtn.addEventListener("click",async ()=>{
    offset = offset+20
    prevBtn.removeAttribute("disabled")

    try {
        nextBtn.setAttribute("disabled",true)
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
        const resJson = await res.json()
        renderList(resJson.results)
    } catch (error) {
        console.log(error)
    }
    
    setTimeout(() => {
        nextBtn.removeAttribute("disabled")
    }, 1000);
})

const prevBtn = document.querySelector("#prev-page")
prevBtn.addEventListener("click",async ()=>{
    offset = offset-20
    
    if(offset<0){
        prevBtn.setAttribute("disabled",true)
        offset = 0
    }else{
        try {
            prevBtn.setAttribute("disabled",true)
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
            const resJson = await res.json()
            renderList(resJson.results)
        } catch (error) {
            console.log(error)
        }
        prevBtn.removeAttribute("disabled")
    }
    
})

// const pokemons =  fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
// .then((response)=>response.json())
// .then((res)=>res.results)
// // const pokemonsJson = await pokemons.json()
// console.log( await pokemons)