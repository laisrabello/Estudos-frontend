const listaDeConvidados = ["Matheus", "Izabelli", "Amanda", "Paula"];

// Push / Pop / Shift / Unshift

// adiciona um item ao final do array
listaDeConvidados.push("Leonardo");

// remove o último item do array
listaDeConvidados.pop();

// adiciona um item no ínicio do array
listaDeConvidados.unshift("Beatriz");

// remove o primeiro item do array
listaDeConvidados.shift();

// veriica se um item específico está na lista
console.log("Paula está na lista?", listaDeConvidados.includes("Paula"));
