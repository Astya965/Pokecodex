export type TPokemon = {
  id: number;
  name: string;
  types: string[];
  stats: Map<string, number>;
};
