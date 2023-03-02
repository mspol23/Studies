// Ajax.

// Requisição ajax: Permite que uma página carregue dados novos sem a necessidade de recarregar toda a página.

// Construiremos um código que retornará uma lista de usuários informados em uma api do Gitgub (arquivo json).

var button = document.querySelector('button')

console.log(button)

button.addEventListener('click', function () {
    var xhr = new XMLHttpRequest()
    
    xhr.open('GET', 'https://api.github.com/users') // abre uma requisição do conteúdo da url
    xhr.send() // caso utilizássemos o método POST para incluir um novo usuário no arquivo json, p. ex., o .send conteria o valor a ser inserido, mas nesse caso, como o método utilizado é GET (apenas para obter) ficará vazia, sem parâmetro.

    // O console nada retorna, mas na aba Network enxergamos a nossa requisição com o nome 'users'. Ao clicarmos em users, conseguimos ver informações mais específicas e na aba 'Resposta' está a resposta da nossa requisição.

    // O comando abaixo pega a resposta da requisição.

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4) {
            // console.log(xhr.responseText) // A resposta https é mostrada como texto no console. Precisamos transformá-la em json.

            console.log(JSON.parse(xhr.responseText)) // A resposta vem em formato de array, no qual cada usuário é um objeto.

            // A seguir, a lista será armazenada em uma variável para então podermos acessar seus atributos.

            var data = JSON.parse(xhr.responseText)

            console.log(data[0].login) // Retornará o login do primeiro usuário da resposta.

            
        }
    }
})



