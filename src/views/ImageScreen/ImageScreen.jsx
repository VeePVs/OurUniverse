import React from 'react';
import { View, Text } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const ImageScreen = ({title,url}) => {
  return (
    <View>
        <GestureDetector>
            <Animated.Image source={{uri: url}}/>
        </GestureDetector>
    </View>
  );
};

export default ImageScreen;
