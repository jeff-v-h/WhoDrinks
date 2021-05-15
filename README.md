# Who Drinks

Simple drinking game as a mobile application. Each card dictates who drinks or what game to play.

## Getting started

### Requirements

- React Native 0.63
- Redux Toolkit 1.5

### Installation

#### Android

1. Connect phone or start an emulator.
2. Open up console to root of project and install dependencies with `npm install`.
3. Start React Native with `npm start`.
4. Open another terminal and run `npm run android`. Following a successful build, return to first CLI to see the installation
5. On successful installation, the app should begin on your phone.

## Notes for Development

- If any environment variables are changed in any .env file, you will need to stop any react-native processes and start again while also resetting cache using `npm run start-rc`.
- To connect from emulator to a local running API (such as API running on IIS via Visual Studio), target http://10.0.2.2 instead of localhost.

### Debugging

Open the developer menu on phone by one of the following methods:

- Once the app has finished building, in the same terminal that is currently running react-native (the one where command `npm start` was used), type the letter `d`.
- With the emulator window open (at least for android), hit Ctrl + M to display the developer menu.

Then select 'Debug' which should open up browser to http://localhost:8081/debugger-ui/. Otherwise manually open this up in chrome browser. Open developer tools. Use Ctrl + P to search for file and starting adding breakpoints for debugging.

## Production

### Android Release

1. Create a .env file and populate environment variables. Use .env.development as example. If going to test first on your own phone in step 2, use http instead of https for external requests, but make sure to switch back to https for deployment.
2. You can test the app on your phone by connecting via usb, making sure emulator is not running and then run `npx react-native run-android --variant=release`.
3. Update the version in package.json and android/app/build.gradle (`android.defaultConfig.versionCode` and `android.defaultConfig.versionName`).
4. Make sure the my-upload-key.keystore file exists in android/app directory.
5. Add the keystore password to android/gradle.properties for the variables `MYAPP_UPLOAD_STORE_PASSWORD` and `MYAPP_UPLOAD_KEY_PASSWORD`. DO NOT commit this into source control.
6. `cd android` && `gradlew bundleRelease`.
7. The generated Andorid App Bundle ([AAB](https://developer.android.com/guide/app-bundle)) can be found under android/app/build/outputs/bundle/release/app.aab, and is ready to be uploaded to Google Play

For more info go to the [React Native guide](https://reactnative.dev/docs/signed-apk-android).

## Authors

Jeffrey Huang - jeffrey.huang@recaura.com
