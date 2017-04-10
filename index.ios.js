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
  Text,
} from 'react-native'
const Sound = require('react-native-sound');
Sound.setCategory('Playback');

class Key extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 100,
      height:  100,
      borderRadius: 100/2,
    };
    this.sound = new Sound('beep.wav', Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        console.log('error', e)
      }
      else {
        this.sound.setSpeed(1);
      }
    });
  }

  onResponderGrant = () => {
    this.sound.play(() => this.sound.release());
    this.setState({
      width: 90,
      height: 90,
      borderRadius: 90 / 2,
    });
  }
  onResponderRelease = () => {
    this.sound.stop();
    this.setState({
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
    });
  }
  
  render() {
    return (
       <View 
         style={styles.key}
         width={this.state.width}
         height={this.state.height}
         borderRadius={this.state.borderRadius}
         onStartShouldSetResponder={() => true}
         onResponderGrant={this.onResponderGrant}
         onResponderRelease={this.onResponderRelease}
         />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  keyContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
  }, 
  
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  key: {
    backgroundColor: 'black',
  },
});

AppRegistry.registerComponent('Project', () => Project);
