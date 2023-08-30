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
import CommonScreen from './Common';
import {Theme} from 'tamagui';
import {useNavigation} from '@react-navigation/native';
import Appbar from '../components/Appbar';
import Icons from '../components/Icons';

const StackNav = createNativeStackNavigator();

const Root = ({
  isDark = false,
  switchDarkMode,
}: {
  isDark: boolean;
  switchDarkMode: () => void;
}) => {
  const navigation = useNavigation();

  return (
    <Theme name={'primary'}>
      <StackNav.Navigator
        screenOptions={{
          header: props => {
            return (
              <Appbar contentShouldCenter>
                {props.back && (
                  <Appbar.BackAction onPress={navigation.goBack} />
                )}
                <Appbar.Content>{props.route.name}</Appbar.Content>
                <Appbar.Action
                  fontWeight={'$6'}
                  scaleIcon={1.2}
                  icon={
                    <Icons
                      name={isDark ? 'LightbulbOff' : 'Lightbulb'}
                      size="$1"
                    />
                  }
                  onPress={switchDarkMode}
                />
              </Appbar>
            );
          },
        }}>
        <StackNav.Screen name="Home" component={HomeScreen} />
        <StackNav.Screen name="Common" component={CommonScreen} />
      </StackNav.Navigator>
    </Theme>
  );
};

export default Root;
