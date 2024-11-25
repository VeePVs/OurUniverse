import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';

const APODItem = ({title,date,explication}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.text} numberOfLines={2}>{title}</Text>
        <Text numberOfLines={4} style={styles.explication}>{explication}</Text>
    </View>
  );
};

export default APODItem;
