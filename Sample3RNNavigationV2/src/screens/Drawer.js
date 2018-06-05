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
import { NavigationControllerManager } from '../controller/NavigationController'

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

    if(NavigationControllerManager.getSharedInstance().getActiveRootComponent().componentName !== 'FirstMenuPage') {
      Navigation.setStackRoot(NavigationControllerManager.getSharedInstance().getActiveRootComponent().componentId, {
        component: {
          name: 'navigation.Sample3RNNavigationV2.FirstMenuPage',
          options: {
            animated: true // Will animate root change same as push
          }
        }
      });
    }
  }

  menuClickAction2() {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        'left': {
          visible: false
        }
      }
    });
    if(NavigationControllerManager.getSharedInstance().getActiveRootComponent().componentName !== 'SecondMenuPage') {
      Navigation.setStackRoot(NavigationControllerManager.getSharedInstance().getActiveRootComponent().componentId, {
        component: {
          name: 'navigation.Sample3RNNavigationV2.SecondMenuPage',
          options: {
            animated: true // Will animate root change same as push
          }
        }
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Drawer!
        </Text>
        <Button title='Menu 1' onPress={() => this.menuClickAction1()} />
        <Button title='Menu 2' onPress={() => this.menuClickAction2()} />

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
