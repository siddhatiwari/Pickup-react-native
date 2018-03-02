import React, { Component } from 'react';
import {
	Stylesheet,
	Text,
	View
} from 'react-native'

export default class MessagesScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    headerLeft: <Text onPress={() => 
  this.props.navigation.navigate('DrawerOpen')}>Menu</Text>
  };

	render() {
		return (
			<View backgroundColor='yellow'>
				<Text> Messages </Text>
			</View>
		);
	}
}
