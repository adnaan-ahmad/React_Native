import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home/Home';
import Accessibility from './src/screens/Accessibility/Accessibility';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Accessibility" component={Accessibility} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}