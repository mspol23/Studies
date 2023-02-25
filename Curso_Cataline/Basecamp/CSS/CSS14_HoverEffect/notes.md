# Hover

Formatação que será aplicada ao elemento quando o mouse deslisar por cima.

Ex:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1:hover {
            color: white;
            background: black;
        }

        div {
            width: 200px;
            height: 200px;
            background: green;
        }

        div:hover {
            width: 200px;
            height: 200px;
            background: blue; 
            box-shadow: 10px 10px 20px black;
        }
    </style>

</head>
<body>
    <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, illum natus asperiores animi veritatis eum? Maiores aut illo, molestias cupiditate sunt libero similique explicabo sint culpa necessitatibus laboriosam quis inventore?
    </h1>
    <div></div>
    
</body>
</html>
```

