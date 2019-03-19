/**
 * Class to store todos
 */
function TodoItem(id, caption, isCompleted) {
  this.id = id
  this.caption = caption
  this.isCompleted = isCompleted == '1' ? true : false

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
  this.addItem = function(id, caption, isCompleted) {
    this.todoCollection.push(new TodoItem(id, caption, isCompleted))
  }

  // Remove existing item from list
  this.removeItem = function(id) {
    var index = this.todoCollection.findIndex(function(todo) {
      return todo.id == id
    })
    this.todoCollection.splice(index, 1)
  }

  // Toggle isCompleted
  this.toggle = function(id) {
    var index = this.todoCollection.findIndex(function(todo) {
      return todo.id == id
    })
    this.todoCollection[index].toggle()
  }

  // Update todo
  this.updateItem = function(id, newCaption) {
    var index = this.todoCollection.findIndex(function(todo) {
      return todo.id == id
    })
    this.todoCollection[index].caption = newCaption
  }
}
