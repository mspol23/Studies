var text = 'Testando'

var count = text.length

console.log(count) // 8

var letterCount = text[0] // Esta expressão não é um método ou uma propriedade, mas apenas um recurso que nos permite acessara letra de uma posição na cadeia de strings que forma a palavra.

console.log(letterCount)

var replace = text.replace('a', '@') // .replace é um método que permite substituirmos caracteres. Recebe dois argumentos (já que é uma função com dois parâmetros definidos): a letra a ser retirada e a que a substituirá. NÃO ALTERA A PALAVRA ORIGINALMENTE DEFINIDA.

console.log (replace) // Test@ando

// Replace também funciona com palavras inteiras.

var wordReplace = text.replace('Testando','Experimentando')

console.log(wordReplace) // Experimentando

console.log(text) // Testando (não houve alteração na variável original)

var upperCase = text.toUpperCase() // .toUpperCase é um método, neste caso, sem parâmetros definidos.

console.log(upperCase) // TESTANDO

console.log (text) // .toUpperCase também não altera o valor original da variável.

var lowerCase = text.toLowerCase()
console.log(lowerCase) // testando

var trim = text.trim() // método que remove espaços no início e no fim de uma cadeia de strings.

var text1 = 'Testando 123!'

var split = text1.split(' ') // Método que transforma uma string em uma cadeia de strings, organizadas em um array. Este método tem parâmetro, que será o caractere identificador do ponto de quebra. No caso acima será o espaço (entre as aspas deve haver um caractere de espaço.). 

// OBS: O argumento definido é excluído do resultado.

console.log(split) // (2) ['Testando', '123!']

// Outro exemplo:

// No caso, queremos isolar o domínio de um email.

var email = 'meuemail@gmail.com'

var emailDomain = email.split('@')

console.log(emailDomain) // (2) ['meuemail', 'gmail.com']

console.log(emailDomain[1]) // gmail.com

// Split também não altera o valor da variável final.

