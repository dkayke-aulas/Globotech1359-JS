function exibir(str) {
    console.log(str)
}

function exibirTexto(event) {
    // console.log(event.data)
    // console.log(event.target.checked)
    console.log(event.target.value)
}






const input = document.getElementById('input-texto')
const button = document.getElementById('btn-remover')

function onInputEvent(event) {
    console.log(event.target.value)
}

input.addEventListener('input', onInputEvent)


function onClickButtonEvent() {
    input.removeEventListener('input', onInputEvent)
}

button.addEventListener('click', onClickButtonEvent)

