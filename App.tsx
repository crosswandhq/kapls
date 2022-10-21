import { StatusBar } from 'expo-status-bar';
import React, { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useRef, useState } from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { RealmContext } from '@/contexts';
import { base64ToArray, getOrInitEncryptionKey } from '@/utils';
import { useSettings } from '@/stores';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { usePreventScreenCapture } from 'expo-screen-capture';
import DropdownAlert from 'react-native-dropdownalert';
import * as ScreenCapture from 'expo-screen-capture';
import { RootStackNavigator } from '@/RootStackNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {
  usePreventScreenCapture();
  const alertRef = useRef<DropdownAlert | null>(null);
  const { RealmProvider } = RealmContext;
  const [isInitialized, setInitialized] = useState(false);
  const [isFontsLoaded] = useFonts({
    'Roka-Medium': require('./assets/fonts/roka_medium.ttf'),
    'Roka-Bold': require('./assets/fonts/roka_medium.ttf'),
  });
  const [encryptionKey, setEncryptionKey] = useState<Int8Array | null>(null);

  useEffect(() => {
    const init = async () => {
      const key = base64ToArray(await getOrInitEncryptionKey());
      await useSettings.getState().initialize();
      setEncryptionKey(key);
      setInitialized(true);
    };
    init();
  }, []);

  useEffect(() => {
    ScreenCapture.addScreenshotListener(() => {
      alertRef.current?.alertWithType(
        'error',
        '스크린샷 감지',
        '스크린샷을 감지 하였습니다. 보안을 위해 절대로 앱의 스크린샷을 다른 사람과 공유하지 마세요.'
      );
    });
  }, [alertRef]);

  useEffect(() => {
    if (isFontsLoaded && isInitialized) {
      SplashScreen.hideAsync();
    }
  }, [isFontsLoaded, isInitialized]);

  if (!isFontsLoaded || !isInitialized) {
    return <View />;
  }

  return (
    <RealmProvider encryptionKey={encryptionKey!}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <RootStackNavigator />
          {/* eslint-disable-next-line react/style-prop-object */}
          <StatusBar style='auto' />
        </NavigationContainer>
        <DropdownAlert ref={alertRef} />
      </GestureHandlerRootView>
    </RealmProvider>
  );
}
