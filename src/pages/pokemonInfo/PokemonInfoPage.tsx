import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { gql, useLazyQuery } from '@apollo/client';

import PokemonInfo from 'src/features/pokemonInfo';
import { TPokemonFullInfo } from 'src/shared/types/formatedPokemon';
import LoadingPage from 'src/shared/ui/organisms/LoadingPage';
import ErrorPage from 'src/shared/ui/organisms/ErrorPage';

import { formatPokemonData } from './utils/pokemon';

const PokemonInfoPage = () => {
  const { id } = useParams();

  const GET_POKEMON_BY_ID = gql`
    query {
      pokemons: pokemon_v2_pokemon(where: { id: { _eq: ${id} } }) {
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
        abilities: pokemon_v2_pokemonabilities {
          ability: pokemon_v2_ability {
            name
            text: pokemon_v2_abilityeffecttexts(
              where: { language_id: { _eq: 9 } }
            ) {
              effect
            }
          }
        }
        specy: pokemon_v2_pokemonspecy {
          base_happiness
          capture_rate
          is_baby
          is_legendary
          is_mythical
          color: pokemon_v2_pokemoncolor {
            name
          }
          habitat: pokemon_v2_pokemonhabitat {
            name
          }
          shape: pokemon_v2_pokemonshape {
            name
          }
          evolution: pokemon_v2_evolutionchain {
            form: pokemon_v2_pokemonspecies(order_by: {evolves_from_species_id: asc_nulls_first}) {
              name
              id
            }
          }
        }
        weight
        height
      }
    }
  `;

  const [queryGetPokemon, { data, loading, error }] =
    useLazyQuery(GET_POKEMON_BY_ID);
  const [pokemon, setPokemon] = useState<TPokemonFullInfo | null>(null);

  useEffect(() => {
    queryGetPokemon();
  }, []);

  useEffect(() => {
    if (data?.pokemons?.length > 0 && data.pokemons[0]) {
      console.log(data);
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

  return (
    pokemon && (
      <>
        <PokemonInfo pokemon={pokemon} />
      </>
    )
  );
};

export default PokemonInfoPage;
