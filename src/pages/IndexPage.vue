<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title  = "Todo List:"
      :todos = "todos"
    ></example-component>

    <q-btn @click="addTodos">Add Todos</q-btn>
    <q-btn @click="clearTodos">Clear Todos</q-btn>
  </q-page>
</template>

<script lang="ts">

import ExampleComponent from 'components/TodoComponent.vue';

import {
  defineComponent,
} from 'vue';

import { useTodoStore } from 'stores/example-store';

const todoStore = useTodoStore();

export default defineComponent({
  name: 'IndexPage',
  components: { ExampleComponent },
  setup () {
    return {
      ...todoStore,
      addTodos: () => {
        todoStore.addTenTodos();
      },
      clearTodos: () => {
        todoStore.clearTodos();
      },
    };
  },
});
</script>
