export const fetchAndParse = async (url) => {
  const intialFetch = await fetch(url);
  return await intialFetch.json();
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