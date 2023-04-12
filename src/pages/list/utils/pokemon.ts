import { TPokemon } from '../../../shared/types/formatedPokemon';
import { RawPokemonData } from '../../../shared/types/rawPokemonData';
import { formatName } from '../../../shared/utils/format';

export const getPokemonsInfo = (
  pokemons: RawPokemonData[] = [],
): TPokemon[] => {
  return pokemons.map((pokemon) => {
    return {
      id: pokemon.id,
      name: formatName(pokemon.name),
      types: pokemon.types.map((item) => item.type.name),
      stats: pokemon.stats.reduce((acc, item) => {
        acc.set(item.statName.name, item.base_stat);
        return acc;
      }, new Map<string, number>()),
    };
  });
};

export const filterPokemonsByName = (
  pokemons: RawPokemonData[] = [],
  value?: string,
) => {
  return pokemons.filter(
    (pokemon) => !value || (pokemon.name && pokemon.name.includes(value)),
  );
};

export const filterPokemonsByTags = (
  pokemons: RawPokemonData[] = [],
  tags: string[] = [],
) => {
  return pokemons.filter(
    (pokemon) =>
      tags.length === 0 ||
      pokemon.types?.some((type) => tags.includes(type.type?.name)),
  );
};
