const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = [];

//4
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //JSON.stringify – 객체를 JSON으로 바꿔줍니다. 객체를 문자열로 바꿔주어요
}
//3
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  //li.id가 string이기 때문에 parseint로 문자열을 숫자로 바꿔줌
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //filter - 지우고 싶은 item을 빼고 새 array 생성, 예전 array도 있고 새로 만든 것도 있는 거임
  //filter은 filter함수가 필요하다고 우리에게 요청, 함수는 반드시 true를 리턴해야됨!!
  //false를 리턴하면 그 item은 새 array에 포함되지 않을거다.
  saveToDos();
}
//2
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}
//1
function hadleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", hadleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
//5
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(paintToDo);
  //forEach array에 있는 각각의 item에 대해서 실행
}
