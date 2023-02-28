var array = ['João', 'Oliver', 'Maria']

var newArray = array.indexOf('João')

console.log(newArray) // João está na primeira posição, portanto o valor será 0. 

// OBS: Se colocarmos um valor não contido no array, a resposta do métido indexOf() será -1. Portanto, para implementarmos uma condição fundada na hipótese de o array não conter o objeto buscado, deveremos ter esse valor (-1) em mente. 

// .pop

var array1 = ['João', 'Oliver', 'Maria']

array1.pop() // Exclui o último elemento do vetor (array). 

console.log(array1) // Retorna o array sem 'Maria'.

console.log(array1.pop()) // quando executado dentro do console.log, o método .pop() exclui o último item do array e retorna seu valor. Neste caso, o nome de 'Oliver', pois 'Maria' Já havia sido excluída.

console.log(array1)

// .push

// Insere valores no array, na última posição.

var array2 = ['João', 'Oliver', 'Maria']

array2.push('John') // Insere 'John' após 'Maria'. O array passa a ter 4 elementos [0, 1, 2, 3].

console.log(array2)


// .splice(index, quantidade)

// Deleta um elemento da posição indicada (primeiro parâmetro) e quantos dos próximos elementos que passarem a ocupar aquele index serão apagados (segundo parâmetro).

var array3 = ['João', 'Oliver', 'Maria', 'Cleber', 'John']

array3.splice(0, 1) // Estes argumentos informam, respectivamente,   o index do elemento a ser excluído e quantos elementos que assumirem aquela posição também o serão. Neste caso, apenas 'João' será deletado.

console.log(array3)

// Se quisermos deletar um item do array, mas não sabemos a posição, podemos buscá-la com o .indexOf().

// Deletar 'Cleber'.

var index = array3.indexOf('Cleber')

array3.splice(index, 1)

console.log(array3)


