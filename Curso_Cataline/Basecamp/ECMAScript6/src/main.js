// Método forEach()

// método que recebe uma função callback. Executa um loop, com aplicação do código em cada item do array.

{
    const numbers = [ 1, 2, 3, 4, 5 ]

    numbers.forEach(function (item, index) {
        console.log(item, index) // index é a posição no array.
    })
}

//código 2

{
    const numbers = [ 1, 2, 3, 4, 5 ]

    numbers.forEach(function (item) {
        
        item++
        
        console.log(item)
    })
}

// No código 2, fere-se um conceito da programação funcional, que consiste na estabilidade do código. Para atender este preceito, o caminho é a criação de uma nova array com o resultado do código 2. 
// Ex no código 3.

// Código 3

{
    const numbers = [ 1, 2, 3, 4, 5 ]
    
    const newNumbers = numbers.map(function (i) {
        return i + 1
    })
    console.log(newNumbers)
    console.log(numbers)

}

// Código 4

// A seguir o que se pretende é somar o itens dos arrays e colocar a resposta em um novo array.
// método .reduce

{
    const numbers = [ 1, 2, 3, 4, 5 ]

    const sum = numbers.reduce(function (total, next) {
        
        return total + next
        // total é o resultado da operação a cada rodada. Inicialmente é 0. Conforme os números vão sendo somados, este parâmetro vai aumentando.

        // next é o próximo elemento que será utilizado na operação.
    })

    console.log(sum)
    
}

// Código 5

// Próxima estrutura de array.

// .filter() retorna um resultado se o parâmetro da propriedade especificada (no caso abaixo é done) contiver um valor true. O resultado é organizado dentro de uma array. Caso queiramos um formato diferente, utilizaremos o .filter (mostrado a seguir)

{ 
    const toDo = [
        {
            text: 'lavar a louça', 
            done: true
        },
        {
            text: 'Apanhar o lixo', 
            done: true
        },
        {
            text: 'Dobrar as roupas', 
            done: true
        },
    ]

    const done = toDo.filter(function (i) {
        return i.done
    })

    console.log(done)
}

// Código 6

// .filter() - retorna um objeto com base nos parâmetros indicados.

{ 
    const toDo = [
        {
            text: 'lavar a louça', 
            done: true
        },
        {
            text: 'Apanhar o lixo', 
            done: true
        },
        {
            text: 'Dobrar as roupas', 
            done: true
        },
    ]

   const find = toDo.find( function (i) {
    return i.text === 'Dobrar as roupas'
   })
    console.log(find)
}

// Código 7

// .findIndex() - retorna o index do objeto do array. Como o array, neste caso, é uma estrutura complexa, o indexOf não atende esta necessidade.

{ 
    const toDo = [
        {
            text: 'lavar a louça', 
            done: false
        },
        {
            text: 'Apanhar o lixo', 
            done: true
        },
        {
            text: 'Dobrar as roupas', 
            done: true
        },
    ]

  const index = toDo.findIndex( function (i) {
    return i.text === 'Dobrar as roupas'
    
})

console.log(index)

}


// Código 8

// .some() - Verifica a existência de um valor na array. Retorna uma resposta do tipo boolean. O parâmetro i retorna os itens do array e o compara com o valor pretendido.

{ 
    const cars = [ 'Fusca', 'Civic', 'Hb20' ]

    const findFusca = cars.some( function (i) {
        return i === 'Fusca'
    })

    console.log(findFusca)
          
}


// Aula 2

// Arrow Functions

// Código 9

// Para transformar a function em arrow function, no caso abaixo, retiramos o termo function e inserimos os sinais = e > após o último parêntese que contém o parâmetro i.

// Quando houver apenas um parâmetro na função (no caso existe apenas o i) não haverá, na arrow function, a necessidade dos parênteses. O instrutor considera que os parênteses organiza melhor o código, além disso, quando não há parâmetro, os parênteses devem ser colocados vazios, seguido da 'seta'.

// Quando o código dentro do escopo da função for simples, com apenas uma linha de código, sem quebra, pode-se retirar as chaves, desde que tudo fique na mesma linha, sem a instrução 'return'. Isso se chama retorno implícito da função.

// Para inserir um objeto através de uma arrow function, deve-se acomodá-lo dentro de parênteses imediatamente antes das chaves.

{ 
    const toDo = [
        {
            text: 'lavar a louça', 
            done: true
        },
        {
            text: 'Apanhar o lixo', 
            done: true
        },
        {
            text: 'Dobrar as roupas', 
            done: true
        },
    ]

    const done = toDo.filter( (i) => {
        return i.done
    })

    //  Ooutras formas:

      /* const done = toDo.filter( (i) => {
        return i.done
      }) */

      /* const done = toDo.filter( i => {
        return i.done
      }) */

      /* const done = toDo.filter( i => i.done ) */

      console.log(done)
}

// As forma acima são chamadas funções anônimas. Para nominar um arrow function devemos atribuir um variável:

{
const functionName = () => 'Exemplo'

console.log(functionName())
}


// Aula 3

// Parâmetro Padrão.


