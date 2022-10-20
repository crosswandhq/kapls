import { View, ViewProps } from 'react-native';

export interface SpacerProps extends ViewProps {
  width?: number,
  height?: number,
}

export function Spacer({
  width,
  height,
  style,
  ...rest
}: SpacerProps) {
  return (
    <View
      style={[
        { width: width ?? 0, height: height ?? 0 },
        style
      ]}
    />
  );
}
