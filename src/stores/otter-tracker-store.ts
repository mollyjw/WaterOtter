import { defineStore } from 'pinia';

export const useTrackerStore = defineStore('counter', {
  state: () => ({
    ozDrunk: 0,
    ozGoal: 64,
    passedInOz: 0
  }),

  getters: {
    ozToDrink (state) {
      return state.ozGoal - state.ozDrunk;
    },
    percentDrunk (state) {
      return Math.round(state.ozDrunk / state.ozGoal * 100);
    }
  },

  actions: {
    increment () {
      this.ozDrunk++;
    },
    addOunces (oz: number) {
      this.ozDrunk = this.ozDrunk + oz;
    },
    deleteOunces (oz: number) {
      this.ozDrunk = this.ozDrunk - oz;
    }
  }
});
