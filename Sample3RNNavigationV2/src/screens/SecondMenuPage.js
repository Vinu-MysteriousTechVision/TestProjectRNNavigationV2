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
export default class SecondAppPage extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log('componentId: ' +this.props.componentId)
    NavigationControllerManager.getSharedInstance().setActiveRootComponentId(this.props.componentId, 'SecondMenuPage')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Second App Page!
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
