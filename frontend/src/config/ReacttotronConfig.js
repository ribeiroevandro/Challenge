if (__DEV__) {
  const Reactotron = require('reactotron-react-native').default;
  const tron = Reactotron
    .configure()
    .useReactNative()
    .connect();

  console.tron = tron;
  console.display = tron;

  tron.clear();
}
