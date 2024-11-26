import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import React from 'react';
import { styles } from './styles';

const InfoAPOD = ({route}) => {
    const {title, url, hdurl, date, explanation, copyright} = route.params;

    return (
    <ScrollView style={styles.container}>
        <View style={styles.containerImage}>
            <Image source={{uri: hdurl}} style={styles.image}/>
        </View>
        <View style={styles.containerTitle}>
            <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.explanation}>{explanation}</Text>
        <Text style={styles.copyright}>Copyright: {copyright}</Text>
    </ScrollView>
  );
};

export default InfoAPOD;
