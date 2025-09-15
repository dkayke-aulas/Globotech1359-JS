// const frutas1 = ["banana", "melancia"]
// const frutas2 = [...frutas1]
// console.log(frutas1)
// console.log(frutas2)

// const animais = ["cachorro", "gato", "ornitorrinco", "peixe", "coelho", "tigrinho"]
// const ultimo = animais.pop() // remove ultimo elemento // 5
// const primeiro = animais.shift() // remove o primeiro elemento // 4
// const quantidadeDeItems1 = animais.push(primeiro) // insere na ultima posição (indice length - 1) // 5
// const quantidadeDeItems2 = animais.unshift(ultimo) // insere na primeira posição (indice 0) // 6
// animais[957] = "albatroz"
// console.log(animais)
// console.log(ultimo)
// console.log(primeiro)
// console.log(quantidadeDeItems1, quantidadeDeItems2)


// console.log('iniciou!')
// let indice = 0

// while(indice < 5) {
//     console.log(indice)
//     // indice = indice + 1
//     indice++
// }
// console.log('terminou!')
// // 0 < 5   ->  0   ->  1
// // 1 < 5   ->  1   ->  2
// // 2 < 5   ->  2   ->  3
// // 3 < 5   ->  3   ->  4
// // 4 < 5   ->  4   ->  5



// console.log('iniciou!')
// let indice = 5

// do {
//     console.log(indice)
//     indice++
// } while (indice < 5)
// console.log('terminou!')





// let executar = true
// let indice = 0

// do {
//     console.log('executou', ++indice, 'vezes')
//     executar = window.confirm("Quer executar novamente?")
// } while (executar === true)



// let indice = 0
// do {
//     const random = Math.random()
//     console.log('executou', random, 'vezes')

//     if(indice > random) {
//         break
//     }

//     indice = random
// } while (true)


// console.log('inicou')
// for(let indice = 4; indice > -1; indice--) {
//     console.log(indice)
// }
// console.log('finalizou')



const numeros = [1, 2, 3, 4, 5]

const callbackMap = (item, indice, arr) => {
    if (indice % 2 === 0) {
        return item * 2
    }
    // return item
}

const dobrados = numeros.map(callbackMap)


const callbackFilter = (item) => {
   return item !== undefined
}

const filtrados = dobrados.filter(callbackFilter)


console.log(numeros)
console.log(dobrados)
console.log(filtrados)









// const filmes = ['Harry Potter', "Senhor dos Anéis", "Titanic", "Marley e Eu", "Creche do Papai", "Sexta-feira 12"]

// const callback = (_, indice, arr) => {
//     if (indice % 2 === 0) {
//         arr[indice] = 'par'
//     }
//     else {
//         arr[indice] = 'impar'
//     }
//     console.log(arr[indice])
// }

// const retorno = filmes.forEach(callback)

// console.log(retorno)