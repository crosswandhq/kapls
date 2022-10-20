import { ViewProps, View, OpaqueColorValue } from 'react-native';

export interface DividerProps extends ViewProps {
  color?: string | OpaqueColorValue;
  thickness?: number;
  vertical?: boolean;
}

export function Divider({
  color,
  thickness,
  vertical,
  style,
  ...rest
}: DividerProps) {
  return (
    <View
      style={[
        {
          borderColor: color ?? 'grey',
        },
        vertical
          ? {
              borderLeftWidth: thickness ?? 0.5,
              width: 0,
            }
          : {
              borderTopWidth: thickness ?? 0.5,
              height: 0,
            },
        style,
      ]}
      {...rest}
    />
  );
}
