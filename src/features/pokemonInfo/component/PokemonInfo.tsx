import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { TPokemonFullInfo } from 'src/shared/types/formatedPokemon';
import EvolutionInfo from '../ui/molecules/EvolutionInfo';
import AbilitiesInfo from '../ui/molecules/AbilitiesInfo';
import AdditionalInfo from '../ui/molecules/AdditionalInfo';
import './PokemonInfo.scss';
import MainInfo from '../ui/organisms/MainInfo';

type TPokemonInfoPros = {
  pokemon: TPokemonFullInfo;
};

const PokemonInfo = ({ pokemon }: TPokemonInfoPros) => {
  const {
    id,
    name,
    types,
    stats,
    evolution,
    abilities,
    additionalInfo,
  } = pokemon;

  return (
    <>
      <Link to="/">
        <ArrowLeftOutlined className="goBackArrow" />
        Return to list
      </Link>
      <MainInfo id={id} name={name} types={types} stats={stats} />
      <EvolutionInfo evolution={evolution} id={id} />
      <AbilitiesInfo abilities={abilities} />
      <AdditionalInfo additionalInfo={additionalInfo} />
    </>
  );
};

export default PokemonInfo;
