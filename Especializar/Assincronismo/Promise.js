
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