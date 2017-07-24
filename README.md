# React Native Firebase Authentication Template

A very basic authentication template for signing in with email/password using firebase. Error handling included. If the
user does not exist it will attempt to create one using the provided username and password. Log in will fail if user 
already exists or password is not acceptable (eg. too short).


# Installation instructions:

#### Clone and run `npm install` inside the root "auth" directory to install dependencies.

#### Insert your firebase app authentication information from console.firebase.google.com in the `App.js` file in the
#### `componentWillMount` function.

#### Enable "Email/Password" for sign-in providers in your firebase console for your app.

#### from the root directory, run `react-native run-android` or `react-native run-ios` while your emulator is open or your
#### device is connected via USB with "Debugging mode enabled via USB".

#### Enjoy!