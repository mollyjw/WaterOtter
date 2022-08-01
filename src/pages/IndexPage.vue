<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title  = "Todo List:"
      :todos = "todos"
    ></example-component>
  </q-page>
</template>

<script lang="ts">
import {
  Todo
} from 'components/models';

import ExampleComponent from 'components/ExampleComponent.vue';

import {
  defineComponent,
  ref
} from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { ExampleComponent },
  setup () {
    const todos = ref<Todo[]>([
      {
        id:      0,
        content: 'Todo 0'
      },
      {
        id:      1,
        content: 'Todo 1'
      },
      {
        id:      2,
        content: 'Todo 2'
      },
      {
        id:      3,
        content: 'Todo 3'
      },
      {
        id:      4,
        content: 'Todo 4'
      }
    ]);
    return {
      todos
    };
  }
});
</script>
