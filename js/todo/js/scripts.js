window.onload = function() {
  var form = document.querySelector("#todo-input")
  var list = document.querySelector(".todo-item-group")

  // form submitted
  form.onsubmit = function(event) {
    event.preventDefault()
    addTodo(list, form.todo.value)
    form.todo.value = ""
  }
}

// Append todo to list
function addTodo(list, todo) {
  var item = document.createElement("li")
  item.onclick = customizeTodo
  item.classList.add("list-group-item")

  var checkbox = document.createElement("input")
  checkbox.type = "checkbox"

  var span = document.createElement("span")
  span.innerHTML = todo

  var button = document.createElement("button")
  button.type = "button"
  button.innerHTML = "X"

  item.append(checkbox, span, button)
  list.append(item)
}

// Modify todo item
function customizeTodo(event) {
  var element = event.target
  var parent = element.parentNode

  switch (element.nodeName) {
    case "INPUT":
      toggleCheck(parent)
      break

    case "SPAN":
      console.log("span")
      break

    case "BUTTON":
      parent.parentNode.removeChild(parent)
      break
  }
}

// Make line-through on checkbox click
function toggleCheck(parent) {
  var todoData = parent.querySelector("span")
  if (parent.querySelector("input[type='checkbox']").checked) {
    todoData.classList.add("todo-data-checked")
  } else {
    todoData.classList.remove("todo-data-checked")
  }
}
