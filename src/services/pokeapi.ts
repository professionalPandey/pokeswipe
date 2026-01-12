export const getRandomPokemon = async () => {
  const randomId = Math.floor(Math.random() * 151) + 1;

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomId}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon');
  }

  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other['official-artwork'].front_default,
    types: data.types.map((t: any) => t.type.name),
    abilities: data.abilities.map((a: any) => a.ability.name),
  };
};