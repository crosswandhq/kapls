import { Spacer, Text, TextProps } from 'palette';
import { StyleSheet, ViewStyle } from 'react-native';
import {
  TouchableOpacity,
  View,
  type TouchableOpacityProps,
  OpaqueColorValue,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StyleProp } from 'react-native';
import { TextStyle } from 'react-native';

export interface ButtonProps extends
  Omit<TouchableOpacityProps, 'style'>, Omit<TextProps, 'style'> {
  label?: string,
  icon?: string,
  size?: number,
  reverse?: boolean,
  color?: string | OpaqueColorValue,
  viewStyle?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
};

export function Button({
  label,
  icon,
  size,
  reverse,
  color,
  viewStyle,
  textStyle,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      {...rest}
    >
      <View style={[
        styles.container,
        reverse && { flexDirection: reverse ? 'row-reverse' : 'row' },
        viewStyle,
      ]}>
        {label &&
          <Text
            style={[
              disabled && { color: 'grey' },
              textStyle
            ]}
            {...rest}
          >
            {label}
          </Text>
        }
        {icon &&
          <>
            <Spacer width={10} />
            <Ionicons
              //@ts-ignore
              name={icon}
              size={size}
              color={disabled ? 'grey' : color}
            />
          </>
        }
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  }
});
