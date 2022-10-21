import * as SecureStore from 'expo-secure-store';
import * as CryptoJS from 'crypto-js';

export default async function getOrInitEncryptionKey(): Promise<string> {
  const key = await SecureStore.getItemAsync('encryptionKey');
  if (key == null) {
    const randomArr = CryptoJS.lib.WordArray.random(16);
    await SecureStore.setItemAsync(
      'encryptionKey',
      randomArr.toString(CryptoJS.enc.Base64)
    );
    return randomArr.toString(CryptoJS.enc.Base64);
  }
  return key;
}
