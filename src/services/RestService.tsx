
   export async function getPokemon(paginationObject: any) {
        const apiBaseUrl: string = 'https://pokeapi.co/api/v2/pokemon';
        const { limit, offset } = paginationObject;

        return fetch(`${apiBaseUrl}?limit=${limit}&offset=${offset}`)
        .then(res => res.json())
        .catch(console.log)
    }
    export async function getPokemonDetails(url: string) {
        return fetch(`${url}`)
        .then(res => res.json())
        .catch(console.log)
    }
