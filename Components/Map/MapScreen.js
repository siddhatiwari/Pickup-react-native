import React, { Component } from 'react';
import { 
	StyleSheet, 
	Text, 
	View 
} from 'react-native';
import Map from '../Map/Map'
import CurrentLocationButton from './CurrentLocationButton'

export default class MapScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Map />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
