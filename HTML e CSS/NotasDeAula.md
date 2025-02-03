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


### Propriedades de Flexbox

- `display: flex;` -> transofrma um elemento em um container flexível, permitindo posicionamento e alinhamento flexível dos elementos filhos.
- `flex-direction: row;` -> Define o sentido do eixo principal, sendo "row" a disposição em linha (Inline), e o "colum" a disposição em coluna. 
- `flex-direction: row-reverse;` -> inverte a ordem do eixo principal na flex-box.
- `justify-content: center;` -> ajusta os itens dentro do container, neste caso no centro, podendo ser no final(flex-end) e no início(flex-start). Também há propriedades de disposição dos itens ao longo da div, com o space-around, space-evenly, space-between.
- `align-items: center` -> alinha os itens no eixo secundário.
- `flex-wrap: wrap` -> quebra de linha para todos os elementos caberem no container.
- `overflow: auto;` -> adiciona um scroll no container.
- `align-content: center;` -> costumizar diposição dos itens quando há uma quebra de linha.
    #### Propriedades dos itens filhos da div flex
    - `align-self: flex-end;` -> alinha para um único item do container.
    - `order: -1;` -> reorganizar a disposição dos itens do container.
    - `flex-grow: ` -> manipular o quanto um elemento deve crescer.
    - `flex-shrink: ` -> determinar se um elemento pode ou não modificar seu tamanho conforme diminuimos a tela web.
    - `flex-basis: ` -> seta um valor padrão para um elemento.
    - `flex: 1 0 500px;` -> condensa o flex-grow, flex-shrink e flex-basis em uma mesma propriedade, respectivamente.
    - `flex-flow: row wrap;` -> condesa as propriedades flex-direction e flex-wrap em uma só linha, respectivamente.