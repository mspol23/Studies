# Outros seletores CSS

## ":first-of-type"

Seleciona a primeira tag do mesmo tipo.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            background: green;
            width: 200px;
            height: 200px;
            margin: 10px;
        }

        /* Selecionando a primeira div */

        div:first-of-type {
            background: blue;
        }

        div:last-of-type {
            background: black;
        }

        div:nth-child(2) {
            background: violet;
        }
    </style>
</head>
<body>
    <div></div>
    <div></div>
    <div></div>
</body>
</html>
```

Entretanto, esta forma (acima) de seleção não atende à boa prática, pois o código pode mudar e, por ex., mais uma div ser inserida, o que alteraria o resultado.

Podemos atribuir um id='' (com valor único) para selecionar o elemento pretendido.

```html
 <style>
        div {
            background: green;
            width: 200px;
            height: 200px;
            margin: 10px;
        }

        #verde {
            background: lightgreen;
        }

        /* A forma de seleção abaixo funciona da mesma maneira. */
        div#preto {
            background: black;
        }

        #azul {
            background: blue;
        }

    </style>
</head>
<body>
    <div id="verde"></div>
    <div id="preto"></div>
    <div id="azul"></div>
</body>
```

A forma mais adequada, entretanto, de selecionar elementos é através do uso de classes. Isso para evitar erros diante da possibilidade de um id ser duplicado, ocasionando problemas na programação.

Podemos colocar mais de uma classe por elementos e se quisermos adicionar a característica definida em CSS para uma classe, basta inserir na tag pretendida. Esta prática é chamada, como em JS, de reutilização de código, o que é visto como boa prática, pois diminui o tamanho do código.

```html
    <style>
        div {
            background: green;
            width: 200px;
            height: 200px;
            margin: 10px;
        }

        .box {
            background: lightskyblue;
        }

        .boxWithBorder {
            box-sizing: border-box;
            border: black 5px solid;
        }

    </style>
</head>
<body>
    <div class="box"></div>
    <div class="box boxWithBorder"></div>
    <div class="box"></div>
</body>
</html>
```

```html
<style>
        div {
            background: green;
            width: 200px;
            height: 200px;
            margin: 10px;
        }

        .box {
            background: lightskyblue;
        }

        .boxWithBorder {
            box-sizing: border-box;
            border: black 5px solid;
        }

        /* Para selecionar uma tag específica podemos unir suas classes até torná-la única. No caso, poderíamos selecionar pela classe única ".radiusBorder", mas é possível fazer da forma abaixo se houver necessidade */

        div.box.radiusBorder {
            border-radius: 30px;
        }

    </style>
</head>
<body>
    <div class="box radiusBorder"></div>
    <div class="box boxWithBorder"></div>
    <div class="box"></div>
</body>
</html>
```


