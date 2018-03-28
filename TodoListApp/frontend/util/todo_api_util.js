export const fetchTodos = () => (
  $.ajax({
    method: "GET",
    url: "/api/todos",
    dataType: "JSON",
  })
);


export const createTodo = (todo) => (
  $.ajax({
    method: "POST",
    url: "/api/todos",
    dataType: "JSON",
    data: todo,
  })
);
