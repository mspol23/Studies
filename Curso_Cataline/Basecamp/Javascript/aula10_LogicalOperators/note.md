# Logical Operators.

## and , or, not

### and (&&)

Muito utilizado, por ex, para verificar autenticação de login e senha.

As condições impostas deverão ser concomitantemente satisfeitas.

```js
var email = 'mspol23@gmail.com'
var password = '1234'

if (email === 'spol23@gmail.com' && password === '1234') {
    console.log('Autorizado')
} else {
   console.log( Error('Falha no login!') )
}
```

### or (||)

Operador alternativo.

```js
var age = 19
var gender = "v"

if (age >= 18 || gender === 'm') {
    console.log('Free to go!')
} else {
    console.log('Barrado!')
}
```

### not (!==)

```js
var sex = 'm'

if (sex !== 'm') {
    console.log('Entrada permitida.')
} else {
    console.log('Caia fora!')
}
```
A ! ante da variável funciona como uma negação do seu próprio valor. Faz um toggle do valor da variável.

Ex:

```js
var isActive = true

isActive = !isActive

console.log(isActive)

// Resposta: false
```






