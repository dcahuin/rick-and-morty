const nameCharacter = document.querySelector('h1');
const imgCard = document.querySelector('img');
const footerCard = document.querySelector('.card-footer');
const cardText = document.querySelector('.card-text');
const parrafoGenero = document.querySelector('.genero');
const parrafoLocation = document.querySelector('.location')

//const formData = document.querySelector('#formData');


const parametro = window.location.search;
// console.log(parametro);
const urlParams = new URLSearchParams(parametro);
let id = urlParams.get('id');

const getCharacterById = async(id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = response.json();

    return data;
}

getCharacterById(id).then(data => {
    nameCharacter.innerText = data.name;
    imgCard.src = data.image;
    footerCard.innerText = data.status;
    if (data.status === 'Alive') {
        footerCard.classList.add('cyan');
    } else if (data.status === 'Dead') {
        footerCard.classList.add('palevioletred');
    } else {
        footerCard.classList.add('blueviolet');
    }

    cardText.innerText = "Specie: " + data.species;
    parrafoGenero.innerText = "Gender: " + data.gender;
    parrafoLocation.innerText = "Location: " + data.location.name;
}).catch(err => err);