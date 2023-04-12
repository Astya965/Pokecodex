import { TPokemon } from 'src/shared/types/formatedPokemon';
import { TRawPokemonData } from 'src/shared/types/rawPokemonData';
import formatName from 'src/shared/utils/format';

export const getPokemonsInfo = (pokemons: TRawPokemonData[] = []): TPokemon[] => pokemons.map(
  (pokemon) => ({
    id: pokemon.id,
    name: formatName(pokemon.name),
    types: pokemon.types.map((item) => item.type.name),
    stats: pokemon.stats.reduce((acc, item) => {
      acc.set(item.statName.name, item.base_stat);
      return acc;
    }, new Map<string, number>()),
  }
  ),
);

export const filterPokemonsByName = (
  value?: string,
  pokemons: TRawPokemonData[] = [],
) => pokemons.filter(
  (pokemon) => !value || (pokemon.name && pokemon.name.includes(value)),
);

export const filterPokemonsByTags = (
  tags: string[] = [],
  pokemons: TRawPokemonData[] = [],
) => pokemons.filter(
  (pokemon) => tags.length === 0
    || pokemon.types?.some((type) => tags.includes(type.type?.name)),
);
