import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SizableText, useProps} from 'tamagui';
import {XStack, styled, withStaticProperties} from 'tamagui';

const AppbarFrame = styled(XStack, {
  name: 'Appbar',
  tag: 'button',

  variants: {
    unstyled: {
      false: {
        backgroundColor: '$backgroundStrong',
        ai: 'center',
        jc: 'center',
      },
    },
  } as const,
  defaultVariants: {
    unstyled: false,
  },
});

const AppbarComponent = AppbarFrame.styleable((props, ref) => {
  const {top, left, right} = useSafeAreaInsets();
  const appBarProps = useProps(props);

  return (
    <AppbarFrame
      {...appBarProps}
      paddingTop={top}
      paddingHorizontal={Math.max(left, right)}
      ref={ref}
    />
  );
});

const AppbarContent = styled(SizableText, {
  fos: '$8',
  fow: '$6',
  color: '$color',
  als: 'center',
  paddingBottom: '$3',
});

const AppbarAction = styled(XStack, {
  backgroundColor: '$backgroundStrong',
});

export const Appbar = withStaticProperties(AppbarComponent, {
  Content: AppbarContent,
  Action: AppbarAction,
});
