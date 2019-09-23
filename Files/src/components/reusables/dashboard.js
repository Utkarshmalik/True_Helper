// Import libraries for making a component
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';


// Make a component
const Dashboard = (props) => {
  const { textStyle, viewStyle } = styles;
var killHome=true;
var killLog=true;
active=()=>{

}

if(props.onPage=='home'){killHome=false};
if(props.onPage=='log'){killLog=false};
  goHome=()=>{
    if(killHome){
    Actions.profile();}
  }

  goLog=()=>{
    if(killLog)
    Actions.fooddetailpage();
  }

  active=(props)=>{
    if(props=='home'&& !killHome)
    return '#93114b';
    if(props=='log'&& !killLog)
    return '#93114b';
    return '#444'
  }

  return (
    <View style={viewStyle}>
    <View style={styles.dashOptions}>
      <TouchableOpacity style={styles.dashbox} onPress={this.goHome.bind(this)}>
       <Icon name="home" size={33} color={active('home')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.dashbox} onPress={this.goLog.bind(this)}>
      <Icon name="chart-pie" size={33} color={active('log')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.dashbox}>
      {/* <Icon name="" size={33} color="#93114b" /> */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.dashbox}>
      {/* <Icon name="" size={33} color="#93114b" /> */}
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    height: 60,
    position: 'relative',
    width:'auto'
  },
  textStyle: {
    fontSize: 20
  },
  dashOptions: {
      flexDirection: 'row',
        justifyContent: 'center',
  },
  dashbox: {
    flex: 1,
    
    backgroundColor: 'white',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

// Make the component available to other parts of the app
export { Dashboard };
