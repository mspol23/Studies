# Hierarquia.

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
                background: red;
                background: blue;

                /*  Hierarquia indica que prevalece o comando executado por último, como mostrado acima. Se dermos dois comandos background no mesmo elemento, o último valor será considerado. */
            }
        </style>
    </head>
    <body>
        
        <div></div>
    
    </body>

</html>
```

A estilização feita diretamente na tag de html prevalecerá.

Ex.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Cores</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=display-width, initial-scale=1"/>
        
    </head>
    <body>
        
        <div style="background: yellow"></div>

        <!--
            Estilização diretamente na tag prevalecerá.
        -->

        <style>
            div {
                width: 200px;
                height: 200px;
                background: red;
                background: blue;

            }
        </style>
    
    </body>

</html>
```
!important

Ex:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Cores</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=display-width, initial-scale=1"/>
        
    </head>
    <body>
        
        <div style="background: yellow"></div>

        <style>
            div {
                width: 200px;
                height: 200px;
                background: red;
                background: blue !important;
            }

            /*
            O uso do recurso CSS !important prevalecerá sobre qualquer outra forma de sintaxe. É uma espécie de comando de força bruta.
            */

        </style>
    
    </body>

</html>
```
O recurso important pode ser utilizado mais de uma vez e, neste caso, o último prevalecerá.
