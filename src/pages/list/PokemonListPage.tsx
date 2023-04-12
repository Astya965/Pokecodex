import React, { useEffect, useState } from 'react';
import { Input, Pagination, Select } from 'antd';
import { gql, useLazyQuery } from '@apollo/client';

import PokemonList from 'src/features/pokemonList';
import { TPokemon } from 'src/shared/types/formatedPokemon';
import { TRawPokemonData } from 'src/shared/types/rawPokemonData';
import { TYPES } from 'src/shared/constants/pokemonType';
import LoadingPage from 'src/shared/ui/organisms/LoadingPage';
import ErrorPage from 'src/shared/ui/organisms/ErrorPage';

import {
  filterPokemonsByName,
  getPokemonsInfo,
  filterPokemonsByTags,
} from './utils/pokemon';
import './PokemonListPage.scss';

const PokemonListPage = () => {
  const GET_POKEMONS = gql`
    query {
      pokemons: pokemon_v2_pokemon {
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

  const [queryGetPokemons, { data, loading, error }] =
    useLazyQuery(GET_POKEMONS);
  const [pokemonList, setPokemonList] = useState<TRawPokemonData[]>([]);
  const [pokemonListFormPage, setPokemonListForPage] = useState<TPokemon[]>([]);
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    queryGetPokemons();
  }, []);

  useEffect(() => {
    setPokemonList(data?.pokemons);
  }, [data]);

  useEffect(() => {
    if (data && data.pokemons) {
      setPokemonListForPage(
        getPokemonsInfo(
          pokemonList.slice((pageNumber - 1) * pageSize, pageNumber * pageSize),
        ),
      );
    }
  }, [pokemonList, pageSize, pageNumber]);

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return (
      <ErrorPage
        text="There`s a problem loading pokemon list"
        onReload={() => queryGetPokemons()}
      />
    );
  }

  return (
    <>
      <div className="filters">
        <Input
          className="nameFilter"
          placeholder="Filter by name"
          onChange={(evt) => {
            setPokemonList(
              filterPokemonsByName(data?.pokemons, evt?.target?.value),
            );
            setPageNumber(1);
          }}
        />
        <Select
          className="tagFilter"
          mode="tags"
          placeholder="Filter by type"
          onChange={(tags) => {
            setPokemonList(filterPokemonsByTags(data?.pokemons, tags));
            setPageNumber(1);
          }}
          options={TYPES}
        />
      </div>
      <PokemonList pokemonList={pokemonListFormPage} />
      <Pagination
        className="pagination"
        current={pageNumber}
        pageSize={pageSize}
        onChange={(newPage) => setPageNumber(newPage)}
        onShowSizeChange={(_, newSize) => setPageSize(newSize)}
        total={pokemonList?.length}
        showSizeChanger
        hideOnSinglePage
      />
    </>
  );
};

export default PokemonListPage;
