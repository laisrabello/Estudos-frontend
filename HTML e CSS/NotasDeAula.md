# Conteúdo das aulas de HTML e CSS

### Tipos de folhas de estilo:
1. Interno
    No arquivo html, dentro da tag <style></style>
2. Inline
    No arquivo html, como atributo do elemento, pouco utilizado pois polui o código
3. Externo 
    Em um arquivo separado, .css, dedicado somente a estilização, como este arquivo.
    Necessário referenciar este arquivo no arquivo index.html

### Seletores
1. id
   Passando um atributo id para uma tag html
2. class
   Passando um atributo classe para uma tag html, pode atribuir mais de um valor a classe
3. element
   Seleciona uma tag html e atribui um valor a todas as tags iguais

### Prioridade de seletores

id >> class > element -> Esta é a ordem de prioridade para quando se estiliza um elemento com diversas formas de seletores. A prioridade de visualização sempre será o atributo por id, depois por class, e depois por element.

### Herança

#### Propriedades Herdáveis por Padrão
Algumas propriedades CSS são herdáveis por padrão, o que significa que os elementos filhos herdam essas propriedades de seus elementos pais automaticamente. Exemplos de propriedades herdáveis incluem:

- `color`
- `font-family`
- `font-size`
- `font-style`
- `font-weight`
- `line-height`
- `text-align`
- `visibility`

#### Propriedades Não Herdáveis por Padrão
Outras propriedades não são herdáveis por padrão, o que significa que seus valores não são passados automaticamente dos elementos pais para os filhos. Exemplos de propriedades não herdáveis incluem:

- `background`
- `border`
- `margin`
- `padding`
- `height`
- `width`
- `display`

