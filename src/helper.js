export const fetchAndParse = async (url) => {
  const intialFetch = await fetch(url);
  return await intialFetch.json();
}