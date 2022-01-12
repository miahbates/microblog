const { request, response } = require("express");
const express = require("express");
const server = express();

//serve home url

let cowPost = "";

server.get("/", (request, response) => {
  if (cowPost) {
    cowPost = `
<div>
    <p>Username: ${cowPost["user-name"]}</p>
    <p>Message: ${cowPost["message"]}</p>
</div>
    `;
  }

  const form = `
<form method="POST">
  <label for="user-name">Username</label>
  <input required id="user-name" type="text" name="user-name" />
  <label for="message">Cow-post</label>
  <input required id="message" type="text" name="message" />
  <input required value="send cow-post!" type="submit" />
</form>
`;

  const html = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moo-Net</title>
</head>
<body>
<h1>Moo-net</h1>
${form}
${cowPost}
</body>
</html>`;

  response.send(html);
});

const bodyParser = express.urlencoded();

server.post("/", bodyParser, (request, response) => {
  cowPost = request.body;

  response.redirect("/");
});

//Get title on the homepage

const PORT = 3000;
server.listen(PORT, () => console.log(`listening on ${PORT}`));
