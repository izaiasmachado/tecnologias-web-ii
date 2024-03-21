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

const getMimeType = (filename) => {
  const fileExtension = filename.split(".")[1];
  const mimeType = {
    html: "text/html",
    css: "text/css",
    js: "text/javascript",
  };

  if (mimeType[fileExtension]) {
    return mimeType[fileExtension];
  }

  return "text/plain";
};

const writeFileResponse = (res, file) => {
  const mimeType = getMimeType(file);
  const fileContent = getFileContent(file);

  if (!fileContent) {
    res.writeHead(404, { "Content-Type": "text/html" });
    return res.end("404 Not Found");
  }

  res.writeHead(200, { "Content-Type": mimeType });
  return res.end(fileContent);
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return writeFileResponse(res, "index.html");
  }

  const possibleFileNames = req.url.split("/")[1];
  return writeFileResponse(res, possibleFileNames);
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
