# Posicionamento

Como modificar a posição dos elementos html sem alterar a ordem dos elementos contidos neste código.

Caso utilizemos um atributo/valor top: -100px; para tentar elevar a posição de um elementos em tela, isso não funcionará que antes se definir o tipo de posicionamento destes elementos, entre:

position: relative;
    * Faz o elemento se mover em relação à sua posição original. Posso fazer essa movimentação utilizando top, right, left e bottom.

    ```html
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background: green;
            position: relative;
            top: -100px;
            left: 200px;

            /* O elemento se move em obediência às coordenadas indicadas, relativamente a sua posição original. */
        }
    </style>
</head>
<body>

    <h1>html</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, ducimus commodi fugiat sit voluptate reprehenderit? Inventore, dolores! Laboriosam expedita, dolorem asperiores, vitae minus, dolore deleniti quo atque ad illum ducimus?</p>
    <div></div>

</body>
</html>
```

position: absolute;
    * O elemento absoluto fica é retirado do plano ordinário da página e colocado em plano sobreposto. Ficará, portanto, à frente de todos os demais e estes passarão a ocupar o lugar que antes ele ocupava. O elemento abaixo então subirá e ocupará seu lugar.

    >>> Obs. importante: A posição absoluta do elemento é relativa ao seu respectivo elemento pai, desde que este esteja classificado como position: relative. Caso o elemento pai não tenha sua position definida como relative, o elemento filho com posição absoluta terá seus atributos considerados em relação a todo o viewport.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1 {
            
            position: absolute;
            top: 0;
            left: 0;

        }

        div {
            width: 200px;
            height: 200px;
            background: blue;

        }

        /* Neste caso, como o texto foi marcado como display absolute, ficou por cima dos demais elementos, que passaram a ocupar seu lugar. */

    </style>
</head>
<body>

    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, ducimus commodi fugiat sit voluptate reprehenderit? Inventore, dolores! Laboriosam expedita, dolorem asperiores, vitae minus, dolore deleniti quo atque ad illum ducimus?
    </h1>

    <div></div>

</body>
</html>
```

Ex2 de position: absolute;
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1 {
            
            position: absolute;
            top: 0;
            left: 0;

        }

        div {
            width: 200px;
            height: 200px;
            background: blue;

        }

        /* Neste caso, como o texto foi marcado como display absolute, ficou por cima dos demais elementos, que passaram a ocupar seu lugar. */

    </style>
</head>
<body>

    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, ducimus commodi fugiat sit voluptate reprehenderit? Inventore, dolores! Laboriosam expedita, dolorem asperiores, vitae minus, dolore deleniti quo atque ad illum ducimus?</h1>

    <div></div>

</body>
</html>
```

position: fixed;
    * Mantém o elemento fixo durante o rolamento da página. Como a posição absoluta, o elemento fica flutuando.

Ex:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            position: fixed;
            width: 100px;
            height: 100px;
            border-radius: 100%;
            background: blue;
            bottom: 20px;
            right: 20px;

        }

    </style>
</head>
<body>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus reprehenderit consectetur exercitationem, debitis provident adipisci ipsum mollitia est nulla, numquam illum sit accusantium! In reprehenderit quos corporis aliquam nesciunt.</p>

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi sed dolores natus, eveniet expedita ipsam quia aut pariatur quod nostrum quasi deserunt fugiat. Assumenda delectus nobis maiores, quidem nihil corrupti?</p>

    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia quos voluptatem fugiat. Maxime exercitationem delectus non! Quam esse quasi id veritatis illo ut accusamus, illum aliquam quisquam doloremque pariatur?</p>

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero distinctio dolore fuga dolor perspiciatis, soluta ab quisquam iste expedita modi enim eaque ad. Voluptatum in, mollitia quod accusantium hic iste!</p>

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero distinctio dolore fuga dolor perspiciatis, soluta ab quisquam iste expedita modi enim eaque ad. Voluptatum in, mollitia quod accusantium hic iste!</p>
    
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero distinctio dolore fuga dolor perspiciatis, soluta ab quisquam iste expedita modi enim eaque ad. Voluptatum in, mollitia quod accusantium hic iste!</p>
    
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero distinctio dolore fuga dolor perspiciatis, soluta ab quisquam iste expedita modi enim eaque ad. Voluptatum in, mollitia quod accusantium hic iste!</p>
    
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero distinctio dolore fuga dolor perspiciatis, soluta ab quisquam iste expedita modi enim eaque ad. Voluptatum in, mollitia quod accusantium hic iste!</p>
    
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero distinctio dolore fuga dolor perspiciatis, soluta ab quisquam iste expedita modi enim eaque ad. Voluptatum in, mollitia quod accusantium hic iste!</p>
    
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero distinctio dolore fuga dolor perspiciatis, soluta ab quisquam iste expedita modi enim eaque ad. Voluptatum in, mollitia quod accusantium hic iste!</p>
    
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero distinctio dolore fuga dolor perspiciatis, soluta ab quisquam iste expedita modi enim eaque ad. Voluptatum in, mollitia quod accusantium hic iste!</p>
    
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero distinctio dolore fuga dolor perspiciatis, soluta ab quisquam iste expedita modi enim eaque ad. Voluptatum in, mollitia quod accusantium hic iste!</p>
    
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero distinctio dolore fuga dolor perspiciatis, soluta ab quisquam iste expedita modi enim eaque ad. Voluptatum in, mollitia quod accusantium hic iste!</p>

    
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero distinctio dolore fuga dolor perspiciatis, soluta ab quisquam iste expedita modi enim eaque ad. Voluptatum in, mollitia quod accusantium hic iste!</p>

    
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero distinctio dolore fuga dolor perspiciatis, soluta ab quisquam iste expedita modi enim eaque ad. Voluptatum in, mollitia quod accusantium hic iste!</p>

    <div></div>

</body>
</html>
```





