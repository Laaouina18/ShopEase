import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawNavigation from './DrawNavigation';
import CoursScreen from '../screens/CoursScreen'; 
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Navbar = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='DrawNavigation'
        screenOptions={{
          headerTintColor: 'black'
        }}
      >
        <Stack.Screen
          name='Catalogue'
          component={DrawNavigation}
		  options={{ headerShown: false }}
        />
        <Stack.Screen
          name='CoursScreen'
          component={CoursScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navbar;
