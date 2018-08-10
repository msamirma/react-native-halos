# React Native Demo App

## Getting Started

```
git clone https://github.com/xiaoyunyang/react-native-halos.git
npm install
npm run ios
```

To run your app on iOS:

```
react-native run-ios
```
 - or -
Open the ios/[PROJECTNAME].xcodeproj in Xcode
Hit the Run button

To run your app on Android:
* Have an Android emulator running (quickest way to get started), or a device connected

```
react-native run-android
```

## Features
* Display splash screen
* Login or signup
* New user onboarding to to enable Location Sharing, Photos, and Camera. Enabling Notification for phone.
* A chatbot interface which lets you send photos and videos and answer the chat bots questions (multiple choice).
* Gather, buffer, and transmit device data synchronously during a specified time period which is initiated and ended with a button click.
* Plot an array of geo data on a map. Interpolate and connect the dots.

# React Native Components to Leverage
## Map [react-native-maps](https://github.com/react-community/react-native-maps). [Tutorial](https://codeburst.io/react-native-google-map-with-react-native-maps-572e3d3eee14).

## Talking to Server
* [Apollo](https://www.apollographql.com/docs/react/recipes/react-native.html) and GraphQL.
* [Integrate GraphQL with Redux](https://medium.com/netscape/how-to-integrate-graphql-with-redux-in-react-native-c1912bf33120)

## Sensor Data
* [Tutorial](https://medium.com/react-native-training/using-sensors-in-react-native-b194d0ad9167)
* Geolocation - [Official Doc](https://facebook.github.io/react-native/docs/geolocation) states:
> only applies to projects made with react-native init or to those made with Create React Native App which have since ejected.

see the [guide](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md) on the Create React Native App [ejecting](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md):

> Create React Native App makes it easy to start working on React Native apps by removing native code build tools from the equation. However, many apps want functionality that comes from interfacing directly with mobile platform APIs via Java, Objective-C, Swift, C, etc. As of right now, the only way to get direct access to these APIs from your app is by "ejecting" from CRNA and building the native code yourself.
