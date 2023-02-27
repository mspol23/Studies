# Escopo de bloco.

Escopo das estruturas if, for, while.

As variáveis criadas dentro destes escopos são alcançadas fora dele, diversamente do escopo da função.

Se pretendemos que uma variável seja utilizada de forma global, devemos criá-la no ambiente global, ainda que a utilizemos dentro do escopo.

Caso queiramos manter a variável dentro do escopo de bloco, devemos utilizar o prefixo let no lugar do var.

Problema do let: Vem do pacote ECMAScript (ES6), que foi adicionado ao JS posteriormente. Navegadores mais antigos não compreenderão o let.

A recomendação deste curso é não utilizar, por enquanto, a variável let, a fim de evitar erros em navegadores mais antigos.

