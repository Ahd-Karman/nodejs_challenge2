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