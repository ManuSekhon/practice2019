/**
 * Class to store todos
 */
function TodoItem(id, caption) {
  this.id = id
  this.caption = caption
  this.isCompleted = false

  // Toggle isCompleted
  this.toggle = function() {
    this.isCompleted = !this.isCompleted
  }
}

/**
 * Todo app
 */
function TodoApp() {
  this.todoCollection = []

  // Add new item to list
  this.addItem = function(id, caption) {
    this.todoCollection.push(new TodoItem(id, caption))
  }

  // Remove existing item from list
  this.removeItem = function(id) {
    var index = this.todoCollection.findIndex(function(todo) {
      return todo.id == id
    })
    this.todoCollection.splice(index, 1)
  }

  this.toggle = function(id) {
    var index = this.todoCollection.findIndex(function(todo) {
      return todo.id == id
    })
    this.todoCollection[index].toggle()
  }
}
