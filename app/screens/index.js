import { Navigation } from 'react-native-navigation';


//tab screens
import Home from './Home';
import Heroes from './Heroes';
import Settings from './Settings';

//push screens
import HeroAdd from './HeroAdd';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('tab.Home', () => Home);
  Navigation.registerComponent('tab.Heroes', () => Heroes);
  Navigation.registerComponent('tab.Settings', () => Settings);
  Navigation.registerComponent('push.HeroAdd', () => HeroAdd);
}
