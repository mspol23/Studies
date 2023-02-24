# Tipos de Exibição

## Propriedade: Display

* inline - exibe um elemento embutido. Qualquer propriedade de altura e largura não terá efeito.

Ex:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Exhibition Types </title>
    <style>
       h1 {
        display: inline;
        width: 400px;
        height: 400px; 
        
        /* No exemplo acima, com o display inline, width e height não surtirão efeito algum. */
       
       } 
    </style>
</head>
<body>
    <h1>HTML</h1>
    <h1>CSS</h1>
</body>
</html>

```

* block - Exibe um elemento como bloco, que ocupa toda a linha. O elemento seguinte será embaixo. Haverá um empilhamento.

Ex: A tag <span> é nativamente inline. Caso pretendamos utilizá-la com efeito block, devemos utilizar o display: block;.

>>> O display block aceita manipulação de altura e largura.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Exhibition Types </title>
    <style>
       span {
        font-size: 30px;
        background: green;
        display: block;

        /* Neste caso, os elementos, mesmo com a tag <span>, serão empilhados. */


       } 
    </style>
</head>
<body>
    <span>HTML</span>
    <span>CSS</span>
</body>
</html>
```

* inline-block - Os elementos ficam em linha, mas as propriedades de altura (height) e largura (width) funcionam.

> Observa-se um espaço inserido entre os blocos pelo próprio user agent (navegador). Vi na internet alguns artifícios para resolver esse atributo imposto, como indicar margin: -4px;, por exemplo.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Exhibition Types </title>
    <style>
        * {
            margin:0;
        }
       h1 {
        
        font-size: 30px;
        background: green;
        display: inline-block;
        height: 100px;
        width: 100px;
        
       } 
    </style>
</head>
<body>
    <h1>HTML</h1>
    <h1>CSS</h1>
</body>
</html>
```

* none - exclui o elemento. Nada é renderizado em tela, apesar de existir no html.

>>> EXISTEM OUTROS VALORES QUE O ATRIBUTO DISPLAY: PODE RECEBER, COMO 'FLEX', 'GRID' ETC., MAS SERÃO TRATADOS ADIANTE.



