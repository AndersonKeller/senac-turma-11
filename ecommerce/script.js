import {data} from "./database.js"
const btns = document.querySelectorAll("button")
    console.log(btns)
    btns.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            separaCategorias(btn.innerText)
        })
    })

function separaCategorias(categoria){
    
    console.log(categoria)
    if(categoria != "Todos"){
        const filterArray = data.filter((item)=>{
            return item.tag[0] == categoria
        })
        renderLista(filterArray)
    }else{
        renderLista(data)
    }
      
}
function renderLista(lista=[]){
    const ul = document.querySelector("ul")
    ul.innerHTML=""
    lista.forEach((item)=>{
        ul.insertAdjacentHTML("beforeend",`
        <li>
            <p>${item.nameItem}</p>
            <p>${item.tag[0]}</p>
        </li>
    `)
    })
}

let newArray = []
for(let i =0;i<data.length;i++){
    if(data[i].tag[0] == "Acessórios"){
        newArray.push(data[i])
    }
}
const filterArray = data.filter((item)=>{
    return item.tag[0] == "Camisetas"
})
console.log(filterArray)