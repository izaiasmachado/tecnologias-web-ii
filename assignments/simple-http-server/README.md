# Servidor Web Simples com Node.js HTTP - Laboratório 02

Os objetivos deste projeto são de implementar um site básico utilizando Node.js e HTTP, que ofereça uma página inicial com produtos em destaque, detalhes dos produtos e um menu de navegação. Aqui está o [roteiro da atividade](../../docs/lab02-simple-http-server.pdf).

```
Disciplina      : ECO0103 - Tecnologias Web II
Professor       : Thiago Iachiley
Descrição       : Laboratório 02 - Servidor web simples com Node.js HTTP
Autor(a)        : Izaias Machado Pessoa Neto
Data de Entrega : 02/04/2024
```

## Como executar?

As dependências utilizadas são padrões do Node.js, entretanto, caso haja algum problema de execução é possível rodar na raiz do projeto o comando abaixo para instalar essas dependências.

```
npm install
```

Com isso, é possível executar o servidor com o seguinte comando. Após a execução, o servidor vai ficar acessível em [http://localhost:4000](http://localhost:4000).

```
node src/index.js
```

Se por algum motivo não possa executar na porta 4000, que é a porta padrão, basta passar como variável de ambiente com o número da porta, conforme o exemplo abaixo. Nesse exemplo, é necessário acessar [http://localhost:3000](http://localhost:3000) para visualizar a interface de usuário.

```
PORT=3000 node src/server.js
```

## Árvore de Arquivos

Os arquivos do projeto foram organizados da seguinte forma. Note que os arquivos da pasta `public` são arquivos estáticos que o usuário pode solicitar. Além disso, a pasta `src` armazena os arquivos do lado do servidor da aplicação. Já os arquivos `package-lock` e `package` são do gerenciador de pacotes NPM.

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── index.html
│   └── style.css
└── src
    └── server.js
```

## Disclaimer

Esse trabalho foi feito utilizando a versão `v20.9.0` do Node.js. Para garantir a compatibilidade total, garanta que você está utilizando uma versão igual ou superior, executando o comando `node --version`.
