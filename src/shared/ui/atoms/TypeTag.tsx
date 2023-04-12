import React from 'react';
import { Tag } from 'antd';
import { TAG_COLOR_BY_TYPE } from 'src/shared/constants/pokemonType';

type TTypeTagProps = {
  type: string;
  className?: string;
};

const TypeTag = ({ type, className }: TTypeTagProps) => (
  <Tag color={TAG_COLOR_BY_TYPE[type]} className={className}>
    {type}
  </Tag>
);

export default TypeTag;
