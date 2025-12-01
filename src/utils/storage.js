import AsyncStorage from '@react-native-async-storage/async-storage';

// Storage keys constants
export const STORAGE_KEYS = {
  USER_DATA: 'user_data',
  AUTH_TOKEN: 'auth_token',
  APP_SETTINGS: 'app_settings',
  THEME_PREFERENCE: 'theme_preference',
  LANGUAGE: 'language',
  FAVORITES: 'favorites',
  RECENT_SEARCHES: 'recent_searches',
};

class StorageService {
  // Set item
  set = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Storage set error:', error);
      return false;
    }
  };

  // Get item
  get = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Storage get error:', error);
      return null;
    }
  };

  // Remove item
  remove = async key => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Storage remove error:', error);
      return false;
    }
  };

  // Clear all storage
  clear = async () => {
    try {
      await AsyncStorage.clear();
      return true;
    } catch (error) {
      console.error('Storage clear error:', error);
      return false;
    }
  };

  // Get multiple items
  multiGet = async keys => {
    try {
      const values = await AsyncStorage.multiGet(keys);
      return values.reduce((acc, [key, value]) => {
        acc[key] = value ? JSON.parse(value) : null;
        return acc;
      }, {});
    } catch (error) {
      console.error('Storage multiGet error:', error);
      return {};
    }
  };

  // Set multiple items
  multiSet = async keyValuePairs => {
    try {
      const pairs = keyValuePairs.map(([key, value]) => [
        key,
        JSON.stringify(value),
      ]);
      await AsyncStorage.multiSet(pairs);
      return true;
    } catch (error) {
      console.error('Storage multiSet error:', error);
      return false;
    }
  };

  // Remove multiple items
  multiRemove = async keys => {
    try {
      await AsyncStorage.multiRemove(keys);
      return true;
    } catch (error) {
      console.error('Storage multiRemove error:', error);
      return false;
    }
  };

  // Get all keys
  getAllKeys = async () => {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (error) {
      console.error('Storage getAllKeys error:', error);
      return [];
    }
  };

  // Check if key exists
  has = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value !== null;
    } catch (error) {
      console.error('Storage has error:', error);
      return false;
    }
  };

  // Storage size info (approximate)
  getStorageSize = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const stores = await AsyncStorage.multiGet(keys);

      let totalSize = 0;
      stores.forEach(([key, value]) => {
        totalSize += key.length + (value ? value.length : 0);
      });

      return totalSize;
    } catch (error) {
      console.error('Storage getStorageSize error:', error);
      return 0;
    }
  };
}

// Create and export singleton instance
const storage = new StorageService();
export default storage;
