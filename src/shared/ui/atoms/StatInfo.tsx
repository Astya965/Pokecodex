import React from 'react';
import Typography from 'antd/es/typography';

import './StatInfo.scss';

type TStatInfoProps = {
  name: string;
  value: number | string | boolean;
};

const StatInfo = ({ name, value }: TStatInfoProps) => {
  const { Text } = Typography;

  const getBooleanValue = (bool: boolean) => (bool ? 'Yes' : 'No');

  return (
    <div className="statInfo">
      <Text className="name" type="secondary">
        {`${name}:`}
      </Text>
      <Text>{typeof value === 'boolean' ? getBooleanValue(value) : value}</Text>
    </div>
  );
};

export default StatInfo;
