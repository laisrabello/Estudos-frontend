// Escopo Global
const x = 'variável global';

// Escopo de Bloco
if (x) {
    const z = 'variável de bloco';
    // variável de escopo global, será impressa
    console.log("X é: ", x);
    // variável de escopo de bloco, será impressa
    console.log("Z é: ", z);
    // variável de escopo da função, não será impressa, 
    // pois foi declarada fora deste escopo
    //console.log("A é: ", a);
}

// Escopo de Função
const funcao = () => {
    const a = 'variável de escopo da função'
    console.log("Na função, A é: ", a);
}

funcao();

// Como já mencionado anteriorment, o Hoisting pode ocorrer quando:
// 1. Utilizamos declaração de variáveis com var;
// 2. Declaramos funções sem atribuir a uma variável;