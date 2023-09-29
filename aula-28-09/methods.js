let lista = ["a","b","c","d"]

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
lista.splice(index,1)
// console.log(lista)