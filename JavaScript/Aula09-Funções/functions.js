// Há duas formas de declarar variáveis:


// Declarar função sem atribuíção
// Neste formato pode ocorrer problemas de Hosting
function imprimir(impressao) {
    console.log(impressao);
}


// Declarar função atribuindo a uma variável
// Esta forma de declarar funções soluciona o problema de Hosting
// Hosting é quando uma função pode ser chamada antes da sua própria declaração

const valor1 = 2;
const valor2 = 4;

const calcularSoma = function(valor1, valor2) {
    return valor1 + valor2;
}

imprimir(`A soma entre ${valor1} e ${valor2} é ${calcularSoma(valor1, valor2)}`);
