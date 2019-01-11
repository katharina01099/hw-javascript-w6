document.addEventListener('DOMContentLoaded'), () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
});

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const horseListItem = createHorseListItem(event.target);
  const horseListe = document.querySelector('#horse-riding-list');
  horseListe.appendChild(horseListItem);

  event.target.reset();
}

const createHorseListItem = function (form) {
  const horseListItem = document.createElement('li');
  horseListItem.classList.add('horse-riding-list-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  horseListItem.appendChild(name);

  const breed = document.createElement('h2');
  breed.textContent = form.breed.value;
  horseListItem.appendChild(breed);

  const stable = document.createElement('h2');
  stable.textContent = form.stable.value;
  horseListItem.appendChild(stable);

  const color = document.createElement('p');
  color.textContent = form.color.value;

  return horseListItem;
}

const handleDeleteAllClick = function () {
  const horseList = document.querySelector(`#horse-riding-list`);
  horseList.innerHTML = '';
}
