var app = document.querySelector('div')

// Lembrando que tudo no Javascript é um objeto, a variável acima passa a ser um objeto.

// Isso nos dá acesso às seguintes propriedades:

// .outerHTML - todo o HTML do elemento selecionado.
// .innerHTML - HTML interno.
// .innerText - todo o texto, sem tags.

console.log(app) // Imprime o elemento com as características do HTML.

console.log(app.outerHTML) // Imprime todo o elemento no console, mas com formato de string.

console.log(app.innerHTML) // Exibe em formato de string o que está dentro do elemento selecionado, excluído este. O innerHTML não incrementa o conteúdo, apenas o substitui pelo novo.

console.log(app.innerText) // Retorna apenas os textos dentro das tags filhas da selecionada. innerText insere um texto dentro da tag selecionada.

// Como todas as propriedades, estas poder receber valores.

