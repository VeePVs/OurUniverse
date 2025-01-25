import {View, Text, SafeAreaView, Image, ScrollView, Pressable} from 'react-native';
import React, { useState } from 'react';
import {styles} from './styles';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const InfoAPOD = ({route}) => {
  const {title, url, hdurl, date, explanation, copyright} = route.params;
  const [isHD,setIsHD] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.containerImage}>
            <Animated.Image source={{uri: isHD ? hdurl : url}} style={[styles.image]} />
            <Pressable style={styles.buttonHD} onPress={() => {
              setIsHD(!isHD);
            }}>
              <Text style={styles.buttonHDText}>{isHD ? 'noHD' : 'HD'}</Text>
            </Pressable>
            <Pressable style={styles.fullScreenButton}>
              <Text style={styles.fullScreenText}>[  ]</Text>
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
