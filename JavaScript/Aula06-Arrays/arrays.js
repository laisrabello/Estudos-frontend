const convidado1 = "Matheus";
const convidado2 = "Amanda";

console.log("Lista de convidados:", convidado1, convidado2);

const listaDeConvidados = ["Matheus", "Izabelli", "Amanda", "Paula"];

console.log("Bia fes aniversário e convidou", listaDeConvidados);
console.log("Quantos convidados", listaDeConvidados.length);

// 1. Matheus 
// 2. Izabelli
// 3. Amanda
// 4. Paula

console.log("Convidado número 1:", listaDeConvidados[0]);
console.log("Convidado número 4:", listaDeConvidados[listaDeConvidados.length - 1]);

const indiceAmanda = listaDeConvidados.indexOf("Amanda");
console.log("Amanda está em qual índice do nosso array?", indiceAmanda);
console.log("Amanda está em qual número da lista?", indiceAmanda + 1);

// um array pode ser composto de vários tipos, tanto Primitivos,
// quanto objetos.

//const arrayQualquer = ["Laís", true, 27, {valor1: 10, valor2: 20}];