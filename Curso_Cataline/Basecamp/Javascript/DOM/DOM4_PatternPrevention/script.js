
var button = document.querySelector('.buttonSend') 

var input = document.querySelector('.inputForm')

var linkSobre = document.querySelector('.link')

/* function writeAge(event) {
    event.preventDefault() // O uso deste método altera para true esta funcionalidade e,com isso, previne o recarregamento da página após o clique do botão.
    console.log(event)
    console.log('Sua idade é: ' + input.value)
} */

//button.addEventListener('click', writeAge)

function link(i) {
    i.preventDefault()
    console.log(i)
}

linkSobre.addEventListener('click',link) 

function inputValue(i) {
    i.preventDefault()
    console.log(i)
}

button.addEventListener('click', inputValue)




