import { forwardRef, type Ref } from 'react';
import {
  type StyleProp,
  Text as RNText,
  type TextStyle,
  type TextProps as RNTextProps,
} from 'react-native';

export interface TextProps extends RNTextProps {
  bold?: boolean;
  style?: StyleProp<TextStyle>;
}

export const Text = forwardRef((
  {
    bold,
    style,
    ...rest
  }: TextProps,
  ref: Ref<RNText>
) => {
  return (
    <RNText
      style={[
        style,
        { fontFamily: bold ? 'Roka-Bold' : 'Roka-Medium' },
      ]}
      ref={ref}
      {...rest}
    />
  );
});