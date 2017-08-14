import { Navigation } from 'react-native-navigation';

import { registerScreens } from './app/screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.FirstTabScreen', // this is a registered name for a screen
      title: 'Screen One',
      icon: require('./img/one.png'),
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      title: 'Screen Two',
      icon: require('./img/one.png'),
    }
  ]
});
