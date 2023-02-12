# HTTP

HyperText Transfer Protocol

Conjunto de regras para transferência de hipertextos.

## Visão Geral

* Permite troca de informações e dados na internet.

* Uma troca de mensagens.

* HTML, CSS, Scripts, Imagens, Vídeo.

* Uma chamada para cada um desses recursos.

### Descrição

Primeiro vamos entender qual o significado da sigla HTTP, que é Hypertext Transfer Protocol, em português Protocolo de Transferência de Hipertexto que é o conjunto de regras para a comunicação por meio de Hipertexto, um tipo de texto que pode carregar diferentes dados. O protocolo HTTP é usado todos os dias para acessar sites pela internet, pois é ele que permite a troca de dados na web, entre esses dados estão códigos HTML e CSS, Scripts. imagens e vídeos, entre muitos outros, e para cada um desses recursos executa uma chamada.

## Visualizando a comunicação

No protocolo HTTP tudo funciona com pedidos e respostas, que são chamados em inglês como Request e Response, mandando mensagens nos dois casos. No caso das mensagens de pedidos, você precisa de um verbo HTTP, que chamamos de método, que vai definiir o tipo de pedido que está sendo feito, por exemplo o método GET, vindo do inglês para "pegar", pega um recurso, como um URL para algum local da internet, ou o método POST, que serve para criar um recurso. Depois do pedido, a resposta traz um Status Code do servidor, que é um código sobre o estado do seu pedido, entre esses códigos, estão 200, onde tudo deu certo e sua página foi enviada, 404, onde o servidor não conseguiu encontrar o pedido, 301, que é um redirecionamento para outro local, entre outros além do Status Code, o servidor pode mandar um header e um body. Existem coisas que podem estar tanto na Request quanto na Response, que são o header e o body, os Headers são campos informativos, e o body contém conteúdo, podendo ser em forma de HTML ou JSON.

### Visualizando com DevTools

Nesta aula vamos aprender um pouco mais sobre HTTP usando a ferramenta DevTools, mais especificamente a aba "Network", inglês para "Rede". Com a aba aberta, podemos entrar em um site, por exemplo o Google, e iremos ver diversas informações aparecendo, se clicarmos na primeira dessas informações podemos ver algumas das informações sobre o pedido e a resposta. Também pode-se ver, que o navegador faz um pedido para cada link, midia, entre outros, e cada pedido tem sua resposta.

#### Ferramenta Curl

Já existe no Git Bash.

comandos:

> man curl 

Acessa o manual do aplicativo.

> curl https://google.com

resposta> $ curl https://google.com
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:--100   220  100   220    0     0    565      0 --:--:-- --:--:-- --:--:--   597<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREF="https://www.google.com/">here</A>.
</BODY></HTML>

Verifica-se que pegamos o body.

Para pegar headers seria:

comando> curl -i https://google.com

Resposta> location: https://www.google.com/
content-type: text/html; charset=UTF-8
date: Thu, 09 Feb 2023 18:55:09 GMT
expires: Sat, 11 Mar 2023 18:55:09 GMT
cache-control: public, max-age=2592000
server: gws
content-length: 220
x-xss-protection: 0
x-frame-options: SAMEORIGIN
alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000

<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREF="https://www.google.com/">here</A>.
</BODY></HTML>

cmd> curl -v https://google.com

diversar requisições e respostas
"<" requisições.
">" respostas.
"*" informações sobre conexão.

### Cliente / client


Nessa aula falaremos do Cliente, que na maioria das vezes é o Browser, ou no nosso caso, também pode ser o cURL. O Cliente é a entidade que dá inicio à toda comunicação com um pedido, fora em algumas poucas exceções. Esses pedidos são feitos através de ações, que usam os métodos do HTTP, como GET, POST, PUT e DELETE, que vamos ver com mais detalhes em uma próxima aula.

### Servidor / Server

Nessa aula nós falaremos do Servidor, que é uma máquina em algum lugar do mundo preparada para lidar com as requisições do cliente e mandar uma reposta. A resposta sempre tem um Status Code, e pode ter headers e body.

### Proxies

Nesta aula vamos falar sobre Proxies, que são coisas que ficam entre o Servidor e o Cliente, como por exemplo o roteador que está servindo internet para você agora. O Proxy pode ter diversas funções, como cache, para armazenar algumas informações e acelerar o uso. filtro, para impedir o acesso de alguns sites para um antivirus ou um controle parental, entre outros.

### Resource

Para entendermos como como chegar a um endereço, precisamos entender primeiramente como montar um endereço, para isso usamos o URI, sigla para Uniform Resource Identifier, Identificador de Recurso Uniforme em português, que serve para identificar um recurso por seu nome ou sua localização.

URI
  conceito
    Uniform Resourcer Identifier
      Identificar um Recurso
      Nome ou Localização
      Exemplo
        Você é uma Recurso
        Seu nome
        Sua Localização
  Resource
    O alvo do pedido
    Qualquer ciosa identificável / Entidade.
      Digital
        Email
          mailto:email@domínio.com
      Abstrata
        Sessão
        Autenticação
      Física
      Se podemos identificar, nomear, endereçar ou manipular, estamos falando de um recurso.
  Locator
    URL
      Uniform Resource Locator
      Componentes
        Obrigatórios
          Protocolo
          Domínio
            obs: Pode ser um nome ou um número de IP.
        Opcionais
          Subdomínio (www) 
            Obs: alguns locais precisam do subdomínio para acessar o recurso.
          Path (/blog)
            Opcional para acessar o domínio, mas obrigatório para acessar o recurso "blog", por exemplo.
          Parâmetros (?v=vpYct2npKD8)
            opcional para acessar o domínio, mas necessário para atingir o recurso para onde ele direcina. Neste caso, assistir um vídeo.
          Porta (:3333)
            É um local dentro do servidor que pode ser alcançado. Pode estar fechada e isso impedirá que se chegue ao recurso.
          Âncora 
            Representa uma porção da página para onde se vai. P. ex. index.html#algumlugar. A ancora seria esta última parte.
      Exemplos
        https://www.rocketseat.com.br/blog
        https://www.youtube.com/watch?v=vpYct2npKD8
        http://127.0.0.1:3333/index.html#algumlugar
  Name
    URN (Uniform Resource Name)
      Pode-se encontrar um local pelo nome, quando não se sabe o endereço.
      Exemplos:
        urn:isbn:0451450523
          O isbn é a identificação de um livro em algum lugar desconhecido por nós.
        urn:oasis:names:specification:docbook:dtd:xml:4.1.2

- Toda URL é uma URI, mas nem toda URI é uma URL, poir aquela também pode ser Name (um nome).

https - é protocolo
rocketseat.com.br - é o domínio

Ambos são componentes obrigatórios do localizador.

Domínio != de URL - o primeiro é, por exemplo, rocketseat.com.br. URL é todo o caminho: https://www.rocketseat.com.br/blog

https, quando não tem porta especificada, adota a 443. 

http, quando não tem porta especificadad, adota a 80.

### HTTP Messages

HTTP 1.1 - Mais legível e textual. Mais antiga e de fácil visualização.

HTTP 2 - Mais recente. Estrutura binária. Boa parar otimizações e compressões. Mascara o texto, mas o funcionamento é o mesmo da 1.1.

### Mensagens de Request e Response.

Request line: deve possuir um pedido, um protocol version ou um URI.

Ex.

Quando escrevemos um URI https://www.google.com (que neste caso é uma URL, que é composta por https:// [protocolo], www [subdomínio], google.com [domínio]).

Após o domínio há uma barra que, se não colocada, permanece oculta.

Response - Para termos uma resposta completa do servidor, esta deve conter:

    Protocol Version
    Status Code
    Headers
    Status message

Uma forma de visualizar Requests e Resonses é utilizando o Curl com os comandos:

curl -v <url>
curl -1 <url>

## Métodos (Methods)

HTTP methods - Implementação de funcionalidades que o client deseja operar. P. ex., quando ser coloca uma url, está utilizando o método GET, também chamados de verbos HTTP.

Atenção, porque alguns verbos não tem formado de verbos.

Cada método possui sua própria semântica, seu significado.

Podem possuir as seguintes características:

#### Seguro ou idempotentes.

##### O método seguro não altera o estado do servidor. A página é somente leitura e não pode ser modificada.

Cliente não solicita alterações.

Não há carga extra para o servidor.

O é responsável por manter o método seguro.

Quais são os métodos?

O GET, o HEAD e o OPTIONS (estes dois últimos veremos mais tarde.)

Outra característica:

##### Idempotentes:

Ao executar um método, a resposta deverá ser sempre a mesma.

Quem são idempotentes? Todos os Seguros são (ou deveriam ser). Além do PUT e do DELETE, que não são seguros. PUT serve para alterar algo e DELETE para apagar. Este dois alteram o servidor.

No idempotente o Status code pode ser diferente.

O Servidor tem a responsabilidade de retornar dados da mesma maneira.

Essa especificação não é garantia de que todos os servidores irão aplicar o conceito corretamente.

Quadro comparativo:

HTTP METHOD     IDEMPOTENCE   SAFETY
  GET               Y           Y
  HEAD              Y           Y
  PUT               Y           N
  DELETE            Y           N
  POST              N           N
  PATCH             N           N

## JSON Server

### Instalando.

Buscado no Githit

githun.com/typicode/json-server

Necessita do NodeJs instalado. Entretanto pode ser utilizado online.

Comando de intalação:

npm install -g jason-server

-g significa que será instalado de maneira global na máquina.

## Optoins

Serve para dar informações sobre a disponibilidade dos métodos da requisição.

P ex.: Se acesso o index.html com o options, quero saber quais métodos estão disponíveis.

Na prática:

Com o json-server rodando -> executo a seguinte linha: 

curl -x OPTIONS http://localhost:3000/posts

Entretanto não veio resposta, porque não há um corpo na resposta, nem no pedido.

curl -x OPTIONS http://localhost:3000/posts -i

Agora, acrescentando o -i, recebemos o cabeçalho como resposta. Onde poderão ser vistos os métodos autorizados (vide linha 281).

mspol@LAPTOP-PTP9JU7N MINGW64 ~/OneDrive/Documentos/Curso Rocketseat/Github_Repositories/Studying_HTTP (main)
$ curl -X OPTIONS http://localhost:3000/posts -i
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:--  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0HTTP/1.1 204 No Content
X-Powered-By: Express
Vary: Origin, Access-Control-Request-Headers
Access-Control-Allow-Credentials: true
Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE
Content-Length: 0
Date: Fri, 10 Feb 2023 11:24:58 GMT
Connection: keep-alive
Keep-Alive: timeout=5

O comando OPTIONS serve basicamente para enxergar os métodos e algumas outras permissões do servidor.

OPTION é seguro, pois não altera o servidor; é idempotente; BODY, não envia e não recebe; não é utilizado em formulários, não é "cacheble" (não guarda resposta predefinida em memória, porque sua aplicação é justamente para saber se houve, ou não, alteração no servidor.)


## HTTP Methods

Métodos são indicações de ações.

Ex. GET = pegar.
São chamados também de verbos HTTP.

É a ação de o cliente deseja operar.

Alguns métodos não tem formato de "verbos".

Cada um possui a sua semântica.

Características comuns:

Pode ser Seguros ou Itempotentes.

## Headers 

São cabeçalhos.

Informações adicionais para o pedido de resposta.

Nome:valor -> cliente-type:
              application/json.

           -> Content-Type: text/
              html

Obs: Tanto o cliente-type como o content-type pode ser com letra maiúscula ou minúscula.

Headers por Contextos:

General:

Na parte de General, podemos perceber que são Headers que servem tanto para o pedido quanto para a resposta, ou seja, é um agrupamento geral. Dentro deste grupo tempos o Request URL, que é o local do site, o Request Method, que é o método do pedido, o Status Code, o Remote Address, que é um IP que pode ser entendido como quase um endereço físico, e por fim temos o Referrer Policy, que é uma política para o referenciado, ou seja, são políticas para o redirecionamento.

Request headers

Response headers

Para obter mais conhecimento nessa parte, nós recomendamos o app DevDocs, que serve para buscar informações sobre diversos frameworks, headers, etc. Tudo está em inglês, mas pode-se ir usando ferramentas de tradução para facilitar o entendimento

### Status.

A proposta do status code é ter uma comunicação mais clara entre o back-end com o cliente. Os status code do tipo 100 servem pra mostrar que a operação pode ser continuada sem problemas. Os status code do tipo 200 podem significar: 200 em si, significa que tudo está ok (GET e POST), 201, significa que o recurso foi criado (PUT), 204, significa que não há conteúdo (PUT e DELETE). Os status code do tipo 300 podem significar: 301, significa movido permanentemente, 308, significa redirecionamento permanente, 302, significa uma mudança temporária assim como o 307. Os status code o tipo 400 podem significar: 400, que significa que o pedido foi mal efetuado, 401, que significa que o pedido não teve autorização, 403, que significa que a autorização foi negada, 404, que o pedido não foi encontrado, 405, que significa que o método usado não é permitido e 429, que significa que foram efetuados muitos pedidos. Os do tipo 500: 500, que significa que ocorreu um erro desconhecido no servidor e o 503, que significa que o servidor está indisponível no momento.














