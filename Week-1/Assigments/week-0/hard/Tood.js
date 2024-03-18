class Todo {
  Todo() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
  }
  removeTodo(index) {
    let newTodo = [];
    newTodo = this.todos.forEach((y) => y != this.todos[index]);
    this.todos = newTodo;
  }
  update(index, updatedTodo) {
    this.todos[index] = updatedTodo;
  }
  getAll() {
    return this.todos;
  }
  get(indexTodo) {
    return this.todos[indexTodo];
  }
  clear() {
    this.todos = [];
  }
}

/// or

class Todo {
  Todo() {
    this.list = [];
  }
  add(todo) {
    this.list.push(todo);
  }
  remove(index) {
    this.list.splice(index, 1);
  }
  update(index, updatedTodo) {
    this.list[index] = updatedTodo;
  }
  getAll() {
    return this.list;
  }
  get(index) {
    return this.list[index];
  }
  clear() {
    this.list = [];
  }
}
