const http = require("http");

const HOSTNAME = "localhost";

const PORT = 8900;

const server = http.createServer(requesthandler);

function requesthandler(req, res) {
  res.end("My Name is Ojeh Joseph");
}

server.listen(PORT, () => {
  console.log(`server is listening at http://${HOSTNAME}:${PORT}`);
});
