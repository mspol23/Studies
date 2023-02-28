// Manipulação de Eventos

// Os eventos podem ser inseridos diretamente no códico html, ma essa não é a boa prática.

var button = document.querySelector('.buttonSend') // Chama o elemento html no qual será colocado o gatilho.
var input = document.querySelector('.inputForm')

/* 
button.addEventListener('click', function () {
alert(input.value) 
*/  // Informa que o evento disparador será um clique (neste caso sem o prefixo 'on'). O segundo parâmetro será um função anônima. Podemos utilizar uma função nominada, construída fora do parêntese, para posteriormente ser chamada como segundo parâmetro do addEventListener. Esta função, entretanto, não deverá ser seguida pelos parênteses vazios, pois eles informam que a execução deve ser imediata, sem aguardar o evento disparador

// Ficaria assim:

function writeAge() {
    alert('Sua idade é: ' + input.value)
}

button.addEventListener('click', writeAge)




