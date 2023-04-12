import React from 'react';
import Typography from 'antd/es/typography';

import { TAbility } from 'src/shared/types/formatedPokemon';

import './AbilitiesInfo.scss';

type TAbilitiesInfoPops = {
  abilities: TAbility[];
};

const AbilitiesInfo = ({ abilities }: TAbilitiesInfoPops) => {
  const { Title, Text } = Typography;

  return abilities && abilities.length > 0 ? (
    <div className="abilitiesInfo">
      <Title level={3}>Abilities: </Title>
      <div className="abilitiesGroup">
        {abilities.map(({ name, text }) => (
          <div key={name} className="abilityItem">
            <Title className="abilityName" level={5}>
              {name}
            </Title>
            <Text type="secondary">{text}</Text>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default AbilitiesInfo;
