// Create new todo app
var myApp = new TodoApp()

// Render collection
render()

// Set to true of all tasks need to be completed at once
var allCompleted = false

// Get DOM nodes
var form = document.getElementById('todo-input')
var arrowBtn = document.querySelector('.todo-container i')

// Form submitted
form.onsubmit = function(event) {
  event.preventDefault()
  // add item to collection
  myApp.addItem(generateId(16), form.todo.value)
  form.todo.value = ''
  // Render on screen
  render()
}

// Toggle checkbox
function toggleCheckbox(event) {
  myApp.toggle(event.target.parentNode.parentNode.id)
  render()
}

// Delete todo item from storage
function deleteTodo(event) {
  myApp.removeItem(event.target.parentNode)
  render()
}

// Edit todo item
function editTodo(event) {
  // replace span with input tag
  var element = event.target
  var input = document.createElement('input')
  input.type = 'text'
  input.value = event.target.textContent
  element.replaceWith(input)

  // save user input when enter key is pressed
  input.onkeypress = function(event) {
    if (event.keyCode === 13) {
      myApp.updateItem(input.parentNode.id, input.value)
      render()
    }
  }
}

// Check (or uncheck) all todos on click
arrowBtn.onclick = function() {
  if (!allCompleted) {
    allCompleted = true
    arrowBtn.classList.add('all-items-checked')
    myApp.todoCollection.map(data => (data.isCompleted = true))
  } else {
    allCompleted = false
    arrowBtn.classList.remove('all-items-checked')
    myApp.todoCollection.map(data => (data.isCompleted = false))
  }
  render()
}

// Generate rendom ids
function generateId(length) {
  var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var text = ''
  for (var i = 0; i < length; i++) {
    text += charSet.charAt(Math.floor(Math.random() * charSet.length))
  }
  return text
}
