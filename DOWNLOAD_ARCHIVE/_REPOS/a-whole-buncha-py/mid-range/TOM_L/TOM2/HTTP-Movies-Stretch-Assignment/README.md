# HTTP Movies - Stretch Assignment

* The good news here is that you've seen this all before!
* Everything should be working the way you previously had built this project, with one major difference, we are no longer sending out HTTP requests for you.
* You are now tasked to fix this very problem.

## Instructions

* **Fork** this repository, then clone your fork.
* Run `yarn` to download dependencies.
* Run the server using `yarn start` or `node server.js`.
* In a separate terminal cd into the `client` folder and run `yarn install` to download dependencies.
* Still inside the `client` folder run `yarn start` to run the client application.

### Part 1:

* Notice that in the `MoviesList` component our `componentDidMount` is missing it's guts.
* Without peeking back at the original assignment, fill this in to retrieve the list of movies once again.
* Be sure to set them on state so that your component can render the list.

### Part 2:

* Now that we have our movies rendering to the page, head over to the `Movie` component.
* Notice that our `fetchMovie` function is no longer making any HTTP Request. Fix it.
* Once again no peeking. Doing this on your own will help you out.

## Stretch Problem

* Build out a form for adding a movie to your movie list.
* You'll need a new `route` _potentially `/movie/add`_ and you'll need to mount a new component _potentially `MovieCreate`_
* Make your styles match the rest of the app.
* Consider all of the following data:

```
{
  id: 5,
  title: 'Tombstone',
  director: 'George P. Cosmatos',
  metascore: 89,
  stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
}
```

* The information found here is what you would need to pull off of a form from an input
* **NOTE** The `id` field is auto generated on the server, so you don't need to send an `id` up with your information.
