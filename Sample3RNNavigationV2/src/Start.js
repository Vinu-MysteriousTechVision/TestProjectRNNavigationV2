const { Navigation } = require('react-native-navigation');
const { Platform } = require('react-native');

import Drawer from './screens/Drawer';
import FirstMenuPage from './screens/FirstMenuPage';
import SecondMenuPage from './screens/SecondMenuPage';
import PushPage1 from './screens/PushPage1';

export default class Start {

  constructor() {
    this.start()
  }

  registerScreens() {
    Navigation.registerComponent(`navigation.Sample3RNNavigationV2.Drawer`, () => Drawer);
    Navigation.registerComponent(`navigation.Sample3RNNavigationV2.FirstMenuPage`, () => FirstMenuPage);
    Navigation.registerComponent(`navigation.Sample3RNNavigationV2.SecondMenuPage`, () => SecondMenuPage);
    Navigation.registerComponent(`navigation.Sample3RNNavigationV2.PushPage1`, () => PushPage1);
  }

  start() {

    this.registerScreens();

    Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        root: {
          sideMenu: {
            left: {
              component: {
                name: 'navigation.Sample3RNNavigationV2.Drawer',
                passProps: {
                  text: 'This is a left side menu screen'
                }
              }
            },
            center: {
              stack: {
                children: [
                  {
                    component: {
                      id: 'MY_STACK',
                      name: 'navigation.Sample3RNNavigationV2.FirstMenuPage'
                    },
                  }
                ]
              }
            }
          }
        }
      });
    });
  }
}
