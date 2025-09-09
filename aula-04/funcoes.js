// function pegarNumero() {
//     console.log('Olá')
//     const numeroAleatorio = Math.random()
//     return numeroAleatorio
// }

// // const numero = 100
// const numero = pegarNumero()

// console.log('Esse é o numero', numero)
// console.log('Esse é o mesmo numero', numero)


// function somarNumeros (numA, numB) {
//     return numA + numB
// }


// const somarNumeros = function (numA, numB) {
//     return numA + numB
// }


// const somarNumeros = (numA, numB) => {
//     return numA + numB
// }

// const somarNumeros = (numA, numB) => numA + numB

// console.log(somarNumeros(2,3))
// console.log(somarNumeros(5,7))
// console.log(somarNumeros(0.87,-0.952))
// console.log(somarNumeros("Dannyel ", "Kayke"))

// const somarCom5 = numA => numA + 5

// console.log(somarCom5(2))
// console.log(somarCom5(3))
// console.log(somarCom5(5))
// console.log(somarCom5("Dannyel"))



// function retornaFuncao() {
//     return function (str) {
//         return str
//     }
// }

// // const func = function (str) {
// //     return str
// // }

// const func = retornaFuncao()
// console.log(func(false))



// function soma(numA) {
//     return function(numB) {
//         return numA + numB
//     }
// }

// const primeiro = soma(2)
// const segundo = primeiro(5)
// console.log(segundo)



// function soma(numA) {
//     return function (numB) {
//         return numA + numB
//     }
// }

// // const primeiro = soma(2)
// const primeiro = function (numB) {
//     return 2 + numB
// }

// // const segundo = primeiro(5)
// const segundo = 2 + 5
// console.log(segundo)



// const executar = function (callback) {
//     callback()
// }

// const exibir = function () {
//     console.log('Esse é o texto exibido na função exibir!')
// }

// executar(exibir)





const calcular = function (calculo) {
    const numA = 2
    const numB = 3
    calculo(numA, numB)
}

const somar = function (numA, numB) {
    console.log(numA + numB)
}

const subtrair = function (numA, numB) {
    console.log(numA - numB)
}


// ESCOLHER A OPERAÇÃO
const operacao = 'somar'

if(operacao == 'somar') {
    calcular(somar)
}

if(operacao == 'subtrair') {
    calcular(subtrair)
}