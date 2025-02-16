# This is a combined repo for all of my N320 projects

**NOTE**
_To access week 5, select the week5 directory_

## Week 5 - Basic Web Server

#### Summary of Assignment

This project uses a Node.js HTTP server to serve two different web pages from different requested URLs.

- HTTP Server listening on fallback port `http://localhost:5445`

* Two web pages
  - index.html: welcome message and link to about.html
  * about.html: information about the project and link back to index
* nav element to allow for switching pages
* Frontend JS to set light/dark mode from a button click
* Static Resource serve: image on index.html
* Path and fs for file management and content serving

## Key Takeaways

#### Promises

Promises are JS objects that manage asynchronous code execution.

- Three states
  - Pending (initial state)
  - Fulfilled (sucessful completion)
  - Rejected (failed)

Ensures that async operations are completed predictably.

- To use promises
  - Use a promise constructor
    - Resolve (to fulfill)
    - Reject (indicates failure)
  - .then to handle successful operation
  - .catch to handle errors
  - .finally to clean up code at the end of a promise

#### Async/await

- Returns a promise
- more readable asynchronous code

* mark function as async
* use await to pause execution until Promise is completed (resolve or reject)
  - eliminates the need for .then
* use try/catch block

#### HTTP Web Server

- Listens for HTTP requests
- Event-driven

- Built-in module
- `http.createServer()`
- Handle requests and send responses
- Listen on a port (5445)
