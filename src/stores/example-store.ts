import { defineStore }  from 'pinia';
import { Todo } from 'src/models';
import { Ref } from "vue";

interface TodoStore {
  todos: Todo[];
}

export const useTodoStore = defineStore('todo', {
  state: (): TodoStore => ({
    todos: [
      { id: 1, content: 'Learn Pinia', completed: false },
      { id: 2, content: 'Learn Vue',   completed: true },
      { id: 3, content: 'Learn Quasar', completed: false },
    ],
  }),
  getters: { },
  actions: {
    clearTodos() {
      this.todos.length = 0;
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
