# Testing Sprint Challenge

For this project you will use TDD to create a simple Web API using Node.js and Express. The basic requirements for the endpoints are listed below. Create any files and folders you need to finish the project, you have complete freedom to structure your solution to make it easier to test and extend in the future.

## Assignments

- Open the `Review.md` file and answer the questions inside.
- Use `Test Driven Development` to build a RESTful API using Node.js and Express to create and list _games_. **Data can be stored in memory using a simple JS array**. No need to keep track of incrementing `id`s for this project's MVP, that is part of the Stretch Problem.

### Download Project and Install Dependencies

1.  fork and clone this repository.
1.  **CD into the folder** where you downloaded the repository.
1.  run `yarn` or `npm i` to download all dependencies.
1.  type `yarn test` or `npm test` to run the tests. The `test` script is already configured.

### Requirements

1.  use `jest` and `supertest` to write the tests.
1.  Write the **tests BEFORE** writing the route handlers.
1.  Your API must be have `POST` and `GET` endpoints for `/games`.
1.  Write a **minimum** of three tests per endpoint.

#### POST /games

- The `POST /games` endpoint should take in an object that looks like this

  ```js
  {
    title: 'Pacman', // required
    genre: 'Arcade', // required
    releaseYear: 1980 // not required
  }
  ```

  - in the route handler, validate that the required fields are included inside the body. If the information is incomplete, return a `422` status code.
  - write tests to verify that the endpoint returns the correct HTTP status code when receiving correct and incorrect game data.

#### GET /games

- The `GET /games` endpoint should return the list of games and HTTP status code 200.
- Write a test to make sure this endpoint always returns an array, even if there are no games stored. If there are no games to return, the endpoint should return an empty array.

## Stretch Problem

The following exercises are optional, but we suggest that you tackle them if you finish the MVP early.

- validate that the game `title` is unique. If the client tries to create a duplicate game, return a status code 405 (Not Allowed). Write a test that checks for this.
- add an `id` property to the game schema and write code in the server to increment it automatically. After implementing this functionality work on the following:
  - Write a `GET /games/:id` endpoint that returns the information about a single game. Respond with a 404 status code when a game is not found for the provided `id`. Add the corresponding tests for it.
  - add a `DELETE /games/:id` endpoint that can remove the corresponding game. If the game does not exists return a 404 status code. Write tests for this endpoint.

**Remember you can use any resources you want to solve these problems, but avoid copying/pasting solutions you've previously written. Also if you don't finish all of the challenges, that's fine! Just do what you can and submit your challenges in the end! HAVE FUN!**
