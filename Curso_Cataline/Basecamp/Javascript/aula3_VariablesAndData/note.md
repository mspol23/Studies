# Variáveis e Dados

Não podem conter espaços ou começar com números.

Também não pode ser iniciadas com letras maiúsculas.

De preferência à utilização de camelCase.

## Dados primitivos:

```js

var name = 'Yung Silva' // string.

var age = 23 // integer.

var weight = 66.5 // float.

var alive = true // boolean.

var food = null // null.

var time // undefined (sem valor atribuído).

```
## Variáveis compostas:

### Array.

```js
var variable = ['Marcos', 45, 90.5, false, null, ... ];

var fruits = ['Banana', 'Maçã', 'Melão', 'Uva', 'Pera ]
```

### Object.

Variável objeto.

```js
var person = {
    name: 'Marcos', // name, age, etc. são propriedades. Propriedades são separadas por vírgula.
    age: 45,
    height: 95.5,
    alive: true
}
```

### Console.

Imprime as instruções no console.

#### Outro exemplos de código:

```js
var person = {
    name: 'Marcos',
    age: 45,
    weight: 95.5,
    alive: true,
    car: true,
    property: false
}
// console.log (typeof(person.name))

var fruits = ['Banana', 'Maçã', 'Melão', 'Uva', 'Pera']

console.log(fruits[0])
```

## Tipagem dinâmica do Js.

Nas linguagens estáticas temos que informar o tipo do valor da propriedade. Ex: É necessário dizer que a propriedade name: é uma string. Isso não poderá ser alterado depois.

No Javascript, a tipagem é dinâmica. Uma variável ou uma propriedade podem ter seus valores alterados, inclusive para outros tipos.

```js
var vivo = 'Feliz'

vivo = 22

console.log(vivo)
// A resposta esperada é 22.
```

Podemos atribuir valores a variáveis que vem de outras variáveis.

Ex.
```js
ar name = "Marcos Oliveira"

var person = {
    name: name,
    age: 45,
    weight: 95.5,
    alive: true,
    car: true,
    property: false
}
console.log (person.name)

// Resposta esperada: 'Marcos Oliveira"
```

## Typeof.

Informa o tipo de valor atribuído à propriedade ou à variável. Se é uma string, number, boolean, etc.

```js
var person = {
    name: name,
    age: 45,
    weight: 95.5,
    alive: true,
    car: true,
    property: false
}
console.log (typeof person.name)
```



