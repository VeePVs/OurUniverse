import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated';

const APODItem = ({title,date,explication}) => {
    const scale = useSharedValue(1);

    const animation = useAnimatedStyle(()=>({
      transform: [{ scale: scale.value }],
    }));

    return (
    <Animated.View style={[styles.container, animation]} onTouchStart={()=>(scale.value = withSpring(0.9))} onTouchEnd={()=>(scale.value = withSpring(1))}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.text} numberOfLines={2}>{title}</Text>
        <Text numberOfLines={4} style={styles.explication}>{explication}</Text>
    </Animated.View>
    
  );
};

export default APODItem;
