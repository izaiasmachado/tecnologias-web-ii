# Calculadora Linha de Comando Node - Laboratório 01

Essa é uma implementação de uma calculadora simples de linha de comando, utilizando Node.js. Aqui está o [roteiro da atividade](../../docs/lab01-calculadora-cli-node.pdf).

```
Disciplina      : ECO0103 - Tecnologias Web II
Professor       : Thiago Iachiley
Descrição       : Laboratório 01 - Calculadora CLI Node.js
Autor(a)        : Izaias Machado Pessoa Neto
Data de Entrega : 22/03/2024
```

## Como executar?

Navegue no terminal até a raíz desse projeto e execute o comando abaixo. Isso é necessário porque foi utilizada a biblioteca `readline-sync` para receber dados da linha de comando, funcionalidade que não é nativa do Node.js.

```
npm install
```

Com isso, é possível executar a calculadora rodando

```
node src/index.js
```

## Árvore de Arquivos

Abaixo está a árvore de arquivos enviados, que pode ser usada para conferir se todos os arquivos necessários para a execução estão presentes.

```
.
├── README.md
├── package.json
└── src
    ├── index.js
    ├── operacoes.js
    └── screens.js
```

## Disclaimer

Esse trabalho foi feito utilizando a versão `v20.9.0` do Node.js. Para garantir a compatibilidade total, garanta que você está utilizando uma versão igual ou superior, executando o comando `node --version`.
