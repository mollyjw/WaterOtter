<template>
    <q-card class="my-card bg-primary" dark >
      <q-card-section>
        <div class="row">
          <div class="col-sm-12">
            <q-input
              v-model="newTask"
              hint="Add item"
              dark
              @keyup.enter="addTask()"
            />
          </div>
        </div>

      </q-card-section>

      <q-card-section>

        <b>TO DO</b>

        <q-markup-table class="q-mt-sm">
          <tbody>
            <tr v-for="todo in todos" :key="todo.id">
              <td>
                <q-checkbox :model-value="todo.completed"></q-checkbox>

              <span class="q-pl-md">{{ todo.content }}</span></td>
            </tr>
          </tbody>
        </q-markup-table>

      </q-card-section>
    </q-card>
</template>

<style>
.my-card {
  margin: 0 auto;
  min-width: 300px;
  max-width: 600px;
}
</style>

<script lang="ts">
import {
  defineComponent,
  PropType, ref,
} from 'vue';

import {
  Todo
} from '../models';

import { useTodoStore } from 'stores/example-store';

const todoStore = useTodoStore();

export default defineComponent({
  name: 'TodoComponent',
  props: {
    todos: {
      type:    Array as PropType<Todo[]>,
      default: () => []
    }
  },
  setup () {
    const newTask = ref('');

    return {
      newTask,
      addTask: () => {
        todoStore.addTodo(newTask.value);
      }
    };
  },
});
</script>
