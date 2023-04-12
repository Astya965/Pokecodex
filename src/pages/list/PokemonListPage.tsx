import React, { useEffect, useState } from 'react';
import { Input, Pagination, Select } from 'antd';
import { useLazyQuery } from '@apollo/client';

import PokemonList from 'src/features/pokemonList';
import { TPokemon } from 'src/shared/types/formatedPokemon';
import { TRawPokemonData } from 'src/shared/types/rawPokemonData';
import { TYPES } from 'src/shared/constants/pokemonType';
import { getAllPokemons } from 'src/shared/api/queries';
import LoadingPage from 'src/shared/ui/organisms/LoadingPage';
import ErrorPage from 'src/shared/ui/organisms/ErrorPage';

import {
  filterPokemonsByName,
  getPokemonsInfo,
  filterPokemonsByTags,
} from './utils/pokemon';
import './PokemonListPage.scss';

const PokemonListPage = () => {
  const [queryGetPokemons, { data, loading, error }] = useLazyQuery(
    getAllPokemons(),
  );

  const [pokemonList, setPokemonList] = useState<TRawPokemonData[]>([]);
  const [pokemonListFormPage, setPokemonListForPage] = useState<TPokemon[]>([]);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchName, setSearchName] = useState<string>('');

  const [pageSize, setPageSize] = useState<number>(10);
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    queryGetPokemons();
  }, [queryGetPokemons]);

  useEffect(() => {
    if (searchName && selectedTags.length > 0) {
      setPokemonList(
        filterPokemonsByTags(
          selectedTags,
          filterPokemonsByName(searchName, data?.pokemons),
        ),
      );
    } else if (searchName) {
      setPokemonList(filterPokemonsByName(searchName, data?.pokemons));
    } else if (selectedTags.length > 0) {
      setPokemonList(filterPokemonsByTags(selectedTags, data?.pokemons));
    } else {
      setPokemonList(data?.pokemons);
    }
  }, [data, selectedTags, searchName]);

  useEffect(() => {
    if (pokemonList && pokemonList.length > 0) {
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
            setSearchName(evt?.target?.value ?? '');
            setPageNumber(1);
          }}
        />
        <Select
          className="tagFilter"
          mode="tags"
          placeholder="Filter by type"
          onChange={(tags) => {
            setSelectedTags(tags);
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
