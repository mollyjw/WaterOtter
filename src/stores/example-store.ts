import { defineStore }  from 'pinia';
import { Todo        } from 'src/models';

import {
  computed,
  ref
} from 'vue';

export const useTodoStore = defineStore('todo', () => {
  const allTodos = ref<Todo[]>([
    {
      id:        1,
      content:   'Learn Pinia',
      completed: false
    },
    {
      id:        2,
      content:   'Learn Vue',
      completed: true
    },
    {
      id:        3,
      content:   'Learn Quasar',
      completed: false
    },
  ]);

  const todos = computed(() => allTodos.value.filter(todo => !todo.completed));
  const done  = computed(() => allTodos.value.filter(todo => todo.completed));

  function uncheckTodos() {
    // Uncheck all todos without modifying the original array values
    allTodos.value = allTodos.value.map(todo => {
      return {
        ...todo,         // copies all properties from the original todo
        completed: false // overrides the completed property
      };
    });
  }

  function addTodo(content:string) {
    // Add a new todo without modifying the original array
    allTodos.value = [
      ...allTodos.value, // copies all existing todos
      // creates a new todo with the given content
      {
        id: allTodos.value.length + 1,
        content,
        completed: false
      }
    ];
  }

  function removeCompleted() {
    // Removes all completed todos without modifying the original array
    allTodos.value = allTodos.value.filter(todo => !todo.completed);
  }

  function toggleTodo(id:number) {
    // Update the todos ref without mutating the original array
    allTodos.value = allTodos.value.map(todo => {
      if (todo.id !== id) {
        return { ...todo }; // returns copies of all other todos
      }

      return {
        ...todo,                    // copies all properties from the original todo
        completed: !todo.completed, // toggles the completed property
      };
    });
  }

  return {
    allTodos,
    todos,
    done,
    uncheckTodos,
    toggleTodo,
    removeCompleted,
    addTodo,
  };
});
