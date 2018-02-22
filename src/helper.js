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
  const fakeMonsters = category.map(async (name) => {
    const things = await name.pokemon.map( async pkm => {
      const url = `http://localhost:3001/pokemon/`;
      return await fetchAndParse(url + pkm);
    });

    return Promise.all(things);
  });
  const pocketMonsters = await Promise.all(fakeMonsters);

  return pocketMonsters;
}