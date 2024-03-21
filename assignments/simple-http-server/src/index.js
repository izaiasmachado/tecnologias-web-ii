const http = require("http");
const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  res.write("<h1>Hello World<h1/>");
  res.end("<p>Talvez você seja bem vindo</p>");
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
