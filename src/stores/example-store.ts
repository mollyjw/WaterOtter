import { defineStore }  from 'pinia';
import { Todo } from 'src/models';
import { computed, ref } from "vue";

interface TodoStore {
  todos: Todo[];
}

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
  const done = computed(() => allTodos.value.filter(todo => todo.completed));

  function uncheckTodos() {
    allTodos.value.forEach(function(todo) { todo.completed = false; });
  }

  function addTodo(content:string) {
    allTodos.value.push({
      id: allTodos.value.length + 1,
      content,
      completed: false,
    });
  }

  function toggleTodo(id:number) {
    allTodos.value.forEach(
      function(todo) {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
      }
    );
  }

  return {
    allTodos,
    todos,
    done,
    uncheckTodos,
    toggleTodo,
    addTodo,
  };
});
