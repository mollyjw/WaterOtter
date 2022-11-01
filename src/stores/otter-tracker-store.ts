import { defineStore } from 'pinia';

export const useTrackerStore = defineStore('counter', {
  state: () => ({
    ozDrunk: 0,
    ozGoal: 64,
    passedInOz: null,
    today: Date.now(),
    selectedDate: '',
    selectedDateOzDrunk: 0,
    trackedDays: [
      { date: '2022/10/30', ozDrank: 70, percentDrunk: 109, goalMet: true },
      { date: '2022/10/31', ozDrank: 68, percentDrunk: 106, goalMet: true },
      { date: '2022/11/02', ozDrank: 32, percentDrunk: 50, goalMet: false },
    ],
  }),

  getters: {
    ozToDrink (state) {
      return state.ozGoal - state.selectedDateOzDrunk;
    },
    percentDrunk (state) {
      return Math.round(state.selectedDateOzDrunk / state.ozGoal * 100);
    },
    todayString (state) {
      const today = new Date(state.today);
      const month = today.getMonth() + 1;
      const day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
      return today.getFullYear() + '/' + month + '/' + day;
    },
    daysGoalMet (state) {
      return state.trackedDays.filter(x => x.goalMet);
    },
    datesGoalMet () {
      const days = this.daysGoalMet;
      const dates: string[] = [];
      days.forEach(day => dates.push(day.date));
      return dates;
    }
  },

  actions: {
    addOunces (oz: number) {
      this.ozDrunk = this.ozDrunk + oz;
      this.passedInOz = null;
    },
    deleteOunces (oz: number) {
      this.ozDrunk = this.ozDrunk - oz;
    },
    changeSelectedDate (newDate: string) {
      this.selectedDate = newDate;
    }
  }
});
