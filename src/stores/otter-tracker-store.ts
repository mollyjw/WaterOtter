import { defineStore } from 'pinia';

export const useTrackerStore = defineStore('tracker', {
  state: () => ({
    ozDrunk: 0,
    ozGoal: 64,
    passedInOz: null,
    today: Date.now(),
    selectedDate: '',
    trackedDays: [
      { date: '2022/10/30', ozDrank: 70 },
      { date: '2022/10/31', ozDrank: 68 },
      { date: '2022/11/02', ozDrank: 32 },
    ],
  }),

  getters: {
    todayString(state) {
      const today = new Date(state.today);
      const month = today.getMonth() + 1;
      const day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
      return today.getFullYear() + '/' + month + '/' + day;
    },
    selectedDateOzDrunk(state) {
      const dayFromArray = state.trackedDays.find(x => x.date === state.selectedDate);
      if (dayFromArray !== undefined) {
        return dayFromArray.ozDrank;
      } else {
        return 0;
      }
    },
    ozToDrink(state): number {
      return state.ozGoal - this.selectedDateOzDrunk;
    },
    percentDrunk(state): number {
      return Math.round(this.selectedDateOzDrunk / state.ozGoal * 100);
    },
    daysGoalMet(state) {
      return state.trackedDays.filter(x => x.ozDrank >= state.ozGoal);
    },
    datesGoalMet(): string[] {
      const days = this.daysGoalMet;
      const dates: string[] = [];
      days.forEach(day => dates.push(day.date));
      return dates;
    }
  },

  actions: {
    addOunces (oz: number) {
      const dayFromArray = this.trackedDays.find(x => x.date === this.selectedDate);
      if (dayFromArray !== undefined) {
        dayFromArray.ozDrank += oz;
      } else {
        const newTrackedDay = {
          date: this.selectedDate,
          ozDrank: oz
        };
        this.trackedDays.push(newTrackedDay);
      }
      this.passedInOz = null;
    },
    deleteOunces (oz: number) {
      const dayFromArray = this.trackedDays.find(x => x.date === this.selectedDate);
      if (dayFromArray !== undefined) {
        dayFromArray.ozDrank -= oz;
      }
      this.passedInOz = null;
    },
    changeSelectedDate (newDate: string) {
      this.selectedDate = newDate;
    }
  }
});
