import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Tag, Typography } from 'antd';

import { TPokemonFullInfo } from 'src/shared/types/formatedPokemon';
import StatInfo from 'src/shared/ui/atoms/StatInfo';
import TypeTag from 'src/shared/ui/atoms/TypeTag';

import PokemonImage from '../ui/atoms/PokemonImage';
import './PokemonInfo.scss';

type TPokemonInfoPros = {
  pokemon: TPokemonFullInfo;
};

const PokemonInfo = ({ pokemon }: TPokemonInfoPros) => {
  const { id, name, types, stats, evolution, abilities, additionalInfo } =
    pokemon;
  const { Title, Text } = Typography;

  return (
    <>
      <Link to="/">
        <ArrowLeftOutlined className="goBackArrow" />
        Return to list
      </Link>
      <div>
        <PokemonImage id={id} name={name} className="pokemonImageWrapper" />
        <Title level={2}>{name}</Title>
        {types && (
          <div className="typesInfo">
            {types.map((type) => (
              <TypeTag type={type} key={type} className="tag" />
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
        {evolution && evolution.length > 0 && (
          <div className="evolutionInfo">
            <Title level={3}>Evolution chain: </Title>
            <div className="evolutionGroup">
              {evolution.map(({ name, id: formId }, i) =>
                id === formId ? (
                  <div key={formId} className="evolutionForm">
                    {name}
                    {i < evolution.length - 1 && (
                      <ArrowRightOutlined className="evolutionArrow" />
                    )}
                  </div>
                ) : (
                  <Link
                    key={formId}
                    className="evolutionForm"
                    to={`/pokemon/${formId}`}
                  >
                    {name}
                    {i < evolution.length - 1 && (
                      <ArrowRightOutlined className="evolutionArrow" />
                    )}
                  </Link>
                ),
              )}
            </div>
          </div>
        )}
        {abilities && abilities.length > 0 && (
          <div className="abilitiesInfo">
            <Title level={3}>Abilities: </Title>
            <div className="abilitiesGroup">
              {abilities.map(({ name, text }) => (
                <div key={name} className="abilityItem">
                  <Title className="abilityName" level={5}>
                    {name}
                  </Title>
                  <Text type="secondary">{text}</Text>
                </div>
              ))}
            </div>
          </div>
        )}
        {additionalInfo && (
          <div className="additionalInfo">
            <Title level={3}>Additional info: </Title>
            <div className="additionalInfoGroup">
              {Object.entries(additionalInfo).map(([key, value]) => (
                <StatInfo key={key} name={key} value={value} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PokemonInfo;
