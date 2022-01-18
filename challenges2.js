// Desafio 10
function techList(nameArray, name) {
  if (nameArray.length === 0) {
    return 'Vazio!';
  }
  nameArray.sort();
  let array = [];
  for (let cont = 0; cont < nameArray.length; cont += 1) {
    array[cont] = { tech: nameArray[cont], name };
  }
  return array;
}

// Desafio 11
function generatePhoneNumber(arraynumbers) {
  let zero9 = 'não';
  for (let i = 0; i < arraynumbers.length; i += 1) {
    if (arraynumbers[i] < 0 || arraynumbers[i] > 9) {
      zero9 = 'sim';
    }
  }
  let frase1 = 'não é possível gerar um número de telefone com esses valores';
  let quant0 = 0;
  let quant1 = 0;
  let quant2 = 0;
  let quant3 = 0;
  let quant4 = 0;
  let quant5 = 0;
  let quant6 = 0;
  let quant7 = 0;
  let quant8 = 0;
  let quant9 = 0;
  for (let cont = 0; cont < arraynumbers.length; cont += 1) {
    if (arraynumbers[cont] === 0) {
      quant0 += 1;
    } else if (arraynumbers[cont] === 1) {
      quant1 += 1;
    } else if (arraynumbers[cont] === 2) {
      quant2 += 1;
    } else if (arraynumbers[cont] === 3) {
      quant3 += 1;
    } else if (arraynumbers[cont] === 4) {
      quant4 += 1;
    } else if (arraynumbers[cont] === 5) {
      quant5 += 1;
    } else if (arraynumbers[cont] === 6) {
      quant6 += 1;
    } else if (arraynumbers[cont] === 7) {
      quant7 += 1;
    } else if (arraynumbers[cont] === 8) {
      quant8 += 1;
    } else if (arraynumbers[cont] === 9) {
      quant9 += 1;
    }
  }
  if (arraynumbers.length !== 11) {
    return ('Array com tamanho incorreto.');
  }
  if (quant0 >= 3 || quant1 >= 3 || quant2 >= 3 || quant3 >= 3 || quant4 >= 3 || quant5 >= 3 || quant6 >= 3 || quant7 >= 3 || quant8 >= 3 || quant9 >= 3) {
    return frase1;
  }
  if (zero9 === 'sim') {
    return frase1;
  }
  return `(${arraynumbers[0]}${arraynumbers[1]}) ${arraynumbers[2]}${arraynumbers[3]}${arraynumbers[4]}${arraynumbers[5]}${arraynumbers[6]}-${arraynumbers[7]}${arraynumbers[8]}${arraynumbers[9]}${arraynumbers[10]}`;
}
// Desafio 12 referencia do math.abs(desafio 7 )
function triangleCheck(lineA, lineB, lineC) {
  return (lineA) < (lineC + lineB) && lineA > Math.abs(lineC - lineB);
}

// Desafio 13
function hydrate(frase) {
  let array = frase.match(/\d/g);
  let resultado = 0;
  for (let i = 0; i < array.length; i += 1) {
    resultado += parseInt(array[i], 10);
  }
  if (resultado === 1) {
    return (`${resultado} copo de água`);
  }
  return (`${resultado} copos de água`);
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
