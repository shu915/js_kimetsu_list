const allCharacterUrl = "https://ihatov08.github.io/kimetsu_api/api/all.json";
const list = document.getElementById('character-list');
const loadingSpinner = document.getElementById('loading-spinner');

const fetchCharacter = url => {
  list.innerHTML = "";
  loadingSpinner.style.display = 'block';

  fetch(url)
    .then(response => response.json())
    .then(obj => {
      obj.forEach(character => {

        
        const item = document.createElement('li');
        item.className = 'character-item';

        const name = document.createElement('p');
        name.innerText = character.name;
  
        const figure = document.createElement('figure');
        const image = document.createElement('img');
        image.setAttribute('src', `https://ihatov08.github.io${character.image}`);

        const category = document.createElement('p');
        category.innerText = character.category;

        figure.appendChild(image);

        item.appendChild(name);
        item.appendChild(figure);
        item.appendChild(category);

        list.appendChild(item);
      })
      loadingSpinner.style.display = 'none';
    }
    );
}

fetchCharacter(allCharacterUrl);


buttons = document.querySelectorAll('.button');
buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    url = `https://ihatov08.github.io/kimetsu_api/api/${button.value}.json`;
    fetchCharacter(url);
  })
}
);