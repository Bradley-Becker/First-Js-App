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
            'name' in pokemon &&
            'height' in pokemon &&
            'types' in pokemon &&
            Array.isArray(pokemon.types)) {
            pokemonList.push(pokemon);
        } else {
            console.log('Invalid Pokémon entry');
        }
    }

    function addListItem(pokemon) {
        let container = document.querySelector('#pokemon-container');  // Ensure this container exists in your HTML
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button');  // Ensure this class has styles in your CSS
        container.appendChild(button);

        button.addEventListener('click', function() {
            showDetails(pokemon);
        });
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem
    };
})();

// Use the repository to create UI elements and bind events
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});
