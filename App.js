/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FetchLocation from './components/FetchLocation';
//import UsersMap from './components/UsersMap';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      lat: 0,
      long: 0
    }
  }
  getPosition(){
    this.setState(prevState=>({
      pos: prevState.pos+1
    }));
  }
  getUserLocationHandler=()=> {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude
      });
    }, err => console.log(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Lat = {this.state.lat} and Long = {this.state.long}</Text>
        <FetchLocation onGetLocation={this.getUserLocationHandler}/>
       
      </View>
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
