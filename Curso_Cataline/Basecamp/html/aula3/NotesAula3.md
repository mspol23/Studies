# Inclusão de imagens e áudios.

## <img>

* Diferença do recurso src="" para href="":
    - href, especifica a localização de um recurso na web e nos redireciona.

    - src, indica a localização de um recurso que será incorporado a nossa página.

```html
<img src="./imagens/imagem.jpg" width="300px" alt="cachorro">

<!--
    Como a imagem está muito grande, pode-se acrescentar um atributo width. Sem este atributo a fotografia será exibida em seu tamanho normal.

    Outro atributo interessante é o atributo alt="", que aponta um texto alternativo.
-->
```
## <audio>

```html
<audio controls>
    <source src="./áudio/audio.mp3" type="audio/mpeg"/>
</audio>

<!--
    tag <audio controls>, mostra os controles de execução do áudio.

    tag <source> especifica a local.
    atributo src="" especifica o caminho.
    type="" informa o tipo de arquivo.

    A tag filha com uma tabulação em relação à tag na qual está contida recebe o nome de indentação.
-->

```

## <video>

Muito similar ao áudio.

```html
<video controls width="500px">
    <source src="./vídeos/video.mp4" type="video/mp4">
</video>

<!--
    Também pode ser utilizado o atributo width="" para controlar a largura do vídeo.
-->
```
