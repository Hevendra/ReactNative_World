import React, { Component } from 'react';
import { StyleSheet } from 'react-native'

import CalendarView from './src/components/CalendarView'
import Routers from './src/components/Routers'

export default class App extends Component {
  render() {
    return (
      <Routers />
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
