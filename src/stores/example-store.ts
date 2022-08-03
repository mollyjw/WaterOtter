import { defineStore }  from 'pinia';
import { Todo } from 'src/models';

interface TodoStore {
  todos: Todo[];
}

export const useTodoStore = defineStore('todo', {
  state: (): TodoStore => ({
    todos: [
      { id: 1, content: 'Learn Pinia', completed: false },
      { id: 2, content: 'Learn Vue',   completed: false },
      { id: 3, content: 'Learn Quasar', completed: false },
    ],
  }),
  getters: { },
  actions: {
    addTenTodos() {

      for (let i = 0; i < 10; i++) {
        this.todos.push({ id: i + 3, content: 'Todo ' + (i + 3), completed: false });
      }
    },
    clearTodos() {
      this.todos.length = 0;
    }
  },

});
