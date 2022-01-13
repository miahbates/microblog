const { request, response } = require("express");
const express = require("express");
const server = express();
const staticHandler = express.static("public");
server.use(staticHandler);

// array of posts
let postsArray = [
  { "user-name": "Orian", message: "First Moo!", time: "13:20", date: "13/1/2022"},
  { "user-name": "Oli", message: "Second Moo!", time: "13:22", date: "14/1/2022"},
];

let cowPost = "";
let cowPostList = "";

// serve homepage with existing posts and form
server.get("/", (request, response) => {
  cowPostList = "";

  postsArray.forEach((post) => {
    cowPost = `<li>
            <div>
                <p> ${post.time} </p>
                <p> ${post.date} </p>
                <p>🐮 Username: ${post["user-name"]}</p>
                <p>🔔 Message: ${post["message"]} </p>
            </div>
            <form action="/delete-posts" method="POST">
              <button name="${post["user-name"]}" value="${
      post["message"]
    }">Delete me! 💩</button>
            </form>
        </li>`;

    cowPostList += cowPost;
  });

  const form = `<form method="POST">
        <label for="user-name">Username</label>
        <input required id="user-name" type="text" name="user-name" />
        <label for="message">Cow-post</label>
        <textarea required id="message" type="text" name="message"></textarea>
        <input required value="Send cow-post! 🤠" type="submit" />
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
    <img src="/moonet-logo.png" alt="moon-net cow logo">
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
  cowPost.date = getCurrDate();
  cowPost.time = getCurrTime();
  postsArray.unshift(cowPost);
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

server.use((request, response) => {
  const htmlError = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Moo-Net</title>
        <link rel="stylesheet" type="text/css" href="/404.css" />
    </head>
    <body>
    <h1>Moo! This page is not found</h1>
    </body>
    </html>`;

  response.status(404).send(htmlError);
});

function getCurrDate() {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

function getCurrTime() {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}`;
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`listening on ${PORT}`));
