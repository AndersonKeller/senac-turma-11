//VARIAVEIS

// let numero1 = 2
// const numero2 = "numero 2"
//tipos
//"string",number, array[],objeto{}, boolean

//OPERADORES DE 
// ou ||, and &, not !, igual ==, atribui =

//COMPARAÇÃO
// if(condicao){
    //lógica
//}
//else if(condicao){
    //lógica
//}
//else{
    //lógica
//}
//declaração
// function imprimir(){
//     console.log("meu nome é Anderson")
// }
// imprimir()
// console.log()
// function imprimirParametro(name){
//      console.log(name)
//      return name
// }
// imprimirParametro("Anderson")
//loop for
// const array = [1,2,3,4,5,6]
// for(let i=0; i< array.length; i++){
//     // console.log(array[i])
// }
// function multiplicaArray(array=[]){
//     let newArray = []
//     for(let i =0;i<array.length;i++){
//         newArray.push(array[i]*2)
//     }
//     return newArray
// }
// const result = multiplicaArray(array)
// console.log(result)
//dado um array = [1,2,3,4,5,6,7,8,9,10]
//crie uma função que recebe esse array por parametro 
// e retorna um array com os numeros pares

//dado um array =[1,2,3,4,5,6,7,8,9,10]
//crie uma função que recebe um array por parametro
// retorna o mesmo array invertido

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function arrayPar(array ={})
// {
//     let newArray = {}

//     for(let i = 0; 1<= array.lenght; i++)
//     {
//         if(array[i] % 2 == 0)
//         {
//             newArray.push(array[i])
//         }
      
//     }
//     return newArray
// }
// console.log(arrayPar(array))

// function inverte(array=[]){
//     let newArray = []
//     for(let i =array.length-1;i>=0;i--){
//         newArray.push(array[i])
//     }
//     return newArray
// }
// const result = inverte(array)
// console.log(result)

// let myName = "Anderson"
// let fullName = "Keller"

// // console.log("Meu nome completo é:"+" " +myName +" "+ fullName)
// console.log(`Meu nome completo é: ${myName} ${fullName}`)

// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i)
//     }
//     // console.log(i%2==0)
// }
// const myArray = [1,2,3,4,5,6,7]

// function multiply(array=[]){
//     let newArray = []
//     array.forEach((item)=>{
//         if(item%2==0){
//             newArray.push(item)
//         }
//     })
//     return newArray
// }
// const result = multiply(myArray)
// // console.log(result)
// const names = ["João","maria","pedro","josé"]
// function nameLength(array =[]){
//     const newArray = []
//     array.forEach((name)=>{
//         newArray.push(name.length)
//     })
//     return newArray
// }
// const res = nameLength(names)
// console.log(res)


//FAÇA UM FUNÇÃO QUE RECEBE DOIS PARAMETROS, 
//UM ARRAY DE NOMES ["João","Maria","pedro","josé"]
//e um nome
// se o nome estiver no array retorna true
//se nao retorna false

// mmultiply(array,nome)

// function includesName(array=[],name){
//     let newArray = []
//     array.forEach((item)=>{
//         if(item.toLowerCase() == name.toLowerCase()){
//             newArray.push(item)
//         }
//     })
//     if(newArray.length == 0){
//         return false
//     }else{
//         return true
//     }
// }

// const result = includesName(["João","Maria","pedro","josé"],"JOSÉ")
// console.log(result)
// function includesMethod(array=[],name){
//     return array.includes(name)
// }
// const result = includesMethod(["João","Maria","pedro","josé"],"josé")
// console.log(result)
// function verifyNumber(number){
//     if(number%2==0){
//         return alert(`O número ${number} é par`)
//     }else{
//         return alert(`O número ${number} é ímpar`)
//     }
// }
// let userNumber = prompt("Digite um número para ver se é par")
// verifyNumber(userNumber)

//function soma(numero1,numero2){
 //   const soma = parseInt(numero1) + parseInt(numero2)   
 //   return alert(`A soma de ${numero1} + ${numero2} é: ${soma}`)
    
//}
//const userNumber1 = prompt("Digite o primeiro número da soma")
//const userNumber2 = prompt("Digite o segundo número da soma")
//soma(userNumber1,userNumber2)

//FAÇA UMA FUNÇÃO QUE O USUÁRIO ESCOLHA A OPERAÇÃO 
//MATEMÁTICA / OU + OU - OU *

function matematica(operacao, numero1, numero2){

    if (operacao = "A"){
        const result = parseInt(numero1) * parseInt(numero2) 
    }
    else if {}


    const soma = parseInt(numero1) + parseInt(numero2)   
    return alert(`A soma de ${numero1} + ${numero2} é: ${soma}`)
}
