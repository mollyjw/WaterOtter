import { defineStore }  from 'pinia';
import { Todo } from 'src/models';
import { Ref } from "vue";

interface TodoStore {
  todos: Todo[];
}

export const useTodoStore = defineStore('todo', {
  state: (): TodoStore => ({
    todos: [
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
    ],
  }),
  getters: {
    getTodos:     (state) => state.todos.filter(todo => !todo.completed),
    getDoneTodos: (state) => state.todos.filter(todo => todo.completed),
  },
  actions: {
    uncheckTodos() {

      console.log('Store uncheck todos has been called');

      for (let i = 0; i < this.todos.length; i++) {
        this.todos[i].completed = false;
      }
    },
    addTodo(content: string) {
      this.todos.push({
        id: this.todos.length + 1,
        content,
        completed: false,
      });
    }
  },
});
