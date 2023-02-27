function action() {
    const x = "testando"
    console.log(x)
    
}

action()

function action2() {
    return 100
}
let y = 200

console.log(action2() + y)

function sum(a, b) {
 console.log( a + b )
}

sum(5, 5)

// Nomenclatura:
// "a" e "b" , quando são declarados dentro dos parênteses na criação da função, são chamados PARÂMETROS.  Quando, entretanto, chamamos a função e definimos valores, p. ex. (5, 5), estes são chamados de ARGUMENTOS, que serão colocados no lugar do parâmetro.

// Parâmetros dentro do escopo de uma função, são reconhecidos apenas dentro delas.