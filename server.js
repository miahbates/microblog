const { request, response } = require("express");
const express = require("express");
const server = express();

// array of posts
let postsArray = [{"user-name": "Orian", "message": "First Moo!"}, {"user-name": "Oli", "message": "Second Moo!"}];
console.log(`Array ${postsArray.length}`);

let cowPost = '';
let cowPostList = '';

// serve homepage with existing posts and form
server.get("/", (request, response) => {
  cowPostList = '';

  postsArray.forEach((post) => {
    cowPost = 
        `<li>
            <div>
                <p>Username: ${post["user-name"]}</p>
                <p>Message: ${post["message"]}</p>
            </div>
        </li>`;

    cowPostList += cowPost;
  });

  const form = 
    `<form method="POST">
        <label for="user-name">Username</label>
        <input required id="user-name" type="text" name="user-name" />
        <label for="message">Cow-post</label>
        <input required id="message" type="text" name="message" />
        <input required value="send cow-post!" type="submit" />
    </form>`;

  const html = 
  `<!DOCTYPE html>
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
    <ul>${cowPostList}</ul>
    </body>
    </html>`;

  response.send(html);
});

// get body parser to parse request body
const bodyParser = express.urlencoded();

// create new cowPost from user post
// add cowPost to the postsArray 
server.post("/", bodyParser, (request, response) => {
  cowPost = request.body;
  postsArray.push(cowPost);
  response.redirect("/");
});

const PORT = 3000;
server.listen(PORT, () => console.log(`listening on ${PORT}`));