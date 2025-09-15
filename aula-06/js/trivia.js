const paragrafoPergunta = document.getElementById('pergunta')
const divQuestoes = document.getElementById('questoes')
const btnProximaPergunta = document.getElementById('proxima-pergunta')


function montarPergunta(result) {
    paragrafoPergunta.innerHTML = result.question

    result.incorrect_answers.forEach((item) => {
        const button = document.createElement('button')
        button.innerHTML = item
        divQuestoes.appendChild(button)
    })

    const button = document.createElement('button')
    button.innerHTML = result.correct_answer
    divQuestoes.appendChild(button)
}

async function carregarPergunta() {
    const response = await fetch("https://opentdb.com/api.php?amount=1&type=multiple")
    const trivia = await response.json()
    montarPergunta(trivia.results[0])
}

carregarPergunta()

btnProximaPergunta.addEventListener('click', carregarPergunta)