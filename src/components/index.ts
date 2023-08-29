import {ScrollView as RNScrollView} from 'react-native';
import {styled, Button as TaButton, themeable} from 'tamagui';

/**
 * @description contentContainerStyle style is not merge, flexGrow: 1 is be lost if using inline style. Using YStack for content instead
 */
export const ScrollView = styled(RNScrollView, {
  bounces: false,
  variants: {
    fgContent: {
      true: {
        contentContainerStyle: {
          flexGrow: 1,
          backgroundColor: 'pink',
        },
      },
    },
  },
});

export const Button = styled(TaButton, {});
