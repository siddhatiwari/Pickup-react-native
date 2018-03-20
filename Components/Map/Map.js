import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import { Header } from 'react-navigation';
import MapView from 'react-native-maps'; // 0.20.1
import CurrentLocationButton from './CurrentLocationButton';
import CreateEventButton from './CreateEventButton';
import MapSearchBar from './MapSearchBar';

const WINDOW_WIDTH = Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

export default class Map extends Component {
	state = {
		region: {
				latitude: 37.78825,
	      longitude: -122.4324,
	      latitudeDelta: 0.0922,
	      longitudeDelta: 0.0421,
		}
	}

  componentDidMount() {
  	this.watchID = navigator.geolocation.watchPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5,
      }
      this.onRegionChange(region);
    });
  }

  handleCreateEventButtonPress = () => {

  }

  //arrow function so proper 'this' is referenced
  handleCurrentLocationButtonPress = () => {
  	navigator.geolocation.getCurrentPosition((position) => {
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }
      //this.map.animateToRegion(region, 1);
      this.onRegionChange(region);
  	});
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
    	<View style={styles.container}> 
    		<View style={styles.container}>
	        <MapView
	        	ref={map => this.map = map}
	          style={styles.map}
	          region={this.state.region}
	          showsUserLocation={true}
	          showsMyLocationButton={false}
	          followUserLocation={true}
	          onRegionChange={this.onRegionChange.bind(this)}>
	        </MapView>
      	</View>
      	<View style={styles.mapSearchBar}>
      		<MapSearchBar />
      	</View>
        <View style={styles.currentLocationButton}>
					<CurrentLocationButton onPress={this.handleCurrentLocationButtonPress}/>
				</View>
				<View style={styles.createEventButton}>
					<CreateEventButton onPress={this.handleCreateEventButtonPress}/>
				</View>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapSearchBar: {
  	position: 'absolute',
  	marginTop: Header.HEIGHT + 5,
  	marginLeft: (WINDOW_WIDTH - (WINDOW_WIDTH * 0.8)) / 2
  },
  createEventButton: {
  	position: 'absolute',
  	bottom: 17,
  	left: WINDOW_WIDTH / 2 - 30,
  },
	currentLocationButton: {
		position: 'absolute',
		bottom: 20,
		right: 20
	},
});
