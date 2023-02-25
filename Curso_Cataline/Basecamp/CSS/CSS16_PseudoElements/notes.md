# Pseudo Elements

Cria um elemento sem alterar o html.

códigos:

:before

:after

Todo pseudo-element precisa ter um atributo "content: '(:';"

Como é um elemento criado no CSS, não é selecionável.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1{
            position: relative;
            width: max-content; /* Propriedade define que a largura será o conteúdo. */
        }

        h1:before {
            content: '';
            width: 100%;
            height: 5px;
            background: green;
            position: absolute; /* Atributo essencial em caso de elemento em outra box */
            bottom: 0;
            left: 0;
            /* Neste caso também é necessário definir uma posição (position) ao elemento pai, que neste caso é o próprio elemento ao qual o pseudo-elemento está sendo aplicado: h1. */
                       
        }

        /* h1:after {
            aqui poderíamos definir outros comandos. Cada elemento html pode ter dois pseudo-elementos simultaneamente.
        } */

        /* Nos casos abaixo (h2), não há necessidade de definir o elemento html como "position: relative";. O exemplo também demonstra a coexistência de pseudo-elementos before e after. */

        h2::before {
            content: '(:';
        }

        h2::after {
            content: ':)';
        }

    </style>
</head>
<body>
    <h1>Título</h1>
    <h2>Subtítulo</h2>
</body>
</html>
```


