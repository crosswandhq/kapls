import * as SecureStore from 'expo-secure-store';
import create from 'zustand';

export interface useSettingsState {
  isInitialized: boolean;
  isFirstOpen: boolean;
  initialize(): Promise<void>;
  setValue(key: string, value: string): Promise<void>;
  resetAll(): Promise<void>;
}

const useSettings = create<useSettingsState>((set) => ({
  isInitialized: false,
  isFirstOpen: true,
  async initialize() {
    const rawData = await Promise.all([
      SecureStore.getItemAsync('settings.isInitialized'),
      SecureStore.getItemAsync('settings.isFirstOpen'),
    ]);
    set({
      isInitialized: rawData[0] === 'true',
      isFirstOpen: JSON.parse(rawData[1] ?? 'true'),
    });
    await Promise.all([
      SecureStore.setItemAsync('settings.isInitialized', 'true'),
    ]);
  },
  async setValue(key: string, value: string) {
    await SecureStore.setItemAsync(`settings.${key}`, value);
    set({ [key]: JSON.parse(value) });
  },
  async resetAll() {
    await Promise.all([SecureStore.deleteItemAsync('settings.isInitialized')]);
  },
}));

export default useSettings;
