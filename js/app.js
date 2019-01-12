document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const horseRidingListItem = createReadingListItem(event.target);
  const horseRidingList = document.querySelector('#horse-riding-list');
  horseRidingList.appendChild(horseRidingListItem);

  event.target.reset();
}

const createReadingListItem = function (form) {
  const horseRidingListItem = document.createElement('li');
  horseRidingListItem.classList.add('horse-riding-list-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  horseRidingListItem.appendChild(name);

  const breed = document.createElement('h2');
  breed.textContent = form.breed.value;
  horseRidingListItem.appendChild(breed);

  const stable = document.createElement('h2');
  stable.textContent = form.stable.value;
  horseRidingListItem.appendChild(stable);

  const colour = document.createElement('p');
  colour.textContent = form.colour.value;
  horseRidingListItem.appendChild(colour);

  return horseRidingListItem;
}

const handleDeleteAllClick = function (event) {
  const horseRidingList = document.querySelector('#horse-riding-list');
  horseRidingList.innerHTML = '';
}
