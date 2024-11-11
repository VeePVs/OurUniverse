import { View, Text, SafeAreaView, Pressable } from 'react-native';
import React from 'react';
import { getAPOD } from '../../../lib/APIs/NasaAPI';

const InfoList = () => {

  return (
    <SafeAreaView>
      <Text>Prueba</Text>
      <Pressable style={{backgroundColor: '#445', height:50}} onPress={async ()=> {
        const req = await getAPOD('2024-10-06', '2024-10-10');
      }}>
        <Text>
            Prueba
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default InfoList;
