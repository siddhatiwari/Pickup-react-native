import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import MapScreen from './Components/Map/MapScreen';
import MessagesScreen from './Components/Messages/MessagesScreen'
import Navigation from './Components/Navigation'

//const store = createStore()

export default class App extends React.Component {
  render() {
    return (  
        <Navigation />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
