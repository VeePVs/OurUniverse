import { View, Text, SafeAreaView,   } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import APODList from './src/views/InfoList/APODList';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InfoAPOD from './src/views/InfoAPOD/InfoAPOD';
import ImageScreen from './src/views/ImageScreen/ImageScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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

function StackScreens(){
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tabNavigator"
        component={MyTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="infoAPOD"
        component={InfoAPOD}
        options={{
          headerTitle: 'APOD details',
          headerStyle: {backgroundColor: '#52154e'},
          headerTitleStyle: {color: '#efe9e7', fontWeight: '800'},
          headerTintColor: '#efe9e7',
        }}
      />
      <Stack.Screen
        name="ImageScreen"
        component={ImageScreen}
        options={{
          headerTitle: 'Full image',
          headerStyle: {backgroundColor: '#52154e'},
          headerTitleStyle: {color: '#efe9e7', fontWeight: '800'},
          headerTintColor: '#efe9e7',
        }}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <StackScreens />
    </NavigationContainer>
  );
};

export default App;
