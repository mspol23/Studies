# Semântica

Auxilia buscadores a interpretar sua página.

Melhora a acessibilidade.

<section> separa as seções da sua página.

<div> é uma tag genéria para isolar conteúdos.

```html
<header>
    <h1>Cabeçalho</h1>
</header>

<main>
    
    <div> <!-- Neste caso também poderia ser utilizada a tag <section> -->
        <p>Sobre mim</p>
    </div>

    <div>
        <p>Habilidades</p>
    </div>
    
    <div>
        <p>Contato</p>
    </div>

</main>

<footer>
    <h2>Rodapé</h2>
</footer>
```

Exemplo de código semântico para nav bar

```html
<nav> <!-- Sem o <nav> o computador interpretaria esta lista como uma qualquer. -->
    <ul>
        <li>
            <a href="/" target="_blank">Home</a>
        </li>
        <li>
            <a href="/sobre" target="_blank">Sobre</a>
        </li>
        <li>
            <a href="/Contato" target="_blank">Contato</a>
        </li>
    </ul>
</nav>
```


