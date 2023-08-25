/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './Home';
import {View, H3} from 'tamagui';

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => (
          <View f={1} bg={'$background'} jc={'center'} ai={'center'} />
        ),
        headerTitle: ({children}) => (
          <H3 fontSize="$8" color="$color" fontWeight={'$7'}>
            {children}
          </H3>
        ),
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Root;
