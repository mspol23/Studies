var age = 14

var result = ''

if (age >= 18) {
    result = 'Entre!'
} else {
    result = 'Entrada proibida!'
}

console.log(result)

// Forma compacta.

var age1 = 18

var result1 = age1 >= 18  ? 'Entre!' : 'Não entre!'
// A interrogação substitui o que seria um "if (true) e os dois pontos estão substituindo o 'else'" 

console.log(result1)

