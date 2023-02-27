# Escopo da Função.

Tudo inserido entre chaves.

Escopos definidos em funções são enxergados apenas dentro de seu escopo (escopo local). O escopo global

```js
// Escopo global

function viewCar() {
    var carType = 'BMW'
    console.log(carType)
    
    //Escopo da função.
}

viewCar()

console.log(carType)
//Resposta: carType not defined.
```
Entretanto, variáveis definidas no escopo global são enxergadas no escopo local, ao contrário do que acontece no sentido inverso.

```js
var globalCar = 'Monza'

function viewCar() {
    var carType = 'BMW'
    console.log(carType) // BMW
    console.log(globalCar) // Monza

}

viewCar()

console.log(globalCar) // Monza
console.log(carType) // Erro
```
ATENÇÃO!

Quando criamos um variável, ainda que dentro do escopo de uma função, ou qualquer outro, sem o comando var, let ou const, ela PODE ser enxergada fora no escopo global.

```js
var globalCar = 'Monza'

function viewCar() {
    carType = 'BMW'
    console.log(carType) // BMW
    console.log(globalCar) // Monza

}

viewCar()

console.log(globalCar) // Monza
console.log(carType) // BMW (sem erro de referência.)
```
A situação acima é considerara um erro, porque pode fazer com que um nome de variável seja utilizado duas vezes, causando eventuais erros no código.

Uma prática é escrever no início de todo o código um comando:
```js
'use strict' // não testei.
```
Este comando, aparentemente, faz com que toda variável definida dentro do escopo, ainda que sem o prefixo, não seja enxergada fora dele.





