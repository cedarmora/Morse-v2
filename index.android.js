/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import ReactTouchEvents from "react-touch-events";

class Key extends Component {
  constructor(props) {
    super(props);
    
  }
  handleTouchStart() {
    
  }
  
  handleTouchEnd() {
    
  }
  
  render() {
    return (
      <ReactTouchEvents
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}>
        <TouchableOpacity
          style={styles.keyContainer}
          onPress={() => {}}
          activeOpacity={ 75  / 100}>
          <View style={styles.key}/>
        </TouchableOpacity> 
      </ReactTouchEvents>
    );
  }
}



class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topHalf}>
        </View>
        <View style={styles.bottomHalf}>
          <Key />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topHalf: {
    flex: 1,
  },
  
  bottomHalf: {
    flex: 1,
    justifyContent: 'center'
  },
  
  keyContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
  }, 
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  key: {
    width: 100,
    height:  100,
    borderRadius: 100/2,
    backgroundColor: 'black',
  },
});

AppRegistry.registerComponent('Project', () => Project);