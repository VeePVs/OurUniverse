import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import InfoList from './src/views/InfoList/InfoList';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: {height:70}}}>
      <Tab.Screen name="InfoList" component={InfoList} options={{title: 'Imagen del día', tabBarLabelStyle: { fontSize: 16}}} />
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
