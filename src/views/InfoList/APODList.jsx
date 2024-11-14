import { View, Text, SafeAreaView, Pressable, Animated } from 'react-native';
import React, { useState, useRef } from 'react';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { getAPOD } from '../../../lib/APIs/NasaAPI';
import styles from './style';
import DateText from '../../components/DateText/DateText';
import APODItem from '../../components/APODItem.jsx/APODItem';

const APODList = () => {
  const [range, setRange] = useState({
    startDate: dayjs(),
    endDate: undefined
  });
  const [isVisible, setIsVisible] = useState(false);
  
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
    setIsVisible(true);
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start(() => setIsVisible(false));
  };

  const groupTwo = (arr) => {
    let grouped = [];
    for (let i = 0; i < arr.length; i += 3) {
      grouped.push(arr.slice(i, i + 3));
    }
    return grouped;
  };

  return (
    <SafeAreaView>
      <Pressable style={{ backgroundColor: '#445', height: 50 }} onPress={async () => {
        /* const req = await getAPOD('2024-10-06', '2024-10-10'); */
      }}>
        <Text>sadasds</Text>
      </Pressable>
      <View style={styles.dateTextContainer}>
        <DateText date={range.startDate.format('YYYY-MM-DD')} />
        <DateText date={range.endDate ? range.endDate.format('YYYY-MM-DD') : 'End Date'} />
      </View>
      <Pressable style={styles.dateButton} onPress={() => {
        isVisible ? fadeOut() : fadeIn();
      }}>
        <Text style={styles.dateButtonText}>{!isVisible ? 'Choose a date' : 'X'}</Text>
      </Pressable>
      {isVisible && (
        <Animated.View style={[styles.datePickerContainer, { opacity: fadeAnim }]}>
          <View style={styles.datePicker}>
            <DateTimePicker
              headerContainerStyle={{ backgroundColor: '' }}
              mode="range"
              disabledDates={['2025']}
              initialView="month"
              startDate={range.startDate}
              endDate={range.endDate}
              onChange={({ startDate, endDate }) => { setRange({ startDate, endDate }) }}
            />
          </View>
        </Animated.View>
      )}
      <View style={styles.APODList}>
        {
          groupTwo([1,2,3,4,5]).map((APOD)=>
            (
              <View style={{flexDirection: 'column', width: '50%'}}>
                {
                  APOD.map((item) => (
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                      <APODItem/>
                    </View>
                  ))
                }
              </View>
            )
          )
        }
      </View>
    </SafeAreaView>
  );
};

export default APODList;
