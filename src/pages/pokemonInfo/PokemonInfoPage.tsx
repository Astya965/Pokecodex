import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';

import PokemonInfo from 'src/features/pokemonInfo';
import { getPokemonByName } from 'src/shared/api/queries';
import { TPokemonFullInfo } from 'src/shared/types/formatedPokemon';
import LoadingPage from 'src/shared/ui/organisms/LoadingPage';
import ErrorPage from 'src/shared/ui/organisms/ErrorPage';

import formatPokemonData from './utils/pokemon';

const PokemonInfoPage = () => {
  const { id } = useParams();

  const [queryGetPokemon, { data, loading, error }] = useLazyQuery(getPokemonByName(id));
  const [pokemon, setPokemon] = useState<TPokemonFullInfo | null>(null);

  useEffect(() => {
    queryGetPokemon();
  }, [queryGetPokemon]);

  useEffect(() => {
    if (data?.pokemons?.length > 0 && data.pokemons[0]) {
      setPokemon(formatPokemonData(data.pokemons[0]));
    }
  }, [data]);

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return (
      <ErrorPage
        text="There`s a problem loading pokemon info"
        onReload={() => queryGetPokemon()}
      />
    );
  }

  return pokemon && <PokemonInfo pokemon={pokemon} />;
};

export default PokemonInfoPage;
