import { forwardRef, type Ref } from 'react';
import {
  Text as RNText,
  type TextProps as RNTextProps,
} from 'react-native';

export interface TextProps extends RNTextProps {
  bold?: boolean;
  size?: number;
}

export const Text = forwardRef((
  {
    bold,
    size,
    style,
    ...rest
  }: TextProps,
  ref: Ref<RNText>
) => {
  return (
    <RNText
      style={[
        style,
        size && { fontSize: size },
        { fontFamily: bold ? 'Roka-Bold' : 'Roka-Medium' },
      ]}
      ref={ref}
      {...rest}
    />
  );
});