import { gql, useQuery } from '@apollo/client';
import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import PokemonList from '../../features/pokemonList';
import { TPokemon } from '../../features/pokemonList/types';
import './PokemonListPage.scss';
import { getPokemonInfo } from './utils/pokemon';

const PokemonListPage = () => {
  const GET_POKEMONS = gql`
    query {
      pokemons: pokemon_v2_pokemon(limit: 10, offset: 0) {
        id
        name
        types: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
            name
          }
        }
        stats: pokemon_v2_pokemonstats {
          base_stat
          statName: pokemon_v2_stat {
            name
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_POKEMONS);
  const [pokemonList, setPokemonList] = useState<TPokemon[]>([]);

  useEffect(() => {
    if (data && data.pokemons) {
      setPokemonList(getPokemonInfo(data.pokemons));
    }
  }, [data]);

  if (loading) {
    return (
      <div className="spinWrapper">
        <Spin className="spinner" tip="Loading" size="large" />
      </div>
    );
  }

  return <PokemonList pokemonList={pokemonList} />;
};

export default PokemonListPage;
