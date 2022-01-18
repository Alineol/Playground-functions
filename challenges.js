// Desafio 1
function compareTrue(n1, n2) {
  return n1 === true && n2 === true;
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3 ref https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return (`${array[(array.length - 1)]}, ${array[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let vezesMaior = 0;
  for (let cont = 1; cont < array.length; cont += 1) {
    if (maior < array[cont]) {
      maior = array[cont];
    }
  }
  for (let cont = 0; cont < array.length; cont += 1) {
    if (array[cont] === maior) {
      vezesMaior += 1;
    }
  }
  return vezesMaior;
}

// Desafio 7 math abs : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) {
  let winner = '';
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    winner = 'cat2';
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    winner = 'cat1';
  } else {
    winner = 'os gatos trombam e o rato foge';
  }
  return winner;
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let key of array) {
    if (key % 3 === 0 && key % 5 !== 0) {
      resultado.push('fizz');
    } else if (key % 5 === 0 && key % 3 !== 0) {
      resultado.push('buzz');
    } else if (key % 5 === 0 && key % 3 === 0) {
      resultado.push('fizzBuzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9 referência: https://www.alura.com.br/artigos/javascript-replace-manipulando-strings-e-regex?gclid=CjwKCAiAp8iMBhAqEiwAJb94z0YtsjHvp-HjQsxrRq7xJ8YsBJ9PLJT-Nv5GGdDPSc-2BX5lKu81eBoCns0QAvD_BwE
function encode(string) {
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');
  return string;
}
function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
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
