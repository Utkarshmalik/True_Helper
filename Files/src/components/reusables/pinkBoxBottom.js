// Import libraries for making a component
import React from 'react';
import { Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


// state = {
//   caloriesBurned = 0,
//   steps: 0,
//   activeTime = 0,
// };

// Make a component
const PinkBoxBottom = () => {
const {  viewStyle,} = styles;




  return (
    <LinearGradient

      locations={[0.5, 1]}
      colors={['#93114b', '#131e49']}
      style={viewStyle}>
      <View style={{ flex: 1,alignItems: 'center' }}>
      <View style={{height: 70, width: 70, backgroundColor: 'white', borderRadius: 50, marginBottom: 7, justifyContent: 'center', alignItems: 'center'}}>
      <AnimatedCircularProgress
  size={69}
  width={6}
  fill={60}
  rotation={0}
  tintColor="#00e0ff"
  onAnimationComplete={() => console.log('onAnimationComplete')}
  backgroundColor="#3d5875" >
  {
      (fill) => (
        <Image source={require('../../../images/fire.png')} />
  )}</AnimatedCircularProgress>
      
      
        </View>
      <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>1856</Text>
      <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>cals</Text>
      </View>
      <View style={{ flex: 2 ,alignItems: 'center' }}>
      <View style={{height: 100, width: 100, backgroundColor: 'white', borderRadius: 50, marginBottom: 7, justifyContent: 'center', alignItems: 'center'}}>
      <AnimatedCircularProgress
  size={99}
  width={6}
  fill={50}
  rotation={0}
  tintColor="#00e0ff"
  onAnimationComplete={() => console.log('onAnimationComplete')}
  backgroundColor="#3d5875" >
  {
      (fill) => (
        <Image source={require('../../../images/steps.png')} />
  )}</AnimatedCircularProgress>
      </View>
      <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>4565</Text>
      <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>steps</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center'}}>
      <View style={{height: 70, width: 70, backgroundColor: 'white', borderRadius: 50, marginBottom: 7, justifyContent: 'center', alignItems: 'center'}}>
      <AnimatedCircularProgress
  size={69}
  width={6}
  fill={40}
  rotation={0}
  tintColor="#00e0ff"
  onAnimationComplete={() => console.log('onAnimationComplete')}
  backgroundColor="#3d5875" >
  {
      (fill) => (
        <Image source={require('../../../images/lightning.png')} />
  )}</AnimatedCircularProgress>
      </View>
      <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>45</Text>
      <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>minutes</Text>
      </View>

    </LinearGradient>
  );
};

const styles = {
  viewStyle: {
    //  backgroundColor: 'pink',
    justifyContent: 'flex-start',
    height: 200,
    flex: 1,
    elevation: 5,
    borderWidth: .2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20
  },
}

// Make the component available to other parts of the app
export { PinkBoxBottom };
