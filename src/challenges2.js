// Desafio 10 - Crie uma função que receba um array de Lista de Tecnologias e retorne as tecnologias ordenadas alfabeticamente
// e com o nome da pessoa que deseja aprende-la
function techList(techs, name) {
  const arrObj = [];
  let orderTechs;
  for (let i = 0; i <= techs.length; i += 1) {
    orderTechs = techs.sort();
    if (techs.length > 0) {
      arrObj.push({
        tech: orderTechs[i],
        name,
      });
    } else if (techs) {
      return 'Vazio!';
    }
  }
  arrObj.pop();
  return arrObj;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
