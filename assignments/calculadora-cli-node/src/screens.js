// Disciplina      : ECO0103 - Tecnologias Web II
// Professor       : Thiago Iachiley
// Descrição       : Módulo de Telas - Calculadora CLI
// Autor(a)        : Izaias Machado Pessoa Neto
// Data de Entrega : 22/03/2024

const math = require("./operacoes.js");
const readline = require("readline-sync");

class Screen {
  constructor(name) {
    this.name = name;
  }

  show() {
    this.printTitle(this.name);
  }

  printTitle(title) {
    const TITLE_LENGTH = 30;
    const separatorSize = (TITLE_LENGTH - title.length) / 2;
    const separator = "=".repeat(separatorSize);
    console.log(`${separator} ${title} ${separator}`);
  }
}

class MainScreen extends Screen {
  constructor() {
    super("Menu Principal");
  }

  getOptions() {
    return {
      1: "Soma",
      2: "Subtração",
      3: "Multiplicação",
      4: "Divisão",
      5: "Raiz quadrada",
      6: "Potência",
      7: "Seno",
      8: "Cosseno",
      0: "Sair",
    };
  }

  handleOption(option) {
    switch (option) {
      case "0":
        console.log("Finalizando programa... Até mais!");
        return null;
      case "1":
        return new SumScreen();
      case "2":
        return new SubtractionScreen();
      case "3":
        return new MultiplicationScreen();
      case "4":
        return new DivisionScreen();
      case "5":
        return new SquareRootScreen();
      case "6":
        return new PowerScreen();
      case "7":
        return new SinScreen();
      case "8":
        return new CosScreen();
      default:
        console.log("[Erro]: Opção inválida! Tente novamente.");
        return new MainScreen();
    }
  }

  show() {
    super.show();
    const options = this.getOptions();
    console.table(options);
    const option = readline.question("> Escolha uma opção: ");

    return this.handleOption(option);
  }
}

class OperationScreen extends Screen {
  constructor(operation) {
    super(`Operação: ${operation}`);
    this.operation = operation;
  }

  askForInput(message = "> Digite um número: ") {
    return readline.questionFloat(message, {
      limitMessage: "[Erro]: Por favor, digite um número válido",
    });
  }

  askForBinaryInput() {
    let a = this.askForInput("> Digite o primeiro número: ");
    let b = this.askForInput("> Digite o segundo número: ");
    return [a, b];
  }

  askForUnaryInput(message) {
    if (message) {
      return this.askForInput(message);
    }

    return this.askForInput("> Digite um número: ");
  }

  askUserToKeepInScreen() {
    const operationToLowerCase = this.operation.toLowerCase();
    let keep = readline.question(
      `> Deseja continuar realizando a operação de ${operationToLowerCase}? [S/n]: `
    );
    return keep === "s" || keep === "S";
  }

  handleEndScreen() {
    if (this.askUserToKeepInScreen()) {
      return this;
    }

    return new MainScreen();
  }
}

class SumScreen extends OperationScreen {
  constructor() {
    super("Soma");
  }

  show() {
    super.show();
    let [a, b] = this.askForBinaryInput();

    console.log(`A soma de ${a} e ${b} é ${math.sum(a, b)}`);
    return this.handleEndScreen();
  }
}

class SubtractionScreen extends OperationScreen {
  constructor() {
    super("Subtração");
  }

  show() {
    super.show();
    let [a, b] = this.askForBinaryInput();

    console.log(`A subtração de ${a} e ${b} é ${math.subtraction(a, b)}`);
    return this.handleEndScreen();
  }
}

class MultiplicationScreen extends OperationScreen {
  constructor() {
    super("Multiplicação");
  }

  show() {
    super.show();
    let [a, b] = this.askForBinaryInput();

    console.log(
      `A multiplicação de ${a} e ${b} é ${math.multiplication(a, b)}`
    );
    return this.handleEndScreen();
  }
}

class DivisionScreen extends OperationScreen {
  constructor() {
    super("Divisão");
  }

  show() {
    super.show();
    const a = this.askForInput("> Digite o dividendo: ");
    const b = this.askForInput("> Digite o divisor: ");

    try {
      console.log(`A divisão de ${a} e ${b} é ${math.division(a, b)}`);
    } catch (error) {
      console.log(`[Erro]: ${error.message}`);
    } finally {
      return this.handleEndScreen();
    }
  }
}

class SquareRootScreen extends OperationScreen {
  constructor() {
    super("Raiz Quadrada");
  }

  show() {
    super.show();
    const num = this.askForUnaryInput(
      "> Digite um número para calcular a raiz quadrada: "
    );

    try {
      console.log(`A raiz quadrada de ${num} é ${math.squareRoot(num)}`);
    } catch (error) {
      console.log(`[Erro]: ${error.message}`);
    } finally {
      return this.handleEndScreen();
    }
  }
}

class PowerScreen extends OperationScreen {
  constructor() {
    super("Potência");
  }

  show() {
    super.show();
    const a = this.askForInput("> Digite o número base: ");
    const b = this.askForInput("> Digite o expoente: ");

    console.log(`A potência de ${a} elevado a ${b} é ${math.power(a, b)}`);
    return this.handleEndScreen();
  }
}

class SinScreen extends OperationScreen {
  constructor() {
    super("Seno");
  }

  show() {
    super.show();
    const num = this.askForUnaryInput("> Digite um número em graus: ");

    try {
      console.log(`O seno de ${num} é ${math.sinDeg(num)}`);
    } catch (error) {
      console.log(`[Erro]: ${error.message}`);
    } finally {
      return this.handleEndScreen();
    }
  }
}

class CosScreen extends OperationScreen {
  constructor() {
    super("Cosseno");
  }

  show() {
    super.show();
    const num = this.askForUnaryInput("> Digite um número em graus: ");

    try {
      console.log(`O cosseno de ${num} é ${math.cosDeg(num)}`);
    } catch (error) {
      console.log(`[Erro]: ${error.message}`);
    } finally {
      return this.handleEndScreen();
    }
  }
}

module.exports = {
  MainScreen,
};
