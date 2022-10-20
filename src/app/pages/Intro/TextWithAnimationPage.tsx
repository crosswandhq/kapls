import { Dimensions, StyleSheet, View } from 'react-native';
import Lottie from 'lottie-react-native';
import { Spacer, Text } from 'palette';

export interface TextWithAnimationPageProps {
  source: string;
  title: string;
  description: string;
}

export function TextWithAnimationPage({
  source,
  title,
  description,
}: TextWithAnimationPageProps) {
  const { width } = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <Lottie
        style={{
          width: width * 0.8,
          height: width * 0.8,
        }}
        autoPlay
        source={source}
      />
      <Spacer height={20} />
      <Text bold size={30}>
        {title}
      </Text>
      <Spacer height={20} />
      <Text
        size={17}
        style={{
          lineHeight: 25,
        }}
      >
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
