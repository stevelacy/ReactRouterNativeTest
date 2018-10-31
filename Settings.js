import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Settings extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return <View style={styles.container}>
      <Text>Settings</Text>
      <Text>{this.props.location.state.user.name}</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});
