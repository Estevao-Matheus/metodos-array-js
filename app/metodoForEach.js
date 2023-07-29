const elementoLivros = document.getElementById('livros');
const elementoValorTotalDispionivel = document.getElementById('valor_total_livros_disponiveis')

function exibirLivrosTela (livros) {
    elementoValorTotalDispionivel.innerHTML = ''
    elementoLivros.innerHTML = ''
    livros.forEach(element => {
        let disponibilidade = element.quantidade > 0 ? 'livro_imagens' : 'livro_imagens indisponivel'
        elementoLivros.innerHTML += `
         <div class="livro">
        <img class="${disponibilidade}" src="${element.imagem}" alt="${element.alt}" />
        <h2 class="livro__titulo">
         ${element.titulo}
        </h2>
        <p class="livro__descricao">${element.autor}</p>
        <p class="livro__preco" id="preco">R$${element.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${element.categoria}</span>
        </div>
      </div>
        
        `
    });
}
