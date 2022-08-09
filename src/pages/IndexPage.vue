<template>
  <q-page>
    <br/>

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
    return {
      ...todoStore,
      getTodos () {
        return todoStore.getTodos;
      },
      getDoneTodos () {
        return todoStore.getDoneTodos;
      },
    };
  },
});
</script>
