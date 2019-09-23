import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return(
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={(text)=>onChangeText(text)}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    minWidth: 350,
    alignContent: 'stretch',
    flex: 1
  },
  labelStyle: {
    fontSize: 17,
    paddingLeft: 5,
    color: '#777',
    flex: 1
  },
  containerStyle: {
    height: 70,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    margin: 2
  }
};

export { Input };
