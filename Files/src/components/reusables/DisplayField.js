import React from 'react';
import {CardSection} from './CardSection';
import {Text,View} from 'react-native';


const DisplayField=({label,value})=>
{
  return(
    <View style={styles.mainComp}>
    <View>
    <Text style={styles.labelStyle}>{label}</Text>
    </View>
    <View>
    <Text style={styles.valueStyle}>{value}</Text>
    </View>
    </View>

  )

}


export default DisplayField;

const styles={
  mainComp:{
    borderWidth:1,
    padding:10,
    //alignItems:'center'
    },
    labelStyle:{
      fontSize:15,
      fontWeight:'400',
      marginLeft:5

    },
    valueStyle:{
      marginRight:15,
      fontSize:18,
      fontWeight:'600',
      alignItems:'center',
      marginLeft:5

    }
}