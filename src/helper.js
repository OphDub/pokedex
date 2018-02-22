export const fetchAndParse = async (url) => {
  const initialFetch = await fetch(url);

  try {
    if (initialFetch.code > 226) {
      throw new Error('Unable to get Pokemon data!');
    } else {
      return await initialFetch.json();
    }
  } catch(error) {
    throw error
  }
};

export const getPokemon = async (category) => {
  const fakeMonsters = category.map(async (type) => {
    const pkmInfo = await type.pokemon.map( async pkm => {
      const url = `http://localhost:3001/pokemon/`;
      const initialPkm = await fetchAndParse(url + pkm);

      const cleanPkm = Object.assign({},
        {id: initialPkm.id},
        {name: initialPkm.name},
        {weight: initialPkm.weight},
        {picture: initialPkm.sprites.front_default}
      );

      return cleanPkm;
    });
    const resolvedInfo = await Promise.all(pkmInfo);

    return Object.assign(type, {pokemon: resolvedInfo});
  });

  const pocketMonsters = await Promise.all(fakeMonsters);

  return pocketMonsters;
}