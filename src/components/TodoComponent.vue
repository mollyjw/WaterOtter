<template>
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">
          <q-input hint="Task"/>
        </div>
      </q-card-section>

      <q-card-section>

        <q-markup-table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Completed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="todo in todos" :key="todo.id">
              <td>{{ todo.content }}</td>
              <td>{{ JSON.stringify(todo.completed)}}</td>
              <td>
                <q-btn @click="removeTodo(todo)">Remove</q-btn>
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
  PropType,
  computed,
} from 'vue';

import {
  Todo
} from '../models';

export default defineComponent({
  name: 'TodoComponent',
  props: {
    todos: {
      type:    Array as PropType<Todo[]>,
      default: () => []
    }
  },
  setup (props) {
    return {
    };
  },
});
</script>
