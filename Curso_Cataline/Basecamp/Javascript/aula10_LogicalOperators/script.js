var email = 'mspol23@gmail.com'
var password = '1234'

if (email === 'spol23@gmail.com' && password === '1234') {
    console.log('Autorizado')
} else {
   console.log( Error('Falha no login!') )
}

var age = 19
var gender = "v"

if (age >= 18 || gender === 'm') {
    console.log('Free to go!')
} else {
    console.log('Barrado!')
}

var sex = 'm'

if (sex !== 'm') {
    console.log('Entrada permitida.')
} else {
    console.log('Caia fora!')
}

var isActive = true

isActive = !isActive

console.log(isActive)



