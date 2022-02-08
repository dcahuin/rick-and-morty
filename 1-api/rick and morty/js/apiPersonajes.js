const nameCharacter = document.querySelector('h5');
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

