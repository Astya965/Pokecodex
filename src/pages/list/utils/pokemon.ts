import { TPokemon } from '../../../features/pokemonList/types';

export type RawPokemonsList = {
  pokemons: RawPokemonData[];
};

type RawPokemonData = {
  id: number;
  name: string;
  types: RawPokemonType[];
  stats: RawPokemonStat[];
};

type RawPokemonType = {
  type: {
    name: string;
  };
};

type RawPokemonStat = {
  base_stat: number;
  statName: {
    name: string;
  };
};

export const getPokemonInfo = (pokemons: RawPokemonData[] = []): TPokemon[] => {
  return pokemons.map((pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      types: pokemon.types.map((item) => item.type.name),
      stats: pokemon.stats.reduce((acc, item) => {
        acc.set(item.statName.name, item.base_stat);
        return acc;
      }, new Map<string, number>()),
    };
  });
};
