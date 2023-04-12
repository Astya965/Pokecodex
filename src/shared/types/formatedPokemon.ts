export type TPokemon = {
  id: number;
  name: string;
  types: string[];
  stats: Map<string, number>;
};

export type TEvolutionForm = {
  name: string;
  id: number;
};

export type TAbility = {
  name: string;
  text: string;
};

export type TAdditionalInfo = {
  height: number;
  weight: number;
  color: string;
  habitat: string;
  shape: string;
  baseHappiness: number;
  captureRate: number;
  isBaby: boolean;
  isLegendary: boolean;
  isMythical: boolean;
};

export type TPokemonFullInfo = {
  id: number;
  name: string;
  types: string[];
  stats: Map<string, number>;
  evolution: TEvolutionForm[];
  abilities: TAbility[];
  additionalInfo: TAdditionalInfo;
};
