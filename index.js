var list = document.getElementById('stack-list')
var inputBox = document.getElementById('todo-input')
var btnAdd = document.getElementById('add-item')
var btnRemove = document.getElementById('remove-item')
var currentInputValue = '';
inputBox.addEventListener('input', function(e) {
  cuurentInputValue = e.target.value;
})
btnAdd.addEventListener('click', function() {
  if(list.childElementCount === 8) {
    alert('Stack is full')
  }
  else {
  var newListElement = document.createElement('li')
  var textNode = document.createTextNode(cuurentInputValue)
  newListElement.appendChild(textNode);
  newListElement.id = "stack-element";
  var firstItem = list.firstElementChild
  list.insertBefore(newListElement, firstItem)
}

})

btnRemove.addEventListener('click', function() {
  if(list.childElementCount === 0) {
    alert('Stack is empty')
  }
  var firstElement = list.firstElementChild;
  list.removeChild(firstElement)
})
