<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-6 text-center" >
        <q-circular-progress
          show-value
          font-size="100px"
          :value="percentDrunk"
          size="500px"
          :thickness="0.22"
          color="primary"
          center-color="light-blue-2"
          track-color="grey-3"
          class="q-ma-md"
        >
          <q-icon name="water_drop" class="q-mr-xs" color="light-blue" />
          {{ percentDrunk }}%
        </q-circular-progress>
        <div class="row justify-center">
          <div class="col-3">
            Water Drank:
            <p>{{ozDrunk}} oz</p>
          </div>
          <div class="col-3">
            Water Left:
            <p>{{ozToDrink}} oz</p>
          </div>
        </div>
        <div class="row justify-center" style="margin-bottom: 2%">
          <div class="col-3">
            <q-input rounded outlined type="number" v-model.number="passedInOz" label="oz" />
          </div>
        </div>
        <div class="row justify-center">
          <div class="col-3">
            <q-btn color="purple" label="Add Oz" @click="addOunces(passedInOz)"/>
          </div>
          <div class="col-3">
            <q-btn label="Delete Oz" @click="deleteOunces(passedInOz)"/>
          </div>
        </div>
      </div>
      <div class="col-5 text-center">
        <q-date
          v-model="date"
          color="light-blue"
        />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { useTrackerStore } from 'stores/otter-tracker-store';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'OtterTrackerPage',
  setup () {
    const trackerStore = useTrackerStore();
    const { ozDrunk, ozToDrink, ozGoal, percentDrunk, passedInOz, date } = storeToRefs(trackerStore);
    const { increment, addOunces, deleteOunces } = trackerStore;
    return {
      ozDrunk,
      ozToDrink,
      ozGoal,
      percentDrunk,
      passedInOz,
      date,
      increment,
      addOunces,
      deleteOunces
    };
  }
});
</script>
