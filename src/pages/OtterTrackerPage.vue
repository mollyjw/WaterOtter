<template>
  <q-page padding>
    <q-circular-progress
      show-value
      font-size="12px"
      :value="percentDrunk"
      size="50px"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    >
      {{ percentDrunk }}%
    </q-circular-progress>
    <h1>{{percentDrunk}} %</h1>
    <h1>{{ozDrunk}}</h1>
    <q-btn color="purple" label="Purple" @click="increment"/>
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
    const { ozDrunk, ozToDrink, ozGoal, percentDrunk } = storeToRefs(trackerStore);
    const { increment, addOunces, deleteOunces } = trackerStore;
    return {
      ozDrunk,
      ozToDrink,
      ozGoal,
      percentDrunk,
      increment,
      addOunces,
      deleteOunces
    };
  }
});
</script>
