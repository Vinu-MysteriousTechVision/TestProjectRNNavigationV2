/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
const { Navigation } = require('react-native-navigation');

type Props = {};
export default class Drawer extends Component<Props> {

  menuClickAction1() {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        'left': {
          visible: false
        }
      }
    });

    Navigation.setStackRoot('MY_STACK', {
      component: {
        name: 'navigation.Sample3RNNavigationV2.FirstMenuPage',
        options: {}
      }
    });
  }

  menuClickAction2() {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        'left': {
          visible: false
        }
      }
    });

    // Navigation.push('MY_STACK', {
    //   component: {
    //     name: 'navigation.Sample3RNNavigationV2.SecondMenuPage'
    //   }
    // });

    // Navigation.setStackRoot('MY_STACK', {
    //   component: {  
    //     name: 'navigation.Sample3RNNavigationV2.SecondMenuPage',
    //     options: {}
    //   }
    // });
    /*
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
          }
        }
      }
    });
    */

    Navigation.setStackRoot('MY_STACK', {
      component: { name: 'navigation.Sample3RNNavigationV2.FirstMenuPage' },
      options: {
        bottomTabs :{
          visible: false,
          animate: false,
          translucent: true,
          barStyle: 'default',
          hideShadow: true,
          drawBehind: true,
        }
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Drawer!
        </Text>
        <Button title='Menu 1' onPress={() => this.menuClickAction1()} />
        <View style={{marginTop: 50, backgroundColor: 'gray'}}>
          <Button title='Menu 2' onPress={() => this.menuClickAction2()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
