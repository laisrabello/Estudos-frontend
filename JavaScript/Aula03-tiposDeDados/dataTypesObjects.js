/* Diferente dos tipos primitivos, os objetos são mutáveis,
ou seja, uma vez feita alteração neste objeto, todas
as suas referências serão alteradas também.
*/

// declarando um objeto
const fichaDaLais = {
    nome: "Laís",
    idade: 27,
    profissao:"Desenvolvedora",
    temfilhos: false,
};

// imprime na tela o obejto inteiro
console.log('Ficha da Laís:', fichaDaLais);

// imprime na tela uma das propriedades de um objeto
console.log('Nome: ' + fichaDaLais.nome);

// adiciona uma propriedade ao objeto
fichaDaLais.carro = "Jeep";

// deleta uma propriedade do objeto
delete fichaDaLais.carro;


