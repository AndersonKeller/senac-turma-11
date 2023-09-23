//SELCIONANDO ELEMENTO
const btn = document.querySelector(".btn")
//CRIANDO ELEMENTO
const p = document.createElement("p")
p.id = "paragrafo"
p.classList.add("p-js")
p.innerText = "texto vindo do jS"

//JOGA O ELEMENTO PRA TELA
const main = document.querySelector("main")
main.appendChild(p)
main.children[0].setAttribute("style","color:blue;")
//ADICIONANDO EVENTOS
// btn.addEventListener("click",(event)=>{
//     console.log("clickou")
// })
// HTMLCOLLECTION -> ARRAY COMUM 
const arrayChildren = Array.from(main.children)
arrayChildren.forEach((item)=>console.log(item))
btn.addEventListener("click",()=>{
    if(p.innerText == "olá"){
        p.innerText = "tchau"
    }else{
        p.innerText = "olá"
    }
})
//EVENTO DE SUBMIT
//VALUE DO INPUT
const inputBtn = document.querySelector("form")
inputBtn.addEventListener("submit",(event)=>{
    event.preventDefault()
    const input = document.querySelector("input")
    const h3 = document.querySelector("h3")
    console.log(input.value)
    if(input.value==""){
        // inputBtn.setAttribute("disabled",true)
        const body = document.body
        body.insertAdjacentHTML("afterbegin",`
        <div class="modal-wrapper">
        <div class="modal">
        <button id="btn-close">X</button>
            <h2>Modal</h2>
            <p>feeedback</p>
        </div>
        </div>
        `
        )
        const btnClose = document.querySelector("#btn-close")
        btnClose.addEventListener("click",()=>{
            console.log("wrapeer")
            const wrapper = document.querySelector(".modal-wrapper")
            wrapper.remove()
        })
    }else{
        h3.innerText = input.value
    }
})
//CRIAR UMA CALCULADORA DE IMC
//DOIS INPUTS, 1 PRA ALTURA, 1 PRO PESO
//UM BOTÃO PRA SUBMIT
//UM CAMPO QUE RETORNA O RESULTADO
