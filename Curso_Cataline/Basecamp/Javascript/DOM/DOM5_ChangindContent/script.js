var bodyStyle = document.querySelector('body')

var divStyle = document.querySelector('.div')

// A variável acima transforma o body em um objeto com atributos que podem ser modificados. Assim, podemos manipular o estilo com o comando abaixo. As propriedades são semelhantes às do CSS, com a diferença de que agora usar-se-á o camel case no lugar do traço.Ex.: ao invés de background-color, escreveremos backgroundColor.

bodyStyle.style.background = '#000'

divStyle.style.width = '200px'
divStyle.style.height = '200px'
divStyle.style.background = '#0f0'


