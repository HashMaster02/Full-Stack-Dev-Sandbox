const poke_container = document.getElementById("poke-container")
const pokemon_count = 493
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: 'F4E7DA',
    rock: 'D5D5D4',
    fairy: '#FCEAFF',
    poison: '#98D7A5',
    bug: '#F8D5A3',
    dragon: '#97B3E6',
    psychic: '#EAEDA1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
    dark: '#BBB',
}
const main_types = Object.keys(colors)

fetchPokemon()

async function fetchPokemon() {
    for (let i = 387; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

async function getPokemon(poke_id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${poke_id}/`
    const response = await fetch(url)
    const data = await response.json()
    createPokemonCard(data)
}

function createPokemonCard(data) {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const poke_types = data.types.map(type => type.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const color = colors[type]
    pokemonEl.style.backgroundColor = color

    pokemonEl.innerHTML =
        `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png"
                alt="">
        </div>
        <div class="info">
            <span class="number">#${data.id}</span>
            <h3 class="name">${data.name}</h3>
            <smal class="type">Type: <span>${type}</span></smal>
        </div>
    `

    poke_container.appendChild(pokemonEl)
}