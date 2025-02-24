import { View, Text, SafeAreaView, Pressable, Animated, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { getAPOD } from '../../../lib/APIs/NasaAPI';
import styles from './style';
import DateText from '../../components/DateText/DateText';
import APODItem from '../../components/APODItem.jsx/APODItem';

const APODList = ({navigation}) => {
  const [range, setRange] = useState({
    startDate: undefined,
    endDate: undefined,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [APODLists, setAPODList] = useState([]);
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
  }, []);


  return (
    <View style={{flex: 1}} onStartShouldSetResponder={() => {
      if (isVisible) {
        fadeOut();
        return true;
      }
      return false;
    }}>
      <SafeAreaView style={styles.APODList}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>OurUniverse</Text>
        </View>
        <Pressable style={styles.searchButton} onPress={async () => {
          if (range.endDate == undefined) {
            fadeOut();
            setLoading(true);
            const req = await getAPOD(range.startDate.format('YYYY-MM-DD'),range.startDate.format('YYYY-MM-DD'));
            setLoading(false);
            setAPODList(req);
          }else{
            fadeOut();
            setLoading(true);
            const req = await getAPOD(range.startDate.format('YYYY-MM-DD'), range.endDate.format('YYYY-MM-DD'));
            setLoading(false);
            setAPODList(req);
          }
        }}>
          <Text style={styles.searchButtonText}>Search Astronomy Picture of the Day</Text>
        </Pressable>
        <Pressable style={styles.dateTextContainer}onPress={() => {
          isVisible ? fadeOut() : fadeIn();
        }}>
          <DateText date={range.startDate ? range.startDate.format('YYYY-MM-DD') : 'Start Date'} />
          <DateText date={range.endDate ? range.endDate.format('YYYY-MM-DD') : 'End Date'} />
        </Pressable>
        {isVisible && (
          <Animated.View style={[styles.datePickerContainer, { opacity: fadeAnim }]}>
            <View style={styles.datePicker}>
              <DateTimePicker
                headerContainerStyle={{ backgroundColor: '' }}
                mode="range"
                initialView="month"
                startDate={range.startDate}
                endDate={range.endDate}
                maxDate={dayjs()}
                onChange={({ startDate, endDate }) => { setRange({ startDate, endDate })}}
                selectedItemColor="#9381ff"
              />
            </View>
          </Animated.View>
        )}

        <ScrollView>
          {
            groupTwo(APODLists).map((APOD)=>
              (
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center'}} key={APOD.id}>
                  {
                    APOD.items.map((item) => (
                      <Pressable 
                        style={{flexDirection: 'column', justifyContent: 'center', width: '50%',alignItems: 'center'}} 
                        key={item.date}
                        onPress={()=>{
                          navigation.navigate('infoAPOD', item);
                        }}
                        >
                          <APODItem title={item.title} date={item.date} explication={item.explanation} key={item.id}/>
                      </Pressable>
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
    </View>
  );
};

export default APODList;
