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
import {XStack, Switch, Theme, Label} from 'tamagui';
import {useNavigation} from '@react-navigation/native';
import {Appbar} from './components/Appbar';

const StackNav = createNativeStackNavigator();

const Root = ({
  isDark = false,
  setEnableDarkMode,
}: {
  isDark: boolean;
  setEnableDarkMode: (isDark: boolean) => void;
}) => {
  const navigation = useNavigation();

  return (
    <Theme name={'primary'}>
      <StackNav.Navigator
        screenOptions={{
          header: props => {
            return (
              <Appbar>
                <Appbar.Content>{props.route.name}</Appbar.Content>
              </Appbar>
            );
          },
        }}>
        <StackNav.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerRight: () => (
              <XStack space={'$2'} spaceDirection="horizontal" ai={'center'}>
                <Label fow={'$6'} paddingRight="$0" justifyContent="flex-end">
                  Dark
                </Label>
                <Theme name={'secondary'} inverse>
                  <Switch
                    onCheckedChange={setEnableDarkMode}
                    checked={isDark}
                    size="$2">
                    <Switch.Thumb
                      backgroundColor={'$color'}
                      animation="quick"
                    />
                  </Switch>
                </Theme>
              </XStack>
            ),
          }}
        />
        <StackNav.Screen name="Common" component={CommonScreen} />
      </StackNav.Navigator>
    </Theme>
  );
};

export default Root;
