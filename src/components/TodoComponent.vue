<template>
    <q-card class="my-card bg-primary" dark >
      <q-card-section>
        <div class="row">
          <div class="col-sm-10">
            <q-input v-model="newTask" hint="Add item" dark />
          </div>
          <div class="col-sm-2">
            <q-btn glossy color="red" @click="addTask()">Add Task</q-btn>
          </div>
        </div>

      </q-card-section>

      <q-card-section>

        <q-markup-table>
          <thead>
            <tr>
              <th>Completed</th>
              <th>Task</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="todo in todos" :key="todo.id">
              <td class="text-center">

                <div v-if="todo.completed">
                  <q-icon size="large" name="check" color="green" />
                </div>
                <div v-else>
                  <q-icon  size="large" name="close" color="red" />
                </div>

              </td>
              <td class="text-left">{{ todo.content }}</td>

              <td class="text-center">
                <q-btn round color="red" glossy>
                  <q-icon size="large" name="delete_forever"/>
                </q-btn>
              </td>
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
