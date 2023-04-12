import { gql } from '@apollo/client';

export const getPokemonByName = (id?: string) => gql`
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
    }`;

export const getAllPokemons = () => gql`
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
