const allCharacterUrl = "https://ihatov08.github.io/kimetsu_api/api/all.json";
const list = document.getElementById('character-list');
const loadingSpinner = document.getElementById('loading-spinner');

const fetchCharacter = url => {
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

const kisatsutaiButton = document.getElementById('kisatsutai');
kisatsutaiButton.addEventListener('click', function () {
  kimetutaiUrl = "https://ihatov08.github.io/kimetsu_api/api/kisatsutai.json";
  list.innerHTML = "";
  fetchCharacter(kimetutaiUrl);
});

const hashiraButton = document.getElementById('hashira');
hashiraButton.addEventListener('click', function () {
  hashiraUrl = "https://ihatov08.github.io/kimetsu_api/api/hashira.json";
  list.innerHTML = "";
  fetchCharacter(hashiraUrl);
});

const oniButton = document.getElementById('oni');
oniButton.addEventListener('click', function () {
  oniUrl = "https://ihatov08.github.io/kimetsu_api/api/oni.json";
  list.innerHTML = "";
  fetchCharacter(oniUrl);
});

const allButton = document.getElementById('all');
allButton.addEventListener('click', function () {
  list.innerHTML = "";
  fetchCharacter(allCharacterUrl);
});