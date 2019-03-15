// Create new todo app
var myApp = new TodoApp()

// Render collection
render()

// Get DOM nodes
var form = document.getElementById("todo-input")

// Form submitted
form.onsubmit = function(event) {
  event.preventDefault()
  // add item to collection
  myApp.addItem(generateId(16), form.todo.value)
  form.todo.value = ""
  // Render on screen
  render()
}

// Called when any element in li is clicked
function getListNode(event) {
  // get id of parent element
  var element = event.target
  // Get name of node clicked
  switch(element.nodeName) {
    case "LABEL":
      myApp.toggle(element.parentNode.parentNode.id)
      break;
    case "BUTTON":
      myApp.removeItem(element.parentNode.id)
      break;
  }

  render()
}

// Generate rendom ids
function generateId(length) {
  var charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  var text = ""
  for (var i = 0; i < length; i++) {
    text += charSet.charAt(Math.floor(Math.random() * charSet.length))
  }
  return text
}
