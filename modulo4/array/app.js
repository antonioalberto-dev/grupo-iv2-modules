const frutas = ['maca', 'uva', 'laranja', 'pera'];

console.log(frutas[2]);
frutas.push('caju'); //adiciona na ultima posicao

console.log(frutas);

frutas.pop(); // retira o ultimo item do array
console.log(frutas);

frutas.shift(); // retira o primeiro item do array
console.log(frutas);

frutas.unshift('caju'); // adiciona no inicio
console.log(frutas);

console.log(frutas.slice(0, 2)); //substring do array com inicio e fim