import React from 'React';
import { Text } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import MapScreen from './Map/MapScreen'
import MessagesScreen from './Messages/MessagesScreen'	

const MapStack = StackNavigator({
	mapScreen: { screen: MapScreen }
}, {
	headerMode: 'none',
})

const MessagesStack = StackNavigator({
	messagesScreen: { screen: MessagesScreen },
}, {
	headerMode: 'float',
	navigationOptions: {
		headerStyle: {backgroundColor: '#1976D2'},
		headerTintColor: 'white',
		titleStyle: {color: 'white'},
		title: 'Messages',
	}
})

const TabStack = TabNavigator({
	Map: { screen: MapStack },
	Messages: { screen: MessagesStack }
})

export default TabStack
