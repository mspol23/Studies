# Asynchrony

## Callback

Antes de entender o conceito de Callback no JavaScript, primeiro precisamos entender que funções aceitam qualquer tipo de dado como argumento, então no JavaScript é possível passar qualquer tipo de dado em uma função.

function imprimirDado(dado) {
	console.log(dado)
}

imprimirDado(1) 
imprimirDado('texto') 
imprimirDado(true)
imprimirDado({ nome: 'João' })
imprimirDado([1, 2, 3])
function imprimirDado(dado) {
	console.log('outras tarefas')
	console.log(dado())
}

imprimirDado(function () {
	return 'Olá Mundo'
})
Callback (chamar de volta) é uma função que é passada como argumento de outra função e depois de algum tempo ela é chamada de volta.

Outro exemplo:

```js

function printData(data) {
    console.log('outros')
    console.log('teste')
    console.log(data())
}


printData(function () {
    return 'callback'
})

```
# setTimeout

Descrição
setTimeout() é uma função que recebe como argumento uma outra função e um tempo para ser executada.

```js

// setTimeout(function, delay)
setTimeout(function () {
	console.log('depois de 1s')
}, 1000)

```

A função de argumento do setTimeout é uma callback, ela vai executar depois de um certo tempo. No caso do exemplo acima, a função vai ser executada depois de 1000ms que é o mesmo que 1s.



## setTimeout

Construção:

```js 
setTimeout(function, delay)

// Ex:

const test = () => console.log('1 2 3 testando')

setTimeout(test, 1000)

```
A função é considerada uma callback, pois é registrada, armazenada e chamada novamente quando o tempo estipulado se esgota.

## callback and asynchrony

```js
const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'
https.get(API, res => {
    console.log(res.statusCode)
})
console.log('conectando API')
```
O JS registra a função https.get e segue em diante, enquanto esta é processada. Portanto, o console.log('conectando API') será executado antes. Isto é o assincronismo.

Se o sistema fosse síncrono, o console.log('conectando API') seria executado somente após a conclusão do https.get.

## Promise Intro

Promessas no JS.

Como criar, aguardar...

4 estágios do ciclo de vida de uma promise.

Seus métodos:
.then
.catch
.finally

O que é a fetch API do navegador e como utilizá-la.

Biblioteca axios.

Aprender como executar mais de uma promise ao mesmo tempo.

## Promise

Promessa de algo que irá acontecer no futuro.

Promessa, enquanto aguarda cumprimento, está pendente = pending.

Promessa cumprida = fulfilled.

Promessa rejeitada = rejected.

- Promisse é um objeto JS, com a promessa de que algo será realizado.

- É utilizado em operações assíncronas.

	* Por exemplo: Carregar um arquivo, seja um json ou uma fotografia.

	* Leituras dados de uma API.

### Promises possuem 4 estágios:

	* PENDING: Estado inicial, assim que o objeto da promessa é iniciado.

	* FULFILLED: A promessa foi concluída com sucesso.

	* REJECTED: A promessa foi rejeitdada, houve um erro.

	* SETTLED: 	Seja com sucesso ou com erro, a promessa foi finalmente concluída.

#### Promise em código.

```js

console.log('Pedido ao Uber.')
const promessa = new Promise((resolve, reject) => {

    if(true) {
        return resolve('O carro chegou')

        return resolve('Carro chegou!')
    }

    return reject('Pedido negado!')
    
})

console.log('aguardando')

promessa
    .then(success => console.log(success)) // Creio que neste caso variável 'result' absoreve o valor do resultado da função, seja o 'resolve' ou o 'reject'.
    .catch(tilt => console.log(tilt))
    .finally(() => console.log('Finalizada'))

// resolve e reject podem ser substituídos por qualquer variável, mas a boa prática recomenda o uso destas expressões porque fazem sentido.
```





