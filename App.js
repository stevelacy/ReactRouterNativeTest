/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Router } from 'react-router-native'
import { Navigation, Card } from 'react-router-navigation'
import createHistory from 'history/createMemoryHistory'
import {
  TouchableOpacity,
  StyleSheet,
  Platform,
  Text,
  View
} from 'react-native';
import Page from './Page'
import Settings from './Settings'

const history = createHistory()

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  navigate(props) {
    props.history.push('/page', { user: { username: 'jack' } })
  }
  render() {
    return <Router history={history}>
      <Navigation>
        <Card
          exact
          path='/'
          render={(props) =>
            <View style={styles.container}>
              <TouchableOpacity onPress={() => this.navigate(props)}>
                <Text>Go to Page</Text>
              </TouchableOpacity>
            </View>
          } />
        <Card
          path='/page'
          component={Page} />
        <Card
          path='/settings'
          component={Settings} />
      </Navigation>
    </Router>
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
