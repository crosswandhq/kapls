import * as CryptoJS from 'crypto-js';

export default function base64ToArray(data: string) {
  let offset = 0;
  const wordArr = CryptoJS.enc.Base64.parse(data);
  const arr = new Int8Array(64);
  for (let i = 0; i < 64; i++) {
    const word = wordArr.words[i];
    arr[offset++] = (word >> 24) & 0xff;
    arr[offset++] = (word >> 16) & 0xff;
    arr[offset++] = (word >> 8) & 0xff;
    arr[offset++] = word & 0xff;
  }
  return arr;
}
