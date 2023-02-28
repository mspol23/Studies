// Objeto Global

// window (elemento global da DOM)

//OBS.: Este é com letra minúscula. Com letra maiúscula é o construtor da DOM, que será visto)

// Propriedades e métodos da funcionalidade 'window'.

window.alert('Qualquer texto!') // Exibe um popup com uma mensagem na tela.

// OBS.: Todos os comandos mostrados poderiam ser utilizados sem o 'window', pois o sistema entenderia da mesma forma.

console.log(window.innerHeight) // Exibe a altura da página. O valor sofre modificação conforme movimentamos o tamanho da tela do navegador.

console.log(window.innerWidth) // Exibe a largura da página. O valor sofre modificação conforme movimentamos o tamanho da tela do navegador.

// Outras propriedades:

// location.host e .hostname // Exibe o nome do host, caso esteja definido.

// location.hash

// location.href // url da página.

// Alterando o .href
window.location.href = 'http://google.com'

// location.pathname // caminho da página. Na prática, excluir o https://

// location.protocol // Neste caso: "file", pois está em um arquivo local do computador.




