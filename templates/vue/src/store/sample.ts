import { defineStore } from 'pinia';

export const useSampleStore = defineStore('sample', {
  state() {
    return {
      randomNumber: Math.random(),
    };
  },
});
