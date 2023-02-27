// for

/* for (contagem, condição, incremento) {

} */

for (var count = 0; count <= 10; count++) {
    console.log(count)
}

// Na internet é muito comum vermos estruturar como a acima com a variável 'i'. Apesar de não ser intuitiva, é muito utilizada.

// Cuidado com condições que geram loop infinito.

// while

var count1 = 0

while(count1 <= 10) {
    console.log(count1)
    count1++
}