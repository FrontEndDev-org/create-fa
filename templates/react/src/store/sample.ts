import { proxy } from 'valtio';

export const sampleStore = proxy({
  randomNumber: Math.random(),
});
