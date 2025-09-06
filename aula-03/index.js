// ########## RECUPERAÇÃO DE ELEMENTOS

// const paragrafos = document.getElementsByTagName('p')
// console.log(paragrafos)

// const frutasBrasileiras = document.getElementsByClassName('fruta-brasileira')
// console.log(frutasBrasileiras)

// const frutaFavorita = document.getElementById("fruta-favorita")
// console.log(frutaFavorita)

// const senha = document.getElementsByName('senha')
// console.log(senha)

// const seletor = document.querySelector('#fruta-favorita')
// console.log(seletor)

// const seletores = document.querySelectorAll('p')
// console.log(seletores)



// ########## RECUPERAÇÃO E MANIPULAÇÃO DE ELEMENTOS
// const p = document.querySelector('p')

// const texto = p.innerText

// // font-size
// if (texto.toLowerCase().includes('banana')) {
//     p.style.fontSize = "30px"
//     p.style.color = "orange"
// }

// p.innerText = p.innerText.replaceAll('á', 'a').replaceAll('é', 'e')

// if (texto.toLowerCase().includes('melancia')) {
//     p.style.fontSize = "10px"
//     p.style.color = "red"
// }


// p.innerText = 'Meu pastel é mais barato!'

// p.innerHTML = '<a href="#">Luke eu sou seu pai</a>'

// const ancora = p.querySelector('a')

// console.log(ancora)

// ancora.style.color = "green"


// // Melancia é mais água que fruta 30
// console.log(texto, texto.length)


// ### CRIAÇÃO DE ELEMENTOS

const paragrafo = document.querySelector('p')
// const paragrafo = document.createElement('p')

paragrafo.style.color = 'cornflowerblue'
paragrafo.classList.add('cor-de-banana')
// paragrafo.classList.contains('cor-de-banana')
paragrafo.textContent = 'Esse é o novo parágrafo'


const div = document.querySelector('div')
div.appendChild(paragrafo)

// paragrafo.remove()

