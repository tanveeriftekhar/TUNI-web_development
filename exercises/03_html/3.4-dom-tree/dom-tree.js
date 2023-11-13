const navList = document.querySelector('nav ul');
navList.classList.add('list');

const newLink = document.createElement('a');
newLink.href = 'http://localhost:3000/';
newLink.textContent = 'Localhost';
const newListItem = document.createElement('li');
newListItem.appendChild(newLink);
navList.appendChild(newListItem);

const orderedList = document.getElementById('ordered');
const newOrderedItem = document.createElement('li');
newOrderedItem.textContent = 'Item 0';
orderedList.insertBefore(newOrderedItem, orderedList.firstChild);

const todoList = document.getElementById('todo');
todoList.classList.remove('navi');

const todoItems = todoList.querySelectorAll('li');
if (todoItems.length >= 2) {
  todoItems[1].remove();
}
