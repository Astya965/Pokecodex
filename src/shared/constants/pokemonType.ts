export const TYPES = [
  { value: 'grass', label: 'grass' },
  { value: 'poison', label: 'poison' },
  { value: 'fire', label: 'fire' },
  { value: 'flying', label: 'flying' },
  { value: 'water', label: 'water' },
  { value: 'bug', label: 'bug' },
  { value: 'normal', label: 'normal' },
  { value: 'electric', label: 'electric' },
  { value: 'ground', label: 'ground' },
  { value: 'fairy', label: 'fairy' },
  { value: 'fighting', label: 'fighting' },
  { value: 'psychic', label: 'psychic' },
  { value: 'rock', label: 'rock' },
  { value: 'steel', label: 'steel' },
  { value: 'ice', label: 'ice' },
  { value: 'ghost', label: 'ghost' },
  { value: 'dragon', label: 'dragon' },
  { value: 'dark', label: 'dark' },
];

type TTagColorByType = {
  [key: string]: string ;
}

export const TAG_COLOR_BY_TYPE: TTagColorByType = {
  grass: 'lime',
  poison: 'green',
  fire: 'red',
  flying: 'cyan',
  water: 'blue',
  bug: '#87d068',
  normal: 'default',
  electric: 'gold',
  ground: 'volcano',
  fairy: 'pink',
  fighting: '#c62727',
  psychic: 'purple',
  rock: 'orange',
  steel: '#71797e',
  ice: 'geekblue',
  ghost: '#878787',
  dragon: 'magenta',
  dark: '#000000',
};
