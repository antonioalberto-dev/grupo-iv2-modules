const formRound = document.querySelector('#form-round');
const formPow = document.querySelector('#form-pow');
const formCircle = document.querySelector('#form-circle');
const formCube = document.querySelector('#form-cube');
const formCilindro = document.querySelector('#form-cilindro');

function setResultado(resultado, idResult, message) {
  const r = document.querySelector(idResult);
  r.innerHTML = '';

  const elementResult = criaElemento('p');

  elementResult.innerHTML = message + resultado;
  elementResult.classList.add('resultado');

  r.appendChild(elementResult);
}

function criaElemento(elementName) {
  const element = document.createElement(elementName);
  return element;
}

// round
formRound.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputNumber = Number((e.target.querySelector('#input-round')).value);
  // console.log(inputNumber, Math.round(inputNumber));

  setResultado(Math.round(inputNumber), '#result-round', 'O resultado da operação é: ');
});

// pow
formPow.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputNumber1 = Number((e.target.querySelector('#powNumber1')).value);
  const inputNumber2 = Number((e.target.querySelector('#powNumber2')).value);
  // console.log(inputNumber1, inputNumber2);

  setResultado(Math.pow(inputNumber1, inputNumber2), '#result-pow', 'O resultado da operação é: ');
});

// circle
formCircle.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputCircle = Number((e.target.querySelector('#inputCircle')).value);
  // console.log(inputCircle);

  setResultado((2 * Math.PI * inputCircle).toFixed(2), '#result-circ-circle', 'Medida da Circunferência do Circulo: ');
  setResultado((Math.PI * Math.pow(inputCircle, 2)).toFixed(2), '#result-area-circle', 'Resultado da Área do Circulo: ');
});

formCube.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputCube = Number((e.target.querySelector('#inputCube')).value);
  // console.log(inputCube);

  setResultado((Math.pow(inputCube, 2)).toFixed(2), '#result-base-cube',
    'Área do cubo: ');

  setResultado((Math.pow(inputCube, 2) * 6).toFixed(2), '#result-area-cube',
    'Área total do cubo: ');

  setResultado((Math.pow(inputCube, 3)).toFixed(2), '#result-vol-cube',
    'Volume do cubo: ');
});

formCilindro.addEventListener('submit', (e) => {
  e.preventDefault();

  const h = Number(e.target.querySelector('#inputCilindro').value);
  const r = Number(e.target.querySelector('#inputCilindro2').value);
  // console.log(inputCilindro);

  setResultado((Math.PI * Math.pow(r, 2) * h).toFixed(2), '#volume-cilindro', 'Volume do cilindro: ')
  setResultado((2 * Math.PI * r * (h + r)).toFixed(2), '#area-cilindro', 'Área do cilindro: ')
});