import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Gesture, GestureDetector, GestureHandlerRootView} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const InfoAPOD = ({route}) => {
  const {title, url, hdurl, date, explanation, copyright} = route.params;
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

  const pinchGesture = Gesture.Pinch()
    .onUpdate(e => {
      scale.value = savedScale.value * e.scale;
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.containerImage}>
          <GestureDetector gesture={pinchGesture}>
              <Animated.Image source={{uri: url}} style={[styles.image, animatedStyle]} />
          </GestureDetector>
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.explanation}>{explanation}</Text>
        <Text style={styles.copyright}>Copyright: {copyright}</Text>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default InfoAPOD;
