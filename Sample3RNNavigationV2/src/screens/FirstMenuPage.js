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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log('componentId: ' +this.props.componentId)
  }

  async onClickPush() {
    await Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.Sample3RNNavigationV2.PushPage1',
        options: {
          topBar: {
            title: {
              text: 'Pushed 1'
            }
          },
          animations: {
            push: {
              content: {
                alpha: {
                  from: 0,
                  to: 1,
                  duration: 400, // Default value is 300 ms
                  startDelay: 100, // Default value is 0
                }
              }
            }
          }
        }
      }
    });
  }

  onClickReset() {
    Navigation.setStackRoot(this.props.componentId, {
      component: {
        name: 'navigation.Sample3RNNavigationV2.SecondMenuPage',
        options: {}
      }
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Button title='PushScreen' onPress={() => this.onClickPush()} />

        <View style={{marginTop: 50, backgroundColor: 'gray'}}><Button  title='Set Root Screen' onPress={() => this.onClickReset()} /></View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
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
