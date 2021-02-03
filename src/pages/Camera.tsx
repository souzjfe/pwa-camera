//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';


// create a component
const Camera = () => {
  // if (await Camera.isAvailableAsync()) {
  // }
  return (
    <View style={{flex: 1}}>
      <ExpoCamera style={{flex:1}}/>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Camera;
