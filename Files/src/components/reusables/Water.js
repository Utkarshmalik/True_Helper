// Import libraries for making a component
import React from 'react';
import { View, Image, Text } from 'react-native';


// Make a component
const Water = () => {

  const { viewStyle, waterlevel } = styles;


  return (
    <View
      style={viewStyle}>
      <View style={waterlevel}>
        <Image source={require('../../../images/bottle.png')} />
      </View>
      <Text style={{fontSize: 20}}>1000 ml</Text>
      <Text style={{fontSize: 15}}>600 ml left</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    height: 10,
    marginVertical: 25,
    flex: 1,
    flexDirection: 'row',
    flexDirection: 'column',
    alignItems: 'center',
  },
waterlevel: {
  
},

};

// Make the component available to other parts of the app
export { Water };
