/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
// import 'react-native-gesture-handler';
import React, {Suspense, useState} from 'react';

import RootNavigation from './src';
import {TamaguiProvider} from 'tamagui';
import tamaguiConfig from './tamagui.config';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, Text, TouchableOpacity} from 'react-native';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={theme}>
      {/* <Theme name="pink"> */}
      <NavigationContainer>
        {/* if you want nice React 18 concurrent hydration, you'll want Suspense near the root */}
        <Suspense>
          <StatusBar barStyle={'light-content'} />
          <RootNavigation />
        </Suspense>
      </NavigationContainer>
      {/* </Theme> */}

      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: 'pink',
          position: 'absolute',
          height: 80,
          width: 80,
          bottom: 5,
          left: 5,
        }}
        onPress={() => setTheme(pre => (pre === 'light' ? 'dark' : 'light'))}>
        <Text>{theme}</Text>
      </TouchableOpacity>
    </TamaguiProvider>
  );
};

export default App;
