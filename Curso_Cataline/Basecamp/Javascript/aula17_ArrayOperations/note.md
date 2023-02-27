# Operações com Array.

## .lenth

Contar posições do array.

```js
var array = ['João', 'Oliver', 'Maria']

console.log(array.length)
```

O length de um array abre novas possibilidades de programação.

## .indexOf()
```js
var array = ['João', 'Oliver', 'Maria']

var newArray = array.indexOf('João')

console.log(newArray) // João está na primeira posição, portanto o valor será 0. 

// OBS: Se colocarmos um valor não contido no array, a resposta do métido indexOf() será -1. Portanto, para implementarmos uma condição fundada na hipótese de o array não conter o objeto buscado, deveremos ter esse valor (-1) em mente.
```

