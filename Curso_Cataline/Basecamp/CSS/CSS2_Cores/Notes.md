# CSS: Cores

Manipulando cores com rgb, que se baseia nas três cores primárias parar estruturar uma cor final.

rgb ( red 0 - 255, green 0 - 255, blue 0 - 255 )

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Cores</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=display-width, initial-scale=1"/>
        <style>
            div {
                width: 200px;
                height: 200px;
                background: rgb(100, 100, 200);
            }
        </style>
    </head>
    <body>
        
        <div></div>
    
    </body>

</html>
```

rgba permite a inclusão de um novo parâmetro: a transparência. 0 a 100%. A percentagem pode ser substituída por um valor float (real) de 0 a 1, p. ex., 0.3 (equivalente a 30%).

rgba(255, 255, 255, 50%)

Ex:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Cores</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=display-width, initial-scale=1"/>
        <style>
            div {
                width: 200px;
                height: 200px;
                background: rgba(100, 100, 200, 20%);
            }
        </style>
    </head>
    <body>
        
        <div></div>
    
    </body>

</html>
```

Sintaxe Hexadecimal (HEX), estabelecida pelo W3C parar simplificar a linha de comando.

color: #fff; (f representa a intensidade máxima, equivale a 255) 

O primeiro f é o red, o segundo, o green e o terceiro, o blue.

background: #000 (zero é o valor mínimo.) Neste caso, o resultado seria preto.

Ex: 

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Cores</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=display-width, initial-scale=1"/>
        <style>
            div {
                width: 200px;
                height: 200px;
                background: #ffddaa;
            }
        </style>
    </head>
    <body>
        
        <div></div>
    
    </body>

</html>
```

