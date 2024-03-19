// Disciplina      : ECO0103 - Tecnologias Web II
// Professor       : Thiago Iachiley
// Descrição       : Módulo de operações matemáticas - Calculadora CLI
// Autor(a)        : Izaias Machado Pessoa Neto
// Data de Entrega : 22/03/2024

const sum = (a, b) => {
  return a + b;
};

const subtraction = (a, b) => {
  return a - b;
};

const multiplication = (a, b) => {
  return a * b;
};

const division = (a, b) => {
  if (b === 0) {
    throw new Error("Não é possível dividir por zero");
  }

  return a / b;
};

const squareRoot = (a) => {
  if (a < 0) {
    throw new Error(
      "Não é possível calcular a raiz quadrada de um número negativo"
    );
  }

  return Math.sqrt(a);
};

const power = (a, b) => {
  return Math.pow(a, b);
};

const sinDeg = (a) => {
  if (a < 0) {
    throw new Error("Não é possível calcular o seno de um número negativo");
  }

  if (a > 360) {
    a = a % 360;
  }

  angleToRadians = (a * Math.PI) / 180;
  sin = Math.sin(angleToRadians);
  return Math.round(sin * 10000) / 10000;
};

const cosDeg = (a) => {
  if (a < 0) {
    throw new Error("Não é possível calcular o cosseno de um número negativo");
  }

  if (a > 360) {
    a = a % 360;
  }

  angleToRadians = (a * Math.PI) / 180;
  cos = Math.cos(angleToRadians);
  return Math.round(cos * 10000) / 10000;
};

module.exports = {
  sum,
  subtraction,
  multiplication,
  division,
  squareRoot,
  power,
  sinDeg,
  cosDeg,
};
