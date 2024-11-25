import { View, Text, SafeAreaView,   } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import APODList from './src/views/InfoList/APODList';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: {height:70, backgroundColor: '#52154e'}}}>
      <Tab.Screen 
        name="InfoList" 
        component={APODList} 
        options={{
          title: 'APOD', 
          tabBarLabelStyle: { fontSize: 16, color: '#efe9e7', fontWeight: '800'}, 
          tabBarIcon: ()=>(
            <MaterialCommunityIcons name="telescope" color="#efe9e7" size={30}/>
          )
          }
        } 
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
