// Promise

// Cria-se uma variável e lhe atribui a promessa como valor.

// A promessa executará uma função como parâmetro, que pode ser anônima (e ficar dentro dos próprios parênteses da promessa) ou ser nominada e depois chamada dentro de seus parênteses.

// Essa função conterá dois parâmetros, uma para o caso da condição ser resolvida e outro para o caso de ser rejeitada.

// No exemplo abaixo, a função é anônima.

/* var didUbyTheProducts = new Promise(function ( resolve, reject ) {

}) */

// console.log (didUbyTheProducts) // Este console foi escrito antes dos parâmetros da Promise serem informados, portando ela aparecerá como 'pendente'.

// Seguindo: 

/* var didUbyTheProducts = new Promise(function ( resolve, reject ) {
    var products = ['Calça', 'Camisa', 'Meias', 'Cuecas']

    resolve(products)
})

console.log(didUbyTheProducts) */

// Resposta no console:

/* Promise {<fulfilled>: Array(4)}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: Array(4)
0: "Calça"
1: "Camisa"
2: "Meias"
3: "Cuecas"
length: 4 */

// Exemplo da resposta com o reject.

var didUbyTheProducts = new Promise(function ( resolve, reject ) {
    
    setTimeout(function () {
        resolve('funcionou')
    }, 3000) // Com o método setTimeout, após 3s a Promise será resolvida. Enquanto isso o código continuará sendo executado. 
})

console.log(didUbyTheProducts)

// .then

// Fica escutando o código e aguardando a resposta. Recebida a resposta do parâmetro 'resolve' ele executará a função informada.

didUbyTheProducts.then( function(products) {
    console.log(products) // O parâmetro foi nominado como products, mas poderia ter sido qualquer variável.
})

console.log('Furei fila!')
console.log('Furei fila!')

setTimeout( function () {
    console.log('Tentei furar, mas não deu!')
}, 4000) // Este comando aparecerá por último. Isso demonstra o assincronismo do JS.
    
console.log('Furei fila!')
console.log('Furei fila!')

console.log('Eu também furei!')

// O resultado da promessa resolvida (resolve) foi impresso depois de comandos posicionados abaixo dela.

/* Promise {<pending>}
script.js:50 Furei fila!
script.js:52 Eu também furei!
script.js:63 funcionou */

// Porque utilizar uma Promise e não uma if... else na construção do código acima??

// Resposta:
// Pode ser que a Promessa não seja imediatamente cumprida. Como não sabemos o tempo de execução e não queremos que o código fique parado, esperando, servimo-nos da Promise.

didUbyTheProducts.catch(function (erro) {
    console.log(erro)
})



