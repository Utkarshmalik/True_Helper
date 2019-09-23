// Import libraries for making a component
import React from 'react';
import { View, Image, Text } from 'react-native';


// Make a component
const Sleep = () => {

  const { viewStyle, waterlevel } = styles;


  return (
    <View
      style={viewStyle}>
      <View style={waterlevel}>
        <Image source={require('../../../images/sleep.png')} />
      </View>
      <Text style={{fontSize: 20}}>6 hr 50 min</Text>
      <Text style={{fontSize: 15}}>1 hr 10 min left</Text>
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
export { Sleep };
