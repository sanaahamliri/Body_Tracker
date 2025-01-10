import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import BodyFatScreen from '../screens/BodyFatScreen';
import PhotoScreen from '../screens/PhotoScreen';
import TimelapseScreen from '../screens/TimelapseScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Body Fat" component={BodyFatScreen} />
        <Tab.Screen name="Photos" component={PhotoScreen} />
        <Tab.Screen name="Timelapse" component={TimelapseScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}