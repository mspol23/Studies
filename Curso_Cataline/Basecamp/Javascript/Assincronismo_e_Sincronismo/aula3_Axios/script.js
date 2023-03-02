var button = document.querySelector('button')

button.addEventListener('click', function () {
    axios.get('https://api.github.com/users')
    .then(function (i) { console.log( i.data ) })
    .catch(function (i) { console.log( i )})
    .finally( function () { console.log('Fim') })
})
