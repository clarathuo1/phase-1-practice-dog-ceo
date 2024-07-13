console.log('%c HI', 'color: firebrick')

//challenge one

document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const imageContainer = document.getElementById('image-container');
        data.message.forEach(image => {
          const img = document.createElement('img');
          img.src = image;
          imageContainer.appendChild(img);
        });
      });
  });

  //challenge two

  document.addEventListener('DOMContentLoaded', () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breedList = document.getElementById('breed-list');
        Object.keys(data.message).forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          breedList.appendChild(li);
        });
      });
  });

  //challenge three

  document.addEventListener('DOMContentLoaded', () => {
    const breedList = document.getElementById('breed-list');
    breedList.addEventListener('click', event => {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'blue'; // change the font color to blue
      }
    });
  });

  //challenge four

  document.addEventListener('DOMContentLoaded', () => {
    const breedList = document.getElementById('breed-list');
    const filterSelect = document.getElementById('filter-select');
  
    filterSelect.addEventListener('change', event => {
      const selectedLetter = event.target.value;
      const breeds = breedList.children;
      for (let i = 0; i < breeds.length; i++) {
        const breed = breeds[i];
        if (breed.textContent.charAt(0).toLowerCase() === selectedLetter) {
          breed.style.display = 'block';
        } else {
          breed.style.display = 'none';
        }
      }
    });
  });

  