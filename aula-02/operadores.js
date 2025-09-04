// unários
// operador de coersão numérica (-) e (+)
const variavel = -true
console.log(variavel)

// operador de negação (!)
const FALSE = false
const TRUE = true

// console.log(!FALSE)
// console.log(!TRUE)

const fruta = -1
console.log(!!fruta)


// binários
// aritméticos
const soma = 2 + 2
const sub = 2 - 5
const div = 50 / 2
const mult = 2 * 3
const pot = 2 ** 3
const resto = 100 % 2 
const resto2 = 10 % 3 

console.log(soma)
console.log(sub)
console.log(div)
console.log(mult)
console.log(pot)
console.log(resto, 100 / 2)
console.log(resto2, 10 / 3)

const numA = 10
let numB = 20
// numB = numB % numA
numB %= numA
console.log(numA, numB)

// operadores lógico aritmético >, <, >=, <=
const idade = 8
const ehMaiorIdade = idade >= 18
const ehMenorIdade = idade < 18

console.log(ehMaiorIdade, ehMenorIdade)


// operadores lógico comparativos

// ser aluno
// ter autorização
// pode passear?

// const aluno = true
// const autorizado = true
// const pode = aluno && autorizado

// console.log(pode)


const item1 = true // banana
const item2 = false // garfo
const mateiAFome = item1 || item2

console.log(mateiAFome)

// ternário
const aluno = false
const autorizado = false
// const pode = aluno && autorizado ? 'Pode passear' : 'Não pode passear'

 

const pode = aluno ? autorizado ? 'Pode passear' : 'Não possui autorização!' : 'Não é aluno'

console.log(pode)