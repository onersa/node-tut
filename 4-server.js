const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  //   res.write("Welcome to our web page!! Webmaster: Vusi Molapisi");
  if (req.url === "/") {
    res.write("Welcome to our home page");
  } else if (req.url === "/about") {
    res.write("This is our team");
  } else {
    //   res.end("this is it");
    res.write(
      `
  <h1>Oops!!</h1>
  <p>The resourse you are looking for has been moved or does not exist...</p>
  <a href='/'>Back Home</a><br />
  Copyright: Vusi Molapisi
  `
    );
  }
  res.end();
});
server.listen(5000);
