import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { IntroductionPage } from '@/pages';
import { TabNavPage } from './pages/TabNavPage';
import { useSettings } from './stores';

export type RootStackParamList = {
  Introduction: undefined;
  TabNav: undefined;
};

const { Navigator, Screen } =
  createSharedElementStackNavigator<RootStackParamList>();

export function RootStackNavigator() {
  const { isFirstOpen } = useSettings();
  return (
    <Navigator
      initialRouteName={isFirstOpen ? 'Introduction' : 'TabNav'}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name='Introduction' component={IntroductionPage} />
      <Screen name='TabNav' component={TabNavPage} />
    </Navigator>
  );
}
