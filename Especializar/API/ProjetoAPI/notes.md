# Projego API

## Criar um localhost:3000

1. instalar npm

2. Iniciar o npm.

    - Comando: npm init -y
        (o -y informa resposta yes para todas as perguntas. Depois de intalado, pode-se abrir o arquivo package.json criado e alterar as informações pretendidas.)

3. instalar express

    - comando: npm i express

        Fazer no terminal do VSCode (bash). (achei melhor).
    
    - Antes de instalar, fechar os arquivos e pastas do projeto no VSCode para que o express possa ser inserido como dependência dentro do package.json.

4. Rpdar o node.js no terminal, dentro da pasta principal do projeto.

    - comando: node . (o ponto rodará o arquivo indicado no package.json como "main". O npm, por padrão, cria insere o index.js)

    - Caso se pretenda rodar outro arquivo js, diferente daquele especificado no "main" do package.json, deve-se especificar o nome.

5. Até aqui, o que se fez foi informar o navegador para "ouvir" a porta 3000. Ainda não há informação a ser ouvida.

