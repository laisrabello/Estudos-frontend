// Arrow function é uma forma simpleficada de declarar funções
// Requisitos:
// 1. função deve executar não mais do que uma ação
const valor1 = 10;
const valor2 = 20;

const calculaSoma = (valor1, valor2) => valor1 + valor2;

const resultadoSoma = calculaSoma(valor1, valor2);
console.log(resultadoSoma);

// 2. tendo apenas um parâmetro, pode ter uma sintaxe mais simplificada
const imprimir = impressao => console.log(impressao);
imprimir("Olá, mundo!");

