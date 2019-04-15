# Veratrak full-stack technical challenge

This test is created for you to complete autonomously and to the best of your abilities.

Please feel free to clone the provided repo for a quick start or, alternatively, create your own repo.

## Goal

To understand your experience with components, routes and forms, please aim to complete all tasks below.

Exact timelines should be communicated by the Veratrak team, however this task should be completed in hours as opposed to several days.

## Rules

You can use Google to build the app but please avoid copy-pasting code.

Please make sure your code is straightforward to clone and run - otherwise, we can't evaluate your work.

Upload your code to a public GIT repository.

Please explain your approach in a README file.

## Tasks

### 1. Components and Routes

**Task**: Build a small app using the angular-cli:

- Create routes and components for login, movie list and movie details pages
- Upon entering any\* email address and password combination on the login page, the app should redirect to the movies list
- Create a service to get movie information, using [swapi](https://swapi.co) or a similar source for the data
- Guard the movie pages (both the list page and all details pages) and allow authenticated users only (users who clicked "login" button on the login page)

~~~~
* No need to authenticate either of these, any email and password should be accepted
~~~~

### 2. Reactive forms

**Task**: Convert the existing movie uploader form to a Reactive form:

- Include the converted form in a page component
- Create a service to post the form data
- Use the test endpoint `https://httpbin.org/post` and display the response form object in a `<pre>` tag

### 3. State management

**Task**: Please explain how you would share data

- between parent-child components
- between deeply nested components with less frequent updates
- between deeply nested components that require regular data manipulation and UI update