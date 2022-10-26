<template>
  <q-page>
    <br/>
    <h1>{{this.hello}}</h1>
    <div class="row">
      <div class="col-sm-12">
        <example-component
          :todos = "getTodos()"
          :done  = "getDoneTodos()"
        ></example-component>
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
    const hello = 'yello!';
    return {
      hello,
      ...todoStore,
      getTodos () {
        return todoStore.todos;
      },
      getDoneTodos () {
        return todoStore.done;
      },
    };
  },
});
</script>
