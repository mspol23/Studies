# Fonte

fonte-family: sans-serif (esse comando significa sem serifa)

O comando acima indica que não desejamos uma fonte que tenha acabamentos nas extremidades, como tem a Times News Roman.

sans-serif não é uma fonte ou família de fontes. É apenas a remoção de um atributo da fonte.

```html
<DOCTYPE html>

<html lang="en">

    <head>

        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=display-width, initial-scale=1"/>
        <title>Fonts CSS</title>

        <style>

            @font-face {
                font-family: jumper;
                src: url('./jumper_3/JumperPERSONALUSEONLY-Light.ttf');
            }

            h1 {
                font-family: jumper;
                font-style: italic;
                font-size: 50px;
                font-weight: bold;
            }
        </style>

    </head>

    <body>

        <h1>Título de teste</h1>

    </body>



</html>
```


