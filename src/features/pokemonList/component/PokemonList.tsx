import React from 'react';
import { TPokemon } from '../../../shared/types/formatedPokemon';
import PokemonCard from '../ui/organisms/PokemonCard';
import './PokemonList.scss';

type TPokemonListProps = {
  pokemonList: TPokemon[];
};

const PokemonList = ({ pokemonList }: TPokemonListProps) => (
  <div className="list">
    {pokemonList.map(
      (item) => item && <PokemonCard key={item.id} pokemon={item} />,
    )}
  </div>
);
export default PokemonList;
