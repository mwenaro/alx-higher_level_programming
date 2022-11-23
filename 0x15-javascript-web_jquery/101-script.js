// Write a JavaScript script that adds, removes and clears LI elements from a list when the user clicks:

const myUlTemmList = document.querySelector('ul.my_list');

const addListItem = document.querySelector('div#add_item');

const removeListItem = document.querySelector('div#remove_item');

const clearUlList = document.querySelector('div#clear_list');

/**
 * Event Listners
 */

// Add item
addListItem.addEventListener('click', () => {
  const listItem = document.createElement('li');
  listItem.innerHTML = 'Item';

  myUlTemmList.appendChild(listItem);
});

// Clear Items
clearUlList.addEventListener('click', () => {
// Get all list tiems
  const items = document.querySelectorAll('ul.my_list li');

  // Loop and remove all list items
  items.forEach(function (li) {
    myUlTemmList.removeChild(li);
  });
});

// Remove the last list Item on click
removeListItem.addEventListener('click', () => {
// Get all list tiems
  const items = document.querySelectorAll('ul.my_list li');

  // remove the last item
  if (items.length > 0) {
    myUlTemmList.removeChild(items[items.length - 1]);
  }
});
