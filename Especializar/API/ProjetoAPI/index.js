const exrpess = require('express')
const app = exrpess()
app.listen('3000')

app.route('/').get( (req,res) => res.send('Helo! <a href="/sobre"> link </a>') )

app.route('/sobre').get( (req,res) => res.send('Helo! Sobre!') )