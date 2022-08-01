import { defineStore }  from 'pinia';
import { Todo } from 'src/models';

interface TodoStore {
  todos: Todo[];
}

export const useTodoStore = defineStore('todo', {
  state: (): TodoStore => ({
    todos: [
      { id: 1, content: 'Learn Pinia' },
      { id: 2, content: 'Learn Vue' },
      { id: 3, content: 'Learn Quasar' },
    ],
  }),
  getters: { },
  actions: { },
});
