// nota < 6 -> Reprovado
// nota >= 6 -> Aprovado

const notasFinais = [
    {nome: "Beatriz", nota: 5},
    {nome: "Matheus", nota: 7},
    {nome: "Amanda", nota: 10},
    {nome: "Paula", nota: 5},

]

// forma mais verbosa utilizando loop
//for (let i = 0; i < notasFinais.length; i++) {
//    if (notasFinais[i].nota < 6) {
//        console.log(`O aluno ${notasFinais[i].nome} está Reprovado com nota ${notasFinais[i].nota}.`);
//    } else {
//        console.log(`O aluno ${notasFinais[i].nome} está Aprovado com nota ${notasFinais[i].nota}.`);
//    }
//}

// forma mais enxuta utilizando loop
for (let aluno of notasFinais) {
    if (aluno.nota < 6) {
        console.log(`O aluno ${aluno.nome} está Reprovado com nota ${aluno.nota}.`);
    } else {
        console.log(`O aluno ${aluno.nome} está Aprovado com nota ${aluno.nota}.`);
    }
}

// ForEach é um método pronto da linguagem para manipular arrays
notasFinais.forEach ( (aluno) => {
    if (aluno.nota < 6) {
        console.log(`O aluno ${aluno.nome} está Reprovado com nota ${aluno.nota}.`);
    } else {
        console.log(`O aluno ${aluno.nome} está Aprovado com nota ${aluno.nota}.`);
    }
});
