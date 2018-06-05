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
  View
} from 'react-native';
import { NavigationControllerManager } from '../controller/NavigationController'

type Props = {};
export default class SecondPage extends Component<Props> {

  componentDidMount() {
    NavigationControllerManager.getSharedInstance().setActiveRootComponentId(undefined, 'SecondPage')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          SecondPage!
        </Text>
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
