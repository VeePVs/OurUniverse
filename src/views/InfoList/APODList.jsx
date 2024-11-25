import { View, Text, SafeAreaView, Pressable, Animated, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
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
  const [APODList, setAPODList] = useState([]);
  const [isLoading, setLoading] = useState(false);
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
    let idCounter = 1;
  
    for (let i = 0; i < arr.length; i += 2) {
      grouped.push({
        id: idCounter,
        items: arr.slice(i, i + 2),
      });
      idCounter++;
    }
    return grouped;
  };

  useEffect( () => {
    const suscribe = async () => await getAPOD();
    return suscribe;
  }, [])
  

  return (
    <SafeAreaView style={styles.APODList}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>OurUniverse</Text>
      </View>
      <Pressable style={styles.searchButton} onPress={async () => {
        if (range.endDate == undefined) {
          setLoading(true);
          const req = await getAPOD(range.startDate.format('YYYY-MM-DD'),range.startDate.format('YYYY-MM-DD'));
          setLoading(false);
          setAPODList(req);
        }else{
          setLoading(true);
          const req = await getAPOD(range.startDate.format('YYYY-MM-DD'), range.endDate.format('YYYY-MM-DD'));
          setLoading(false);
          setAPODList(req);
        }
      }}>
        <Text style={styles.searchButtonText}>Search Astronomy Picture of the Day</Text>
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
      
      <ScrollView>
        {
          groupTwo(APODList).map((APOD)=>
            (
              <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center'}} key={APOD.id}>
                {
                  APOD.items.map((item) => (
                    <View style={{flexDirection: 'column', justifyContent: 'center', width: '50%',alignItems: 'center'}} key={item.date}>
                      <APODItem title={item.title} date={item.date} explication={item.explanation} key={item.id}/>
                    </View>
                  ))
                }
              </View>
            )
          )
        }
      </ScrollView>
      {
        isLoading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="#FFF" />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        )
      }
    </SafeAreaView>
  );
};

export default APODList;
