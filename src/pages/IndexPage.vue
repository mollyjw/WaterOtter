<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title  = "Todo List:"
      :todos = "todos"
    ></example-component>
  </q-page>
</template>

<script lang="ts">

import ExampleComponent from 'components/TodoComponent.vue';

import {
  defineComponent,
} from 'vue';

import { useTodoStore } from 'stores/example-store';

export default defineComponent({
  name: 'IndexPage',
  components: { ExampleComponent },
  setup () {
    return {
      ...useTodoStore()
    };
  }
});
</script>
