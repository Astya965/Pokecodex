import React from 'react';
import PokemonList from '../../features/pokemonList';

const PokemonListPage = () => {
  const test = [
    {
      id: 1,
      name: 'bulbasaur',
      types: ['grass', 'poison'],
      stats: new Map<string, number>([
        ['hp', 45],
        ['attack', 48],
        ['defense', 49],
        ['special-attack', 80],
        ['special-defense', 65],
        ['speed', 40],
      ]),
    },
    {
      id: 8,
      name: 'wartortle',
      types: ['water'],
      stats: new Map<string, number>([
        ['hp', 45],
        ['attack', 48],
        ['defense', 49],
        ['special-attack', 80],
        ['special-defense', 65],
        ['speed', 40],
      ]),
    },
  ];

  return <PokemonList pokemonList={test} />;
};

export default PokemonListPage;
