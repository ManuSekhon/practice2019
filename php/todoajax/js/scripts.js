// run on document ready
$(() => {

  // Get todo list from server
  $.ajax({
    url: "http://todoapi.local.geekydev.com/",
    method: "GET",
    datatype: "json",
  })
    .done(response => renderTodo(response))
    .fail(err => console.log(err))


  // Form submit
  const form = document.getElementById("add-to-do")
  form.onsubmit = (event) => {
    event.preventDefault()
    addTodo(form)
  }

})

// Append todo item to list
const renderTodo = response => {

  response.map(todo => {

    $("#todo-list").append(
      $("<li>", { "class": "list-group-item", "id": `item-${todo["id"]}` }).append([
        // checkbox
        $("<input>", {
          "type": "checkbox",
          "class": "check-todo",
          "id": `todo-chk-${todo["id"]}`,
          "checked": () => todo["is_completed"] == 1 ? true : false,
          "onchange": `toggleCheckbox(${todo["id"]})`
        }),
        // input box
        $("<input>", {
          "type": "text",
          "id": `todo-item-${todo["id"]}`,
          "class": "data",
          "value": todo["caption"],
          "onfocusout": `updateTodo(${todo["id"]})`
        }),
        // button
        $("<button>", {
          "id": `todo-del-${todo["id"]}`,
          "class": "btn btn-dark",
          "onclick": `deleteTodo(${todo["id"]})`
        }).text("Delete")
      ])
    )

    if (todo["is_completed"] == 1) {
      $(`#todo-item-${todo["id"]}`).addClass("checkedItem");
    }
  })
}

// Delete todo from database
const deleteTodo = id => {
  const full_id = `#item-${id}`

  $.ajax({
    url: `http://todoapi.local.geekydev.com/${id}`,
    method: "DELETE",
    datatype: "json",
  })
    .done(response => {
      $(full_id).remove()
      console.log(response)
    })
    .fail(err => console.log("Error"));
}

// Add todo
const addTodo = form => {
  if (form.item.value != "") {
    $.ajax({
      url: "http://todoapi.local.geekydev.com/",
      method: "POST",
      datatype: "json",
      contentType: "application/json",
      data: JSON.stringify({ caption: form.item.value })
    })
      .done(response => renderTodo([response]))
      .fail(err => console.log(err))
  }
}

// Toggle checkbox
const toggleCheckbox = id => {
  $(`#todo-item-${id}`).toggleClass("checkedItem")

  $.ajax({
    url: `http://todoapi.local.geekydev.com/${id}`,
    method: "PUT",
    datatype: "json",
    contentType: "application/json",
    data: JSON.stringify({ toggleCheck: true })
  })
    .done(response => console.log(response))
    .fail(err => console.log(err))
}

// Update todo item
const updateTodo = id => {
  const full_id = `#todo-item-${id}`
  const todo = $.trim($(full_id).val())

  if (todo === '') {
    deleteTodo(id)
  }
  else {
    $.ajax({
      url: `http://todoapi.local.geekydev.com/${id}`,
      method: "PUT",
      datatype: "json",
      contentType: "application/json",
      data: JSON.stringify({ caption: todo })
    })
      .done(response => console.log(response))
      .fail(err => console.log(err))
  }
}