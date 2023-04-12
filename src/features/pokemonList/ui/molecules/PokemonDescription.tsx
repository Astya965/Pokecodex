import React from 'react';
import { Tag } from 'antd';

import { TPokemon } from 'src/shared/types/formatedPokemon';
import StatInfo from 'src/shared/ui/atoms/StatInfo';
import TypeTag from 'src/shared/ui/atoms/TypeTag';

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
            <StatInfo key={name} name={name} value={value} />
          ))}
        </div>
      )}
      {types && (
        <div>
          {types.map((type) => (
            <TypeTag type={type} key={type} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonDescription;
