const loginForm = document.forms['login-form']
const message = document.getElementById('message')
const USUARIO_LOGADO_KEY = "@usuario-logado"

loginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const fd = new FormData(loginForm)

    const username = fd.get('username').trim()
    const password = fd.get('password').trim()

    if (username === 'admin' && password === '123') {
        localStorage.setItem(USUARIO_LOGADO_KEY, true)
        location.href = 'pages/painel.html'
    } else {
        message.style.color = 'red'
        message.textContent = "Usuário ou Senha inválidos!"

        setTimeout(() => {
            message.textContent = ''
        }, 3000)
    }
})


// se true, usuário logado
if(JSON.parse(localStorage.getItem(USUARIO_LOGADO_KEY))) {
    location.href = 'pages/painel.html'
}

// if(localStorage.getItem(USUARIO_LOGADO_KEY) === 'true') {

// }
