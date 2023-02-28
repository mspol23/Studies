# Manipulação de Eventos.

Os eventos podem ser inseridos diretamente no códico html, ma essa não é a boa prática.

```html
<button onclick="">Enviar<button>
```

Acima, como exemplo, a função onclick="" como atributo da tag. De acordo com ela, quando houver um clique no botão ocorrerá um evento determinado, puxado do JS.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="say()"></button>
   <script type="text/javascript" src="./script.js"></script>
</body>
</html>
```

```js
// Manipulação de Eventos

// Os eventos podem ser inseridos diretamente no códico html, ma essa não é a boa prática.

function say() {
    alert('Testando')
}
```

A melhor prática:








