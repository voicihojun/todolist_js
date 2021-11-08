const todoForm = document.querySelector("#todo_form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo_list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  // todo.id는 숫자고, li.id는 문자라 지워지지 않는 것임.
  todos = todos.filter((todo) => String(todo.id) !== li.id);
  saveTodos();

  li.remove();
}

function showTodo(newTodoObj) {
  const li = document.createElement("li");
  li["id"] = newTodoObj["id"];
  //   console.log(li);
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodoObj["text"]; // or newTodoObj.text
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  todos.push(newTodoObj);
  showTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

console.log(savedTodos);
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(showTodo);
}
