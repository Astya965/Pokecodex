import React from 'react';
import Title from 'antd/es/typography/Title';

import StatInfo from 'src/shared/ui/atoms/StatInfo';
import TypeTag from 'src/shared/ui/atoms/TypeTag';

import PokemonImage from '../atoms/PokemonImage';
import './MainInfo.scss';

type TMainInfoProps = {
  id: number;
  name: string;
  types: string[];
  stats: Map<string, number>;
};

const MainInfo = ({ id, name, types, stats }: TMainInfoProps) => (
  <>
    <PokemonImage id={id} name={name} className="pokemonImageWrapper" />
    <Title className="pokemonName" level={2}>
      {name}
    </Title>
    {types && (
      <div className="typesInfo">
        {types.map((type) => (
          <TypeTag type={type} key={type} />
        ))}
      </div>
    )}
    {stats && (
      <div className="statsInfo">
        <Title level={3}>Stats: </Title>
        <div className="statsGroup">
          {Array.from(stats.entries()).map(([name, value]) => (
            <StatInfo key={name} name={name} value={value} />
          ))}
        </div>
      </div>
    )}
  </>
);

export default MainInfo;
