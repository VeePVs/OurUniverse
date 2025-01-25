import React from 'react';
import { View, Text } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const ImageScreen = ({route}) => {
  const {hdurl} = route.params;
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale;
      console.log(scale.value)
    })
    .onEnd(() => {
      console.log(savedScale.value)
      scale.value = savedScale.value;
    });

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
    }));

  return (
    <GestureHandlerRootView style={{backgroundColor: '#000'}}>
      <GestureDetector gesture={pinchGesture}>
        <Animated.Image source={{uri: hdurl}} style={[{width: '100%', height: '100%', objectFit: 'contain'}, animatedStyle]}/>
      </GestureDetector>
    </GestureHandlerRootView>
    
  );
};

export default ImageScreen;
