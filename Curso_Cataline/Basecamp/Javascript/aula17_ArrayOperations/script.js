var array = ['João', 'Oliver', 'Maria']

var newArray = array.indexOf('João')

console.log(newArray) // João está na primeira posição, portanto o valor será 0. 

// OBS: Se colocarmos um valor não contido no array, a resposta do métido indexOf() será -1. Portanto, para implementarmos uma condição fundada na hipótese de o array não conter o objeto buscado, deveremos ter esse valor (-1) em mente.