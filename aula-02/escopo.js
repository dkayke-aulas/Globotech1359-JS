// var - variavel global de escopo aberto
// let - variavel global de escopo fechado
// const - constante global de escopo fechado

console.log(fruta)
var fruta = 'banana'
console.log(fruta)

console.log('***************************\n\n')

// console.log(fruta2) // erro de utilização antes da declaração
let fruta2 = 'banana'
console.log(fruta2)

console.log('***************************\n\n')



var fruta = 'melancia'
console.log(fruta) // melancia

{
    let fruta = 'caju'
    var animal = 'baleia'

    console.log(fruta) // caju
    console.log(animal) // baleia

    fruta = 'banana'
}

console.log(animal)
console.log(fruta)





























