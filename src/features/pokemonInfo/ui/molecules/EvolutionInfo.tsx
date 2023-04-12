import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRightOutlined from '@ant-design/icons/lib/icons/ArrowRightOutlined';
import Title from 'antd/es/typography/Title';

import { TEvolutionForm } from 'src/shared/types/formatedPokemon';

import './EvolutionInfo.scss';

type TEvolutionInfoProps = {
  evolution: TEvolutionForm[];
  id: number;
};

const EvolutionInfo = ({ evolution, id }: TEvolutionInfoProps) => (evolution
  && evolution.length > 0 ? (
    <div className="evolutionInfo">
      <Title level={3}>Evolution chain: </Title>
      <div className="evolutionGroup">
        {evolution.map(({ name, id: formId }, i) => (
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
          )
        ))}
      </div>
    </div>
  ) : null);

export default EvolutionInfo;
