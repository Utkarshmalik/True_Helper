import React, { Component } from 'react';
import { SimpleStepper } from 'react-native-simple-stepper';
 
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  valueChanged(value) {
    // Truncate value to 2 decimal places and cast as Number (like the demo).
    const nextValue = Number(value.toFixed(2));
    this.setState({ value: nextValue });
    // ...
  }
  render() {
    const { value } = this.state;
    return <SimpleStepper value={value} valueChanged={value => this.valueChanged(value)}
    style={{width:30,height:30}} />;
  }
}
 