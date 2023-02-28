# Operações com Objetos.

```js
var person = {
    name: 'John Doe',
    age: 30
}

// Inserindo uma propriedade com um valor.

person.weight = 70.5

console.log(person) // {name: 'John Doe', age: 30, weight: 70.5}

person.name = 'Glaucio' // Altera o nome.

console.log(person)

// Bloquear alterações em um objeto.

Object.freeze(person) // Objeto passa a ser readonly. Não se pode mais alterar, nem inserir novas propriedades.

person.name = 'Claudio' // Mudança não implementada. O objeto se manteve com as alterações feitas até o código Object.freeze().

console.log(person) 

// Mesclando objetos:

var person1 = {
    name: 'John Doe',
    age: 30
}

var person2 = {
    behavior: 'Calm'
}

// Mesclar person1 e person2.

var person3 = Object.assign(person1, person2)

console.log(person3) // {name: 'John Doe', age: 30, behavior: 'Calm'}
```
