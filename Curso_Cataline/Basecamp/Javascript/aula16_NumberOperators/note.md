# Operações com Números (Integer and Float)

## Método .toString()

Converte número em string

```js
var number = 10.3

var newValue = number.toString() // Converte um valor numérico em string. É um método, portanto é uma função dentro de um objeto.

console.log(newValue)

console.log(number)
```

## Math.

Math é um recurso do próprio JS, com métodos próprios (seria um objeto?)

### Math.trunc()

Arredonda um número float para baixo.

```js
var number = 10.3

var newValue = Math.trunc(number)

console.log(newValue) // 10

console.log(number) // 10.3 // Não altera o valor da variável number.
```

### Math.ceil()

Arredoda o número float para cima. Similar ao trunc, mas arredonda para cima.

```js
var number = 10.3

var newValue = Math.ceil(number)

console.log(newValue) // 11

console.log(number) // 10.3 (Não altera o valor da variável number.)
```

### Math.round()

Arredoda o número float para o valor inteiro mais próximo.

```js
var number = 10.3

var newValue = Math.round(number)

console.log(newValue) // 10

console.log(number) // 10.3 // Não altera o valor da variável number.
```


