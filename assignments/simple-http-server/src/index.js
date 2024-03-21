const fs = require("fs");
const path = require("path");
const http = require("http");
const port = process.env.PORT || 4000;

const publicFolder = path.join(__dirname, "..", "public");

const getFileContent = (file) => {
  const filePath = path.join(publicFolder, file);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  return fileContent;
};

const getPublicFileContent = (file) => {
  const publicFiles = fs.readdirSync(publicFolder);

  if (!publicFiles.includes(file)) {
    return null;
  }

  const fileContent = getFileContent(file);
  return fileContent;
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const fileContent = getFileContent("index.html");
    return res.end(fileContent);
  }

  const possibleFileNames = req.url.split("/")[1];
  const publicFileContent = getPublicFileContent(possibleFileNames);
  console.log(possibleFileNames);
  if (publicFileContent) return res.end(publicFileContent);

  res.statusCode = 404;
  return res.end("404 Not Found");
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
