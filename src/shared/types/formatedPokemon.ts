export type TPokemon = {
  id: number;
  name: string;
  types: string[];
  stats: Map<string, number>;
};

export type TPokemonFullInfo = {
  id: number;
  name: string;
  types: string[];
  stats: Map<string, number>;
  evolution: TEvolutionForm[];
  abilabilities: TAbility[];
  additionalInfo: {
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
};

type TEvolutionForm = {
  name: string;
  id: number;
};

type TAbility = {
  name: string;
  text: string;
};