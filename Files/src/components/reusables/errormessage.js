import React from 'react';
import {Text,View} from 'react-native';


const ErrorMessage=({message})=>
{
  return(
    <View style={{justifyContent:'center',flexDirection:"row", alignItems: 'center'}}>
    <Text style={styles.messageStyle}>
    {message}
    </Text>
    </View>
  )
}

export default ErrorMessage;


const styles =
{
  messageStyle:{
    flexDirection:'row',
    justifyContent:'center',
    color:"red",
    fontSize:20,
    margin:2,
  }

}