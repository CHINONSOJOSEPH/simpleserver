// import http module
const http = require("http");

const port = 5000;

const server = http.createServer(requestHandler);

function requestHandler(req, res) {
  console.log(req.method);
  console.log(req.url);

  //GET ./books
  if (req.method === "GET" && req.url === "/books") {
    res.write("Welcome to Read books route"), res.end();
  }
  //PUT ./books
  else if (req.method === "PUT" && req.url === "/books") {
    res.write("Hello, What changes do you want to make"), res.end();
  }
  //DELETE ./books
  else if (req.method === "DELETE" && req.url === "/books") {
    res.write("Deleted Successfully"), res.end();
  }
  //GET /books/author/
  else if (req.method === "GET" && req.url === "/books/author/") {
    res.write("Hello, What changes do you want to make"), res.end();
  }
  //POST /books/author/
  else if (req.method === "PUT" && req.url === "/books/author/") {
    res.write("Deleted Successfully"), res.end();
  }
  //PUT /books/author/
  else if (req.method === "POST" && req.url === "/books/author/") {
    res.write("Updated Successfully"), res.end();
  } else (res.statusCode = 400), res.end("Invalid endpoint");
}

server.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
