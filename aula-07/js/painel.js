const USUARIO_LOGADO_KEY = "@usuario-logado"
const app = document.getElementById('app')

// se não estiver logado, joga para o login
if (!JSON.parse(localStorage.getItem(USUARIO_LOGADO_KEY))) {
    navegarParaLogin()
}

const route = {
    busca: `
        <h2>Busca de livros</h2>
        <input type="search" placeholder="Digite o livro que quer buscar....">
        <p>Nenhum livro encontrado</p>
    `,
    cadastro: `
        <h2>Cadastro de usuários</h2>
        <p>-</p>
    `,
    reserva: `
        <h2>Reserva de livros</h2>
        <p>-</p>
    `
}


function navegarParaLogin() {
    location.href = "./../index.html"
}

function sair() {
    localStorage.removeItem(USUARIO_LOGADO_KEY)
    navegarParaLogin()
}

function renderizarPagina() {
    const hash = location.hash.replace('#', '') || 'busca'
    app.innerHTML = route[hash] || `<h2>Página não encontrada :(</h2>`
}


window.addEventListener('hashchange', () => {
    // console.log('Mudou a hash!', location.hash)
    renderizarPagina()
})


renderizarPagina()