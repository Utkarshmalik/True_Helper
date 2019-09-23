// Import libraries for making a component
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {Actions, Reducer} from 'react-native-router-flux';
import {Water} from './Water';
import {Sleep} from './Sleep';

// Make a component
const WhiteBox = () => {

  const { logButton, viewStyle, whiteCard } = styles;

  onLogClick=()=>
  {
    Actions.fooddetailpage();
  }

  
  return (
    <View 
    style={viewStyle}>

        <View style={whiteCard}>
            <Water/>
        </View>
            <TouchableOpacity onPress={this.onLogClick.bind(this)} style={{height: 35, width: 35, zIndex: 10, left: -13, top: 40}} >
              <Text style={logButton}>+</Text>
              </TouchableOpacity>
        <View style={whiteCard}>
            <Sleep/>
        </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    //  backgroundColor: 'pink',
    justifyContent: 'flex-start',
    height: 150,
    marginVertical: 25,
    flex: 1,
    elevation: 2,
    shadowColor: '#000',
  shadowOffset: {width: 1, height: 1},
  shadowOpacity: 0.8,
  shadowRadius: 2,
  flexDirection: 'row',
  },
  logButton: {
      color: 'white',
    fontSize:42,
    backgroundColor:'#ff1d33',
    textAlign:'center',
    width: 60,
    height: 60,
    elevation: 10,
    shadowColor: '#500',
  shadowOffset: {width: 1, height: 1},
  shadowOpacity: 0.8,
  shadowRadius: 50,
    borderRadius: 50,
    position: 'absolute',
    zIndex: 10,
  },
  whiteCard: {
      flex: 1,
      borderTopWidth: 0.7,
      borderLeftWidth: 0.2,
      borderRightWidth: 0.2,
      borderRadius: 2,
      borderColor: '#111',
      backgroundColor: 'white',
    shadowColor: '#000',
  shadowOffset: {width: 1, height: 10},
  shadowOpacity: 0.8,
  shadowRadius: 2,
  zIndex: 0,
  width: 50,
  justifyContent: 'center',
  alignItem: 'center',
  },

};

// Make the component available to other parts of the app
export { WhiteBox };
