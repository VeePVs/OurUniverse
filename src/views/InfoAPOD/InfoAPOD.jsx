import {View, Text, SafeAreaView, Image, ScrollView, Pressable} from 'react-native';
import React, { useState } from 'react';
import {styles} from './styles';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

const InfoAPOD = ({route}) => {
  const {title, url, hdurl, date, explanation, copyright} = route.params;
  const [isHD,setIsHD] = useState(false);
  const navigation = useNavigation();
  const scaleHD = useSharedValue(1);
  const scaleFullScreen = useSharedValue(1);

  const animatedStyleHD = useAnimatedStyle(() => ({
    transform: [{ scale: scaleHD.value }],
  }));

  const animatedStyleFullScreen = useAnimatedStyle(() => ({
    opacity: scaleFullScreen.value,
  }));

  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.containerImage}>
            <Animated.Image source={{uri: isHD ? hdurl : url}} style={[styles.image]} />
            <Pressable
              style={styles.buttonHD}
              onPress={() => setIsHD(!isHD)}
              onPressIn={() => (scaleHD.value = withSpring(0.8))}
              onPressOut={() => (scaleHD.value = withSpring(1))}>
              <Animated.View style={animatedStyleHD}>
                <Text style={styles.buttonHDText}>{isHD ? 'noHD' : 'HD'}</Text>
              </Animated.View>
            </Pressable>
            <Animated.View style={[styles.fullScreenButton,animatedStyleFullScreen]}>
              <Pressable
                onPress={() => navigation.navigate('ImageScreen', { title, url, hdurl })}
                onPressIn={() => (scaleFullScreen.value = withSpring(0.6))}
                onPressOut={() => (scaleFullScreen.value = withSpring(1))}>
                  <Text style={styles.fullScreenText}>[  ]</Text>
              </Pressable>
            </Animated.View>
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
