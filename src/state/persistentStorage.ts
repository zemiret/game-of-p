import AsyncStorage from '@react-native-async-storage/async-storage';

export const PersistentStorage = {
  store: async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // well, what can we do?
    }
  },
  get: async (key: string): Promise<string | null> => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      // well, what can we do?
    }
    return null;
  },
  getOrDefault: async (key: string, defaultValue: string): Promise<string> => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
    } catch (e) {
      // well, what can we do?
    }
    return defaultValue;
  },
};
