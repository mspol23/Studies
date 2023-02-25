# Transições

Suaviza a transição aplicada com o Hoover.

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
            transition-property: box-shadow;
            transition-duration: 1s;
            transition-timing-function: linear;
            transition-delay: ;
            /* shorthand
            transition: all (property) 3s (duration) linear (function) 3s (delay); */
        }

        div:hover {
            box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.659);
        }
    </style>
</head>
<body>
    <div></div>
    
</body>
</html>
```
