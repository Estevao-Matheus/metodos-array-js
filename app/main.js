let livros = []

const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosAPI()

const elementoLivros = document.getElementById('livros');

async function getBuscarLivrosAPI () {
    const res = await fetch(endpointAPI);
    livros = await res.json()
    console.table(livros)
    exibirLivrosTela(livros)
}

function exibirLivrosTela (livros) {
    livros.forEach(element => {
        elementoLivros.innerHTML += `
         <div class="livro">
        <img class="livro__imagens" src="${element.imagem}" alt="${element.alt}" />
        <h2 class="livro__titulo">
         ${element.titulo}
        </h2>
        <p class="livro__descricao">${element.autor}</p>
        <p class="livro__preco" id="preco">R$${element.preco}</p>
        <div class="tags">
          <span class="tag">${element.categoria}</span>
        </div>
      </div>
        
        `
    });
}