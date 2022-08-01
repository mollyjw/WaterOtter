<template>
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">{{ title }}</div>
      </q-card-section>

      <q-separator  inset/>

      <q-card-section>
        <div class="text-subtitle2">Count: {{ todoCount }},  Clicks: {{ clickCount }} </div>
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
  ref,
  toRef,
  Ref,
} from 'vue';

import {
  Todo
} from './models';

function useClickCount() {
  const clickCount = ref(0);

  function increment() {
    clickCount.value += 1;

    return clickCount.value;
  }

  return {
    clickCount,
    increment
  };
}

function useDisplayTodo(todos: Ref<Todo[]>) {
  const todoCount = computed(() => todos.value.length);

  return { todoCount };
}

export default defineComponent({
  name: 'TodoComponent',
  props: {
    title: {
      type:     String,
      required: true
    },
    todos: {
      type:    Array as PropType<Todo[]>,
      default: () => []
    }
  },
  setup (props) {
    return {
      ...useClickCount(),
      ...useDisplayTodo(toRef(props, 'todos'))
    };
  },
});
</script>
