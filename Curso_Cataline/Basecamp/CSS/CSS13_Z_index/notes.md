# Z Index:

Determina a profundidade da caixa. Determina o plano.

No html, por padão, todos os elementos têm profundidade com valor 1.
Atenção: z-index não será 0, mas um valor negativo.

Para funcionar é necessário que haja a definição de uma posição (position), seja qual for.

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
            position: absolute;
            width: 200px;
            height: 200px;
            background: green;
            
        }
    </style>
</head>
<body>
    <div></div>
    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis quam corrupti eligendi! Possimus suscipit eius qui excepturi voluptate harum ea libero nam cumque dolorum? Accusantium enim quisquam recusandae saepe.</h1>
</body>
</html>
```


