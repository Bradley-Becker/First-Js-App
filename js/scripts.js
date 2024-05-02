// Definition of pokemonList array with Pokémon objects
let pokemonList = [
    { name: 'Bulbasaur', height: 7, types: ['grass', 'poison'] },
    { name: 'Charmander', height: 6, types: ['fire'] },
    { name: 'Squirtle', height: 5, types: ['water'] },
    { name: 'Pikachu', height: 4, types: ['electric'] },
    { name: 'Gyarados', height: 21, types: ['water', 'flying'] } // This will be "big"
];

// Select the container element from the HTML
const container = document.getElementById('pokemon-container');

// Loop through each Pokémon in the list
pokemonList.forEach(pokemon => {
    // Prepare display text for each Pokémon
    let displayText = `${pokemon.name} (height: ${pokemon.height})`;

    // Create a paragraph element for each Pokémon
    const para = document.createElement('p');
    para.textContent = displayText;

    // Check if the Pokémon is considered "big"
    if (pokemon.height > 10) {
        para.textContent += ' - Wow, that’s big!';
        para.classList.add('special'); // Add 'special' class for CSS styling
    }

    // Append the paragraph element to the container
    container.appendChild(para);
});
