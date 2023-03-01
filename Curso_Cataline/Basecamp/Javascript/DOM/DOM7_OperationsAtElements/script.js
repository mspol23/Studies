var app = document.querySelector('.div')

// app.innerHTML = '<a href="http://google.com">Google</a>' // O link foi devidamente adicionado ao código, mas todo o conteúdo que nela estava foi substituído por esta linha. Este comportamento não é satisfatório.

// Inicialmente utilizaremos o método .createElement('')

var newLink = document.createElement('a') //Cria uma tag <a></a>, vazia.

// newLink.href = "http://google.com" // insere um elemento href="" na tag newLink. Entretanto, faremos deo outra maneira.

// Utilizaremos o .setAttribute

newLink.setAttribute('href', 'http://google.com') // Neste método informamos primeiramente o atributo que incluiremos na tag e depois seu valor. Caso queiramos modificar este elemento href, podemos recorrer à forma mostrada acima:
// newLink.href = 'http://google.com'

// Agora, criaremos um texto para a tag.

var textLink = document.createTextNode('Visite o Google!') // Método para criar um texto simples, que depois será vinculado a uma tag.

// Para informar que o texto criado ficara dentro da tag criada - <a></a> - utilizaremos o código a seguir.

newLink.appendChild(textLink)

// A nova tag foi criada e montada, mas ainda não aparece no código, pois falta informar aonde queremos inseri-la no html. Para isso utilizaremos novamente o appendChild.

app.appendChild(newLink) // tag newLink agora está vinculada ao html.

// A seguinte tag foi criada dentro da tag div atribuída á variável app.
// <a href="http://google.com">Visite o Google!</a>

// Como excluir um elemento.

// Primeiramente devemos selecioná-lo.

var deleteTag = document.querySelector('div p')
// var deleteTag2 = document.querySelector('p')

app.removeChild(deleteTag) // Deletou a primeira tag <p></p>