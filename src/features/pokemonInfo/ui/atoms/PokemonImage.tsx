import React from 'react';
import './PokemonImage.scss';

type TPokemonImage = {
  name: string;
  id: number;
  className?: string;
};

const PokemonImage = ({ name, id, className = ' ' }: TPokemonImage) => (
  <img
    className={`pokemonImg ${className}`}
    height={320}
    width={320}
    alt={`Official artwork with ${name}`}
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
    onError={({ currentTarget }) => {
      currentTarget.onerror = null;
      currentTarget.src = 'https://placehold.co/320x320';
    }}
  />
);

export default PokemonImage;
