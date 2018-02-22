export const fetchAndParse = async (url) => {
  const intialFetch = await fetch(url);
  return await intialFetch.json();
};

export const getPokemon = (category) => {
  category.map((name) => {
    const pocketMonsters = name.pokemon.map( async pkm => {
      const url = `http://localhost:3001/pokemon/`;
      const monster = await fetchAndParse(url + pkm);
    });

    const realPokemon = Promise.all(pocketMonsters)
    console.log(realPokemon);

    // const realPokemon = Promise.all(pocketMonsters);
  })
}