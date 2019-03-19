// Create new todo app
var myApp = new TodoApp()

// Render collection
fetch('http://todoapi.local.geekydev.com/', {
  method: 'GET'
})
  .then(response => response.json())
  .then(data => {
    data.map(todo => myApp.addItem(todo.id, todo.caption, todo.is_completed))
    render()
  })
  .catch(err => console.log(err))

// Set to true of all tasks need to be completed at once
// var allCompleted = false

// Get DOM nodes
var form = document.getElementById('todo-input')
// var arrowBtn = document.querySelector('.todo-container i')

// Form submitted
form.onsubmit = function(event) {
  event.preventDefault()
  fetch('http://todoapi.local.geekydev.com/', {
    method: 'POST',
    body: JSON.stringify({ caption: form.todo.value })
  })
    .then(response => response.json())
    .then(data => {
      myApp.addItem(data.id, data.caption, data.is_completed)
      render()
    })
    .catch(err => console.log(err))
  form.todo.value = ''
}

// Toggle checkbox
function toggleCheckbox(event) {
  var id = event.target.parentNode.parentNode.id

  fetch(`http://todoapi.local.geekydev.com/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ toggleCheck: true })
  })
    .then(response => response.json())
    .then(response => {
      myApp.toggle(id)
      console.log(response)
      render()
    })
    .catch(err => console.log(err))
}

// Delete todo item from storage
function deleteTodo(event) {
  // myApp.removeItem(event.target.parentNode)
  fetch(`http://todoapi.local.geekydev.com/${event.target.parentNode.id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json'
    }
  })
    .then(response => {
      myApp.removeItem(event.target.parentNode.id)
      render()
    })
    .catch(err => console.log(err))
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
      fetch(`http://todoapi.local.geekydev.com/${input.parentNode.id}`, {
        method: 'PUT',
        body: JSON.stringify({ caption: input.value })
      })
        .then(response => response.json())
        .then(res => {
          myApp.updateItem(input.parentNode.id, input.value)
          render()
        })
        .catch(err => console.log(err))
    }
  }
}

// // Check (or uncheck) all todos on click
// arrowBtn.onclick = function() {
//   if (!allCompleted) {
//     allCompleted = true
//     arrowBtn.classList.add('all-items-checked')
//     myApp.todoCollection.map(data => (data.isCompleted = true))
//   } else {
//     allCompleted = false
//     arrowBtn.classList.remove('all-items-checked')
//     myApp.todoCollection.map(data => (data.isCompleted = false))
//   }
//   render()
// }
