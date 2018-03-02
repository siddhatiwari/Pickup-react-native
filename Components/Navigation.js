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
	navigationOptions: {
		headerStyle: {backgroundColor: 'green'},
		title: 'Map'
	}
})

const MessagesStack = StackNavigator({
	messagesScreen: { screen: MessagesScreen },
}, {
	headerMode: 'float',
	navigationOptions: {
		headerStyle: {backgroundColor: 'red'},
		title: 'Messages'
	}
})

const DrawerStack = DrawerNavigator({
	Messages: { screen: MessagesStack },
	Map: { screen: MapStack }
})	

// const DrawerNavigation = StackNavigator({
// 	drawerStack: { screen: DrawerStack }
// }, {
// 	headerMode: 'float',
// 	navigationOptions: ({navigation}) => ({
// 		headerStyle: { backgroundColor: 'orange'},
// 		title: "asdf"
// 	})
// })

// const PrimaryNav = StackNavigator({
// 	mapStack: { screen: MapStack },
// 	messagesStack: { screen: MessagesStack },
// 	drawerStack: { screen: DrawerNavigation }
// }, {
// 	//headerMode: 'none',
// 	title: 'Main',
// 	initialRouteName: 'mapStack'
// })

export default DrawerStack
