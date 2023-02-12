# Callback

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
