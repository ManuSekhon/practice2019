function render() {
  var list = document.querySelector('.todo-item-group')

  // Clear previous DOM nodes
  var range = document.createRange()
  range.selectNodeContents(list)
  range.deleteContents()

  for (var todo of myApp.todoCollection) {
    var item = document.createElement('li')
    item.classList.add('list-group-item')
    item.id = todo.id

    // Checkbox
    var divCheckbox = document.createElement('div')
    divCheckbox.classList.add('round-checkbox')
    var checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.id = `chk-${todo.id}`
    var labelCheck = document.createElement('label')
    labelCheck.setAttribute('for', `chk-${todo.id}`)
    labelCheck.onclick = toggleCheckbox
    divCheckbox.append(checkbox, labelCheck)

    // Todo text
    var span = document.createElement('span')
    span.textContent = todo.caption
    span.ondblclick = editTodo
    if (todo.isCompleted) {
      span.classList.add('todo-data-checked')
      checkbox.checked = true
    } else {
      span.classList.remove('todo-data-checked')
      checkbox.checked = false
    }

    // delete button
    var button = document.createElement('button')
    button.type = 'button'
    button.textContent = 'x'
    button.onclick = deleteTodo

    // append items to list
    item.append(divCheckbox, span, button)
    list.append(item)
  }
}
