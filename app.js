//ביסאם פרח 211861208
//נור צובח 214459463
const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

const htmlPath = path.join(__dirname, "templates", "page.html");
const server = http.createServer((req, res) => {
  fs.readFile(htmlPath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("Server error");
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(data);
  });
});
server.listen(port, () => {
  console.log(`Server is running on http://localhost: ${port}`);
});
