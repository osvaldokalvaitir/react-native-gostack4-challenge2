import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
  const tron = Reactotron.configure({ host: scriptHostname }).connect();

  tron.clear();

  console.tron = tron;
}
