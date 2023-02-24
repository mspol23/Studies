# Formulários

## <form>

Não oferece elemento visual no navegador. Há necessidade de se especificar os campos do formulário através da tag <input>

## <input>

Deve-se especificar o tipo de dado que será inserido. Isso se faz por meio do atributo type="", dentro da tag <input type="">

Outro atributo que pode ser utilizado é o value="", que será exibido dentro da campo do formulário. Geralmente funciona como exemplo.
A tag ficaria assim
<input type="" value="">

Ex de form de login:

```html
<p>Formulário de Login</p>

<form>
    <input type="email" placeholder="Digite seu email">
    <input type="password" placeholder="Digite sua senha">
    <button type="button">Login</button>
</form>
```
Ex de formulário de contato.

```html
<p>Formulário de Contato</p>

<form>

    <input type="texto" placeholder="Nome" required> <!-- "required torna o preenchimento do campo obrigatório."-->

    <br>
    <br>
    
    <input type="email" placeholder="Email" required>

    <br>
    <br>

    <input type="text" placeholder="Assunto" required>

   <!-- <input type="text" placeholder="Mensagem">

    Utilizar o input deixaria o campo da mensagem desta forma ficaria pequeno para o usuário escrever um texto livre. O melhor é o textarea.
    -->
    <br>
    <br>

    <textarea placeholder="Mensagem" rows="5" required></textarea>

    <br>
    <br>

    <button type="button">Login</button>
    
</form>
```
Ex de form mais complexo:

```html
<p>Formulário de Contato</p>

<inp>

    <input type="texto" placeholder="Nome" required> <!-- "required torna o preenchimento do campo obrigatório."-->

    <br><br>
    
    <input type="radio" name="gender"/> Masculino</input> 
    <!--
        No input type="radio", para selecionar apenas uma entre as opções, deve-se recorrer ao atributo name="". "names="" iguais indica que apenas um poderá se selecionado.
    -->

    <br><br>

    <input type="radio" name="gender"/> Feminino</input>

    <br><br>

    <select>
        <option value="">Sugestão</option>
        <option value="">Reclamação</option>
        <option value="">Suporte</option>
    </select>

    <br><br>

    <input type="text" placeholder="Assunto" required>

   <!-- <input type="text" placeholder="Mensagem">

    Utilizar o input deixaria o campo da mensagem desta forma ficaria pequeno para o usuário escrever um texto livre. O melhor é o textarea.
    -->
    <br><br>

    <textarea placeholder="Mensagem" rows="5" required></textarea>

    <br><br>

    <input type="file">

    <br><br>

    <button type="button">Login</button>
    
</form>
```

