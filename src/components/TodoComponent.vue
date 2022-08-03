<template>
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">
          <q-input hint="Task"/>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="text-subtitle2">Count: {{ todoCount }}</div>
        <ul>
          <li
              v-for  = "todo in todos"
              :key   = "todo.id"
              @click = "increment"
          >
            {{ todo.id }} - {{ todo.content }}
          </li>
        </ul>

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

function useDisplayTodo(todos: Todo[]) {
  const todoCount = computed(() => todos.length);

  return { todoCount };
}

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
      ...useDisplayTodo(props.todos),
    };
  },
});
</script>
