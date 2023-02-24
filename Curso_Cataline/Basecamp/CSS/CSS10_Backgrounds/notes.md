# Background

Nesta aula a estilização será direcionada diretamente ao <body>

Como background podemos utilizar uma imagem, cores sólidas ou em degrade.

Podemos também definir que a imagem ocupará toda o fundo, seja esticada ou seja por repetição (esta forma é o padrão do navegador)

Dica: site CSS gradient (cssgradient.io)

É possível acrescentar mais de um background, basta separar com vírgulas os locais ou os atributos, dependendo do que for o background.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CSS Background</title>
    <style>
        body {
            height: 100vh;
            background-repeat: no-repeat;
            background-position: 0% 50%;
            background-image: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg')

        }
    </style>
</head>

<body>
    
</body>

</html>
```
