// // const array = [1,2,3,4]
// // //number, string, boolean
// // const nomedotenis = "nike"
// // const cordotenis = "preto"

// // const produto = {
// //     name:"tênis",
// //     price: 100,
// //     quantity: 10,
// //     disponible: true
// // }
// const listProducts=[
//     {
//         id:"1",
//         name:"tênis",
//         price: 100,
//         quantity: 10,
//         disponible: true  
//     },
//     {
//         id:"2",
//         name:"camiseta",
//         price: 70,
//         quantity: 10,
//         disponible: true
//     }
// ]

// listProducts.forEach((product)=>{
//     const ul = document.querySelector("#products")
//     const li = document.createElement("li")
//     li.id = product.id
//     const pName = document.createElement("p")
//     pName.innerText = product.name

//     const btnAdd = document.createElement("button")
//     btnAdd.innerText = "Adicionar"
//     btnAdd.classList.add("btn-add") 
//     btnAdd.addEventListener("click",()=>{
//         addToCart(product)
//     })
//     li.append(pName,btnAdd)
//     ul.appendChild(li)
// })
// function addToCart(product){
//     const ulCart = document.querySelector("#cart")
//     const li = document.createElement("li")
//     li.id = product.id
//     const pName = document.createElement("p")
//     pName.innerText = product.name

//     const btnRemove = document.createElement("button")
//     btnRemove.innerText = "X"
//     btnRemove.addEventListener("click",(event)=>{
//         removeToCart(product)
//     })

//     li.append(pName,btnRemove)
//     ulCart.appendChild(li)
//     // console.log(product)
// }
// function removeToCart(product){
//     const ulCart = document.querySelector("#cart")
//     const childrens = Array.from(ulCart.children)
//     let li = ""
//     childrens.forEach((item)=>{
//         if(item.id==product.id){
//             console.log("foi")
//             li = item
//         }
//     })
//     console.log(li)
//     li.remove()
// }

import {listProducts} from  "./data.js"
// console.log(listProducts)
function renderProducts(list=[]){
    const ul = document.querySelector("#products")
    list.forEach((item)=>{
        ul.insertAdjacentHTML("afterbegin",`
        <li>
        <img src="" alt="">
        
        <div class="div-texts">
            <p class="p-name">nome: ${item.name}</p>
            <p class="p-price">preço: ${item.price}</p>
            <p class="p-quantity">estoque: ${item.quantity}</p>
        </div>
        <button class="btn-add">Adicionar</button>
    </li>
        `)
        const btnAdd = document.querySelector(".btn-add")
        btnAdd.addEventListener("click",()=>{
        addToCart(item)
        })
    })
    
}
renderProducts(listProducts)
let cartList = []
function addToCart(item){
    // console.log(cartList.length)
    const newItem = {...item}
    if(cartList.length==0){
        newItem.id = 1
    }else{
        newItem.id = parseInt(cartList[cartList.length-1].id) +1
        // console.log(item.id)
    }
    cartList.push(newItem)
    console.log(cartList)
    // const index =cartList[cartList.length]
    renderCart(cartList)
}
function renderCart(list=[]){
    const ulCart = document.querySelector("#cart")
    ulCart.innerHTML = ""
    list.forEach((item)=>{
        ulCart.insertAdjacentHTML("afterbegin",`
        <li>
            <div >
                <p class="p-name">nome: ${item.name}</p>
                <p class="p-price">preço: ${item.price}</p>
            </div>
            <button class="btn-remove">X</button>
        </li>
    `)
    const btnRemove = document.querySelector(".btn-remove")
    btnRemove.addEventListener("click",()=>{
        removeToCart(item)
    })
    })
}
function removeToCart(item){
    const index = cartList.findIndex((cart)=>cart.id == item.id)
     cartList.splice(index,1)
    
    renderCart(cartList)
    console.log(cartList)
}
