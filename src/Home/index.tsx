/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
// import {Check, ChevronDown, ChevronUp} from '@tamagui';
import {ChevronRight} from '@tamagui/lucide-icons';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Stack, YStack, styled} from 'tamagui';
import {Button, ScrollView} from '../components';
import {useNavigation} from '@react-navigation/native';

const HomeNavigateBtn = styled(Button, {
  fontSize: '$7',
  w: '100%',
  jc: 'space-between',
  iconAfter: <ChevronRight size={'$1'} />,
  fontWeight: '$6',
});

const Home = () => {
  const navigation = useNavigation<any>();
  const {bottom} = useSafeAreaInsets();
  return (
    <Stack f={1} bg={'#fff'} mt={'$1'}>
      <ScrollView flexGrow={1}>
        <YStack space="$3" padding={'$3'} fg={1} ai="center" pb={bottom}>
          <HomeNavigateBtn
            onPress={() => navigation.navigate('Common')}
            // variant="outlined"
            scaleSpace={0.5}
            theme="primary">
            Common
          </HomeNavigateBtn>
        </YStack>
      </ScrollView>
    </Stack>
  );
};

export default Home;
