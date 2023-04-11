import React from 'react';
import { Card } from 'antd';
import { TPokemon } from '../../types';
import PokemonDescription from '../molecules/PokemonDescription';
import './PokemonCard.scss';
import { Link } from 'react-router-dom';

type TPokemonCardProps = {
  pokemon: TPokemon;
};

const PokemonCard = ({ pokemon }: TPokemonCardProps) => {
  const { id, name } = pokemon;
  const { Meta } = Card;

  return (
    <Link className="card" to={`/pokemon/${id}`}>
      <Card
        hoverable
        cover={
          <img
            alt={`Official artwork with ${name}`}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          />
        }
      >
        <Meta
          title={name}
          description={<PokemonDescription pokemon={pokemon} />}
        />
      </Card>
    </Link>
  );
};

export default PokemonCard;
