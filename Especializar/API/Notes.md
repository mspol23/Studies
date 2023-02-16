# APIs

Permite a comunicação, a troca de informações, entre sistemas distintos. 

Ex: 

* Efetuar um pagamento em um site com informações de outro (Paypal, Samsung Pay, Pag Seguro...)
* Login em um site com dados de outro.

As comunicações entre os sistemas são intermediadas por APIs.

## JSON

É uma forma leve de organizar dados intercambiáveis entre sistemas, de fácil escrita e leitura para humanos e de simples preparação para a máquinas. Pode ser utilizado por diferentes linguagens. Então, seu objetivo principal é troca de informações e dados.

O arquivo JSON aceita string, números, arrays e objetos.

```json
{
    "nome": "Marcos",
    "cidade": "Rio de Janeiro",
    "Telefone": 999999909,
    "Livros": [
        "livro1",
        "livro2",
        "livro3",
        "livro4"
    ],
    "hobbies": {
        "esporte": "futebol",
        "entretenimento": {
            "filmes": {
                "streaming": [
                    "filme1",
                    "filme2",
                    "filme3"
                ],

                "cinema": [
                    "filmeA",
                    "filmeB",
                    "filmec"
                ]
            }
        }
    },
    "outros": [
        "estudante de desenvolvimento web"
    ] 
}   
```
## Requisições HTTP

- GET - fornece informações.
- POST - recebe informações que devem ou não ser publicadas.
- DELETE - API recebe identificadores de registros que devem ser apagados.
- PUT - API recebe informações para update de um ou mais registros.
- PUSH - API recebe informações para update de um registro.

### Programa Insomnia.

Será utilizado porque navegador só aceita requisições do tipo GET.

