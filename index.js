const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.write('<nav style="display:flex; background-color:#ccc; margin: 20px ; padding:20px ; height: 50px ; width:90vw;"> <a href="" style="text-decoration:none ; font-weight:bold;"> Home </a> <pre>                    </pre>  <a href="" style="text-decoration:none ; font-weight:bold;"> Blog </a> </nav>') ;
  res.write('<section style="" > <h1 style="font-size:72px; color: #333"> Welcome to Home Page ! </h1> </section>') ;
  res.end()
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

// I have no Idea how to deal with node js !! I faced a problem with node js server and it duplicate data -.-
// I need a long time to learn Node JS .. I've just collected some info about it


/*
const http = require("http");

const server = http.createServer(function (req, res) {
    const url = req.url;
  
    if (url === "/") {
      // do a 200 response
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Hello World!<h1>");
      res.end();
    }
  });
server.listen(3000, function () {
  console.log("server started at port 3000");
});

*/