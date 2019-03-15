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

  var id = generateId(16)
  var divCheckbox = document.createElement("div")
  divCheckbox.classList.add("round-checkbox")
  var checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.id = id
  var labelCheckbox = document.createElement("label")
  labelCheckbox.setAttribute("for", id)
  divCheckbox.append(checkbox, labelCheckbox)

  var span = document.createElement("span")
  span.innerHTML = todo

  var button = document.createElement("button")
  button.type = "button"
  button.innerHTML = "X"

  item.append(divCheckbox, span, button)
  list.append(item)
}

// Modify todo item
function customizeTodo(event) {
  var element = event.target
  var parent = element.parentNode

  switch (element.nodeName) {
    case "LABEL":
      toggleCheck(parent.parentNode)
      break

    case "SPAN":
      console.log("span")
      break

    case "BUTTON":
      parent.remove()
      break
  }
}

// Make line-through on checkbox click
function toggleCheck(parent) {
  var todoData = parent.querySelector("span")
  if (parent.querySelector("input[type='checkbox']").checked == false) {
    todoData.classList.add("todo-data-checked")
  } else {
    todoData.classList.remove("todo-data-checked")
  }
}

function generateId(length) {
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  var text = ""
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}