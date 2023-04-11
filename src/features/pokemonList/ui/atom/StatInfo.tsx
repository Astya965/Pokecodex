import Typography from 'antd/es/typography';
import React from 'react';
import './StatInfo.scss';

type TStatInfoProps = {
  name: string;
  value: number;
};

const StatInfo = ({ name, value }: TStatInfoProps) => {
  const { Text } = Typography;
  return (
    <div className="statInfo">
      <Text className="name" type="secondary">
        {`${name}:`}
      </Text>
      <Text>{value}</Text>
    </div>
  );
};

export default StatInfo;
