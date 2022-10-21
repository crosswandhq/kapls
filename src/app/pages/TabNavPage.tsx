import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage } from './tabs';

export type TabNavParamList = {
  Home: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<TabNavParamList>();

export function TabNavPage() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='Home' component={HomePage} />
    </Navigator>
  );
}
