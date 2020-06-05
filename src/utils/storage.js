import AsyncStorage from '@react-native-community/async-storage';

export const setStorage = async (key, data) => {
  let content = {
    data,
  };
  try {
    await AsyncStorage.setItem(key, content);
  } catch (e) {
    console.log(e);
  }
};

export const getStorage = async (key) => {
  let content = {};
  try {
    const contentStr = await AsyncStorage.getItem(key);
    if (!contentStr) {
      return;
    }
    content = JSON.parse(contentStr);
    return content.data;
  } catch (e) {
    console.log(e);
  }
};
