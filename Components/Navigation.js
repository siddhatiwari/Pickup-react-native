import React from 'React';
import { Text } from 'react-native'
import {
	StackNavigator,
	DrawerNavigator
} from 'react-navigation'
import MapScreen from './Map/MapScreen'
import MessagesScreen from './Messages/MessagesScreen'	

const MapStack = StackNavigator({
	mapScreen: { screen: MapScreen }
}, {
	headerMode: 'float',
	navigationOptions: ({navigation}) => ({
		headerStyle: {backgroundColor: 'green'},
		title: 'Map',
		headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
	})
})

const MessagesStack = StackNavigator({
	messagesScreen: { screen: MessagesScreen },
}, {
	headerMode: 'float',
	navigationOptions: ({navigation}) => ({
		headerStyle: {backgroundColor: 'blue'},
		title: 'Messages',
		headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
	})
})

const DrawerStack = DrawerNavigator({
	Messages: { screen: MessagesStack },
	Map: { screen: MapStack }
})

export default DrawerStack
