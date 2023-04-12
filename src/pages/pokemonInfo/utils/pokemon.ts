import { TPokemonFullInfo } from 'src/shared/types/formatedPokemon';
import { TRawPokemonFullData } from 'src/shared/types/rawPokemonData';
import { formatName } from 'src/shared/utils/format';

export const formatPokemonData = (
  pokemon: TRawPokemonFullData,
): TPokemonFullInfo => {
  return {
    id: pokemon.id,
    name: formatName(pokemon.name),
    types: pokemon.types.map((item) => item.type.name),
    stats: pokemon.stats.reduce((acc, item) => {
      acc.set(item.statName.name, item.base_stat);
      return acc;
    }, new Map<string, number>()),
    evolution: pokemon.specy.evolution.form.map((form) => ({
      name: formatName(form.name),
      id: form.id,
    })),
    abilities: pokemon.abilities.map((info) => ({
      name: formatName(info.ability.name),
      text: info.ability.text[0].effect,
    })),
    additionalInfo: {
      height: pokemon.height,
      weight: pokemon.weight,
      color: pokemon.specy.color.name,
      habitat: pokemon.specy.habitat.name,
      shape: pokemon.specy.shape.name,
      baseHappiness: pokemon.specy.base_happiness,
      captureRate: pokemon.specy.capture_rate,
      isBaby: pokemon.specy.is_baby,
      isLegendary: pokemon.specy.is_legendary,
      isMythical: pokemon.specy.is_mythical,
    },
  };
};
