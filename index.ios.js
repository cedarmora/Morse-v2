/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native'

class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topHalf}>
        </View>
        <View style={styles.bottomHalf}>
          <TouchableHighlight
            style={styles.keyContainer}
            onPress={() => {}}
            activeOpacity={75 / 100}
            underlayColor={"rgb(210,210,210)"}>
            <Image 
              style={styles.key}
              resizeMode={"contain"}
              source={require('./blackbox.jpeg')}
            />
          </TouchableHighlight>
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
    borderRadius: 50,
  },
});

AppRegistry.registerComponent('Project', () => Project);
