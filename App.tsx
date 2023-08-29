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
import {TamaguiProvider, Theme} from 'tamagui';
import tamaguiConfig from './tamagui.config';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={theme}>
      <NavigationContainer>
        {/* if you want nice React 18 concurrent hydration, you'll want Suspense near the root */}
        <Suspense>
          <StatusBar barStyle={'light-content'} />
          <RootNavigation
            isDark={theme === 'dark'}
            setEnableDarkMode={isDark => setTheme(isDark ? 'dark' : 'light')}
          />
        </Suspense>
      </NavigationContainer>
    </TamaguiProvider>
  );
};

export default App;
