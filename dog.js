let img;
function fetchImages() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        const imagestore = document.querySelector('.imagestore');
        img = document.createElement('img');
        img.src = data.message;
        img.alt = data.message.split('/')[4];
        imagestore.appendChild(img);
        console.log(img.alt);
        //console.log(imagestore);
    })
    .catch(error => console.error(error));
}
for(let i = 0;i<40;i++){
    fetchImages();
}

function filterImages() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', () => {
        const filter = searchInput.value.toLowerCase();
        const imgs = document.querySelectorAll('.imagestore img');
        imgs.forEach(img => {
            const breed = img.alt.split('-').join(' ').split('/')[0].toLowerCase();
            if (breed.includes(filter)) {
                img.style.display = '';
            } else {
                img.style.display = 'none';
            }
        })
    })
    
}

fetchImages();
filterImages();