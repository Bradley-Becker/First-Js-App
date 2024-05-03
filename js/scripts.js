let pokemonRepository = (function () {
    let pokemonList = [
        { name: 'Bulbasaur', height: 7, types: ['grass', 'poison'] },
        { name: 'Charmander', height: 6, types: ['fire'] },
        { name: 'Squirtle', height: 5, types: ['water'] },
        { name: 'Pikachu', height: 4, types: ['electric'] },
        { name: 'Gyarados', height: 21, types: ['water', 'flying'] } // This will be "big"
    ];

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        if (typeof pokemon === 'object' &&
            Object.keys(pokemon).includes('name') &&
            Object.keys(pokemon).includes('height') &&
            Object.keys(pokemon).includes('types') &&
            Array.isArray(pokemon.types)) {
            pokemonList.push(pokemon);
        } else {
            console.log('Invalid Pokémon entry');
        }
    }

    function findByName(name) {
        return pokemonList.filter(pokemon => pokemon.name.toLowerCase() === name.toLowerCase());
    }

    return {
        getAll: getAll,
        add: add,
        findByName: findByName
    };
})();

// Use the new repository to handle data operations
const container = document.getElementById('pokemon-container');

// Use getAll method to fetch the list and iterate over it
pokemonRepository.getAll().forEach(pokemon => {
    let displayText = `${pokemon.name} (height: ${pokemon.height})`;
    const para = document.createElement('p');
    para.textContent = displayText;

    if (pokemon.height > 10) {
        para.textContent += ' - Wow, that’s big!';
        para.classList.add('special'); // Add 'special' class for CSS styling
    }

    container.appendChild(para);
});

// Using findByName to demonstrate its functionality
let foundPokemon = pokemonRepository.findByName('gyarados');
console.log('Found Pokémon:', foundPokemon);  // Logs details about Gyarados
