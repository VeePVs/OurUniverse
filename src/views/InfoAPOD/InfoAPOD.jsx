import {View, Text, SafeAreaView, Image, ScrollView, Pressable} from 'react-native';
import React, { useState } from 'react';
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
  const [isHD,setIsHD] = useState(false);

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
    <SafeAreaView style={styles.container}>
          <View style={styles.containerImage}>
            <Animated.Image source={{uri: isHD ? hdurl : url}} style={[styles.image]} />
            <Pressable style={styles.buttonHD} onPress={() => {
              setIsHD(!isHD);
            }}>
              <Text style={styles.buttonHDText}>{isHD ? 'noHD' : 'HD'}</Text>
            </Pressable>
          </View>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <ScrollView style={{height: 'auto'}}>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.explanation}>{explanation}</Text>
            {
              copyright != null
              ?
                (<Text style={styles.copyright}>Copyright: {copyright}</Text>)
              :
              null
            }
          </ScrollView>
    </SafeAreaView>
  );
};

export default InfoAPOD;
