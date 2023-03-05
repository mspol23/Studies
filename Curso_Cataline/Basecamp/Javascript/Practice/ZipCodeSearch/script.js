var inputTag = document.querySelector('form input')
var buttonTag = document.querySelector('form button')
var parentTag = document.querySelector('main form div')

// 'Escutar o evento da tag button.

buttonTag.addEventListener('click', findZip)

function findZip(prevent) {

// Previne comportamento padrão da tag button no Chrome.
 prevent.preventDefault()

 var trimZipInput = inputTag.value

 trimZipInput = trimZipInput.replace(' ', '')
 trimZipInput = trimZipInput.replace('  ', '')
 trimZipInput = trimZipInput.replace('.', '')
 trimZipInput = trimZipInput.replace('-', '')
 trimZipInput = trimZipInput.trim()

 function pTagInsert (text) {
   
    var pTag = document.createElement('p')
    var pTagText = document.createTextNode(text)
    
    parentTag.appendChild(pTag)
    pTag.appendChild(pTagText)
 }
 
axios.get('https://viacep.com.br/ws/' + trimZipInput + '/json/')
    .then(function (response) {

        if (response.data.erro) {
            throw new Error('Error!')
        }
        
        parentTag.innerHTML = ''
             
        pTagInsert(response.data.logradouro)
        pTagInsert(response.data.bairro)
        pTagInsert(response.data.localidade + '/' + response.data.uf)
    
    })

    .catch(function (error) {
        console.log(error)
        parentTag.innerHTML = ''
        pTagInsert('Valor inválido!')
    })
 
}

