const form = document.getElementById('login-form')


const pessoa = {
    "nome": "Dannyel",
    "idade": 28,
    'temCachorro': true,
    materiasFavoritas: ['Estrutura de Dados', "Programação Funcional"],
    medidas: { peso: 45, altura: 1.93 },
    'data-nascimento': new Date(),
    acao: () => console.log(2 + 3)
}



const { medidas, idade, ...restoDaPessoa } = pessoa


console.log(medidas, idade, restoDaPessoa)









// const chaves = Object.keys(pessoa)
// const valores = Object.values(pessoa)

// const pessoa1 = ['Dannyel', 28, true]
// const pessoa2 = ['Kayke', 82]

// // const nome1 = pessoa1[0]
// // const idade1 = pessoa1[1]
// // const temCachorro1 = pessoa1[2]


// const [nome, idade, ...propriedadesDaPessoa] = pessoa2 // ['Dannyel', 28, true]


// console.log(nome)
// console.log(idade)
// console.log(propriedadesDaPessoa)
// console.log(pessoa1)

