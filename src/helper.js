export const fetchAndParse = async (url) => {
  const initialFetch = await fetch(url);

  try {
    if (initialFetch.status > 226) {
      throw new Error('Unable to get Pokemon data!');
    } else {
      return await initialFetch.json();
    }
  } catch(error) {
    throw error
  }
};

export const getPokemon = async (category) => {
  const pocketMonsters = category.map(async (type) => {
    const pkmInfo = await type.pokemon.map( async pkm => {
      const url = `http://localhost:3001/pokemon/`;
      const initialPkm = await fetchAndParse(url + pkm);

      return cleanPokemon(initialPkm);
    });

    return Object.assign(type, {pokemon: await Promise.all(pkmInfo)});
  });

  return Promise.all(pocketMonsters);
}

export const cleanPokemon = (pokemon) => {
  return Object.assign({},
    {id: pokemon.id},
    {name: pokemon.name},
    {weight: pokemon.weight},
    {picture: pokemon.sprites.front_default}
  );
}