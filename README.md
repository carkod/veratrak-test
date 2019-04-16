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


# Response

### 1. Components and Routes

All components have been generated with Angular-cli as specified, this includes:

- "Page" components: Detail, Listing, Home, Route
- Other reusable components are in the components folder
- A very simple Login has been created without authentication
- Detail page uses routing id to get data
- One single service has been created to request data from swapi (this is not my common practice, usually I would create an entire folder and separate all different requests)


### 2. Movie-form component

I have changed `ngModel` to a more modern approach to reactive forms, which is using formControlName:

- It brings validation with just an additional function (Validators), without messing with the HTML
- You do not need to worry about getting the values in `this.fieldName` as Angular forms does this work by providing a composed object `this.form.value` (in this project)
- Still it leverages the power of ngModel, without two-way binding.

### 3. State management

As this was a project put up in a few hours, I haven't bothered to create a state architecture. This application uses simple Input biding to push and pull state from and to child and parent components using Input and Event Emitters.

However, here is my experience. Quick solution for already running projects:
- Create a service using Subjects e.g.:

`
export class CommunicatorService {

  // Observable string sources
  private announcedNotAppsSelectedSource = new Subject<string>();
}
`