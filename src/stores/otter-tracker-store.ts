import { defineStore } from 'pinia';

export const useTrackerStore = defineStore('counter', {
  state: () => ({
    ozDrunk: 0,
    ozGoal: 64,
    passedInOz: null,
    today: Date.now()
  }),

  getters: {
    ozToDrink (state) {
      return state.ozGoal - state.ozDrunk;
    },
    percentDrunk (state) {
      return Math.round(state.ozDrunk / state.ozGoal * 100);
    },
    date (state) {
      const today = new Date(state.today);
      const month = today.getMonth() + 1;
      return today.getFullYear() + '/' + month + '/' + today.getDate();
    }
  },

  actions: {
    increment () {
      this.ozDrunk++;
    },
    addOunces (oz: number) {
      this.ozDrunk = this.ozDrunk + oz;
      this.passedInOz = null;
    },
    deleteOunces (oz: number) {
      this.ozDrunk = this.ozDrunk - oz;
    }
  }
});
