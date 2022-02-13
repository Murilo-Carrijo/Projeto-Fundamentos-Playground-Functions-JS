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

// Desafio 11 - Crie uma função de Número de Telefone

// A função checkPosition garante que os caracteres especiais do telefone sejam inseridos nas posições corretas.
function checkPosition(string) {
  if (string.length === 0) {
    return '(';
  }
  if (string.length === 3) {
    return ') ';
  }
  if (string.length === 10) {
    return '-';
  }
  return '';
}

// A função checkLength valida se o array possui o comprimento de 11 items.
function checkLength(numbers) {
  if (numbers.length !== 11) {
    return true;
  }
  return false;
}

// A função checkRepeit verifica se um número repete 3 ou mais vezes.
function ckeckRepeit(repeit) {
  for (let key in repeit) {
    if (repeit[key] >= 3) {
      return true;
    }
  }
}

// A função contRepeit conta quantas vezes um numero é repitido.
function contRepeit(numbers) {
  const repeit = {};
  for (let item of numbers) {
    if (Object.keys(repeit).includes(String(item))) {
      repeit[item] += 1;
    } else {
      repeit[item] = 1;
    }
  }
  return ckeckRepeit(repeit);
}

// A função ckeckIntervalOfNumbers verifica se os numeros do array não são negativos e nem maiores que 9.
function ckeckIntervalOfNumbers(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

// A função generatePhoneNumber verifica se o array passar pela validação de todos as funções anteriores e se passar retorna um número de telefone de acordo
// com os números passados no array.
function generatePhoneNumber(numbers) {
  let phoneNumber = '';
  if (checkLength(numbers) === true) {
    return 'Array com tamanho incorreto.';
  } if (contRepeit(numbers) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  } if (ckeckIntervalOfNumbers(numbers)) {
    return ckeckIntervalOfNumbers(numbers);
  }
  for (let item of numbers) {
    phoneNumber += checkPosition(phoneNumber);
    phoneNumber += item;
  }
  return phoneNumber;
}

// Desafio 12 - Crie uma função de Condição de existência de um triângulo

function triangleCheck(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } return false;
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
