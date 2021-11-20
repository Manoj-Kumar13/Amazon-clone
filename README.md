# Amazon Clone with Firebase and React

CheckOut the live Demo --> [**Click Here**](https://challenge-af234.web.app/)

![Amazon Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png)

## **Feature Highlights :**

 ### **Authentication**: *SignUp/SignIn support with firebase Authentication.*
 ### **Add To Cart**: *Add to Cart functionality with real time cart update.*
 ### **Track your Orders**: *Keep track/record of all of your previous orders.*
 ### **Card Payment**: *Online Credit/Debit card Payment is supported with fully secure Stripe(Financial services company) with card detection.*
 ### **Animation**: *Simple but attractive card animation effects.*
 ### **React Context API**: *React context API used for state management to keep it simple and everything in sync inside the application.*

 

## Get Started

First you need run **`Create React App`** in the directory you want to Create the project. Visit their website to get started with React.

[Click Here](https://reactjs.org/) to visit their website.

**NOTE: You must have node.js installed on your system along with NPM**

## Installing Dependencies

You need to Install following dependencies in order to complete this project

```Node.js

npm install @material-ui/core @material-ui/icons firebase react-router-dom

```

`React-router-dom` is responsible for the navigation in this web app.

**For Animation**
```Node.js
npm install React-flip-move
```

**For Payments**
```Node.js
npm install @stripe/stripe-js @stripe/react-stripe-js
```
 Visit thier Website for more Info --> [Stripe.com](https://stripe.com/en-in)

 ***Note: It is not mandatory to use stripe. you can use other service provider according to your need.***

**For Date/Time Fromatting**
```Node.js
npm install moment
```

**For Currency Formatting**
```Node.js
npm install react-currency-format
```

**For Cloud Functions**
```Node.js
npm install axios
```

`axios` would be responsible for the working of cloud function as well as Frontend to backend Connection. It Will handle all the payment request and act as bridge between stripe(For payment) and the application.



## Available Scripts

In the project directory, you can run:

### npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://create-react-app.dev/docs/deployment/) for more information.