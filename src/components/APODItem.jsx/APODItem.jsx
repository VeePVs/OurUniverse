import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';

const APODItem = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.date}>10-10-2024</Text>
        <Text style={styles.text} numberOfLines={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloremque qui sit, culpa cum odio architecto ducimus harum porro eos error esse suscipit laboriosam maiores, repellendus ratione perspiciatis. Iste, cum.</Text>
        <Text numberOfLines={4}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi ad quia iure, eius perferendis perspiciatis voluptatum reiciendis nesciunt animi deleniti asperiores est minus dignissimos? Accusantium cumque consequatur possimus nemo?</Text>
    </View>
  );
};

export default APODItem;
