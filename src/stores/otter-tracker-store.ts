import { defineStore } from 'pinia';

export const useTrackerStore = defineStore('counter', {
  state: () => ({
    ozDrunk: 0,
    ozGoal: 64
  }),

  getters: {
    ozToDrink (state) {
      return state.ozGoal - state.ozDrunk;
    },
    percentDrunk (state) {
      const decimal = Math.round(state.ozDrunk / state.ozGoal);
      return decimal * 100;
    }
  },

  actions: {
    increment () {
      this.ozDrunk++;
    },
    addOunces (oz: number) {
      this.ozDrunk += oz;
    },
    deleteOunces (oz: number) {
      this.ozDrunk -= oz;
    }
  }
});
