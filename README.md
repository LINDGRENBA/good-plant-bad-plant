# Cultivate

## Description
An agricultural game where you try to take out the nasty weeds and leave the good plants to grow. 

## Setup
To set up this project locally, open your terminal and navigate to the directory where you would like to clone the project. Run `git clone repo-link` in your terminal.

Once the project has been cloned, run `cd cultivate` to navigate into the project. Then run `npm install` or `yarn install` to install all of the dependencies for the project.

To start the development server, run `npm start` or `yarn start`. Once the server has successfully started, open a window in your browser and navigate to the localhost. This is usually `localhost:3000`. You can confirm this is the correct Local address by checking in the terminal.

## Gameplay

### Mechanics :
Player will move automatically. Player can control direction with up, down, left and right arrows

### Components :
World
Player
Trees ??
Good plant (flower, corn, peas - choose one)
Weed plant
Timer
Buy fertilizer button
Points counter
Good plants mowed counter ?? 
Weeds mowed counter ??

### Space :
World will be entire screen
Player will be limited to the boundaries of the screen - can not move outside of the world (no consequence for hitting boundary)

### Goals :
Get x number of points OR x number of good plants before your time runs out

### Rules :
Mowing good plants decreases total points
Mowing weeds increases total points
Buying fertilizer costs points, but gives you more good plants
For every x number of good plants you get, you get x amount of time added to your timer

#### TODOS:
in setup, replace `repo-link` with the actual repo link
decide which type of good plant you are going to use
find icons for good plants and weeds
decide which numbers to put for x in: Goals and Rules above

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
