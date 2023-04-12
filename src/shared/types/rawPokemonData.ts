type TAbilityText = {
  effect: string;
};

type TRawAbility = {
  ability: {
    name: string;
    text: TAbilityText[];
  };
};

type TRawEvolutionForm = {
  name: string;
  id: number;
};

type TRawSpecy = {
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
    form: TRawEvolutionForm[];
  };
};

type TRawPokemonType = {
  type: {
    name: string;
  };
};

type TRawPokemonStat = {
  base_stat: number;
  statName: {
    name: string;
  };
};

export type TRawPokemonData = {
  id: number;
  name: string;
  types: TRawPokemonType[];
  stats: TRawPokemonStat[];
};

export type TRawPokemonFullData = {
  id: number;
  name: string;
  types: TRawPokemonType[];
  stats: TRawPokemonStat[];
  weight: number;
  height: number;
  abilities: TRawAbility[];
  specy: TRawSpecy;
};
