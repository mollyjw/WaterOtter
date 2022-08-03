<template>
  <q-page>
    <br/>

    <div class="row">
      <div class="col-sm-12">
        <example-component
          title  = "Todo List:"
          :todos = "todos"
        ></example-component>
      </div>
    </div>

    <br/>
    <div class="row">
      <div class="col-sm-4"/>
      <div class="col-sm-2">
        <q-btn @click="addTodos">Add Todos</q-btn>
      </div>
      <div class="col-sm-2">
        <q-btn @click="clearTodos">Clear Todos</q-btn>
      </div>
    </div>
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
