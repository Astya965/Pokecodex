import { Tag } from 'antd';
import React from 'react';
import { TPokemon } from '../../types';
import StatInfo from '../atom/StatInfo';
import './PokemonDescription.scss';

type TPokemonDescriptionProps = {
  pokemon: TPokemon;
};

const PokemonDescription = ({ pokemon }: TPokemonDescriptionProps) => {
  const { types, stats } = pokemon;
  return (
    <div>
      {stats && (
        <div className="stats">
          {Array.from(stats.entries()).map(([name, value]) => (
            <StatInfo name={name} value={value} />
          ))}
        </div>
      )}
      {types && (
        <div>
          {types.map((type) => (
            <Tag className="tag">{type}</Tag>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonDescription;
