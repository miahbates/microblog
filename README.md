# [Founders and Coders](https://www.foundersandcoders.com/) (apprenticeship) 

## Moo-Net 🐮

*Co-authored with [Orian](https://github.com/OrianP) and [Oli](https://github.com/duckRabbitPy).*

A microblogging website dedicated to cows, where you can add your latest cow updates.

_[Deployed version here!](https://moo-net.herokuapp.com/)_

<img width="1405" alt="Screenshot 2022-06-25 at 21 16 46" src="https://user-images.githubusercontent.com/78933903/175789307-df84445d-bce4-4f4c-9141-f2112de45796.png">

## Team members
- Oli: Scrum master/Facilitator/UX and UI
- Orian: DevOps
- Miah: Quality Assurance

## How to install 🛠️
- Git clone `https://github.com/miahbates/microblog`
- Run command `npm install` in terminal.
- Start sever run command `npm run dev`.
- Run cypress testing run command `npm run test`.
- Or can access locally on _[localhost:3000](http://localhost:3000/)_

## User Stories :busts_in_silhouette:
### Core 
- [x] As an opinionated person, I want to: post my thoughts so others can read them
- [x] As a bored person, I want to: read what other people have posted
### Stretch 
- [x] As an impulsive person, I want to: delete my posts so no one can see them anymore
      Acceptance Criteria
- [x] A page with a form to submit posts, and a page showing all posts
- [x] No .html files (all HTML responses should be created dynamically within Node)
- [x] No client-side JavaScript (all logic should happen on the server)
- [x] All static assets served correctly (CSS, favicon etc)
- [x] Tests for each server route
- [x] A responsive, mobile-first design
- [x] Ensure your app is accessible to as many different users as possible

## Features: 🌟
* Add, delete post functionality implemented.
* Date displayed on all posts.
* Most recently post displayed first.
* Custom 404 page.
* Mobile first design.
* Deployed on heroku.

## Learning 🌱
* We can create a web server that responds to http requests.
* We can conditionally set ports for our server based on the runtime environment.
* We can read secrets from a .env file.
* We can prevent sensitive data from being pushed to GitHub.
* We can route requests to the correct handler function(s).
* We can serve different types of files to the client.
* We can read information sent in a URL query string.
* We can handle data received from a POST request.
* We can handle streams of data sent from the client that don’t arrive all at once.
* We can give descriptive names to HTML form input fields so that it is easy to access data in the request.
* We can parse data sent via a default HTML form submission.
* We can use core Node modules.
* We can read files synchronously and asynchronously using Node’s fs module.
* We can test our code with a third party library.
* We can install libraries from npm as dev dependencies.
* We can create package.json scripts that run our tests.

## Improvements and future ideas ✨
- Project modularisation.
- A 'like button'.
- Editing posts.

















