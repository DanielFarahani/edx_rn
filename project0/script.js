// list of classes
// length of the list
// checked or unckeched property


// container [checkbox, text, delete]
const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
  TODO_DONE: 'todo-done'
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  // item
  let item = document.createElement('li')
  item.className = classNames.TODO_ITEM

  // done box
  box = document.createElement('button')
  box.innerText = "Done"
  box.onclick = function() {
    this.parentElement.className += " " + classNames.TODO_DONE
    this.parentElement.removeChild(this)
    uncheckedCountSpan.innerText = Number(uncheckedCountSpan.innerText) - 1 + ""
  }
  box.className = classNames.TODO_CHECKBOX

  // task
  task = document.createElement('label')
  task.innerText = document.getElementById('new-task').value
  task.className = classNames.TODO_TEXT

  // delete button
  del = document.createElement('button')
  del.innerText = "X"
  del.onclick = function () {
    this.parentElement.remove(this)
    itemCountSpan.innerText = Number(itemCountSpan.innerText) - 1 + ""
    uncheckedCountSpan.innerText = Number(uncheckedCountSpan.innerText) - 1 + ""
  }
  del.className = classNames.TODO_DELETE

  // compile todo item
  item.appendChild(box)
  item.appendChild(task)
  item.appendChild(del)

  // add it to the list
  list.appendChild(item)

  itemCountSpan.innerText = Number(itemCountSpan.innerText) + 1 + ""
  uncheckedCountSpan.innerText = Number(uncheckedCountSpan.innerText) + 1 + ""
}