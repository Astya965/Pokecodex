export type RawPokemonData = {
  id: number;
  name: string;
  types: RawPokemonType[];
  stats: RawPokemonStat[];
};

export type RawPokemonFullData = {
  id: number;
  name: string;
  types: RawPokemonType[];
  stats: RawPokemonStat[];
  weight: number;
  height: number;
  abilities: RawAbility[];
  specy: RawSpecy;
};

type RawAbility = {
  ability: {
    name: string;
    text: {
      effect: string;
    };
  };
};

type RawSpecy = {
  base_happiness: number;
  capture_rate: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  color: {
    name: string;
  };
  habitat: {
    name: string;
  };
  shape: {
    name: string;
  };
  evolution: {
    form: RawEvolutionForm[];
  };
};

type RawEvolutionForm = {
  name: string;
  evolves_from_species_id: number;
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
