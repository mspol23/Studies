# Arithmetic Operators

Soma
Subtração
Divisão
Multiplicação

```js
// Obs: Podemos declarar diversas variáveis na mesma linha:

var a = 1, b = 2, c = 3

// Entretanto, a melhor prática seria da seguinte forma.

var x = 10;
var y = 3

var result = x + y

console.log(result)
```

## Operadores Unários e Binários.

Binários são os que vimos até agora.

Unários correspondem à aplicação dos operadores

```js
var x = 1
x++
// Com o operador unário acima, o x passará a valer 2.

//Ex.:

var x = 10;
var y = 3

var result = x / y
var result1 = x % y // Retorna o resto da divisão.
var result2 = x * y
var result3 = x + y
var result4 = x - y
var result5 = 20 + 5 * 2

console.log(result)
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)

/* A seguinte ordem é respeitada quando montamos uma expressão:

1. Multiplicação
2. Divisão
3. Soma
4. Subtração

() Tudo o que está dentro dos parênteses é priorizado.

*/

var z = 1

z++

console.log(z)

z--

console.log(z)

// Se o operador for colocado dentro do console.log, após a variável, o valor retornado será sem acréscimo. Isso não significa que não funcionou, mas que a operação foi realizada depois. Portanto, a próxima vez que ela for chamada, o valor será acrescido

var h = 5
console.log(h++) // A resposta será 5.
console.log(h) // A resposta será 6.

// para termos a resposta já dentro do primeiro console.log, devemos colocar o operador unário antes da variável.

var j = 5

console.log(++j) // Resultado será 6.
