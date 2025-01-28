const angelicaTemCNH = "Não";

if (angelicaTemCNH === "Sim") {
    console.log("Angélica pode dirigir!");

} else {
    const tempoParaCNH = "1 ano";
    console.log(`Falta ${tempoParaCNH} para Angélica poder dirigir!`);
}

// Condicional com operador ternário
//angelicaTemCNH === "Sim" 
//    ? console.log("Angélica pode dirigir!") 
//    : console.log("Angélica NÃO pode dirigir!");

console.log("--------------------------------------------------");

// desafio faixa etária

// 0 a 12 anos --> Infância
// 13 a 17 anos --> Adolescência
// 18 a 25 anos --> Jovem adulto
// 26 a 60 anos --> Adulto
// mais que 60 --> Idoso

const idadeLais = 27;

if (idadeLais >= 0 && idadeLais <= 12) {
    console.log("Laís está na Infância :)");
} else if (idadeLais >= 13 && idadeLais <= 17) {
    console.log("Laís está na Adolescência :|");
} else if (idadeLais >= 18 && idadeLais <= 25) {
    console.log("Laís é Jovem Adulto :/");
} else if (idadeLais >= 26 && idadeLais <= 60) {
    console.log("Laís é Adulto :(");
} else {
    console.log("Laís é Idosa :´(");
}

console.log("--------------------------------------------------");

// switch case
const diaDaSemana = 3;
let nomeDoDia;

switch (diaDaSemana) {
    case 0:
        nomeDoDia = "Domingo";
    break;
    case 1:
        nomeDoDia = "Segunda";
    break;
    case 2:
        nomeDoDia = "Terça";
    break;
    case 3:
        nomeDoDia = "Quarta";
    break;
    case 4:
        nomeDoDia = "Quinta";
    break;
    case 5:
        nomeDoDia = "Sexta";
    break;
    case 6:
        nomeDoDia = "Sábado";
    break;
}

console.log("Dia da semana é " + nomeDoDia);
