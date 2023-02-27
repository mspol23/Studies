var isActive = false
var message = ''

if (isActive) {
    console.log('Atividade')
} else {
    console.log('Inativo')
}

// Semáforo

var trafficLight = 'red'


if (trafficLight == 'green') {
    console.log('Siga')
} else if (trafficLight == 'yellow') {
    console.log('Atenção')
} else if (trafficLight == 'red') {
    console.log('Stop')
} else {
    console.log(Error('Insira uma cor válida.'))
}

var lightTraffic = 'fdfs'
var answer = ''

switch (lightTraffic) {
    case 'green':
        answer = 'Siga'
        break;
    
    case 'red':
        answer = 'Pare'
        break;

    case 'yellow':
        answer = 'Atenção'
        break;
    
    default:
        answer = Error('Valor inválido!')
}

console.log(answer)