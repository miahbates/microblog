const { request, response } = require("express");
const express = require("express");
const server = express();
const staticHandler = express.static("public");
server.use(staticHandler);

// array of posts
let postsArray = [
  { "user-name": "Orian", message: "First Moo!" },
  { "user-name": "Oli", message: "Second Moo!" },
];

let cowPost = "";
let cowPostList = "";

// serve homepage with existing posts and form
server.get("/", (request, response) => {
  cowPostList = "";

  postsArray.forEach((post) => {
    cowPost = `<li>
            <div>
                <p>🐮 Username: ${post["user-name"]}</p>
                <p>🔔 Message: ${post["message"]} </p>
            </div>
            <form action="/delete-posts" method="POST">
              <button name="${post["user-name"]}" value="${post["message"]}">Delete me! 💩</button>
            </form>
        </li>`;

    cowPostList += cowPost;
  });

  const form = `<form method="POST">
        <label for="user-name">Username</label>
        <input required id="user-name" type="text" name="user-name" />
        <label for="message">Cow-post</label>
        <input required id="message" type="text" name="message" />
        <input required value="send cow-post! 🤠" type="submit" />
    </form>`;

  const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Moo-Net</title>
        <link rel="stylesheet" type="text/css" href="/style.css" />
        <link rel="icon" type="image/png" href="/moonet-logo.png" />
    </head>
    <body>
    <h1>Moo-net</h1>
    <img src="/moonet-logo.png">
    <h2>A blog site like no udder!</h2>
    <section>
    ${form}</section>
    <ul>${cowPostList}</ul>
    <footer>Support us!</footer>
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

server.post("/delete-posts", bodyParser, (request, response) => {
  const userName = Object.keys(request.body)[0];
  const message = Object.values(request.body)[0];

  // filter non matching post to remain
  postsArray = postsArray.filter(
    (post) => post["user-name"] !== userName && post["message"] !== message
  );
  response.redirect("/");
});

const PORT = 3000;
server.listen(PORT, () => console.log(`listening on ${PORT}`));
