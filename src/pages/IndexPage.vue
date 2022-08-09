<template>
  <q-page>
    <br/>

    <div class="row">
      <div class="col-sm-12">
        <example-component
          :todos = "todos"
        ></example-component>
      </div>
    </div>

    <br/>
    <div class="row">
      <div class="col-sm-4"/>
      <div class="col-sm-4 text-center">
        <q-btn glossy color="red" @click="clearTodos">Clear Todos</q-btn>
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
      clearTodos: () => {
        todoStore.clearTodos();
      },
    };
  },
});
</script>
