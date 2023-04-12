import { ReloadOutlined } from '@ant-design/icons';
import { gql, useLazyQuery } from '@apollo/client';
import { Button, Input, Pagination, Select, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import PokemonList from '../../features/pokemonList';
import { TPokemon } from '../../shared/types/formatedPokemon';
import { RawPokemonData } from '../../shared/types/rawPokemonData';
import './PokemonListPage.scss';
import {
  filterPokemonsByName,
  getPokemonsInfo,
  filterPokemonsByTags,
} from './utils/pokemon';

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
  const [pokemonList, setPokemonList] = useState<RawPokemonData[]>([]);
  const [pokemonListFormPage, setPokemonListForPage] = useState<TPokemon[]>([]);
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const TYPES = [
    { value: 'grass', label: 'grass' },
    { value: 'poison', label: 'poison' },
    { value: 'fire', label: 'fire' },
    { value: 'flying', label: 'flying' },
    { value: 'water', label: 'water' },
    { value: 'bug', label: 'bug' },
    { value: 'normal', label: 'normal' },
    { value: 'electric', label: 'electric' },
    { value: 'ground', label: 'ground' },
    { value: 'fairy', label: 'fairy' },
    { value: 'fighting', label: 'fighting' },
    { value: 'psychic', label: 'psychic' },
    { value: 'rock', label: 'rock' },
    { value: 'steel', label: 'steel' },
    { value: 'ice', label: 'ice' },
    { value: 'ghost', label: 'ghost' },
    { value: 'dragon', label: 'dragon' },
    { value: 'dark', label: 'dark' },
  ];

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
    return (
      <div className="infoWrapper">
        <Spin className="spinner" tip="Loading" size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="infoWrapper">
        <h3 className="errorInfo">There's a problem loading pokemon list</h3>
        <Button
          onClick={() => {
            queryGetPokemons();
          }}
          className="reloadButton"
          icon={<ReloadOutlined />}
        >
          Reload list
        </Button>
      </div>
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
