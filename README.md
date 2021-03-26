# Don't Think Just Drink

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

### Debugging

Open the developer menu on phone by one of the following methods:

- Once the app has finished building, in the same terminal that is currently running react-native (the one where command `npm start` was used), type the letter `d`.
- With the emulator window open (at least for android), hit Ctrl + M to display the developer menu.

Then select 'Debug' which should open up browser to http://localhost:8081/debugger-ui/. Otherwise manually open this up in chrome browser. Open developer tools. Use Ctrl + P to search for file and starting adding breakpoints for debugging.

## Production

Not currently deployed.

1. Create a .env file and populate environment variables. Use .env.development as example.

## Authors

Jeffrey Huang - jeffvh@outlook.com