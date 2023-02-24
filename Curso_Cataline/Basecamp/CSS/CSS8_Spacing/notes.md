# Espaçamento

## padding

## margin

Ambas aceitam shorthand com os seguintes valores, com a seguinte ordem: top, right, bottom, left (sentido horário, começando pelas "12h" - o topo.)

margin: 0 0 0 0;
padding: 0 0 0 0;

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>CSS Espaçamento</title>
        <style>
            div {
                width: 300px;
                background: green;

                margin: 10px 0 0 0;
                padding: 10px 20px;
            }
            p {
                width: 300px;
                background: green;
                margin: 0;
            }
        </style>
    </head>

    <body>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum perferendis recusandae quae ratione. Minus reprehenderit nobis magnam earum tenetur? Illum cum ab sed, laborum iste culpa consectetur quia minus distinctio.
        </p>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quo in facilis, esse itaque cum! Porro ipsum sapiente nesciunt consectetur autem aut, consequatur cupiditate modi, laudantium, molestias incidunt nemo quaerat.
        </div>
    </body>

</html>
```

