import React from 'react';
import Title from 'antd/es/typography/Title';

import { TAdditionalInfo } from 'src/shared/types/formatedPokemon';
import StatInfo from 'src/shared/ui/atoms/StatInfo';

import './AdditionalInfo.scss';

type TAdditionalInfoProps = {
  additionalInfo: TAdditionalInfo;
};

const AdditionalInfo = ({ additionalInfo }: TAdditionalInfoProps) => additionalInfo && (
  <div className="additionalInfo">
    <Title level={3}>Additional info: </Title>
    <div className="additionalInfoGroup">
      {Object.entries(additionalInfo)
        .filter(([, value]) => value !== null && value !== undefined)
        .map(([key, value]) => (
          <StatInfo key={key} name={key} value={value} />
        ))}
    </div>
  </div>
);

export default AdditionalInfo;
