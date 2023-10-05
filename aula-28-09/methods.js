let lista = ["a","b","c","d"]
//id array
const result = lista.filter((item)=>{
    return item != "a"
})
// console.log(result)




function remove(list=[],element){
    let aux = []
    // console.log("element",element)
    for(let i =0;i<list.length;i++){
        if(list[i]!=element){
            aux.push(list[i])
        }
    }
    return aux
}

// const res = remove(lista,"b")
// console.log(res)
function findIndex(list=[],element){
    for(let i=0;i<list.length;i++){
        console.log(list[i]==element)
        if(list[i]==element){
            return i
        }
    }
    return -1
}
// const res = findIndex(lista,"b")
// console.log(res)
const index = lista.findIndex((item)=> {
    return item=="b"
})
// console.log(index)
// lista.splice(index,1)
// console.log(lista)
let obj1 = {
    id: 1,
    img: "./img/jaqueta.svg",
    nameItem: "Lightweight Jacket",
    description:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
}

let obj2 = {...obj1}

obj2.name = "maria"

console.log(obj1)
console.log(obj2)

