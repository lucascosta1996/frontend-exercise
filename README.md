# UP9 Frontend Developer Exercise

### Engineering assumptions

There's a lot more to do on the UI components that were built in this exercise. The main goal in this 3-hour exercise was to build the UI components according to the page design, to make them responsive, and to create the functionalities asked.

### Solution thought process

Each component has its single responsibility, so this way is easier to scale the app in the future. I used  *React.js* for creating the UI components, *styled-components* for creating the UI components' style, and *miragejs* for handling the data.

### What you would do differently in a production environment

I would use the *flux* architecture for handling global data, would document all the UI components in the *storybook*, would create a REST API to use as a middleware for handling data that comes from a database, and would write unit tests for every single component and functionality.

### Parts not handled/not handled optimally on purpose and why

Performance features(not handled optimally), unit testing (not handled), and REST API (not handled optimally), because the goal was to complete the main functionalities and design.

## Installation instructions

First, make sure you have the latest version of Node.js up and running. 
If you don't, please follow the instructions on the official website: https://nodejs.org/en/

As soon as you have Node.js installed, open a terminal and move to the folder you have this project stored:

```
cd up9fe-test
```
Then you should be able to install the project dependencies by typing the following:

```
npm install
```

Wait a few moments, when the installation is complete, you should be able to start the project by typing:
```
npm start
```

When the project is up and running, it should be running in the url *localhost:/3000*. You can check by typing it in your web browser.

For running unit tests, type the following in your terminal:

```
npm run test
```

Then type *a* for running all tests.

Lucas Alves Costa - 4/2/2021