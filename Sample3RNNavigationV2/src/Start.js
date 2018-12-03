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

              bottomTabs: {
                children: [{
                  stack: {
                    id: 'MY_STACK',
                    children: [{
                      component: {
                        name: 'navigation.Sample3RNNavigationV2.FirstMenuPage',
                        passProps: {
                          text: 'This is tab 1'
                        }
                      }
                    }],
                    options: {
                      bottomTab: {
                        text: 'Tab 1',
                        testID: 'FIRST_TAB_BAR_BUTTON'
                      }
                    }
                  }
                }]
              }          

              // stack: {
              //   id: 'MY_STACK',
              //   children: [
              //     {
              //       component: {
              //         name: 'navigation.Sample3RNNavigationV2.FirstMenuPage'
              //       },
              //     }
              //   ]
              // }
            }
          }
        }
      });
    });
  }
}
