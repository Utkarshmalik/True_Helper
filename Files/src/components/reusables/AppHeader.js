// Import libraries for making a component
import React from 'react';
import { Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';



// Make a component
const AppHeader = (props) => {

let curTime = new Date().getHours();
var wishTimeofTheDay = 'Good Morning!';

if(curTime>12&&curTime<=17){wishTimeofTheDay= 'Good Afternoon!'};
if(curTime>17&&curTime<24){wishTimeofTheDay= 'Good Evening!'};

  onLogOut=()=>
  {
    //delete the token first and then navigate to login screen
    AsyncStorage.clear();
    Actions.auth();
  }

  return (
    
    <View style={styles.viewStyle}>
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    <View style={styles.usericon}>
      <Image style={{}} source={require('.//../../../images/usericon.png')}/>
     </View>
     <View style={styles.usertext}>
          <Text style={styles.morning}>{wishTimeofTheDay}</Text>
      <Text style={styles.username}>{props.headerText}</Text>
      </View>
       <TouchableOpacity style={styles.logoutButton} onPress={this.onLogOut.bind(this)}>
            <Text style={{fontSize: 18}}>Logout</Text>
       </TouchableOpacity>
    </View>
  );
};

const styles = {
  viewStyle: {
      flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 60,
    marginTop:30,
    // paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  usericon: {
      flex: 1,
      height: 60,
      width: 60,
      padding: 5,
  },
  usertext: {
      flex: 4,
  },
  morning: {
      fontSize: 19,
  },
  username: {
    fontSize: 26,
    lineHeight: 27,
    marginBottom: 2
  },
  logoutButton:{
    flex: 1,
  },
};

// Make the component available to other parts of the app
export { AppHeader };
