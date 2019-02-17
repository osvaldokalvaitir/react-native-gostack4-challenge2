import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];
  const tron = Reactotron.configure({ host: scriptHostname })
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
