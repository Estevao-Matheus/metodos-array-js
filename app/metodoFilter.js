const botoes = document.querySelectorAll('.btn')

botoes.forEach( btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros () {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarDisponibilidade() : filtrarCategoria(categoria)
    exibirLivrosTela(livrosFiltrados)
    if(categoria == 'disponivel') {
        const valorTotal = calculaTotalLivrosDIsponiveis(livrosFiltrados)
        exibeValorDispioniveis(valorTotal)
    }
}

function filtrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibeValorDispioniveis (valorTotal) {
    elementoValorTotalDispionivel.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal.toFixed(2)}</span></p>
    </div>
    
    `
}