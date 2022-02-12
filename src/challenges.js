// Desafio 1 - Crie uma função usando o operador &&
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2 - Crie uma função que calcule a área de um triângulo
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3 - Crie uma função que divida a frase
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4 - Crie uma função que use concatenação de strings
function concatName(arrText) {
  const first = arrText[0];
  for (let i = 0; i < arrText.length; i += 1) {
    if ((i + 1) >= arrText.length) {
      const last = arrText[i];
      return `${last}, ${first}`;
    }
  }
}

// Desafio 5 - Crie uma função que calcule a quantidade de pontos no futebol
// Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.
function footballPoints(wins, ties) {
  const winsPoints = wins * 3;
  const tiesPoints = ties;

  return winsPoints + tiesPoints;
}

// Desafio 6 - Crie uma função que calcule a repetição do maior número
function increment(numbers, highestNumber) {
  let cont = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === highestNumber) {
      cont += 1;
    }
  }
  return cont;
}

function highestCount(numbers) {
  let highestNumber = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highestNumber || (highestNumber === 0 && numbers[index] < highestNumber)) {
      highestNumber = numbers[index];
    }
  }
  return increment(numbers, highestNumber);
}

// Desafio 7 - Crie uma função de Caça ao Rato
function catAndMouse() {

}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
