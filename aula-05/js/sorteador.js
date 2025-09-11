const inputNome = document.querySelector('#input-nome') // input
const btnAdicionar = document.querySelector('#btn-adicionar') // button
const listaNomes = document.querySelector('#lista-nomes') // ul
const btnSortear = document.querySelector('#btn-sortear') // button
const btnLimparLista = document.querySelector('#btn-limpar') // button


btnAdicionar.addEventListener('click', () => {
    const nome = inputNome.value.trim()

    // if (nome.length > 0)  // if (nome)
    if (nome !== '') {
        const li = document.createElement('li')
        li.innerHTML= `${nome} <button>x</button>`

        listaNomes.appendChild(li)

        inputNome.value = ''
        inputNome.focus()
    }
})

// ['Bernardo', "Nando", "Iane", "Dannyel"] length 4
// 0               1       2       3

// const nomes = ['Bernardo', "Nando", "Iane", "Dannyel"]

// let indice = 0

// while (indice < nomes.length) {
//     console.log(indice, nomes.length, nomes[indice])
//     indice++
// }

// for (let indice = 0; indice <= nomes.length - 1; indice++) {
//     console.log(indice, nomes.length, nomes[indice])
// }

btnSortear.addEventListener('click', () => {
    const liDeNomes = document.querySelectorAll('li')

    if (liDeNomes.length === 0) {
        console.log('Lista está vazia!')
        return
    }

    for (let indice = 0; indice < liDeNomes.length; indice++) {
        // liDeNomes[0].classList.remove('sortud')
        liDeNomes[indice].classList.remove('sortud')
    }

    const numeroSorteado = Math.floor(Math.random() * liDeNomes.length)
    const liPessoaEscolhida = liDeNomes[numeroSorteado]

    liPessoaEscolhida.classList.add('sortud')
})


btnLimparLista.addEventListener('click', () => {
    // const liDeNomes = document.querySelectorAll('li')

    //  for (let indice = 0; indice < liDeNomes.length; indice++) {
    //     // liDeNomes[0].remove()
    //     liDeNomes[indice].remove()
    // }
    listaNomes.innerHTML = null
})