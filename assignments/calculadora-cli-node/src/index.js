// Disciplina      : ECO0103 - Tecnologias Web II
// Professor       : Thiago Iachiley
// Descrição       : Arquivo principal do projeto - Calculadora CLI
// Autor(a)        : Izaias Machado Pessoa Neto
// Data de Entrega : 22/03/2024

const { MainScreen } = require("./screens.js");

function main() {
  let screen = new MainScreen();
  while (screen != null) {
    screen = screen.show();
  }
}

main();
