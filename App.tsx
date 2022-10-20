import { StatusBar } from 'expo-status-bar';
import React, { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isInitialized, setInitialized] = useState(false);
  const [isFontsLoaded] = useFonts({
    'Roka-Medium': require('./assets/fonts/roka_medium.ttf'),
    'Roka-Bold': require('./assets/fonts/roka_medium.ttf'),
  });

  useEffect(() => {
    const init = async () => {
      setInitialized(true);
    };
    init();
  }, []);

  if (!isFontsLoaded || !isInitialized) {
    return <View></View>;
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
